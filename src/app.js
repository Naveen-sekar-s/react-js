import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <switch ></switch>
      </div>
    // </BrowserRouter>
  );
};

export default App;
