import { createTheme , ThemeProvider} from '@mui/material/styles'
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Settings from './components/Settings';

const theme = createTheme({
  palette: {
    primary: {
      main: '#635bff',
    },
    secondary: {
      main: '#fffff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/home" element={<Home />} />


        </Routes>
      </BrowserRouter>    </ThemeProvider>
  );
}

export default App;
