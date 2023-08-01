import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { darktheme, lightheme } from "./styles/theme";
import { useEffect, useState } from "react";
function App() {
  const [myTheme, setMyTheme] = useState(
    sessionStorage.getItem("theme") || "light"
  );

  const [themes, setThemes] = useState(lightheme); //

  useEffect(() => {
    sessionStorage.setItem("theme", myTheme);

    setThemes(myTheme === "light" ? lightheme : darktheme);
  }, [myTheme]);
  return (
    <div className="App">
      <ThemeProvider theme={themes}>
        <AppRouter myTheme={myTheme} setMyTheme={setMyTheme} />
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
