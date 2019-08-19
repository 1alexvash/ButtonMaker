import React, { Fragment } from "react";

const ButtonPreview = ({ button }) => (
  <Fragment>
    <h2>Button Preview:</h2>
    <div className="button-window">
      <button
        style={{
          fontFamily: button.fontFamily,
          fontSize: `${button.fontSize}px`,
          fontWeight: `${button.textBold ? "bold" : "normal"}`,
          fontStyle: `${button.textItalic ? "italic" : "normal"}`,
          color: `${button.textColor}`,
          paddingLeft: `${button.paddingLeft}px`,
          paddingRight: `${button.paddingRight}px`,
          paddingTop: `${button.paddingTop}px`,
          paddingBottom: `${button.paddingBottom}px`,
          borderWidth: `${button.borderWidth}px`,
          borderStyle: `${button.borderStyle}`,
          borderColor: `${button.borderColor}`,
          borderTopLeftRadius: `${button.borderRadiusTopLeft}px`,
          borderTopRightRadius: `${button.borderRadiusTopRight}px`,
          borderBottomLeftRadius: `${button.borderRadiusBottomLeft}px`,
          borderBottomRightRadius: `${button.borderRadiusBottomRight}px`,
          backgroundColor: `${button.background}`,
          textShadow: `${
            button.hasTextShadow
              ? `
                  ${button.textShadowX}px
                  ${button.textShadowY}px
                  ${button.textShadowBlur}px
                  ${button.textShadowColor}
                `
              : ""
          }`,
          boxShadow: `${
            button.hasBoxShadow
              ? `
                  ${button.boxShadowX}px
                  ${button.boxShadowY}px
                  ${button.boxShadowBlur}px
                  ${button.boxShadowSize}px
                  ${button.boxShadowColor}
                `
              : ""
          }`
        }}
        className="my-button"
      >
        {button.text}
      </button>
    </div>
  </Fragment>
);

export default ButtonPreview;
