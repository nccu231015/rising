"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import RSPhoto from "../risingphoto.JPG";
import { useRef, useState, useEffect, Suspense } from "react";
import LoadingScreen from "@/component/Loading";
import { useRouter } from "next/navigation";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import Link from "next/link";
import { builder } from "@builder.io/sdk";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

builder.init('7a596d2f1f274a12883ae46ef1b455cd')

export default function Home() {
  const [basicinfo,setbasicinfo] = useState({
    image: RSPhoto,
    phone:"12345",
    email:"1234",
    iglink:"https://instagram.com",
    linkedinlink: "https://instagram.com",
    mediumlink: "https://instagram.com",
  })

  const router = useRouter();
  const lightref = useRef(null);
  const [angle, setAngle] = useState(-30);
  const [loading, setLoading] = useState(true);

  // Mouse angle detection function
  const angledetection = (event) => {
    const mouse_x = event.clientX;
    const mouse_y = event.clientY;
    let angle = Math.atan2(mouse_y, mouse_x);
    let angleInDegrees = angle * (180 / Math.PI) - 90;
    setAngle(angleInDegrees);
  };

  const menuon = () => {
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

  useEffect(()=>{
    builder.get('basic-information').promise().then(({ data }) => {
      setbasicinfo({
        image:data.homepagepic,
        phone:data.phonenumber,
        email:data.email,
        iglink:data.instagramlink,
        linkedinlink: data.linkedinlink,
        mediumlink: data.mediumlink
      })
    })

  },[])


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
      <div className={styles.photo}>
      <Image
      style={{borderRadius:"16px"}}
        id="image"
        src={basicinfo.image}
        quality={100}
        fill
        objectFit="cover"
      ></Image>
      </div>
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
      <div className={styles.slogan} id="slogan">
        DIGS STORY <br></br> BEHIND <br></br> THE OBJECT
        <div className={styles.cvbutton} onClick={()=>{
          router.push('/cv')
        }}><FaRegArrowAltCircleDown /><p style={{ marginLeft: "0.25rem"}}>GET MY CV</p></div>
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
              <Link className={styles.logo} href={basicinfo.iglink} target="_blank">
                <BsInstagram ></BsInstagram>
              </Link>
              <Link className={styles.logo} href={basicinfo.linkedinlink} target="_blank">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className={styles.logo} href={basicinfo.mediumlink} target="_blank">
                <FaMedium></FaMedium>
              </Link>
            </div>
      </div>


      <div className={`${styles.phonecontactmenu}`} id="phonecontactmenu">
        <div className={styles.detectionarea} onMouseDown={menuoff}>
          <div className={styles.circle}></div>
          <div className={styles.back} onMouseDown={menuoff}></div>
        </div>
        <div className={`${styles.element} ${styles.elementphone}`}>Email: <br/> {basicinfo.email}</div>
        <div className={`${styles.element} ${styles.elementphone}`}>Call: <br/> {basicinfo.phone}</div>
        
        <div className={`${styles.contactitems} ${styles.elementphone}`}>
              <Link className={styles.logo} href={basicinfo.iglink} target="_blank">
                <BsInstagram ></BsInstagram>
              </Link>
              <Link className={styles.logo} href={basicinfo.linkedinlink} target="_blank">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className={styles.logo} href={basicinfo.mediumlink} target="_blank">
                <FaMedium></FaMedium>
              </Link>
            </div>

            <div className={styles.sayhi}>
              SAY<br/>HI
            </div>
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
            <div className={styles.element}>Email: <br/> {basicinfo.email}</div>
            <div className={styles.element}>Call: <br/> {basicinfo.phone}</div>
            <div className={`${styles.element} ${styles.logocontainer}`}>
              <Link className={styles.logo} href={basicinfo.iglink} target="_blank">
                <BsInstagram ></BsInstagram>
              </Link>
              <Link className={styles.logo} href={basicinfo.linkedinlink} target="_blank">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className={styles.logo} href={basicinfo.mediumlink} target="_blank">
                <FaMedium></FaMedium>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ShaderGradientCanvas
        importedfiber={{ ...fiber, ...drei, ...reactSpring }}
        enableZoom={false}
        style={{
          position: "absolute",
          top: 0,
          zIndex: -1,
          animation: "on 5s easeIn",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=16&color1=%23006979&color2=%23ff810a&color3=%230c0200&destination=onCanvas&embedMode=on&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=2.2&uDensity=0.5&uFrequency=5.5&uSpeed=0.4&uStrength=0.3&uTime=0&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas>

    </div>
    
  );
}
