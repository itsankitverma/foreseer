import React from "react";

export default function Hlinks(props) {
  return (
    <div>
      <p
        style={{ fontFamily: "Roboto", fontSize: "1rem" }}
        className="cursor-pointer mb-3"
      >
        {props.name}
      </p>
    </div>
  );
}
