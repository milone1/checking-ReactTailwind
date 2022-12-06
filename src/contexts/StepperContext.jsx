import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null, listUser: [], values: {}, setValues: null, open: true, setOpen:null});

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState({});
  const listUser = [];
  return (
    <StepperContext.Provider value={{ userData, setUserData, listUser, values, setValues, open }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData, values, setValues, open, setOpen } = useContext(StepperContext);

  return { userData, setUserData, values, setValues, open, setOpen };
}