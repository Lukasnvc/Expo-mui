import { useImageById } from "../../hooks/image";
import { useParams } from "react-router-dom";

const Card = () => {
  const params = useParams();

  const { data, isLoading } = useImageById(+params.id!);

  console.log(data);

  return <div>{data[0].tags}</div>;
};

export default Card;
