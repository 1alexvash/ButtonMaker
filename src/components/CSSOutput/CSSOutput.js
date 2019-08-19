import React, { Fragment, useRef } from "react";

const CSSOutput = () => {
  const codeAreaRef = useRef(null);
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    const codeText = codeAreaRef.current.innerText;
    textAreaRef.current.value = codeText;

    textAreaRef.current.className += " active";

    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    textAreaRef.current.classList.remove("active");
  }

  return (
    <Fragment>
      <h3>
        CSS output:{" "}
        <img
          className="code-copy"
          src="images/copy.png"
          title="Copy to clipboard"
          alt="copy"
          onClick={copyToClipboard}
        />
      </h3>
      <code className="css-output" ref={codeAreaRef}>
        .<span className="span green">my-button</span>{" "}
        <span className="red">&#123;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;...
        <div className="br" />
        <span className="red">&#125;</span>
      </code>
      <textarea ref={textAreaRef} defaultValue="Some text to copys" />
    </Fragment>
  );
};

export default CSSOutput;
