import { useState } from 'react';
import Navbar from '../navbar';
import SideBar from '../sidebar';

interface iProps {
  children: React.ReactNode;
}

const SideNavbarLayout = (props: iProps) => {
  const { children } = props;
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  return (
    <>
      <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <SideBar menuToggle={menuToggle} setMenuToggle={setMenuToggle}>
        {children}
      </SideBar>
    </>
  );
};

export default SideNavbarLayout;
