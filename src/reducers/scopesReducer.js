import {
  TOP_ARTISTS,
  TOP_TRACKS,
  RECENTLY_PLAYED,
  NOW_PLAYING
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TOP_TRACKS:
      return {
        ...state,
        tracks: [...action.payload.items],
        timeRange: { tracks: action.timeRange }
      };
    case TOP_ARTISTS:
      return {
        ...state,
        artists: [...action.payload.items],
        timeRange: { artists: action.timeRange }
      };
    case RECENTLY_PLAYED:
      return { ...state, recent: [...action.payload.items] };
    case NOW_PLAYING:
      return { ...state, current: action.payload.item };
    default:
      return state;
  }
};
