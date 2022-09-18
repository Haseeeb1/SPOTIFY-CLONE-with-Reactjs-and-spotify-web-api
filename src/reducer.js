export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //token:'BQBniGuJYAwhKd81aP3NyNYkf70O7zcQ8kxX-thwOOH1czu3XpYmGrsUkVYOb0oQlHjw2Up2arLj-EoNWRcNo7qmkimykLINJLuMaeOzCpIOK4Gsc7z-IjgbTuA5eZ64K0qlVsMU-yQXMf2T-2amKXK8UkER4QDyLP6jQfYIETR1Lk2bbwe_mt4pBedqIswC-rRhYOKMc_aW_HnkG1md',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
