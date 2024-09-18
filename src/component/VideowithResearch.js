
import style from "./style.module.css";
import Link from "next/link";
export default function VideowithResearch(props){
    return(
        <div className={style.video}>
            <iframe width="0" height="0" className={style.videoframe} src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className={style.paragraph} dangerouslySetInnerHTML={{ __html: props.description }}></p>
            <Link className={style.button} href={props.researchlink||""}>RESEARCH</Link>
    </div>
    )
}