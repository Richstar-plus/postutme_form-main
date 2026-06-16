# Admin Panel Extension Guide

## Adding New Admin Pages

### 1. Create a New Admin Page

Create a new file in `src/admin/pages/`:

```javascript
// src/admin/pages/UsersManagement.jsx
export function UsersManagement() {
  return (
    <section className="card">
      <h2>Users Management</h2>
      <p>Manage application users here.</p>
    </section>
  );
}
```

### 2. Add Route to App.jsx

Update `src/App.jsx` to include the new route:

```javascript
import { UsersManagement } from "./admin/pages/UsersManagement";

// In the router configuration, add to admin children:
{
  path: "/admin",
  element: <AdminRoot />,
  errorElement: <AdminErrorPage />,
  children: [
    {
      index: true,
      element: <AdminHome />,
    },
    {
      path: "users",
      element: <UsersManagement />,
    },
  ],
}
```

### 3. Add Navigation Link in Sidebar

Update `src/admin/components/SideBar.jsx`:

```javascript
<div className="nav-menu-item">
  <h4>Management</h4>
  <NavLink to="/admin/users" className="nav-link">
    Users Management
  </NavLink>
  <NavLink to="/admin" className="nav-link">
    Applications <span>123</span>
  </NavLink>
</div>
```

## Route Naming Convention

All admin routes follow the pattern:

- `/admin` - Dashboard
- `/admin/users` - Users Management
- `/admin/applications` - Applications Review
- `/admin/settings` - Settings
- `/admin/reports` - Reports

Use kebab-case (hyphens) for multi-word routes:

- ✅ `/admin/user-management`
- ❌ `/admin/userManagement`

## Styling Admin Pages

### Using Existing Styles

All admin pages automatically have access to the styles in `src/admin/App.css`:

```css
.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
}
```

### Adding Custom Styles

1. Create a CSS file in `src/admin/styles/` (or component-level CSS)
2. Import it in your component:
   ```javascript
   import "./UsersManagement.css";
   ```

### Color Variables

Use these CSS variables for consistency:

```css
--primary-color: #1a4ace;
--secondary-color: #010f2e;
--accent-color: #c48807;
--background-color: #bbccfa4b;
```

## Adding Admin Components

Create components in `src/admin/components/`:

```javascript
// src/admin/components/UserTable.jsx
export function UserTable({ users }) {
  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

Then use it in your page:

```javascript
import { UserTable } from "../components/UserTable";

export function UsersManagement() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    // ...
  ];

  return (
    <section className="card">
      <h2>Users Management</h2>
      <UserTable users={users} />
    </section>
  );
}
```

## Nested Admin Routes

For more complex admin sections with nested pages:

```javascript
// In App.jsx
{
  path: "/admin/applications",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <ApplicationsList />,
    },
    {
      path: ":id",
      element: <ApplicationDetail />,
    },
    {
      path: ":id/review",
      element: <ApplicationReview />,
    },
  ],
}
```

Access URL parameters using `useParams`:

```javascript
import { useParams } from "react-router-dom";

export function ApplicationDetail() {
  const { id } = useParams();

  return (
    <section className="card">
      <h2>Application #{id}</h2>
      {/* Application details */}
    </section>
  );
}
```

## API Integration

Create a services folder for API calls:

```javascript
// src/admin/services/api.js
export const adminAPI = {
  getUsers: async () => {
    const response = await fetch("/api/admin/users");
    return response.json();
  },

  getApplications: async () => {
    const response = await fetch("/api/admin/applications");
    return response.json();
  },

  updateApplication: async (id, data) => {
    const response = await fetch(`/api/admin/applications/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
```

Use in components:

```javascript
import { useState, useEffect } from "react";
import { adminAPI } from "../services/api";

export function ApplicationsList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminAPI.getApplications().then((data) => {
      setApplications(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="card">
      <h2>Applications</h2>
      {/* Display applications */}
    </section>
  );
}
```

## Testing Admin Routes

After changes, test:

1. Navigate to `/admin` - Should show dashboard
2. Click navigation links - Should work smoothly
3. Refresh page - Should maintain route
4. Test error page - Go to `/admin/nonexistent`

## File Structure Best Practices

```
src/admin/
├── pages/
│   ├── Root.jsx           # Admin layout wrapper
│   ├── HomePage.jsx       # Dashboard
│   ├── UsersManagement.jsx
│   ├── ApplicationsList.jsx
│   └── ...
├── components/
│   ├── SideBar.jsx        # Navigation
│   ├── UserTable.jsx      # Reusable components
│   ├── ApplicationCard.jsx
│   └── ...
├── services/
│   ├── api.js             # API calls
│   └── ...
├── styles/
│   └── custom.css         # Additional styles
├── App.css                # Core admin styles
└── assets/
    └── logo.png
```

## Common Patterns

### Protected Routes (if authentication needed)

```javascript
function ProtectedAdminRoute({ element }) {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return isAdmin ? element : <Navigate to="/admin/unauthorized" />;
}

// In router:
{
  path: "/admin/settings",
  element: <ProtectedAdminRoute element={<AdminSettings />} />,
}
```

### Breadcrumb Navigation

```javascript
import { useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index}>{path}</span>
      ))}
    </nav>
  );
}
```

For questions or issues, refer to the main RESTRUCTURING_GUIDE.md file.
