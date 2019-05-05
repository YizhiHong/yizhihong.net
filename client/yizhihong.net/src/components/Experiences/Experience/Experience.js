import React from "react";
import Classes from "./Experience.css";
import { withTimeParser, withDetailsParser } from "../../../hoc/utils";

import { createSkeletonElement } from "@trainline/react-skeletor";
import { createSkeletonProvider } from "@trainline/react-skeletor";

const dummyData = {
  user: {
    firstName: "_____",
    lastName: "________"
  }
};
const H4 = createSkeletonElement("h4");
const P = createSkeletonElement("p");

const Info = ({ el }) => (
  <div>
    <div className={Classes.title}>
      <H4 className={Classes.name}>{el.name}</H4>
      <H4 className={Classes.date}>
        {withTimeParser(el.startDate)} - {withTimeParser(el.endDate)}
      </H4>
    </div>
    <P>{el.title}</P>
  </div>
);

const experience = ({ data }) => {
  let el = data;
  withDetailsParser(el.details);
  return (
    <div className={Classes.block}>
      <Info el={el} />
    </div>
  );
};

export default createSkeletonProvider(
  dummyData,
  // Predicate that returns true if component is in a loading state
  ({ data }) => data === undefined
)(experience);
