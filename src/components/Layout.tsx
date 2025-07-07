import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout;
// This component serves as a layout for the application, allowing nested routes to render their content within it.