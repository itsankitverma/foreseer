import React from "react";

export default function ITextBox(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  );
}
