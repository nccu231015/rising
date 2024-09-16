"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./individual.module.css";
import exampleimg from "../../../src/risingphoto.PNG";
import "./global.css";
import Video from "@/component/Video";
import VideowithResearch from "@/component/VideowithResearch";
import PictureParagraph from "@/component/PictureParagraph";
import ParagraphPicture from "@/component/ParagraphPicture";
import VerticleParagraphPicture from "@/component/VerticleParagraphPicture";
import VerticlePictureParagraph from "@/component/VerticlePictureParagraph,";

export default function Projectindividual() {
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
    <html style={{ overflowY: "scroll" }}>

    {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"/>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"/> */}
      <body>
        <div className={styles.screen}>
          <section className="styles.section">
            <Image
              className={styles.coverimage}
              src={exampleimg}
              width={0}
              height={0}
            ></Image>
            <div className={styles.menuicon} onMouseDown={menuon}>
              ...
            </div>
            <div className={styles.title}>design by Rising Lai</div>
            <div className={styles.menu}>
              <div className={styles.projectsMenu}>P</div>
              <div className={styles.ContactMenu}>C</div>
            </div>
            <div className={styles.projectsinfo}>
              <div className={styles.project}>BRICK</div>
              <div className={styles.slogan}>
                throwback to the presentation during DDW23
              </div>
            </div>
            <div className={styles.year}>
              <div className={styles.yearname}>2023</div>
              <div className={styles.yearline}></div>
            </div>
          </section>
          <section>
           <Video></Video>
           <VideowithResearch></VideowithResearch>
           <PictureParagraph></PictureParagraph>
           <ParagraphPicture></ParagraphPicture>
           <VerticleParagraphPicture></VerticleParagraphPicture>
           <VerticlePictureParagraph></VerticlePictureParagraph>
          </section>

        </div>
      </body>
    </html>
  );
}
