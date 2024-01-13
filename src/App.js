import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import App1 from "./pages/App1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  

  return (
    <Routes>
      <Route path="/" element={<App1 />} />
    </Routes>
  );
}
export default App;
