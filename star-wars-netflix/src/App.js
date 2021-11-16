// import { useContext } from 'react';
import './App.css';
import FetchingData from './component/FetchingData';

/* const theme = {
  light: {
    foreground: "#000000",
    border: "12px",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    border: "10px",
    background: "#222222"
  }
}; */

function App() {

  // const ThemeContext = useContext(theme.light);

  return (
    // <ThemeContext.Provider value={theme.dark} >
      <div className="App Container">
        <FetchingData />
      </div>
    // </ThemeContext.Provider>
  );
}

export default App;
