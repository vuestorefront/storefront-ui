import * as React from "react";

export interface ButtonProps {
  attributes?: any;
  text?: string;
  link?: string;
  openLinkInNewTab?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <>
      {props.link ? (
        <>
          <a
            {...props.attributes}
            role="button"
            href={props.link}
            target={props.openLinkInNewTab ? "_blank" : undefined}
          >
            {props.text}
          </a>
        </>
      ) : (
        <button {...props.attributes} className="text-white flex-1 mt-28">
          {props.text}
        </button>
      )}
    </>
  );
}
