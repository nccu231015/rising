import style from "./style.module.css";
import Image from "next/image";

export default function ParagraphPicture(props) {
  return (
    <div className={style.paragraphimage}>
     <div className={style.imageContainerPhone} style={{height:"70vh"}}>
        <Image
          src={props.image}
          layout="fill"  // Fill the container
          quality={100}  // Maintain high quality
          objectFit="cover"  // Keep the aspect ratio and ensure no distortion
          className={`${style.images} ${style.imageright}`}
          alt="example image"
        />
    </div>
    <div id={`${props.builderBlock.id}-imageblock`} className={style.imageContainer} style={{marginRight:"4rem"}} 
      onMouseEnter={(event)=>{
            const description = document.getElementById(props.builderBlock.id)
            description.classList.add(style.oncontact)
            setTimeout(()=>{
                description.style.opacity = 1
                description.classList.remove(style.oncontact)
            },500)
           
            
      }}
      onMouseMove={(event)=>{
        const description = document.getElementById(props.builderBlock.id)
        const rect = document
                    .getElementById(`${props.builderBlock.id}-imageblock`)
                    .getBoundingClientRect();

        console.log(description)
        description.style.transform = `translate(${event.clientX - rect.left}px, ${event.clientY - rect.top}px)`
      }}
      onMouseLeave={(event)=>{
        const description = document.getElementById(props.builderBlock.id)
        description.classList.add(style.offcontact)
        setTimeout(()=>{
            description.style.opacity = 0
            description.classList.remove(style.offcontact)
        },500)
       
      }}
      >
        <Image
          src={props.image}
          layout="fill"  // Fill the container
          quality={100}  // Maintain high quality
          objectFit="cover"  // Keep the aspect ratio and ensure no distortion
          className={`${style.images} ${style.imageleft}`}
          alt="example image"
        />

<div className={style.imagedescription} id={props.builderBlock.id}> {props.imagedescription}</div>
      </div>
      <div className={style.paragraphtwocolumn}>
        <div className={style.title}>{props.title}</div>
        <div dangerouslySetInnerHTML={{ __html: props.Description }} ></div>
      </div>
     
    </div>
  );
}
