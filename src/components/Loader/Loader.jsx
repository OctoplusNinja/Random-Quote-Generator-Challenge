import React, { Component } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./Loader.css";

class Loader extends Component {
  render() {
    return (
      <Stack className="Loader" spacing={1} width={"65%"}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={130}
          sx={{ mb: 5 }}
        />
        {this.props.button ? (
          <>
            <Skeleton animation="wave" variant="text" width={"20%"} />
            <Skeleton animation="wave" variant="text" width={"20%"} />
          </>
        ) : (
          ""
        )}
      </Stack>
    );
  }
}

export default Loader;
