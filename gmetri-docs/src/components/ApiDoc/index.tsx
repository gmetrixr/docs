import React from "react";
// @ts-ignore
import useBaseUrl from "@docusaurus/useBaseUrl";
// @ts-ignore
import Redoc from "@theme/Redoc";

const Z5_API = "/openapi_z5api.json";
const SMS_API = "/openapi_sms.json";

function Z5ApiDoc() {
  return <Redoc specUrl={useBaseUrl(Z5_API)} />;
}

function SMSApiDoc(){
  return <Redoc specUrl={useBaseUrl(SMS_API)} />;
}


export { Z5ApiDoc, SMSApiDoc }