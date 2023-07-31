import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
