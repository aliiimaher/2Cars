import { ReactNode } from "react";
import "../App.scss";

interface Props {
  children?: ReactNode;
  color?: string;
  cursor?: string;
  font?: string;
  onClick: () => void;
  icon?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

function Button({
  children,
  color = "bg-blue-500 hover:bg-red-700 py-2 px-4 rounded-full drop-shadow-lg flex items-center justify-center",
  cursor = "cursor-pointer",
  font = "text-white font-bold font-sans text-2xl text-inherit",
  onClick,
  icon,
  width = "w-16",
  height = "h-16",
  margin = "m-2",
  padding,
}: Props) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          className={
            color +
            " " +
            font +
            " " +
            cursor +
            " " +
            width +
            " " +
            height +
            " " +
            margin +
            " " +
            padding
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
