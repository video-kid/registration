import React, { useState } from "react";
import Data from "../dbHandler/dbHandler.js";

let isAdmin = async id => {
  let curAccount = await Data.findMatches(
    await Data.useTable("admins"),
    "id",
    id
  );
  if (curAccount[0] !== undefined) {
    let { admin } = curAccount[0];
    return admin;
  }
};

const Panel = props => {
  const { id, login, email } = props.userData;

  const [adminStatus, setAdminStatus] = useState(null);

  const checkPrvl = async () => {
    if ((await isAdmin(id)) === true) {
      return setAdminStatus("true");
    }
  };

  checkPrvl();

  return (
    <div className="panel">
      <aside className="sidebar">sidebar</aside>
      <div className="content">
        logged user: id: {id}
        login: {login}
        email: {email}
        isAdminAcc: {adminStatus}
      </div>
    </div>
  );
};

export default Panel;
