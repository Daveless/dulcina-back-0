import React from "react";

const DeleteButton = ({ onClick, content }) => {
  return (
    <button
      className="text-[15px] hover:border-b-[1px] hover:border-solid hover:border-black"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default DeleteButton;
