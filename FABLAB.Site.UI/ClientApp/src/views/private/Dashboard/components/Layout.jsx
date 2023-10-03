/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NLink } from './NLink'

export const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>

      <div className="flex h-screen bg-gray-200">
        <div className={`fixed inset-0 z-20 transition-opacity ${sidebarOpen ? 'block' : 'hidden'} bg-black opacity-50 lg:hidden`} onClick={() => setSidebarOpen(false)}></div>

        <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} lg:translate-x-0 lg:static lg:inset-0`}>

          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <img className="w-9 h-9" src="/img/logo/fablab-logo.svg" alt="fablab logo" />

              <span className="mx-2 text-2xl font-semibold text-white">Dashboard</span>
            </div>
          </div>

          <nav className="mt-10">
            <NLink path="inicio" text="Home" >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
            </NLink>

            <NLink path="clubs" text="Clubs">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zm-10 4h2a2 2 0 002 2v2a2 2 0 00-2 2H6a2 2 0 00-2-2v-2a2 2 0 002-2z"></path>
              </svg>
            </NLink>

            <NLink path="articulos" text="Articulos">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </NLink>

            <NLink path="usuarios" text="Usuarios">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </NLink>
          </nav>
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
            {/* hamburger menu */}
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>

              {/* search icon */}
              <div className="relative mx-4 lg:mx-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>

                <input className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search" />
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <button onClick={() => setNotificationOpen(!notificationOpen)} className="flex mx-4 text-gray-600 focus:outline-none">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>

                <div onClick={() => setNotificationOpen(false)} className={notificationOpen ? "fixed inset-0 z-10 w-full h-full" : ""} style={{ display: notificationOpen ? 'block' : 'none' }}></div>

                <div className={notificationOpen ? "absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80" : "absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"} style={{ width: "20rem", display: notificationOpen ? 'block' : 'none' }}>
                  <a href="#" className="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                    <img className="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="avatar" />
                    <p className="mx-2 text-sm">
                      <span className="font-bold" href="#">Sara Salah</span> replied on the <span className="font-bold text-indigo-400" href="#">Upload Image</span> artical . 2m
                    </p>
                  </a>
                  <a href="#" className="flex items-cetre px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                    <img className="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="avatar" />
                    <p className="mx-2 text-sm">
                      <span className="font-bold" href="#">Slick Net</span> start following you . 45m
                    </p>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                    <img className="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="avatar" />
                    <p className="mx-2 text-sm">
                      <span className="font-bold" href="#">Jane Doe</span> Like Your reply on <span className="font-bold text-indigo-400" href="#">Test with TDD</span> artical . 1h
                    </p>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                    <img className="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80" alt="avatar" />
                    <p className="mx-2 text-sm">
                      <span className="font-bold" href="#">Abigail Bennett</span> start following you . 3h
                    </p>
                  </a>
                </div>
              </div>

              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80" alt="Your avatar" />
                </button>

                <div onClick={() => setDropdownOpen(false)} className={dropdownOpen ? "fixed inset-0 z-10 w-full h-full" : ""} style={{ display: dropdownOpen ? 'block' : 'none' }}></div>

                <div className={dropdownOpen ? "absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl" : "absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"} style={{ display: dropdownOpen ? 'block' : 'none' }}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            {/* Contenido dinámico */}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
