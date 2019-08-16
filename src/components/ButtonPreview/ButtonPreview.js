import React from "react";

const ButtonPreview = ({ button }) => (
  <button
    style={{
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
      backgroundColor: `${button.background}`
    }}
    className="my-button"
  >
    {button.text}
  </button>
);

export default ButtonPreview;
