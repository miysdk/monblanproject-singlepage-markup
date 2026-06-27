import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import './Header.scss'
import logo from '../assets/logo.png'
import { Chip } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

function Header() {
  return (
    <AppBar 
      position="sticky" 
      color="inherit" 
      className="header"
      sx={{
        backgroundColor: 'rgba(255,255,255,0.67)',
      }}
    >
      <Container 
        maxWidth={false} 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: "16px 0", 
          maxWidth: '836px',
          width: '100%',
          gap: 10.75,
        }}
      >
        <Box className="header__logo__container">
          <Avatar 
            src={logo} 
            className="header__logo big" 
          />
        </Box>
        <Box 
          className="header__info" 
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', gap: 2 }}
        >
          <Box 
            className="header__title" 
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <Avatar 
              src={logo} 
              className="header__logo small" 
            />
            <Typography 
              variant="h5"
            >
              monblanproject
            </Typography>
            <Chip 
              label="start on 17.02.2016" 
              variant="outlined" 
              sx={{
                color: "#3D8EDA",
                borderColor: "#3D8EDA"
              }}
            />
          </Box>
          <Box 
            className="header__title" 
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <Typography>
              <b>870</b> posts
            </Typography>
            <Typography>
              <b>11787</b> followers
            </Typography>
            <Typography>
              <b>112</b> following
            </Typography>
          </Box>
          <Box
            className="header__date__filters"
          >
            <DatePicker 
              label="From"
              slotProps={{
                textField: {
                  size: 'small'
                }
              }}
            />
            <DatePicker 
              label="To"
              slotProps={{
                textField: {
                  size: 'small'
                }
              }}
            />
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
