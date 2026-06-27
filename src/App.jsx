import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Header from './components/Header'
import theme from './theme/theme'
import './styles/main.scss'
import PostList from './components/PostList'
import { Box, Container, Paper, Button } from '@mui/material'
import corner_svg from './assets/background/Vector 1.svg'
import blob_svg from './assets/background/Vector 2.svg'

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
              pb: '61px'
            }}
          >
            <Button>Load More</Button>
          </Box>
        </main>
      </div>
      <Box 
        component="img"
        src={corner_svg}
        aria-hidden={true}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: -1,
          border: 'none',
          boxShadow: 'none',
          outline: 'none'
        }}
      />
      <Box
        component="img"
        src={blob_svg}
        aria-hidden={true}
        sx={{
          position: 'fixed',
          top: '614px',
          right: 0,
          pointerEvents: 'none',
          zIndex: -1,
          border: 'none',
          boxShadow: 'none',
          outline: 'none'
        }}
      />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
