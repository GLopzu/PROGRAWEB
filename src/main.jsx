import React from "react";
import { createRoot } from 'react-dom/client';
import Navbar from "./components/Header/Navbar/navbar";
import Watchnow from "./components/Body/Watchnow/watchnow";
import Carousel from "./components/Body/Stream/stream";
import Trailer from "./components/Body/Trailer/trailer";
import Showcase from "./components/Body/Showcase/showcase";
import ComingSoon from "./components/Body/ComingSoon/comingSoon";
import TryIt from "./components/Footer/tryit/tryit";
import Info from "./components/Footer/info/info";

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Navbar />
    <Watchnow />
    <Carousel />
    <Trailer />
    <Showcase />
    <ComingSoon />
    <TryIt />
    <Info />
  </React.StrictMode>
);
