import React, { Components } from "react";
import {SooViewContainer} from "../containers/SooViewContainer";

class NoView extends Components {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "400px",
          borderColor: "blue",
          borderStyle: "solid",
          margin: "2px",
        }}
      >
        Noo View
        <div>
          <SooViewContainer />
        </div>
      </div>
    );
  }
}
export default NoView;