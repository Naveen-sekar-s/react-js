import Hooks from "./Hook/Hooks";
import Navbar from "./Navbar/Navbar";
import Acomponent from "./Props/Acomponent";
import Employeereq from "./State/State";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hooks />
      <Acomponent />
      <Employeereq />
    </div>
  );
};

export default App;
