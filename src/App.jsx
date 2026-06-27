import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button } from '@mui/material';
import Header from './components/Header';
import PostList from './components/PostList';
import theme from './theme/theme';
import './styles/main.scss';
import cornerSvg from './assets/background/Vector 1.svg';
import blobSvg from './assets/background/Vector 2.svg';

const bgImageStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: -1,
  border: 'none',
  boxShadow: 'none',
  outline: 'none',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <div className="landing">
          <Header />
          <main>
            <PostList />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                pt: '33px',
                pb: '61px',
              }}
            >
              <Button variant="outlined" sx={{ borderRadius: '1000px' }}>
                Load More
              </Button>
            </Box>
          </main>
        </div>
        <Box
          component="img"
          src={cornerSvg}
          aria-hidden={true}
          sx={{ ...bgImageStyles, top: 0, left: 0 }}
        />
        <Box
          component="img"
          src={blobSvg}
          aria-hidden={true}
          sx={{ ...bgImageStyles, top: '614px', right: 0 }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
