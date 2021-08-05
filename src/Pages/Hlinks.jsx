import React from "react";

export default function Hlinks(props) {
  return (
    <div>
      <p
        style={{ fontFamily: "Roboto", fontSize: "1.5rem" }}
        id={props.id}
        className="cursor-pointer mb-3 font"
      >
        {props.name}
      </p>
    </div>
  );
}
