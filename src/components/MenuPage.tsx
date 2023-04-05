import Button from "./Button";
import "../styles/components/MenuPage.scss";
import { useState } from "react";

function MenuPage() {
  const [soundSvg, setSoundSvg] = useState(true);
  const [musicSvg, setMusicSvg] = useState(true);
  return (
    <>
      <div className="menu-background">
        <h1 className="text-4xl font-bold title car">2CARS</h1>
        <Button
          icon="play-button.svg"
          size="w-48 h-48"
          onClick={() => console.log("Play Button")}
        ></Button>
        <div className="buttons-list">
          <Button
            icon="star-favorite.svg"
            onClick={() => console.log("Star Button")}
          ></Button>
          <Button
            icon={musicSvg == true ? "music-on.svg" : "music-off.svg"}
            onClick={() => {
              setMusicSvg(!musicSvg);
              console.log("Music Button");
            }}
          ></Button>
          <Button
            icon={soundSvg == true ? "sound-max.svg" : "sound-mute.svg"}
            onClick={() => {
              setSoundSvg(!soundSvg);
              console.log("Sound Button");
            }}
          ></Button>
        </div>
        <h5 className="text-xs italic title">© 2023 _ Gharaati-Maher</h5>
      </div>
    </>
  );
}

export default MenuPage;
