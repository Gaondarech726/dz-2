import "./index.css";

export function ReceptInfo(props) {
  return (
    <li className="recipeInfo">
      <img className="img" src={props.image} />
      <p className="name">{props.name}</p>
    </li>
  );
}
