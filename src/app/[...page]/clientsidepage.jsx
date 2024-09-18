// components/ClientSidePage.js
"use client";

import React from 'react';
import { RenderBuilderContent } from '../../components/builder';
import styles from "./individual.module.css";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { builder } from "@builder.io/sdk";
import { useRouter } from "next/navigation";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import Link from "next/link";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const ClientSidePage = ({ content, builderModelName }) => {
  const router = useRouter();

  const menuon = (event) => {
    const pmenu = document.getElementById("phonemenu");
    pmenu.style.transform = "translate(0%,0%)";
    setTimeout(() => {
      pmenu.style.borderRadius = 0;
    }, 300);
  };

  const contactmenuon = () => {
    const pmenu = document.getElementById("phonecontactmenu");
    pmenu.style.transform = "translate(0%,0%)";
    setTimeout(() => {
      pmenu.style.borderRadius = 0;
    }, 300);
  };

  const menuoff = () => {
    const pmenu = document.getElementById("phonemenu");
    const pcmenu = document.getElementById("phonecontactmenu");
    pmenu.style.transform = "translate(50%,-100%)";
    pmenu.style.borderRadius = "50%";
    pcmenu.style.transform = "translate(50%,-100%)";
    pcmenu.style.borderRadius = "50%";
  };
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.main} id="main"></div>
        <section className={styles.section}>
          <ShaderGradientCanvas
            importedfiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
              position: "fixed",
              top: 0,
              zIndex: -1,
            }}
          >
            <ShaderGradient
              control="query"
              urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=3.5&cAzimuthAngle=240&cDistance=1.5&cPolarAngle=130&cameraZoom=16&color1=%23ffa16b&color2=%23ff6000&color3=%23ffefe0&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=2.4&positionX=0.5&positionY=0.5&positionZ=0.2&range=enabled&rangeEnd=37.5&rangeStart=25.5&reflection=0.5&rotationX=20&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=2.4&uDensity=0.2&uFrequency=5.5&uSpeed=0.1&uStrength=0.8&uTime=25.5&wireframe=false&zoomOut=false"
            />
          </ShaderGradientCanvas>
          <div className={styles.menuicon} onMouseDown={menuon}>
            <div>...</div>
          </div>
          <div className={styles.title} onClick={()=>{
             const main = document.getElementById("main");
             main.style.display="inline-block"
             main.classList.add(styles.backhome)
             setTimeout(()=>{
              main.style.opacity=1
              router.push('/')
             },1000)
          }}>design by Rising Lai</div>
          <div className={styles.ball} id="ball"></div>
          <div className={styles.menu}>
            <div className={styles.projectsMenu} onClick={()=>{
              const ball = document.getElementById("ball");
            ball.style.transform = "translate(-50%,-50%)";
            const main = document.getElementById("main");
            main.style.display= "inline-block";
            main.style.background = "#C2C2C2";
            main.classList.add(styles.backproject)
            
            setTimeout(()=>{
              router.push('/projects')
            },1000)
              
            }}>P</div>
            <div className={styles.ContactMenu} onClick={()=>{
           const contact = document.getElementById("contact");
           contact.style.display = "inline-block";
            contact.classList.add(styles.oncontact);
          setTimeout(()=>{
            contact.style.opacity = 1;
            contact.classList.remove(styles.oncontact);
          },1000)
        }}>C</div>
          </div>
          
          <div className={styles.contact} id="contact" onClick={()=>{
        const contact = document.getElementById("contact");
        contact.classList.add(styles.offcontact);
        setTimeout(()=>{
          contact.style.display= "none";
          contact.classList.remove(styles.offcontact);
        },1000)
      }}>
        <div className={styles.ballcontact} style={{transform:"translate(-50%,-50%)"}}>
          <div className={styles.info}>
            <div className={styles.element}>Email: <br/> rising@risinglai.com</div>
            <div className={styles.element}>Call: <br/> 86412469</div>
            <div className={`${styles.element} ${styles.logocontainer}`}>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <BsInstagram ></BsInstagram>
              </Link>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <FaMedium></FaMedium>
              </Link>
            </div>
          </div>
        </div>
      </div>
        
          <div className={styles.phonemenumain} id="phonemenu">
        <div className={styles.detectionarea} onMouseDown={menuoff}>
          <div className={styles.circle}></div>
          <div className={styles.back} onMouseDown={menuoff}></div>
        </div>
        <div className={styles.items} onClick={()=>{
          router.push('/')
        }}>HOME</div>
        <div className={styles.items} onClick={()=>{
          router.push('/projects')
        }}>PROJECTS</div>
        <div className={styles.items} onMouseDown={contactmenuon}>CONTACT</div>
        <div className={`${styles.items} ${styles.logocontainer}`}>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <BsInstagram ></BsInstagram>
              </Link>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <FaMedium></FaMedium>
              </Link>
            </div>
      </div>
        </section>
        <div className={`${styles.phonecontactmenu}`} id="phonecontactmenu">
        <div className={styles.detectionarea} onMouseDown={menuoff}>
          <div className={styles.circle}></div>
          <div className={styles.back} onMouseDown={menuoff}></div>
        </div>
        <div className={`${styles.element} ${styles.elementphone}`}>Email: <br/> rising@risinglai.com</div>
        <div className={`${styles.element} ${styles.elementphone}`}>Call: <br/> 86412469</div>
        
        <div className={`${styles.contactitems} ${styles.elementphone}`}>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <BsInstagram ></BsInstagram>
              </Link>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className={styles.logo} href="https://instagram.com" target="_blank">
                <FaMedium></FaMedium>
              </Link>
            </div>

            <div className={styles.sayhi}>
              SAY<br/>HI
            </div>
      </div>
      </div>
    </>
  );
};

export default ClientSidePage;
