import { useLocation } from "react-router-dom";

function DetailView() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const detailUser = {
    userId: parseInt(query.get("userId") || "0"),
    title: query.get("title") || "",
    body: query.get("body") || "",
  };

  return (
    <div>
      <h2>{detailUser.title}</h2>
      <p>{detailUser.body}</p>
      <p>User ID: {detailUser.userId}</p>
    </div>
  );
}

export default DetailView;
