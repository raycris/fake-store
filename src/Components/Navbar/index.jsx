import { useContext } from "react";
import { NavLink } from "react-router-dom";

import {ShoppingCartContext} from "../.../context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex w-full min-w-[280px] justify-between items-center fixed z-10 top-0 text-sm font-light p-3">
      <ul className="lg:items-center lg:flex lg:gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi fake</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
      </ul>
      <ul className="lg:items-center lg:flex lg:gap-3">
        <li className="text-black/60">money@worldreact.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-order"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>🛒 {context.count}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
