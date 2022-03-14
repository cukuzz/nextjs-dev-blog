import React, { Dispatch, SetStateAction, useState } from 'react';

import {
  HamburgerIcon,
  ProfileIcon,
  SettingsIcon,
  SignoutIcon,
  DashboardIcon,
  TablesIcon,
  FormsIcon,
  TabbedContentIcon,
  CalendarIcon,
  SupportIcon,
} from '@components/icon';

interface iProps {
  menuToggle: boolean;
  setMenuToggle: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const SideBar = (props: iProps) => {
  const bgColor: string = 'bg-blue-500';
  const { menuToggle, setMenuToggle } = props;

  return (
    <main className="flex bg-gray-100">
      {/* SideBar */}
      <aside className={` ${menuToggle ? 'hidden md:block' : 'hidden'} w-64 ${bgColor}`}>
        <div className="p-6">
          <a href="" className="flex items-center text-white text-3xl font-semibold hover:text-gray-300">
            <SettingsIcon class="mr-3" />
            Admin
          </a>
        </div>
        <nav className="block text-white text-base font-semibold pt-3">
          <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
            <DashboardIcon class="mr-3" />
            Dashboard
          </a>
          <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
            <TablesIcon class="mr-3" />
            Tables
          </a>
          <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
            <FormsIcon class="mr-3" />
            Forms
          </a>
          <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
            <TabbedContentIcon class="mr-3" />
            Tabbed Content
          </a>
          <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
            <CalendarIcon class="mr-3" />
            Calendar
          </a>
          <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
            <SupportIcon class="mr-3" />
            Support
          </a>
        </nav>
      </aside>

      {/* Mobile Header & Nav */}
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <header className={`w-full py-5 px-6 ${menuToggle ? 'hidden' : 'block'} md:hidden`}>
          {/* Dropdown Nav */}
          <nav className="text-white text-base font-semibold bg-gray-500 ">
            <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
              <DashboardIcon class="mr-3" />
              Dashboard
            </a>
            <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
              <TablesIcon class="mr-3" />
              Tables
            </a>
            <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 ">
              <FormsIcon class="mr-3" />
              Forms
            </a>
            <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
              <TabbedContentIcon class="mr-3" />
              Tabbed Content
            </a>
            <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
              <CalendarIcon class="mr-3" />
              Calendar
            </a>
            <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6">
              <SupportIcon class="mr-3" />
              Support
            </a>
          </nav>
        </header>

        {/* props.children position here */}
        <slot>{props.children}</slot>
      </div>
    </main>
  );
};

export default SideBar;
