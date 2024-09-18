"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Heading from "./component/Heading";
import Video from "./component/Video";
import ParagraphPicture from "./component/ParagraphPicture";
import PictureParagraph from "./component/PictureParagraph";
import VerticleParagraphPicture from "./component/VerticleParagraphPicture";
import VerticlePictureParagraph from "./component/VerticlePictureParagraph,";
import VideowithResearch from "./component/VideowithResearch";
import photo from "../src/risingphoto.PNG"
import Images from "./component/Image";
import ImagesWithResearch from "./component/ImagewithResearch";
import Gallary from "./component/gallary";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue: photo,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "PROJECTS",
    },
    {
      name: "shortdescription",
      type: "string",
      defaultValue: "provide some short description",
    },
    { name: "year", type: "year", defaultValue: "2024" },
  ],
});

Builder.registerComponent(Gallary,{
  name: "Gallary",
  inputs:[
    {
      name:"imageList",
      type:"list",
      defaultValue:[
        {
          image:'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
        }
      ],
      subFields:[
        {
          name:'image',
          type:'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:  'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name:'description',
          type:'text',
          
        },
      ]

    }
  ]
})


Builder.registerComponent(Images,{
  name: "純圖介紹",
  inputs:[
    {
      name: "link",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue: photo,
    },
    {
      name:"description",
      type:"richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    }
  ]
})


Builder.registerComponent(ImagesWithResearch,{
  name: "純圖介紹加研究",
  inputs:[
    {
      name: "link",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue: photo,
    },
    {
      name:"description",
      type:"richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    },
    {
      name:"researchlink",
      type:"text",
    }
  ]
})



Builder.registerComponent(Video,{
  name: "影片介紹",
  inputs:[
    {
      name:"link",
      type: "text",

    },
    {
      name:"description",
      type:"richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    }
  ]
})

Builder.registerComponent(VideowithResearch,{
  name: "影片介紹＋論文",
  inputs:[
    {
      name:"link",
      type: "string",

    },
    {
      name:"description",
      type:"richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    },
    {
      name:"researchlink",
      type:"text",
    }
  ]
})

Builder.registerComponent(ParagraphPicture,{
  name: "左文右圖",
  inputs:[
    {
      name: "title",
      type: "string"
    },
    {
      name: "Description",
      type: "richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue: photo,
    },
    {
      name: "imagedescription",
      type: "longText",
      defaultValue: ""
    }
  ]
})


Builder.registerComponent(PictureParagraph,{
  name: "右文左圖",
  inputs:[
    {
      name: "title",
      type: "string"
    },
    {
      name: "Description",
      type: "richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    },
    {
      name: "imagedescription",
      type: "longText",
      defaultValue: ""
    }
  ]
})


Builder.registerComponent(VerticleParagraphPicture,{
  name: "左文又圖（直圖）",
  inputs:[
    {
      name: "title",
      type: "string"
    },
    {
      name: "Description",
      type: "richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    }, {
      name: "imagedescription",
      type: "longText",
      defaultValue: ""
    }
  ]
})

Builder.registerComponent(VerticlePictureParagraph,{
  name: "右文左圖（直圖）",
  inputs:[
    {
      name: "title",
      type: "string"
    },
    {
      name: "Description",
      type: "richText",
      defaultValue: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally ."
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    }, {
      name: "imagedescription",
      type: "longText",
      defaultValue: ""
    }
  ]
})


Builder.registerComponent(Counter, {
  name: "Counter",
});
