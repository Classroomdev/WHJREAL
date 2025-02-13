import React, { useState } from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import clsx from "clsx";
import Home from "../pages/Home";
import Profile from "../pages/users/Profile";
import GoogleOuathLogin from "./GoogleOuathLogin";
import InvalidUser from "../pages/users/InvalidUser";
import CreateNewJob from "../pages/jobs/createNewJob";
import UpdateJob from "../pages/jobs/updateJob";
import JobsIndex from "../pages/jobs/JobsIndex";
import Job from "../pages/jobs/Job";

function Header() {
  const UserId = localStorage.getItem("userId");
  const id = UserId;
  console.log("id", id);
  const loggedUser = true;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLinksDropdownOpen, setIsLinksDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("isDropdownOpen", isDropdownOpen);
  };

  const toggleLinksDropdown = () => {
    setIsLinksDropdownOpen(!isLinksDropdownOpen);
    console.log("isLinksDropdownOpen", isLinksDropdownOpen);
  };

  const links = [
    // { to: `/users/${id}`, text: "Profile" },
    { to: "/jobs/all", text: "Jobs", button: false },
    // { to: "/login", text: "Sign Up", button: true },
  ];

  const linkList = links.map((link) => (
    <li
      key={link.to}
      class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    >
      <Link to={link.to}>{link.text}</Link>
    </li>
  ));

  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 border-b">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              We Hire Juniors
            </span>
          </Link>

          {/* Profile & Dropdown */}
          <div class="relative flex items-center justify-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Button to Toggle Dropdown */}
            {loggedUser ? (
              <a
                href="/auth/google"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </a>
            ) : (
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                onClick={toggleDropdown}
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
              </button>
            )}
            {/*  Dropdown menu conidtionally rendered*/}

            {isDropdownOpen && (
              <div
                class="z-50 absolute top-6 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleLinksDropdown}
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {linkList}
            </ul>
          </div>
        </div>
      </nav>
      {isLinksDropdownOpen && (
        <div
          class="absolute items-center justify-between w-full md:flex md:w-auto md:order-1 md:hidden"
          id="navbar-user"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"></ul>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/google/callback" element={<GoogleOuathLogin />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="/usernotfound" element={<InvalidUser />} />
        <Route path="/jobs/new" element={<CreateNewJob />} />
        <Route path="/jobs/:id" element={<UpdateJob />} />
        <Route path="/jobs/all" element={<JobsIndex />} />
        <Route path="/jobs/index/:id" element={<Job />} />
      </Routes>
    </>
  );
}

export default Header;
