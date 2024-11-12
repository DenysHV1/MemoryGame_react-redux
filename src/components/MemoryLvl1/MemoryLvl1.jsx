import css from './MemoryLvl1.module.css'

import { useSelector } from "react-redux";
import ActiveBlock from "../ActiveBlock/ActiveBlock";
import InactiveBlock from "../InactiveBlock/InactiveBlock";

const MemoryLvl1 = () => {
  const { lvl1 } = useSelector((state) => state);
  return (
    <ul className={css.block_list}>
      {lvl1.map(({ id, name, view }) =>
        view ? (
          <li key={id}>
            <ActiveBlock cardName={name} />
          </li>
        ) : (
          <li key={id}>
            <InactiveBlock cardName={name} />
          </li>
        )
      )}
    </ul>
  );
};

export default MemoryLvl1;
