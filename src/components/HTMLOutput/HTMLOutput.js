import React, { Fragment, useRef, useState } from "react";

const HTMLOutput = ({ innerText }) => {
  const codeAreaRef = useRef(null);
  const textAreaRef = useRef(null);

  // const tab = <span>&emsp;</span>;

  const [codeCopied, setCodeCopied] = useState(false);

  function copyToClipboard(e) {
    const codeText = codeAreaRef.current.innerText;
    textAreaRef.current.value = codeText;

    textAreaRef.current.className += " active";

    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    textAreaRef.current.classList.remove("active");

    setCodeCopied(true);

    setTimeout(() => {
      setCodeCopied(false);
    }, 5000);
  }

  return (
    <Fragment>
      <h3>
        HTML output:
        <div className="code-copy">
          {codeCopied ? (
            <p className="code-copy-success">Code Copied</p>
          ) : (
            <img
              className="code-copy-img"
              src="images/copy.png"
              title="Copy to clipboard"
              alt="copy"
              onClick={copyToClipboard}
            />
          )}
        </div>
      </h3>
      <code className="html-output" ref={codeAreaRef}>
        &lt;<span className="red">div</span>{" "}
        <span className="green">class</span>=
        <span className="orange">"my-button"</span>&gt;
        <span className="gap">{innerText}</span>
        &lt;<span className="red">/div</span>&gt;
      </code>
      <textarea ref={textAreaRef} defaultValue="Some text to copys" />
    </Fragment>
  );
};

export default HTMLOutput;
