import "./index.css";

const TechList = (props) => {
  const { eachTech } = props;
  const { name, imgUrl } = eachTech;

  return (
    <li className="techItem">
      <img className="tech-logo" src={imgUrl} alt={name} />
      <p className="tech-name">{name}</p>
    </li>
  );
};
export default TechList;
