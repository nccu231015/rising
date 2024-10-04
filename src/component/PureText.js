import style from "./style.module.css"

export default function Puretext(props){
    return(
        <div className={style.puretextwrapper}>
            {props.title?<div className={style.titlepuretext}>{props.title}</div>:<></>}
            {props.texts?<div className={style.puretextparagraph} dangerouslySetInnerHTML={{ __html: props.texts }}></div>:<></>}
        </div>
    )
}