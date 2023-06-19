import React from "react";
import { createRoot } from "react-dom/client";

interface Props {
  name?: string;
}

const App: React.FC<Props> = ({ name = "World" }) => {
  return <h1>Hello, {name}!</h1>;
};

const root = document.createElement("div");
const body = document.body;

createRoot(root).render(<App />);

body.appendChild(root);
