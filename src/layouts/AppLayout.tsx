import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header>Main Header</header>
      <Outlet />
      <footer>Main Footer</footer>
    </div>
  );
};

export default AppLayout;
