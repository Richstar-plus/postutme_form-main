import { Outlet } from "react-router-dom";

export function FormRootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      <Outlet />
    </>
  );
}
