import { ReactNode } from "react";

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
}

function Button({
  children,
  color = "bg-blue-500 hover:bg-red-700 py-2 px-4 rounded-full place-self-center",
  cursor = "cursor-pointer",
  font = "text-white font-bold font-sans text-2xl text-inherit",
  onClick,
  icon,
  width = "w-16",
  height = "h-16",
  margin = "m-2",
}: Props) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
            margin
          }
          onClick={onClick}
        >
          {children}
          <img src={icon} alt="image" />
        </button>
      </div>
    </>
  );
}

export default Button;
