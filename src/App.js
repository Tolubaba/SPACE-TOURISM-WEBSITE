import React from "react";
import Space from "./Space/Space";
import Destination from "./Destination/Destination";
import Crew from "./Crew/Crew";
import Technology from "./Technology/Technology";
import { createBrowserRouter, BrowserRouter, Route, Routes, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Sidebar from "./Sidebar";


  
function App() {
  return (
    <>


<Routes>
      <Route index element={<Space />} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  
      <Sidebar />







    </>
  );
}

export default App;
