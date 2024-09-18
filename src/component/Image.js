"use client"
import style from "./style.module.css";
import Image from "next/image"

export default function Images(props){
    return(
        <div className={style.video}>
        <div className={style.imageframe}>
            <Image 
            src={props.link}  
            quality={100}
                fill
                objectFit="cover"></Image>
        </div>
            <div className={style.paragraph}>{props.description}</div>
        </div>
    )
}