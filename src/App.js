import React, { useState } from "react";
import "./scss/main.css";

import ButtonPreview from "./components/ButtonPreview/ButtonPreview";
import HTMLOutput from "./components/HTMLOutput/HTMLOutput";
import CSSOutput from "./components/CSSOutput/CSSOutput";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [tab, setTab] = useState("not set");
  const [button, updateButton] = useState({
    text: "Click Me",
    fontFamily: "Arial",
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
    borderColor: "#333333",
    borderRadiusTopLeft: 8,
    borderRadiusTopRight: 8,
    borderRadiusBottomLeft: 8,
    borderRadiusBottomRight: 8,
    background: "#00bfff",
    hasTextShadow: false,
    textShadowX: 0,
    textShadowY: 0,
    textShadowBlur: 0,
    textShadowColor: "#333333",
    hasBoxShadow: false,
    boxShadowX: 2,
    boxShadowY: 4,
    boxShadowBlur: 5,
    boxShadowSize: 1,
    boxShadowColor: "#333333",
    hasGradient: false,
    gradientType: "linear-gradient",
    gradientFrom: "#FF0000",
    gradientTo: "#FFFF00"
  });

  function buttonSetNewValue(value, prop) {
    updateButton({
      ...button,
      [prop]: value
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="input">
        <div className={`tab tab-text ${tab === "tab-text" ? "active" : ""}`}>
          <div className="tab-name" onClick={() => setTab("tab-text")}>
            Text:{" "}
            <img
              src="images/arrow-down.png"
              alt="arrow-down"
              className="arrow-down"
            />
          </div>
          <div className="tab-content">
            <div className="input-group text-inner">
              <label htmlFor="text">Button Text:</label>
              <input
                id="text"
                onChange={e => buttonSetNewValue(e.target.value, "text")}
                value={button.text}
                type="text"
                placeholder="Button Text"
              />
            </div>
            <div className="input-group text-family">
              <label htmlFor="borderStyle">Font Family:</label>
              <select
                id="borderStyle"
                onChange={e => buttonSetNewValue(e.target.value, "fontFamily")}
              >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Lucida Console">Lucida Console</option>
              </select>
            </div>
            <div className="input-group text-size">
              <label htmlFor="textSize">Font Size:</label>
              <input
                id="textSize"
                onChange={e => buttonSetNewValue(e.target.value, "fontSize")}
                value={button.fontSize}
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
                onChange={e => buttonSetNewValue(e.target.checked, "textBold")}
                checked={button.textBold}
                type="checkbox"
              />
              <label htmlFor="textBold">Italic:</label>
              <input
                id="textBold"
                onChange={e =>
                  buttonSetNewValue(e.target.checked, "textItalic")
                }
                checked={button.textItalic}
                type="checkbox"
              />
            </div>
            <div className="input-group text-color">
              <label htmlFor="textColor">Text Color:</label>
              <input
                id="textColor"
                onChange={e => buttonSetNewValue(e.target.value, "textColor")}
                value={button.textColor}
                type="color"
              />
            </div>
            <div className="input-group text-has-shadow">
              <label htmlFor="hasTextShadow">Add Text Shadow:</label>
              <input
                id="hasTextShadow"
                onChange={e =>
                  buttonSetNewValue(e.target.checked, "hasTextShadow")
                }
                checked={button.hasTextShadow}
                type="checkbox"
              />
            </div>
            {button.hasTextShadow ? (
              <div className="input-group text-shadow">
                <div>
                  <label htmlFor="textShadowX">X:</label>
                  <input
                    id="textShadowX"
                    onChange={e =>
                      buttonSetNewValue(e.target.value, "textShadowX")
                    }
                    value={button.textShadowX}
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="textShadowY">Y:</label>
                  <input
                    id="textShadowY"
                    onChange={e =>
                      buttonSetNewValue(e.target.value, "textShadowY")
                    }
                    value={button.textShadowY}
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="textShadowBlur">Blur:</label>
                  <input
                    id="textShadowBlur"
                    onChange={e =>
                      buttonSetNewValue(e.target.value, "textShadowBlur")
                    }
                    value={button.textShadowBlur}
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="textShadowColor">Color:</label>
                  <input
                    id="textShadowColor"
                    onChange={e =>
                      buttonSetNewValue(e.target.value, "textShadowColor")
                    }
                    value={button.textShadowColor}
                    type="color"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={`tab tab-paddings ${
            tab === "tab-paddings" ? "active" : ""
          }`}
        >
          <div className="tab-name" onClick={() => setTab("tab-paddings")}>
            Paddings:{" "}
            <img
              src="images/arrow-down.png"
              alt="arrow-down"
              className="arrow-down"
            />
          </div>
          <div className="tab-content">
            <div className="input-group">
              <label htmlFor="paddingLeft">Left Padding:</label>
              <input
                id="paddingLeft"
                onChange={e => buttonSetNewValue(e.target.value, "paddingLeft")}
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
                onChange={e =>
                  buttonSetNewValue(e.target.value, "paddingRight")
                }
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
                onChange={e => buttonSetNewValue(e.target.value, "paddingTop")}
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
                onChange={e =>
                  buttonSetNewValue(e.target.value, "paddingBottom")
                }
                value={button.paddingBottom}
                type="number"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
        <div
          className={`tab tab-border ${tab === "tab-border" ? "active" : ""}`}
        >
          <div className="tab-name" onClick={() => setTab("tab-border")}>
            Border:{" "}
            <img
              src="images/arrow-down.png"
              alt="arrow-down"
              className="arrow-down"
            />
          </div>
          <div className="tab-content">
            <div className="input-group border-width">
              <label htmlFor="topLeft">Border Width:</label>
              <input
                id="topLeft"
                onChange={e => buttonSetNewValue(e.target.value, "borderWidth")}
                value={button.borderWidth}
                type="number"
                min="0"
                max="20"
              />
            </div>
            <div className="input-group border-style">
              <label htmlFor="borderStyle">Border Style:</label>
              <select
                id="borderStyle"
                onChange={e => buttonSetNewValue(e.target.value, "borderStyle")}
              >
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
              </select>
            </div>
            <div className="input-group border-color">
              <label htmlFor="borderColor">Border Color:</label>
              <input
                id="borderColor"
                onChange={e => buttonSetNewValue(e.target.value, "borderColor")}
                value={button.borderColor}
                type="color"
              />
            </div>
            <div className="input-group">
              <label htmlFor="topLeft">Top Left Radius:</label>
              <input
                id="topLeft"
                onChange={e =>
                  buttonSetNewValue(e.target.value, "borderRadiusTopLeft")
                }
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
                onChange={e =>
                  buttonSetNewValue(e.target.value, "borderRadiusTopRight")
                }
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
                onChange={e =>
                  buttonSetNewValue(e.target.value, "borderRadiusBottomLeft")
                }
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
                onChange={e =>
                  buttonSetNewValue(e.target.value, "borderRadiusBottomRight")
                }
                value={button.borderRadiusBottomRight}
                type="number"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
        <div
          className={`tab tab-box-shadow ${
            tab === "tab-box-shadow" ? "active" : ""
          }`}
        >
          <div className="tab-name" onClick={() => setTab("tab-box-shadow")}>
            Box Shadow:{" "}
            <img
              src="images/arrow-down.png"
              alt="arrow-down"
              className="arrow-down"
            />
          </div>
          <div className="tab-content">
            <div className="input-group has-box-shadow">
              <label htmlFor="hasBoxShadow">Turn On Box Shadow</label>
              <input
                id="hasBoxShadow"
                value={button.hasBoxShadow}
                onClick={e =>
                  buttonSetNewValue(e.target.checked, "hasBoxShadow")
                }
                type="checkbox"
              />
            </div>
            <div className="input-group box-shadow">
              <div>
                <label htmlFor="boxShadowX">X:</label>
                <input
                  id="boxShadowX"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "boxShadowX")
                  }
                  value={button.boxShadowX}
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="boxShadowY">Y:</label>
                <input
                  id="boxShadowY"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "boxShadowY")
                  }
                  value={button.boxShadowY}
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="boxShadowBlur">Blur:</label>
                <input
                  id="boxShadowBlur"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "boxShadowBlur")
                  }
                  value={button.boxShadowBlur}
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="boxShadowSize">Size:</label>
                <input
                  id="boxShadowSize"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "boxShadowSize")
                  }
                  value={button.boxShadowSize}
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="boxShadowColor">Color:</label>
                <input
                  id="boxShadowColor"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "boxShadowColor")
                  }
                  value={button.boxShadowColor}
                  type="color"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab tab-background ${
            tab === "tab-background" ? "active" : ""
          }`}
        >
          <div className="tab-name" onClick={() => setTab("tab-background")}>
            Background:{" "}
            <img
              src="images/arrow-down.png"
              alt="arrow-down"
              className="arrow-down"
            />
          </div>
          <div className="tab-content">
            <div className="input-group button-background">
              <label htmlFor="backgroundColor">Background Color:</label>
              <input
                id="backgroundColor"
                onChange={e => buttonSetNewValue(e.target.value, "background")}
                value={button.background}
                type="color"
              />
            </div>
            <div className="input-group has-gradient">
              <label htmlFor="hasGradient">Add Gradient</label>
              <input
                id="hasGradient"
                onChange={e =>
                  buttonSetNewValue(e.target.checked, "hasGradient")
                }
                checked={button.hasGradient}
                type="checkbox"
              />
            </div>
            {button.hasGradient ? (
              <div className="input-group gradient-type">
                <label htmlFor="gradientType">Gradient Type:</label>
                <select
                  id="gradientType"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "gradientType")
                  }
                  value={button.gradientType}
                >
                  <option value="linear-gradient">Linear</option>
                  <option value="radial-gradient">Radial</option>
                </select>
              </div>
            ) : (
              ""
            )}
            {button.hasGradient ? (
              <div className="input-group gradient">
                <label htmlFor="gradientFrom">From:</label>
                <input
                  id="gradientFrom"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "gradientFrom")
                  }
                  value={button.gradientFrom}
                  type="color"
                />
                <label htmlFor="gradientTo">To:</label>
                <input
                  id="gradientTo"
                  onChange={e =>
                    buttonSetNewValue(e.target.value, "gradientTo")
                  }
                  value={button.gradientTo}
                  type="color"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="output">
        <ButtonPreview button={button} />
        <HTMLOutput innerText={button.text} />
        <CSSOutput button={button} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
