"use client"

import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function test(){
    return(
        <ShaderGradientCanvas
        importedfiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          zIndex: -1,
          background: "white",
        }}
      >
        <ShaderGradient
          control="query"
          animate="on"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=3.8&cAzimuthAngle=240&cDistance=15&cPolarAngle=130&cameraZoom=14.5&color1=%23ffd4cc&color2=%23ff6000&color3=%23ffefe0&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=1&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=100&positionX=0.2&positionY=0.3&positionZ=0.1&range=enabled&rangeEnd=37.5&rangeStart=25.5&reflection=0.1&rotationX=20&rotationY=50&rotationZ=140&shader=defaults&toggleAxis=true&type=sphere&uAmplitude=2.4&uDensity=0.8&uFrequency=0&uSpeed=0.1&uStrength=0.5&uTime=25.5&wireframe=false&zoomOut=false&noiseStrength=0.2"
        />
      </ShaderGradientCanvas>
    )
}