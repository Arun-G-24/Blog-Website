import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Postcard from "../post/Postcard"
import Navbar from "../compontents/NavBar";
import Error from "../compontents/Error"
import About from "../compontents/About";
import Thankyou from "../compontents/Thankyou";
import DevTools from "../DevTools";

function App() {
  const [search, setSearch] = useState("apple");
   DevTools()
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/post/:id" element={<Postcard />} />
        <Route path="*" element={<Error/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/thankyou" element={<Thankyou/>}/>
      </Routes>
    </>
  );
}

export default App;
