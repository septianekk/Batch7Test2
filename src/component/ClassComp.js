import React, { Component } from "react";
import DataJson from "../data.json";

export default class ClassComp extends Component {
  render() {
    return (
      <div>
        {DataJson.map((data, index) => {
          if (data.type === "radio") {
            return (
              <form action="">
                <h2>
                  {index + 1}. {data.soal}
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "200px 200px",
                  }}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type={data.type}
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked="true"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {data.a}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type={data.type}
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {data.b}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type={data.type}
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {data.c}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type={data.type}
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {data.d}
                    </label>
                  </div>
                </div>
              </form>
            );
          } else if (data.type === "checkbox") {
            return (
              <div classNameName="form-check">
                <h2>
                  {index + 1}. {data.soal}
                </h2>
                {data.option.map((pilihan, i) => {
                  return (
                    <div classNameName="form-check">
                      <input
                        classNameName="form-check-input"
                        type={data.type}
                        id="flexCheckIndeterminate"
                        checked={data.jawab === pilihan}
                      />
                      <label
                        classNameName="form-check-label"
                        for="flexCheckIndeterminate"
                        style={{ marginLeft: "10px" }}
                      >
                        {pilihan}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return (
              <div classNameName="form-floating">
                <h2>
                  {index + 1}. {data.soal}
                </h2>
                <textarea
                  type={data.type}
                  classNameName="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "200px", width: "500px" }}
                ></textarea>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
