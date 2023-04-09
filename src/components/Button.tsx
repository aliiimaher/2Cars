import { ReactNode, useEffect, useState } from "react";
import "../styles/components/Button.scss";

interface Props {
  children?: ReactNode;
  onClick: () => void;
  icon?: string;
  size?: "small" | "medium" | "large";
}

function Button({ children, onClick, icon, size = "small" }: Props) {
  const color = "bg-blue-500 hover:bg-red-700";
  const font = "text-white font-bold font-sans text-2xl text-inherit";
  const [btnClass, setBtnClass] = useState("btn-small");

  useEffect(() => {
    generateBtnClass();
  }, []);

  const generateBtnClass = () => {
    if (size === "medium") {
      setBtnClass("btn-medium");
    } else if (size === "small") {
      setBtnClass("btn-small");
    } else {
      setBtnClass("btn-large");
    }
  };

  return (
    <>
      <div className="btn-wrapper">
        <button
          type="button"
          className={
            "rounded-full drop-shadow-lg items-center btn cursor-pointer" +
            " " +
            color +
            " " +
            font +
            " " +
            btnClass
          }
          onClick={onClick}
        >
          {children}
          <img src={icon} alt="image" className="btn-img" />
        </button>
      </div>
    </>
  );
}

export default Button;
