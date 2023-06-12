import { Theme, createStyles } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface StylesProps {
  card: string;
  title: string;
  body: string;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: 400, // Add width of 400 to the card
      marginBottom: theme.spacing(2),
      backgroundColor: '#f5f5f5',
      borderRadius: 0, // Set the borderRadius to 0 for a more square card
      boxShadow: theme.shadows[2],
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: theme.shadows[4],
      },
    },
    title: {
      marginBottom: theme.spacing(1),
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    body: {
      fontSize: '1rem',
    },
  })
);
