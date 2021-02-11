import Head from "next/head";
import React from "react";

export interface CommonHeadProps {
}

export const CommonHead: React.FC<CommonHeadProps> = ({ }) => (
    <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
            <link rel="shortcut icon" href="/img/logo.png"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.5/css/uikit.min.css" integrity="sha512-ddXaHqFC1CtlGRMVc8TQOqZXdonfBQApH9quc+79OgLraayKoNBZA3DSm7nhI3V9tXmfJ2Bk84Xg0XyFEJZAhA==" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet"/>
        </Head>
    </>
);