import React, {Fragment} from "react";
import classes from "./Intro.css";
import Skeleton from "react-loading-skeleton";
import TypeEffect from "../../UI/Effect/TypeEffect/TypeEffect";

const commentUP = "/**";
const commentClose = "*/";

const intro = ({ data, withEffect }) => {
  return (
    <pre className={classes.pre}>
      <code>
        {commentUP}
        {withEffect ? (
          data ? (
            <TypeEffect text={data} />
          ) : (
            <Skeleton count={1} />
          )
        ) : (
          <Fragment>
            <br />
            {data}
            <br />
          </Fragment>
        )}
        {commentClose}
      </code>
    </pre>
  );
};

export default intro;
