import "./App.css";
import { useAtomValue } from 'jotai';
import { detailData } from "./App";

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function DetailView() {
  const detailUser = useAtomValue(detailData);
  console.log(detailUser, 'ini detail user');

  // Check if detailUser is undefined and handle it
  if (!detailUser) {
    return <div>No detail data available.</div>; // Or a loading spinner/message
  }

  return (
    <div>
      <h2>{detailUser.title}</h2>
      <p>{detailUser.body}</p>
      <p>User ID: {detailUser.userId}</p>
    </div>
  );
}

export default DetailView;
