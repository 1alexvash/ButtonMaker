import React, { Fragment } from "react";

const HTMLOutput = ({ innerText }) => (
  <Fragment>
    <h3>HTML output:</h3>
    <code className="html-output">
      &lt;<span className="red">div</span> <span className="green">class</span>=
      <span className="orange">"my-button"</span>&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;{innerText}
      <br />
      &lt;<span className="red">/div</span>&gt;
      <img
        className="code-copy"
        src="/images/copy.png"
        title="Copy to clipboard"
        alt="copy"
      />
    </code>
  </Fragment>
);

export default HTMLOutput;
