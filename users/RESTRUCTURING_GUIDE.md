# PostUTME Application - Restructuring Guide

## Overview

The admin and users applications have been unified into a single application running from the `users` folder. Both admin and user interfaces are now accessible through clean, professional routes.

## New Structure

```
users/
├── src/
│   ├── admin/                          # NEW: Admin module
│   │   ├── App.css                     # Admin-specific styles
│   │   ├── assets/
│   │   │   └── logo.png
│   │   ├── components/
│   │   │   └── SideBar.jsx             # Admin sidebar navigation
│   │   └── pages/
│   │       ├── Root.jsx                # Admin layout wrapper
│   │       ├── HomePage.jsx            # Admin dashboard home
│   │       └── ErrorPage.jsx           # Admin error page
│   │
│   ├── components/                     # User components
│   │   ├── Header.jsx                  # Main navigation (now includes admin link)
│   │   ├── Footer.jsx
│   │   └── ...other components
│   │
│   ├── pages/                          # User pages
│   │   ├── Root.jsx
│   │   ├── HomePage.jsx
│   │   ├── FormPage.jsx
│   │   └── ...other pages
│   │
│   ├── App.jsx                         # UPDATED: Unified routing
│   ├── main.jsx
│   └── style.css                       # User-specific styles
│
├── package.json                        # UPDATED: React Router v7
└── vite.config.js
```

## Routing Structure

### User Routes

- `/` - Home page with registration options
- `/post-utme` - Post-UTME registration form
- `/post-utme/payment` - Payment page
- `/post-utme/review` - Review submission
- `/waec-result-upload` - O'level results
- `/change-course-institution` - Change course/institution
- `/admission-status` - Check admission status
- `/jamb-admission-letter` - Download admission letter
- `/jamb-original-result` - Download JAMB result
- `/age-declaration-birth-certificate` - Upload documents
- `/local-government-identification-letter` - Upload identification

### Admin Routes

- `/admin` - Admin dashboard home
- `/admin/*` - All admin routes start with `/admin` prefix

## Running the Application

### Install Dependencies

From the `users` folder:

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Key Changes

1. **Single Entry Point**: Now only run the `users` application
2. **Admin Module**: Located at `src/admin/` with its own components and styling
3. **Navigation**: Header now includes a link to `/admin` panel
4. **Styling**:
   - User styles: `src/style.css`
   - Admin styles: `src/admin/App.css`
   - Both use the same color scheme for consistency
5. **React Router**: Updated to v7.16.0 for compatibility

## Import Paths

### Admin Components

```javascript
// Import admin layout
import { AdminRoot } from "./admin/pages/Root";
import { AdminHome } from "./admin/pages/HomePage";

// Import from admin
import { SideBar } from "./admin/components/SideBar";
```

### User Components

```javascript
// Import user layout
import { RootLayout } from "./pages/Root";
import HomePage from "./pages/HomePage";
```

## Styling Consistency

Both admin and user interfaces use the same color scheme:

- **Primary Color**: `#1a4ace` (admin) / `#041649` (user) - Professional blue
- **Secondary Color**: `#010f2e` - Dark navy
- **Accent Color**: `#c48807` - Gold
- **Font**: Gilroy-Bold for professional appearance

## Asset Management

### Admin Assets

- Store admin assets in `src/admin/assets/`
- Example: Logo is at `src/admin/assets/logo.png`
- Import relative to the admin component file:
  ```javascript
  import logo from "../assets/logo.png";
  ```

### User Assets

- Store user assets in `src/images/`
- Import with relative paths or absolute paths

## Accessing the Application

After running `npm run dev`:

- **User App**: `http://localhost:5173/`
- **Admin App**: `http://localhost:5173/admin`
- **Navigation**: Click "Admin Panel" in the header to switch between apps

## Next Steps

1. Remove the old `admin/` folder from the PostUTME directory (optional, as backup)
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Test both user and admin routes
5. Add more admin features as needed within `src/admin/`

## Important Notes

- All routes follow kebab-case convention (e.g., `/post-utme`, `/admission-status`)
- Admin sidebar can be extended with more menu items in `src/admin/components/SideBar.jsx`
- Error handling is now separate for admin (`/admin/*`) and user routes
- Both applications share the same React and React Router instance for optimal performance
