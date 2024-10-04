import style from "./style.module.css"

export default function PureTitle(props){
    return(
        <div className={style.puretextwrapper}>
            {props.title?<div className={style.puretitlepuretext}>{props.title}</div>:<></>}
            
        </div>
    )
}