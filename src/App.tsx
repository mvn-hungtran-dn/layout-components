import './App.css'
import { ThemeProvider } from 'theming';
import { THEME } from './theme';
import { GUI } from './pages/GUI'

function App() {

  return (
    <ThemeProvider theme={THEME}>
      <GUI />
    </ThemeProvider>
  )
}

export default App
