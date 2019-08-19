import React, { Fragment, useRef } from "react";

const HTMLOutput = ({ innerText }) => {
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
        HTML output:{" "}
        <img
          className="code-copy"
          src="/images/copy.png"
          title="Copy to clipboard"
          alt="copy"
          onClick={copyToClipboard}
        />
      </h3>
      <code className="html-output" ref={codeAreaRef}>
        &lt;<span className="red">div</span>{" "}
        <span className="green">class</span>=
        <span className="orange">"my-button"</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{innerText}
        <br />
        &lt;<span className="red">/div</span>&gt;
      </code>
      <textarea ref={textAreaRef} defaultValue="Some text to copys" />
    </Fragment>
  );
};

export default HTMLOutput;
