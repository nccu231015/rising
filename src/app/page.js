"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import RSPhoto from "../risingphoto.PNG";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const lightref = useRef(null);
  const [angle, setangle] = useState(-30);
  const angledetection = (event) => {
    const mouse_x = event.clientX;
    const mouse_y = event.clientY;
    const origin_x = 0;
    const origin_y = 0;
    let angle = Math.atan2(mouse_y - origin_y, mouse_x - origin_x);
    let angleInDegrees = angle * (180 / Math.PI) - 90;
    setangle(angleInDegrees);
  };

  const menuon = (event) => {
    const pmenu = document.getElementById("phonemenu");
    pmenu.style.transform = "translate(0%,0%)";
    setTimeout(() => {
      pmenu.style.borderRadius = 0;
    }, 300);
  };

  const menuoff = (event) => {
    const pmenu = document.getElementById("phonemenu");
    pmenu.style.transform = "translate(50%,-100%)";
    pmenu.style.borderRadius = "50%";
  };

  return (
    <div className={styles.main} id="main" onMouseMove={angledetection}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="BeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor="rgba(228,166,114,0.4)"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="rgba(228,166,114,0)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
      <svg
        ref={lightref}
        className={styles.beam_svg}
        viewBox="0 0 200 600"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <polygon points="100,0 -50,600 250,600" fill="url(#BeamGradient)" />
      </svg>
      <div className={styles.ball} id="ball"></div>
      <div className={styles.beamlight}></div>
      <div className={styles.menuicon} onMouseDown={menuon}>
        ...
      </div>
      <Image
        id="image"
        src={RSPhoto}
        width={0}
        height={0}
        className={styles.photo}
      ></Image>
      <div className={styles.title}>design by Rising Lai</div>
      <div className={styles.menu}>
        <div
          className={styles.projectsMenu}
          onClick={() => {
            const ball = document.getElementById("ball");
            ball.style.transform = "translate(-50%,-50%)";
            const main = document.getElementById("main");
            main.style.animation = "backgroundGradient 1s ease-in-out";
            main.style.background = "#C2C2C2";
            const slogan = document.getElementById("slogan");
            const image = document.getElementById("image");
            slogan.style.opacity = 0;
            image.style.opacity = 0;
            setTimeout(() => {
              router.push("/projects");
            }, 1000);
          }}
        >
          P
        </div>
        <div className={styles.ContactMenu}>C</div>
      </div>
      <div className={styles.slogan} id="slogan">
        DIGS STORY <br></br> BEHIND <br></br> THE OBJECT
      </div>
      <div className={styles.phonemenumain} id="phonemenu">
        <div className={styles.detectionarea} onMouseDown={menuoff}>
          <div className={styles.circle}></div>
          <div className={styles.back} onMouseDown={menuoff}></div>
        </div>
        <div className={styles.items}>HOME</div>
        <div className={styles.items}>PROJECTS</div>
        <div className={styles.items}>CONTACT</div>
      </div>

      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          zIndex: -1,
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=16&color1=%23006979&color2=%23ff810a&color3=%230c0200&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=2.2&uDensity=0.5&uFrequency=5.5&uSpeed=0.4&uStrength=0.3&uTime=0&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
