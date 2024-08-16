import { ReceptInfo } from "./../ReceptInfo/index";
import "./index.css";

export function ReceptList(props) {
  return (
    <ul>
      {props.recipies.map((item, index) => (
        <ReceptInfo key={index} {...item}></ReceptInfo>
      ))}
    </ul>
  );
}
