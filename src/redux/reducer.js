import initialState1 from "./initialState/initialState1";

export const reducer = (state = initialState1, action) => {
  switch (action.type) {
    case "SELECT_CARD":
      return {
		...state,
		selected_img: action.payload
	  };
    case "OPEN_CARD":
    return {
      ...state,
      previousClick: action.payload.name,
      lvl1: openCard(state.lvl1, action.payload, state.previousClick),
    }
    default:
      return state;
  }
};


function openCard(lvl1, { id, name }, previousClick) {
  if (previousClick && previousClick !== name) {
    // Сбрасываем все элементы, если name не совпадает
    return lvl1.map(item => ({ ...item}));
  }

  // Обновляем только элемент с текущим id
  return lvl1.map(item =>
    item.id === id ? { ...item, view: true } : item
  );
}

