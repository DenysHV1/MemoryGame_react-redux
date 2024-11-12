import { useSelector } from "react-redux";
import css from "./InactiveBlock.module.css";
const InactiveBlock = ({ cardName }) => {
  const { selected_img } = useSelector((state) => state);
  return (
    <div
      className={css.inactive_item}
      style={{ backgroundImage: `url(${selected_img})` }}
    >
      <p className="visually-hidden">{cardName}</p>
    </div>
  );
};

export default InactiveBlock;
