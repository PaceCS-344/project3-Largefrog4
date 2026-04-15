import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

export function Two(){
  return <div>
    <p>Contact me<br></br>
    <a href="mailto:bif@metafreed.net">Email</a><br></br>
    <a href="linkedin.com/in/ben-freed-415844330/">LinkedIn</a><br></br>
    <a href="https://github.com/Largefrog4">Github</a><br></br>
    </p>
  </div>
}
export function About(){
return <div>
  <p>About me</p>
</div>
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
const root2 = createRoot(document.getElementById("root2"));
root2.render(
  <StrictMode><Two /></StrictMode> );
  const root3 = createRoot(document.getElementById("root3"));
root3.render(
  <StrictMode><About /></StrictMode> );