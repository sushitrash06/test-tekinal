import { useEffect, useState } from "react";
import "./App.css";
import { atom } from "jotai";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DetailView from "./DetailView";
import Home from "./home";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const detailData = atom<DataType>();

function App() {
  return (
    <div>
      <Router>
        <h1>DATA</h1>
        <Routes>
          <Route path="/detail" element={<DetailView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
