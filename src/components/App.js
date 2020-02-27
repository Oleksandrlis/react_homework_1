import React from "react";
import user from "../user.json";
import Profile from "./profile/Profile.js";


const App = () => {
  console.log(user);
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default App;
