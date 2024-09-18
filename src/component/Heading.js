"use client"

import styles from "../app/[...page]/individual.module.css"
import exampleimg from "../../src/risingphoto.PNG"
import Image from "next/image"
import "../app/[...page]/global.css"

export default function Heading(props){
    return(
      <>
        <div className={styles.glassoverlay}>
          <Image
            className={styles.coverimage}
            src={props.image}
            alt="Blurred Cover Image"
            fill
            objectFit="cover"
            quality={100}
          />
        </div>
      <div className={styles.projectsinfo}>
        <div className={styles.project}>{props.title}</div>
        <div className={styles.slogan}>
          {props.shortdescription}
        </div>
      </div>
      <div className={styles.year}>
        <div className={styles.yearname}>{props.year}</div>
        <div className={styles.yearline}></div>
      </div>
</>
    )
}