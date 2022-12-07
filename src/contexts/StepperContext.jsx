import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  var [values, setValues] = useState({});
  const [open, setOpen] = useState(true)
  const listUser = [];

  return (
    <UserContext.Provider
      value={{
         listUser,
 	 values,
	 setValues,
	 open,
	 setOpen
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
