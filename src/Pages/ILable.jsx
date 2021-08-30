import React from "react";

export default function ILable(props) {
  return (
    <label for={props.name} className="leading-7 text-sm text-gray-400">
      {props.NAME}
    </label>
  );
}
