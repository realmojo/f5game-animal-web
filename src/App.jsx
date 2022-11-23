import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";
import { Page5 } from "./components/Page5";
import { Page6 } from "./components/Page6";
import { Page7 } from "./components/Page7";
import { Page8 } from "./components/Page8";
import { Page9 } from "./components/Page9";
import { Page10 } from "./components/Page10";

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
