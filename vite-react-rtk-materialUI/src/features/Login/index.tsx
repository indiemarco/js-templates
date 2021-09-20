import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Link } from 'src/components/Link';

export default function Login(): JSX.Element {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <Link to="/pokemon" color="primary">
        Pokemon
      </Link>
    </Box>
  );
}
