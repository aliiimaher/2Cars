import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  onClick: () => void;
  icon?: string;
  width?: string;
}

function Button({
  children,
  color = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
  onClick,
  icon = "../assets/react.svg",
  width = "4px",
}: Props) {
  return (
    <>
    <div>
      <button type="button" className={color} onClick={onClick}>
        {children}
      </button>
        <img src={icon} alt="image" />
      </div>
    </>
  );
}

export default Button;
