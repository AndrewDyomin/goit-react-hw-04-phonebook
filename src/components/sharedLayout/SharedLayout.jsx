import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/base-items">Base items</NavLink></li>
            </ul>
            <hr/>
        </nav>
        <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
        </Suspense>
    </>

  );
};