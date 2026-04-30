import { Children, Fragment } from "react";
import SectionConnector from "./SectionConnector";

export default function SectionStack({ children, connectors = [] }) {
  const items = Children.toArray(children);

  return (
    <>
      {items.map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < items.length - 1 ? (
            <SectionConnector {...(connectors[index] || {})} />
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
