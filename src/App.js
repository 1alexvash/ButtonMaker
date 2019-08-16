import React, { useState } from "react";
import "./scss/main.css";

import ButtonPreview from "./components/ButtonPreview/ButtonPreview";

const App = () => {
  const [button, updateButton] = useState({
    text: "Click Me",
    fontSize: 20,
    textBold: false,
    textItalic: false,
    textColor: "#FFFFFF",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#000000",
    borderRadiusTopLeft: 8,
    borderRadiusTopRight: 8,
    borderRadiusBottomLeft: 8,
    borderRadiusBottomRight: 8,
    background: "deepskyblue"
  });

  function updateText(e) {
    updateButton({ ...button, text: e.target.value });
  }

  function updateFontSize(e) {
    updateButton({ ...button, fontSize: e.target.value });
  }

  function toggleBoldness(e) {
    updateButton({ ...button, textBold: e.target.checked });
  }

  function toggleItalicness(e) {
    updateButton({ ...button, textItalic: e.target.checked });
  }

  function updateTextColor(e) {
    updateButton({ ...button, textColor: e.target.value });
  }

  function updatePadding(e, side) {
    if (side === "left") {
      updateButton({ ...button, paddingLeft: e.target.value });
    }
    if (side === "right") {
      updateButton({ ...button, paddingRight: e.target.value });
    }
    if (side === "top") {
      updateButton({ ...button, paddingTop: e.target.value });
    }
    if (side === "bottom") {
      updateButton({ ...button, paddingBottom: e.target.value });
    }
  }

  function updateBorderWidth(e) {
    updateButton({ ...button, borderWidth: e.target.value });
  }

  function updateBorderStyle(e) {
    updateButton({ ...button, borderStyle: e.target.value });
  }

  function updateBorderColor(e) {
    updateButton({ ...button, borderColor: e.target.value });
  }

  function updateBorderRadius(e, side) {
    if (side === "topLeft") {
      updateButton({ ...button, borderRadiusTopLeft: e.target.value });
    }
    if (side === "topRight") {
      updateButton({ ...button, borderRadiusTopRight: e.target.value });
    }
    if (side === "bottomLeft") {
      updateButton({ ...button, borderRadiusBottomLeft: e.target.value });
    }
    if (side === "bottomRight") {
      updateButton({ ...button, borderRadiusBottomRight: e.target.value });
    }
  }

  function updateBackgroundColor(e) {
    updateButton({ ...button, background: e.target.value });
  }

  return (
    <div className="App">
      <div className="settings">
        <section className="text">
          <div className="section-name">Text:</div>
          <div className="input-group text-inner">
            <label htmlFor="text">Button Text:</label>
            <input
              id="text"
              onChange={e => updateText(e)}
              defaultValue={button.text}
              type="text"
              placeholder="Button Text"
            />
          </div>
          <div className="input-group text-size">
            <label htmlFor="textSize">Font Size:</label>
            <input
              id="textSize"
              onChange={e => updateFontSize(e)}
              defaultValue={button.fontSize}
              type="number"
              placeholder="Text Size"
              min="10"
              max="100"
            />
          </div>
          <div className="input-group text-style">
            <label htmlFor="textBold">Bold:</label>
            <input
              id="textBold"
              onChange={e => toggleBoldness(e)}
              value={button.textBold}
              checked={button.textBold}
              type="checkbox"
            />
            <label htmlFor="textBold">Italic:</label>
            <input
              id="textBold"
              onChange={e => toggleItalicness(e)}
              value={button.textItalic}
              checked={button.textItalic}
              type="checkbox"
            />
          </div>
          <div className="input-group text-color">
            <label htmlFor="textColor">Text Color:</label>
            <input
              id="textColor"
              onChange={e => updateTextColor(e)}
              defaultValue={button.textColor}
              type="color"
            />
          </div>
        </section>
        <section className="padding">
          <div className="section-name">Padding:</div>
          <div className="input-group">
            <label htmlFor="paddingLeft">Left Padding:</label>
            <input
              id="paddingLeft"
              onChange={e => updatePadding(e, "left")}
              value={button.paddingLeft}
              type="number"
              min="0"
              max="100"
            />
          </div>
          <div className="input-group">
            <label htmlFor="paddingRight">Right Padding:</label>
            <input
              id="paddingRight"
              onChange={e => updatePadding(e, "right")}
              value={button.paddingRight}
              type="number"
              min="0"
              max="100"
            />
          </div>
          <div className="input-group">
            <label htmlFor="paddingTop">Top Padding:</label>
            <input
              id="paddingTop"
              onChange={e => updatePadding(e, "top")}
              value={button.paddingTop}
              type="number"
              min="0"
              max="100"
            />
          </div>
          <div className="input-group">
            <label htmlFor="paddingBottom">Bottom Padding:</label>
            <input
              id="paddingBottom"
              onChange={e => updatePadding(e, "bottom")}
              value={button.paddingBottom}
              type="number"
              min="0"
              max="100"
            />
          </div>
        </section>
        <section className="border">
          <div className="section-name">Border:</div>
          <div className="input-group border-width">
            <label htmlFor="topLeft">Border Width:</label>
            <input
              id="topLeft"
              onChange={e => updateBorderWidth(e)}
              value={button.borderWidth}
              type="number"
              min="0"
              max="20"
            />
          </div>
          <div className="input-group border-style">
            <label htmlFor="borderStyle">Border Style:</label>
            <select id="borderStyle" onChange={e => updateBorderStyle(e)}>
              <option value="solid">Solid</option>
              <option value="dotted">Dotted</option>
              <option value="dashed">Dashed</option>
            </select>
          </div>
          <div className="input-group border-color">
            <label htmlFor="borderColor">Border Color:</label>
            <input
              id="borderColor"
              onChange={e => updateBorderColor(e)}
              defaultValue={button.borderColor}
              type="color"
            />
          </div>
          <div className="input-group">
            <label htmlFor="topLeft">Top Left Radius:</label>
            <input
              id="topLeft"
              onChange={e => updateBorderRadius(e, "topLeft")}
              value={button.borderRadiusTopLeft}
              type="number"
              min="0"
              max="100"
            />
          </div>
          <div className="input-group">
            <label htmlFor="topRight">Top Right Radius:</label>
            <input
              id="topRight"
              onChange={e => updateBorderRadius(e, "topRight")}
              value={button.borderRadiusTopRight}
              type="number"
              min="0"
              max="100"
            />
          </div>
          <div className="input-group">
            <label htmlFor="bottomLeft">Bottom Left Radius:</label>
            <input
              id="bottomLeft"
              onChange={e => updateBorderRadius(e, "bottomLeft")}
              value={button.borderRadiusBottomLeft}
              type="number"
              min="0"
              max="100"
            />
          </div>
          <div className="input-group">
            <label htmlFor="bottomRight">Bottom Right Radius:</label>
            <input
              id="bottomRight"
              onChange={e => updateBorderRadius(e, "bottomRight")}
              value={button.borderRadiusBottomRight}
              type="number"
              min="0"
              max="100"
            />
          </div>
        </section>
        <section class="background">
          <div className="section-name">Background</div>
          <div className="input-group button-background">
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
              id="backgroundColor"
              onChange={e => updateBackgroundColor(e)}
              defaultValue={button.background}
              type="color"
            />
          </div>
        </section>
        {/*
          <section>text-color</section>
          <section>box-shadow</section>
          section extra features
          <section>hover effect</section>
          <section>gradient</section>
        */}
      </div>
      <div className="button-preview">
        <ButtonPreview button={button} />
        {/* <blockquote>Code Output</blockquote>
        <p>HTML</p>
        <pre />
        <p>CSS</p>
        <pre /> */}
      </div>
    </div>
  );
};

export default App;
