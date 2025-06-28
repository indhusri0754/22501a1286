import { createContext, useReducer, useContext } from 'react';
import { linkReducer, initialState } from './linkReducer';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(linkReducer, initialState);
  return (
    <LinkContext.Provider value={{ state, dispatch }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinks = () => useContext(LinkContext);
