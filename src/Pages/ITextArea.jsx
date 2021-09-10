import React from "react";

export default function ITextArea(props) {
  return (
    <textarea
      id={props.id}
      name={props.message}
      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    ></textarea>
  );
}
