import React from "react";

const Panel = props => {
  const { id, login, email } = props.userData;
  const adminView = props.isAdmin;

  return (
    <div className="panel">
      <aside className="sidebar">sidebar</aside>
      <div className="content">
        logged user: id: {id}
        login: {login}
        email: {email}
        admin acc: {adminView.toString()}
      </div>
    </div>
  );
};

export default Panel;
