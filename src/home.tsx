import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<DataType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: DataType[]) => {
        setData(data);
      });
  }, []);

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
                const queryParams = new URLSearchParams({
                  userId: data.userId.toString(),
                  title: data.title,
                  body: data.body,
                }).toString();

                navigate(`/detail?${queryParams}`);
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
