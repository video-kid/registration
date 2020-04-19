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
  const setAdminView = props.setAdminView;
  const adminView = props.isAdmin;

  const [accountStatus, setAccountStatus] = useState(null);

  const checkAccountType = async accountId => {
    if ((await isAdmin(accountId)) === true) {
      setAdminView();
      return setAccountStatus("admin");
    }
  };

  checkAccountType(id);

  return (
    <div className="panel">
      <aside className="sidebar">sidebar</aside>
      <div className="content">
        logged user: id: {id}
        login: {login}
        email: {email}
        {adminView && <div>its {accountStatus} version of panel</div>}
      </div>
    </div>
  );
};

export default Panel;
