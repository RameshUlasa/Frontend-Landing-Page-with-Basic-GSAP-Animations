import "./index.css";

const ApproachList = (props) => {
  const { eachTech } = props;
  const { name, imgUrl } = eachTech;

  return (
    <li className="a-Item">
      <img className="a-logo" src={imgUrl} alt={name} />
      <p className="a-name">{name}</p>
    </li>
  );
};
export default ApproachList;
