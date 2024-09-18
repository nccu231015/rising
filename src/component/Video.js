"use client"
import style from "./style.module.css";
export default function Video(props){
    return(
        <div className={style.video}>
            <iframe width="0" height="0" className={style.videoframe} src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className={style.paragraph}>{props.description}</div>
        </div>
    )
}