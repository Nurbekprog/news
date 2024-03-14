import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import More from "./components/post/More";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="/posts/:id" element={<More />} />
      </Routes>
    </Router>
  );
};

export default App;
