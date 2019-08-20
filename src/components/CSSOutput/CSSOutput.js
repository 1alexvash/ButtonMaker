import React, { Fragment, useRef, useState } from "react";

const CSSOutput = ({ button }) => {
  const codeAreaRef = useRef(null);
  const textAreaRef = useRef(null);

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
        CSS output:
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
      <code className="css-output" ref={codeAreaRef}>
        .<span className="span green">my-button</span>{" "}
        <span className="red">&#123;</span>
        <span className="prop">
          {" "}
          <span className="orange">font-family</span>: {button.fontFamily};
        </span>
        <span className="prop">
          <span className="orange">font-size</span>: {button.fontSize}px;
        </span>
        {button.textBold === true ? (
          <Fragment>
            <span className="prop">
              {" "}
              <span className="orange">font-weight</span>: bold;
            </span>
          </Fragment>
        ) : (
          ""
        )}
        {button.textItalic === true ? (
          <Fragment>
            <span className="prop">
              <span className="orange">font-style</span>: italic;
            </span>
          </Fragment>
        ) : (
          ""
        )}
        <span className="prop">
          <span className="orange">color</span>: {button.textColor};
        </span>
        {button.hasTextShadow === true ? (
          <Fragment>
            <span className="prop">
              <span className="orange">text-shadow</span>: {button.textShadowX}
              px {button.textShadowY}px {button.textShadowBlur}px{" "}
              {button.textShadowColor};
            </span>
          </Fragment>
        ) : (
          ""
        )}
        <span className="prop">
          <span className="orange">padding</span>: {button.paddingTop}px{" "}
          {button.paddingRight}px {button.paddingBottom}px {button.paddingLeft}
          px;
        </span>
        {button.borderWidth > 0 ? (
          <Fragment>
            <span className="prop">
              <span className="orange">border</span>: {button.borderWidth}px{" "}
              {button.borderStyle} {button.borderColor};
            </span>
          </Fragment>
        ) : (
          ""
        )}
        <span className="prop">
          <span className="orange">border-radius</span>:{" "}
          {button.borderRadiusTopLeft}px {button.borderRadiusTopRight}px{" "}
          {button.borderRadiusBottomRight}px {button.borderRadiusBottomLeft}px;
        </span>
        {button.hasBoxShadow === true ? (
          <Fragment>
            <span className="prop">
              <span className="orange">box-shadow</span>: {button.boxShadowX}px{" "}
              {button.boxShadowY}px {button.boxShadowBlur}px{" "}
              {button.boxShadowSize}px {button.boxShadowColor};
            </span>
          </Fragment>
        ) : (
          ""
        )}
        <span className="prop">
          <span className="orange">background</span>: {button.background};
        </span>
        {button.hasGradient === true ? (
          <Fragment>
            <span className="prop">
              <span className="orange">background-image</span>:{" "}
              {button.gradientType}({button.gradientFrom}, {button.gradientTo});
            </span>
          </Fragment>
        ) : (
          ""
        )}
        <span className="red">&#125;</span>
      </code>
      <textarea ref={textAreaRef} defaultValue="Some text to copys" />
    </Fragment>
  );
};

export default CSSOutput;
