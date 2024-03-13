import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import More from "./components/more/More";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
};

export default App;
