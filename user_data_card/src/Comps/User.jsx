import React from "react";

import "./User.css";
export const User = ({ singleUser }) => {
  console.log(singleUser);
  return (
    <div className="id_card">
      <img
        src={`https://randomuser.me/api/portraits/men/${singleUser.id}.jpg`}
        alt="{singleuser.name}"
      />
      <h3>
        <span span className="label">Name {singleUser.name}</span>
      </h3>
      {/* <p>Username:{singleUser.username}</p> */}
      <p><span span className="label">Company Name</span>
        {singleUser.company.name}</p>
      <p><span span className="label">Email</span>{singleUser.email}</p>
      <p><span span className="label">Street</span>{singleUser.address.street}</p>
      <p><span span className="label">City</span>{singleUser.address.city} </p>
    </div>
  );
};
// export default User
