import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function makeFauxLink(url: string): HTMLAnchorElement {
  const element = document.createElement("a");
  element.setAttribute("href", url);
  element.setAttribute("target", "_blank");
  element.style.display = "none";
  document.body.appendChild(element);
  return element;
}

function activateFauxLink(link: HTMLAnchorElement): void {
  link.dispatchEvent(new MouseEvent("click"));
  document.body.removeChild(link);
}

function clickUrl(url: string) {
  const element = makeFauxLink(url);
  setTimeout(() => {
    activateFauxLink(element);
  }, 1);
}

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("link");
    if (!query) {
      return;
    }

    params.set("link", "");

    clickUrl(decodeURIComponent(query));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
