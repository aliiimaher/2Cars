import { useEffect, useState } from "react";
import "../styles/components/Object.scss";

interface Props {
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  shape: "circle" | "square" | "triangle";
}

function Object({ onClick, size = "small", shape }: Props) {
  const [objectSize, setObjectSize] = useState("small");
  const [objectShape, setObjectShape] = useState("shape-circle");

  useEffect(() => {
    generateObjectSize();
    generateObjectShape();
  }, []);

  const generateObjectSize = () => {
    if (size === "small") {
      setObjectSize("size-small");
    } else if (size === "medium") {
      setObjectSize("size-medium");
    } else {
      setObjectSize("size-large");
    }
  };

  const generateObjectShape = () => {
    if (shape === "circle") {
      setObjectShape("shape-circle");
    } else if (shape === "square") {
      setObjectShape("shape-square");
    } else {
      setObjectShape("shape-triangle");
    }
  };

  return (
    <>
      <div className={objectSize + " " + objectShape} onClick={onClick}></div>
    </>
  );
}

export default Object;
