import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Board } from "./components/Board";
import { Result } from "./components/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/page1" exact={true} element={<Page1 />} />
        <Route path="/page2" exact={true} element={<Page2 />} />
        <Route path="/page3" exact={true} element={<Page3 />} />
        <Route path="/page4" exact={true} element={<Page4 />} />
        <Route path="/page5" exact={true} element={<Page5 />} />
        <Route path="/page6" exact={true} element={<Page6 />} />
        <Route path="/page7" exact={true} element={<Page7 />} />
        <Route path="/page8" exact={true} element={<Page8 />} />
        <Route path="/page9" exact={true} element={<Page9 />} />
        <Route path="/page10" exact={true} element={<Page10 />} />
        <Route path="/result" exact={true} element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
