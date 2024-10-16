import { useEffect, useState } from "react";
import "./App.css";
import { useSetAtom, atom } from "jotai";
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
  const [search, setSearch] = useState("");
  const [data, setData] = useState<DataType[]>([]);
  const [dataDetail, setDataDetail] = useState<DataType>();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: DataType[]) => {
        setData(data);
      });
  }, []);
  console.log(dataDetail);
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
