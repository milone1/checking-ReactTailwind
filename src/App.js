import React from "react";
import { UserProvider } from "./contexts/StepperContext.jsx";
import Router  from "./router/index.jsx";

function App() {
  return (
    <UserProvider>
       <div>
         <Router />
       </div>
    </UserProvider> 
  );
}

export default App;
