import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

import { BaseComponentProps } from '@/types';
import AccordionMenu from '@components/accordion-menu';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface iProps extends BaseComponentProps {
  drawerWidth: number;
  open: boolean;
  anchor: Anchor;
  handleSideBarClose: () => void;
}

export default function SideBar(props: iProps) {
  const { anchor, open, drawerWidth, handleSideBarClose } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    handleSideBarClose();
    setState({ ...state, [anchor]: open });
  };

  const tempSubMenu = [{ name: 'sub menu1' }, { name: 'sub menu2' }];
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(anchor, false)}
      // variant="persistent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
        {'메뉴자리1'}
        <Divider />
        {'메뉴자리2'}
        <Divider />
        <AccordionMenu menuName="menu1" subMenu={tempSubMenu} />
      </Box>
    </Drawer>
  );
}
