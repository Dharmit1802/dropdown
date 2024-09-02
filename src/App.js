import { useState } from "react";
import "./App.css";
import { tree } from "./data.js";

function App() {
  const togglechildren = (e) => {
    e.stopPropagation();
    

    let children = e.target.closest('li').querySelector('ul');
    let arrow = e.target.closest('li').querySelector('img');
    if (!children) return;

    if (children.style.display === "none" || children.style.display === "") {
      children.style.display = "block";
      arrow.classList.add("rotate-down"); // Add class to rotate down
    } else {
      children.style.display = "none";
      
      arrow.classList.remove("rotate-down"); // Remove class to rotate up
    }
  };
  

  const nested = (data, index) => {
    return (
      <ul className={`pl-4 submenu w-full bg-slate-400 border-2 border-red-800 mt-1 p-2`}>
        {data.map((data, index) => {
          return (
            <li key={index} className="m-2" onClick={togglechildren}>
                <span className="flex flex-row gap-2">
                  {data.id} {data.content}
                  {data.children && <img
                    className="arrow-icon"
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/chevron-up.png"
                    alt="chevron-up"
                  />}
                </span>
                {data.children && nested(data.children)}
              </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="flex justify-center w-full text-lg">
      <ul className="w-2/3 bg-slate-400 border-2 border-red-800 p-3">
        {tree.map((data, index) => {
          return (
            <div key={index}>
              <li className="m-2" onClick={togglechildren}>
                <span className="flex flex-row gap-2">
                  {data.id} {data.content}

                  {data.children && <img
                    className="arrow-icon"
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/chevron-up.png"
                    alt="chevron-up"
                  />}
                </span>
                {data.children && nested(data.children)}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
