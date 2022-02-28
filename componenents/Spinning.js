import CircularProgress from '@mui/material/CircularProgress';
import {Box, Stack} from '@mui/material';

const CircularIndeterminate =() => {
  return (
    <Stack style={{height:'100vh'}} alignItems="center" justifyContent="middle">
      <CircularProgress />
    </Stack>
  );
}
export default CircularIndeterminate;