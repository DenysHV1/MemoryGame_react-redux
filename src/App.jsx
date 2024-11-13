import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MemoryLvl1 from "./components/MemoryLvl1/MemoryLvl1";
import { selectCardStyle } from "./redux/actions";

function App() {
  const { activeLvl, backgroundImages, selected_img } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handelSelect = (e) => {
    if (e.target.dataset.img !== selected_img) {
      dispatch(selectCardStyle(e.target.dataset.img));
    }
  };

  return (
    <section className="container">
      <h1>Lucky game</h1>
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
      {activeLvl && <MemoryLvl1 />}
    </section>
  );
}

export default App;
