import { useEffect, useState } from "react";
import "./App.css";
import { atom, useAtom, useSetAtom } from "jotai"; // Import useSetAtom
import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import DetailView from "./DetailView";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const detailData = atom<DataType | undefined>(undefined); // Initial value is undefined

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<DataType[]>([]);
  const [dataDetailState,setDetailData] = useAtom(detailData); // Use useSetAtom to set the atom
  const navigate = useNavigate();
console.log(dataDetailState)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: DataType[]) => {
        setData(data);
      });
  }, []);

  // Filter data based on the search input
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search by title"
      />

      {filteredData.length > 0 ? (
        filteredData.map((data: DataType) => (
          <div
            key={data.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>{data.id}</p>
            <p>{data.title}</p>
            <button
              onClick={() => {
                setDetailData(data);
                console.log(detailData, 'ini pa?') // Set the atom directly
                // navigate(`/detail`);
              }}
            >
              Go to detail
            </button>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Home;
