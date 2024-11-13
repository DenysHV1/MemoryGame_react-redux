import css from './ActiveBlock.module.css'

const ActiveBlock = ({cardName}) => {
  return <div style={{ backgroundImage: `url(${cardName})` }} className={css.active_item}></div>
};

export default ActiveBlock;
