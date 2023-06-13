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
      width: 400,
      marginBottom: theme.spacing(2),
      backgroundColor: '#ffffff', // Change the background color to white
      borderRadius: theme.spacing(1), // Add a slight border radius
      boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`, // Update the box shadow
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2)`, // Update the box shadow on hover
      },
    },
    title: {
      marginBottom: theme.spacing(1),
      fontSize: '1.4rem', // Increase the font size of the title
      fontWeight: 'bold',
      color: '#333333', // Change the title color to a darker shade
    },
    body: {
      fontSize: '1.1rem', // Increase the font size of the body text
      color: '#666666', // Change the body text color to a medium shade
    },
  })
);
