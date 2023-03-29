import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "../features/store/productSlice";
import { RootState } from "../features/store/store";
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default function Header() {
  const products = useTypedSelector(selectCart);
  
  return (
    <div className="navbar base-00 sticky top-0 z-30 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Iphone</a>
            </li>
            <li>
              <a>Samsung</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Others
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Huawei</a>
                </li>
                <li>
                  <a>Oppo</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to='/'> <a className="btn btn-ghost normal-case text-xl" >
          PROcart
        </a></Link>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Iphone</a>
          </li>
          <li>
            <a>Samsung</a>
          </li>
          <li tabIndex={0}>
            <a>
              Others
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Huawei</a>
              </li>
              <li>
                <a>Oppo</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/cart"><a className="  text-red-500" >
        <FaShoppingCart size={20} />{products.items.length} 
        </a></Link>
        
      </div>
    </div>
  );
}
