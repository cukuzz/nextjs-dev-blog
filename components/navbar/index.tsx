import React, { Dispatch, SetStateAction, useState } from 'react';
import classNames from 'classnames';
import { HamburgerIcon, ProfileIcon, SignoutIcon, SettingsIcon } from '@components/icon';

interface iProps {
  menuToggle: boolean;
  setMenuToggle: Dispatch<SetStateAction<boolean>>;
  // children: React.ReactNode;
}

const Navbar = (props: iProps) => {
  const { menuToggle, setMenuToggle } = props;

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* NavBar 상단 왼쪽 메뉴 */}
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* 햄버거 메뉴 */}
            <button className="px-4 py-2 text-gray-700 rounded-lg rounded-lgtext-2xl hover:bg-gray-200" onClick={() => setMenuToggle(!menuToggle)}>
              <HamburgerIcon class="" />
            </button>

            <div className="flex items-center text-2xl font-bold ml-3">
              <a href="/">Home</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
