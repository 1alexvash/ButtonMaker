import React, { Fragment } from "react";

const CSSOutput = () => (
  <Fragment>
    <h3>CSS output:</h3>
    <code className="css-output">
      .<span className="span green">my-button</span>{" "}
      <span className="red">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;...
      <div className="br" />
      <span className="red">&#125;</span>
      <img
        className="code-copy"
        src="/images/copy.png"
        title="Copy to clipboard"
        alt="copy"
      />
    </code>
  </Fragment>
);

export default CSSOutput;
