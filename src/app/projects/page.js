"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import exampleimg from "../../../src/risingphoto.PNG";
import { Port_Lligat_Sans } from "next/font/google";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function Projects() {
  const [items, setitems] = useState([
    ["Tester1", "2001", exampleimg],
    ["Tester2", "2001", exampleimg],
    ["Tester3", "2001", exampleimg],
    ["Tester4", "2001", exampleimg],
    ["Tester5", "2001", exampleimg],
    ["Tester6", "2001", exampleimg],
    ["Tester7", "2001", exampleimg],
  ]);
  const [scrollIndex, setscrollIndex] = useState(1);
  const [currentZ, setcurrentZ] = useState(9);

  const setTrans = () => {
    setTransition(true);
  };
  const addcurrrentZ = (currentZ) => {
    setcurrentZ(currentZ + 1);
  };

  const [Images, setImages] = useState(null);
  const [Transition, setTransition] = useState(false);

  const isScrolling = useRef(false);
  const scrollEvent = useRef(null);

  useEffect(() => {
    let imageprev, imagenext;

    if ((scrollIndex - 1 >= 0) & !Transition) {
      imageprev = document.getElementById(`image${scrollIndex - 1}`);
      if (imageprev.classList.contains(styles.photoanimationup)) {
        imageprev.classList.remove(styles.photoanimationup);
        imageprev.classList.add(styles.photoanimationdown);
        imageprev.style.opacity = 0;
        // setTimeout(() => {
        //   imageprev.style.opacity = 0;
        // }, 500);
      }
    }
    if ((scrollIndex + 1 < items.length) & !Transition) {
      imagenext = document.getElementById(`image${scrollIndex + 1}`);
      if (imagenext.classList.contains(styles.photoanimationup)) {
        imagenext.classList.remove(styles.photoanimationup);
        imagenext.classList.add(styles.photoanimationdown);
        imagenext.style.opacity = 0;
        // setTimeout(() => {
        //   imagenext.style.opacity = 0;
        // }, 500);
      }
    }
  }, [scrollIndex]);

  useEffect(() => {
    window.removeEventListener("wheel", handleScroll);
    clearTimeout(scrollEvent.current);
  }, [Transition]);
  //   const debounce = (func, delay) => {
  //     let timer;
  //     return (...args) => {
  //       if (timer) clearTimeout(timer);
  //       timer = setTimeout(() => {
  //         func(...args);
  //       }, delay);
  //     };
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
  //   };

  const handleScroll = (event) => {
    // console.log(isScrolling.current);
    if (Transition) {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(scrollEvent.current);

      return;
    }
    if (isScrolling.current) return;

    // console.log("hi");
    isScrolling.current = true;
    window.removeEventListener("wheel", handleScroll);
    clearTimeout(scrollEvent.current);
    addcurrrentZ();
    // if (event.deltaY == 1 || event.deltaY == -1) isScrolling.current = true;
    if ((event.deltaY > 0) & !Transition) {
      setscrollIndex((prevIndex) => Math.min(prevIndex + 1, items.length));
    } else {
      setscrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
    // const Imagenew = document.getElementById(`container${scrollIndex}`);
    // Imagenew.style.zIndex = currentZ;

    scrollEvent.current = setTimeout(() => {
      isScrolling.current = false;
      window.addEventListener("wheel", handleScroll);
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const deltaYMenu = -scrollIndex * 15;

  const mouseEnter = (i) => {
    if (i == scrollIndex) {
      let image = document.getElementById(`image${i}`);
      console.log(image);
      if (image) {
        image.style().opacity = 1;
      }
    }
  };

  return (
    <div className={styles.screen}>
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
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23fffcfc&bgColor2=%23fafff7&brightness=1.2&cAzimuthAngle=240&cDistance=4.4&cPolarAngle=130&cameraZoom=14.5&color1=%23ffd4cc&color2=%23ff6000&color3=%23ffefe0&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=2.1&positionX=0.5&positionY=0.3&positionZ=0.2&range=enabled&rangeEnd=37.5&rangeStart=25.5&reflection=0.1&rotationX=20&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=2.4&uDensity=0.8&uFrequency=0&uSpeed=0.1&uStrength=0.5&uTime=25.5&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className={styles.menuicon} onClick={menuon}>
        ...
      </div>
      <div className={styles.phonetitle}>PROJECTS</div>
      <div className={styles.phoneprojects}>
        <div className={styles.upgradient}></div>
        <div className={styles.downgradient}></div>

        <Image
          className={styles.imagephone}
          src={exampleimg}
          width={0}
          height={0}
        />
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

      <div className={styles.ball}></div>
      <div className={styles.lines}></div>
      <div className={styles.title}>design by Rising Lai</div>
      <div className={styles.menu}>
        <div className={styles.projectsMenu}>P</div>
        <div className={styles.ContactMenu}>C</div>
      </div>
      <div
        className={styles.sphere_menu}
        style={{ transform: `translateY(${deltaYMenu}%)` }}
      >
        {items.map((i, index) => {
          const angle = (index - scrollIndex) * 5;
          const position = -Math.abs((index - scrollIndex) * 50);
          return (
            <div
              id={`container${index}`}
              key={index}
              className={
                index == scrollIndex ? styles.active : styles.menu_items
              }
              style={{
                transform: `rotate(${angle}deg) translateX(${position}px)`,
                // zIndex: `${30 - index}`,
              }}
              onMouseEnter={(event) => {
                if (index == scrollIndex && !Transition) {
                  const images = document.getElementById(`image${index}`);
                  images.classList.remove(styles.photoanimationdown);
                  images.classList.add(styles.photoanimationup);
                  images.style.opacity = 1;
                  //   const timer = setTimeout(() => {
                  //     images.style.opacity = 1;
                  //   }, 500);
                }
              }}
              onMouseLeave={(event) => {
                if (index == scrollIndex && !Transition) {
                  const images = document.getElementById(`image${index}`);
                  images.classList.remove(styles.photoanimationup);
                  images.classList.add(styles.photoanimationdown);
                  images.style.opacity = 0;
                  //   setTimeout(() => {
                  //     images.style.opacity = 0;
                  //   }, 500);
                }
              }}
              onMouseMove={(event) => {
                // console.log("fire");
                if (index == scrollIndex && !Transition) {
                  const images = document.getElementById(`image${index}`);
                  const rect = document
                    .getElementById(`container${index}`)
                    .getBoundingClientRect();
                  console.log(rect.top);
                  // console.log(rect.)
                  images.style.transform = `translate(${
                    event.clientX - rect.left
                  }px, ${event.clientY - rect.top}px)`;
                }
              }}
              onClick={(event) => {
                if ((index == scrollIndex) & !Transition) {
                  const images = document.getElementById(`image${index}`);
                  const rect = document
                    .getElementById(`container${index}`)
                    .getBoundingClientRect();
                  images.style.removeProperty("transform");
                  images.style.transform = `translate(-${rect.left}px, -${rect.top}px)`;
                  images.style.transitionDuration = "2s";
                  images.style.position = "absolute";
                  images.style.width = "100vw";
                  images.style.height = "100vh";
                  setTransition(true);
                }
              }}
            >
              <Image
                id={`image${index}`}
                className={styles.image}
                src={i[2]}
                width="0"
                height="0"
              />
              <div style={{ position: "relative" }}>
                {i[0]} <span className={styles.year}> {i[1]} </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
