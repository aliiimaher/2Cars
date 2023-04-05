import { ReactNode } from "react";
import "../styles/components/Button.scss";

interface Props {
  children?: ReactNode;
  color?: string;
  font?: string;
  onClick: () => void;
  icon?: string;
  margin?: string;
  size?: string;
}

function Button({
  children,
  color = "bg-blue-500 hover:bg-red-700 py-2 px-4 rounded-full drop-shadow-lg items-center btn",
  font = "text-white font-bold font-sans text-2xl text-inherit",
  onClick,
  icon,
  size = "h-16 w-16",
  margin = "m-2",
}: Props) {
  return (
    <>
      <div className="main-div">
        <button
          type="button"
          className={
            "cursor-pointer " + color + " " + font + " " + size + " " + margin
          }
          onClick={onClick}
        >
          {children}
          <img src={icon} alt="image" className="myImg" />
        </button>
      </div>
    </>
  );
}

export default Button;
