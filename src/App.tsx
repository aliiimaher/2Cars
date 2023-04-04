import Button from "./components/Button";
import "./App.scss";

import myImage from "./assets/react.svg";
import MenuPage from "./components/MenuPage";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <hr></hr>
      <div style={{ display: "flex", justifyContent: "center", borderSpacing: "20rem" }}>
        <Button icon="react.svg" onClick={() => console.log("I'm here")}></Button>
        <Button icon={myImage} onClick={() => console.log("I'm here")}></Button>
        <Button icon={myImage} onClick={() => console.log("I'm here")}></Button>
      </div>
      <hr></hr>
      <MenuPage />
    </>
  );
}
