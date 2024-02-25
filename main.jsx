import React from "react";
import { createRoot } from 'react-dom/client';
import GameApp from "./src/body/game/game";

const rootElement = document.getElementById('app');
const root  = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GameApp />
  </React.StrictMode>
);
