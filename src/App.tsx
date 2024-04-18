
import "./App.css";
import ThemeProvider from './../src/theme';
import Routing from "./routes";

function App() {
  return (
    <>
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
    </>
  );
}

export default App;
