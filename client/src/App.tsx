import { BrowserRouter } from "react-router-dom";
import Main from "layouts/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
