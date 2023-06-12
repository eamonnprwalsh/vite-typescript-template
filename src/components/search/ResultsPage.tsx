import { Card, CardContent, Typography } from '@mui/material';
import { useSearchResults } from './useSearchResults';
import { StylesProps, useStyles } from './useCardStyles';

const ResultsPage = () => {
  const searchResults = useSearchResults().slice(0, 10);
  const classes = useStyles() as StylesProps;

  return (
    <div>
      <h2>Results Page</h2>
      {searchResults.map((result, index) => (
        <Card key={index} className={classes.card}>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              {result.title}
            </Typography>
            <Typography variant="body1" className={classes.body}>
              {result.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResultsPage;
