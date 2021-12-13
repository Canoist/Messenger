import React from "react";

const Chat = ({ dialog }) => {
  return (
    <div className="chat">
      <nav>{dialog.name}</nav>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Message:
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Введите здесь сообщение"
        />
      </div>
    </div>
  );
};
export default Chat;
