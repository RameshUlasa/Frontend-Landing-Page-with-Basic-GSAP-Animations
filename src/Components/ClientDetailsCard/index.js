import "./index.css";

const ClientDetailsCard = (props) => {
  const { eachItem } = props;
  const { imgUrl, head, des } = eachItem;

  return (
    <li className="client-item">
      <img src={imgUrl} alt={head} className="logo" />
      <p className="item-title">{head}</p>
      <p className="item-des">{des}</p>
    </li>
  );
};
export default ClientDetailsCard;
