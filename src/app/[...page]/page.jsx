// pages/project/[...page].js or wherever your page component is
import React from "react";
import { builder } from "@builder.io/sdk";
import ClientSidePage from "./clientsidepage";
import { RenderBuilderContent } from "@/components/builder";
import "./global.css";


builder.init("7a596d2f1f274a12883ae46ef1b455cd");

export default async function Page(props) {

  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (props.params.page ? props.params.page.join("/") : ""),
      },
    })
    .toPromise();

    console.log("URL Path:", "/" + (props.params.page ? props.params.page.join("/") : ""));


  return (
    <html style={{ overflowY: "auto", padding: 0 }} >
      <body style={{ padding: 0 }}>
        <ClientSidePage content={content} model={builderModelName} />
        <RenderBuilderContent content={content} model={builderModelName} />
      </body>
    </html>
  );
}
