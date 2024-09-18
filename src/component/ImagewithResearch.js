"use client"
import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image"

export default function ImagesWithResearch(props){
    return(
        <div className={style.video}>
        <div className={style.imageframe}>
            <Image 
            className={style.imagesss}
            src={props.link}  
            quality={100}
                fill
                objectFit="cover"></Image>
        </div>
            <div className={style.paragraph} dangerouslySetInnerHTML={{ __html: props.description }}></div>
            <Link className={style.button} href={props.researchlink||""}>RESEARCH</Link>
        </div>
    )
}