import tokenReducer from "@/reducer/tokenReducer";
import { createContext, useReducer, useState } from "react";

export const ReducerContext = createContext(null);

export default function PageContext({ children }) {
  const [token, tokenDispatch] = useReducer(tokenReducer, tokenReducer.INIT);
  const [user, setUser] = useState(null);
  const [campaign, setCampaign] = useState([]);

  const reducer = {
    token: {
      state: token,
      dispatch: tokenDispatch,
    },
    user,
    setUser,
    campaign,
    setCampaign,
  };

  return (
    <ReducerContext.Provider value={reducer}>
      {children}
    </ReducerContext.Provider>
  );
}
