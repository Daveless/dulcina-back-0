"use client";
const CallButton = ({ onClick, content }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-[#E60023] font-bold text-[#ffffff] w-[100%] h-[55px] rounded-xl mb-5"
    >
      <p>{content}</p>
    </button>
  );
};

export default CallButton;
