import { Link, Outlet } from "@remix-run/react";

const SobreLayout = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/carreiras">Carreiras</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default SobreLayout;
