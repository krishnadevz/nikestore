import React, { Component } from "react";
import './css/Middle.css'
export default class Middle extends Component {
  render() {
    return (
      <div id="row">
        <h1>Men's Trainers & Shoes</h1>
        <ul>
          <lu>
            Running<select></select>
          </lu>
          &ensp;&ensp;
          <lu>
            EU 45<select></select>
          </lu>
          &ensp;&ensp;
            {" "}
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              class="slider"
              id="myRange"
            />
          <lu>
            Under $ 749.00<select></select>
          </lu> <input
              type="range"
              min="1"
              max="100"
              value="50"
              class="slider"
              id="myRange"
            />
          &ensp;&ensp;
          <lu>
            On sale
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
          </lu>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          
          <lu> Open filter +</lu>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          <lu>
            Latest{" "}
            <select>
              <option></option>
            </select>
          </lu>
        </ul>
      </div>
    );
  }
}
