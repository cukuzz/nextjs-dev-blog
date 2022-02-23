import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, ListItem, Grid } from '@mui/material';

import { BaseComponentProps } from '@/types';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface iProps extends BaseComponentProps {
  menuName: string;
  subMenu: [{}];
}
export default function AccordionMenu(props: iProps) {
  const { menuName, subMenu } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel: boolean) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    event.stopPropagation();
    setExpanded(newExpanded ? true : false);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange(expanded)}>
      <AccordionSummary aria-controls={`panel-content-${menuName}`} id={`panel-id-${menuName}`}>
        <Typography>${menuName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column">
          <ListItem button key={1}>
            {subMenu.name}
          </ListItem>
          <ListItem button key={2}>
            <Typography>Sub Item 2</Typography>
          </ListItem>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
