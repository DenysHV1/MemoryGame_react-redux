import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MemoryLvl1 from "./components/MemoryLvl1/MemoryLvl1";
import { selectCard } from "./redux/actions";

function App() {
  const { active, backgroundImages, selected_img } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handelSelect = (e) => {
    if (e.target.dataset.img !== selected_img) {
      dispatch(selectCard(e.target.dataset.img))
    }
  };

  return (
    <section className="container">
      <h1>Memory game</h1>
      <p>select the card</p>
      <ul className="select-item-list">
        {backgroundImages.map(({ id, url }) => (
          <li
            data-img={url}
            onClick={handelSelect}
            className="select-item"
            key={id}
            style={{ backgroundImage: `url(${url})` }}
          ></li>
        ))}
      </ul>
      {active && <MemoryLvl1 />}
    </section>
  );
}

export default App;
