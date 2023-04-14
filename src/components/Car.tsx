import { useEffect, useState } from "react";
import "../styles/components/Car.scss";

interface Props {
  size?: "small" | "medium" | "large";
  color: "blue" | "red" | "green" | "yellow";
}

function Car({ size = "small", color }: Props) {
  const [carColor, setCarColor] = useState("car-top-view-blue.svg");
  const [carSize, setCarSize] = useState("car-small");

  useEffect(() => {
    generateCarSize();
    generateCarColor();
  }, []);

  const generateCarSize = () => {
    if (size === "medium") {
      setCarSize("car-medium");
    } else if (size === "large") {
      setCarSize("car-large");
    } else {
      setCarSize("car-small");
    }
  };

  const generateCarColor = () => {
    if (color === "yellow") {
      setCarColor("car-top-view-yellow.svg");
    } else if (color === "red") {
      setCarColor("car-top-view-red.svg");
    } else if (color === "green") {
      setCarColor("car-top-view-green.svg");
    } else {
      setCarColor("car-top-view-blue.svg");
    }
  };

  return (
    <>
      <div className={carSize}>
        <img src={carColor} alt="car-pic"></img>
      </div>
    </>
  );
}

export default Car;
