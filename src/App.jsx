import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import More from "./components/post/More";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/posts/:id" element={<More />} />
      </Routes>
    </Router>
  );
};

export default App;
