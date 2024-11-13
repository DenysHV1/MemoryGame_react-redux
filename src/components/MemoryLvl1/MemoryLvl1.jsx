import css from './MemoryLvl1.module.css'

import { useDispatch, useSelector } from "react-redux";
import ActiveBlock from "../ActiveBlock/ActiveBlock";
import InactiveBlock from "../InactiveBlock/InactiveBlock";
import { openCard } from '../../redux/actions';

const MemoryLvl1 = () => {
  const { lvl1, firstClick } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOpenClick = (view, id, name) => {
    if (!view && !firstClick){
      dispatch(openCard({view: !view, id: id, name: name}))
    }
  }
  return (
    <ul className={css.block_list}>
      {lvl1.map(({ id, name, view }) =>
        view ? (
          <li key={id}>
            <ActiveBlock cardName={name} />
          </li>
        ) : (
          <li key={id} onClick={() => handlerOpenClick(view, id, name)}>
            <InactiveBlock cardName={name}/>
          </li>
        )
      )}
    </ul>
  );
};

export default MemoryLvl1;
