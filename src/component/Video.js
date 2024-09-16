"use client"
import style from "./style.module.css";
export default function Video(){
    return(
        <div className={style.video}>
            <iframe width="0" height="0" className={style.videoframe} src="https://www.youtube.com/embed/mUVUmG9vOFw?si=RkTOG1ftABUcdHE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className={style.paragraph}>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally .</p>
        </div>
    )
}