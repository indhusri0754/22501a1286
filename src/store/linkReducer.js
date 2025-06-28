export const initialState = {
  links: [],
  error: null,
};

export const linkReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LINKS':
      return { ...state, links: [...state.links, ...action.payload] };
    case 'SET_LINKS':
      return { ...state, links: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};
