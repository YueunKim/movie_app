import { useParams } from "react-router-dom";
function Detail() {
  const id = useParams();
  console.log(id);
  return <h1>detail</h1>;
}

export default Detail;
