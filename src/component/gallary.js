import style from "./style.module.css"

export default function Gallary(props){
    console.log(props.imageList)
    return(
        <div className={style.grid}>
        {props.imageList.map((img, index) => (
            <div key={index} className={`${style.place}`} id={`${img.image}-imageblock`}
            onMouseEnter={(event)=>{
            const description = document.getElementById(img.image)
            description.classList.add(style.oncontact)
            setTimeout(()=>{
                description.style.opacity = 1
                description.classList.remove(style.oncontact)
            },500)
           
            
      }}
      onMouseMove={(event)=>{
        const description = document.getElementById(img.image)
        const rect = document
                    .getElementById(`${img.image}-imageblock`)
                    .getBoundingClientRect();

        console.log(description)
        description.style.transform = `translate(${event.clientX - rect.left}px, ${event.clientY - rect.top}px)`
      }}
      onMouseLeave={(event)=>{
        const description = document.getElementById(img.image)
        description.classList.add(style.offcontact)
        setTimeout(()=>{
            description.style.opacity = 0
            description.classList.remove(style.offcontact)
        },500)
       
      }}
            
            >
          <div className={style.imggroup}>
            <img src={img.image} alt={"image is under processing"} />
            <div className={style.imagedescription} id={img.image}>{img.description}</div>
          </div>
        </div>
        ))}
      </div>
    )

}