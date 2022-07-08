/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { default as jsx, headersList } from "../mixins/dataToJSX.ts";

export default function Home() {
  return (
    <div>
      <head>
        <html data-theme="synthwave"></html>
        <title>Home</title>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.18.1/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div class={tw`drawer drawer-mobile`}>
        <input id="main-drawer" type="checkbox" class={tw`drawer-toggle`} />
        <div
          class={tw`drawer-content flex flex-row flex-wrap items-center justify-center max-w-screen-lg`}
        >
          <label
            for="main-drawer"
            id="menuLabel"
            class={tw`btn btn-circle drawer-button`}
          >
            <img src="/menu.svg" alt="menu" width="32" />
          </label>
          {jsx}
        </div>
        <div class={tw`drawer-side`}>
          <label for="main-drawer" class={tw`drawer-overlay`}></label>
          <ul
            class={tw`menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content`}
          >
            {headersList}
          </ul>
        </div>
      </div>
    </div>
  );
}
