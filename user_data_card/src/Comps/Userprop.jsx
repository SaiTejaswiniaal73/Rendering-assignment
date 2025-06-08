import React from "react";
import { UserData } from './UserData';
import { User } from "./User";

 const Userprop = () => {
  return (
    <div id="user-container"> 
      {UserData.map((u, index) => (
        <User key={index} singleUser={u} />
      ))}
    </div>
  );
};
export default Userprop
