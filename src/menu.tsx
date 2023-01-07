import React from "react";
import { reveal as Burger } from "react-burger-menu";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

export default function Menu() {
  return (
    <>
      <Burger pageWrapId="page-wrap" outerContainerId="root">
        <Link to="/">Home</Link>
        <Link to="/sliding-image">Sliding Image</Link>
        <Link to="/reveal-images">Reveal Images</Link>

        <h3>Hi hi hi</h3>
        <h3>Hi hi hi</h3>
        <h3>Hi hi hi</h3>
        <h3>Hi hi hi</h3>
        <h3>Hi hi hi</h3>
      </Burger>
      <div id="page-wrap">
        <Outlet />
      </div>
    </>
  );
}
