"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./individual.module.css";
import exampleimg from "../../../src/risingphoto.PNG";
import "./global.css";

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
            <div className={styles.video}></div>
          </section>
        </div>
      </body>
    </html>
  );
}
