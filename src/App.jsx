import "./App.css";
import SimpleTable from "./components/Table";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  columns1,
  columns2,
  columns3,
  columns4,
  columns5,
  rows1,
  rows2,
  rows3,
  rows4,
  rows5,
} from "./data";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

const styles = (theme) => ({
  div1: {
    width: "full",
    height: "100px",
    border: "2px solid #FF5722",
    marginBottom: "10px",
    fontWeight: 600,
    position: "relative",
  },
  Amendment: {
    width: "full",
    height: "25px",
    fontWeight: 600,
    border: "2px solid #ff9800",
    marginTop: "20px",
    backgroundColor: "#ffc107",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  PositionItem: {
    width: "full",
    height: "25px",
    fontWeight: 600,
    border: "2px solid #ef9a9a",
    marginTop: "20px",
    backgroundColor: "#f8bbd0",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  DealItem: {
    width: "full",
    height: "25px",
    fontWeight: 600,
    border: "2px solid #1b5e20",
    marginTop: "20px",
    backgroundColor: "#66bb6a",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  PaymentMilestone: {
    width: "full",
    height: "25px",
    fontWeight: 600,
    border: "2px solid #66bb6a",
    marginTop: "20px",
    backgroundColor: "#2e7d32",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lost: {
    width: "full",
    height: "25px",
    border: "2px solid #bdbdbd",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  evaluation: {
    width: "full",
    height: "25px",
    border: "2px solid #bdbdbd",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingLeft: "20px",
  },
  div: {
    width: "full",
    height: "38px",
    border: "2px solid #bdbdbd",
    paddingBottom: "10px",
  },
});

function App(props) {
  const { classes } = props;
  const [postionItemVisibility, setPostionItemVisibility] = useState(false);
  const [dealItemVisibility, setDealItemVisibility] = useState(false);
  const handleClick = (type) => {
    if (type === "PositionItem")
      setPostionItemVisibility(!postionItemVisibility);
    else if (type === "DealItem") setDealItemVisibility(!dealItemVisibility);
  };
  return (
    <div className="App">
      <div className={classes.div1}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>Deal Id:</p>
            <p>017140137311_d3</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>Deal name:</p>
            <p>OIDC_Harun</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>Pipeline:</p>
            <p>OIDC pipeline</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>Deal amount:</p>
            <p>30,000.00</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>Profit:</p>
            <p>160000.00</p>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>MUP:</p>
            <p>40%</p>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>GPM:</p>
            <p>25%</p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              Start date:
            </p>
            <p>01-07-23</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>Close date:</p>
            <p>31-07-23</p>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p>Duration:</p>
            <p>31 days</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>Buyer:</p>
            <p>Mr. Harunur rashid</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>Buyer phone:</p>
            <p>01714017311</p>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px" }}>Property:</p>
            <p>Uttara</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "15px" }}>
              Sales person:
            </p>
            <p>Rashed hassan</p>
          </Grid>
        </Grid>
      </div>
      <SimpleTable columns={columns1} rowData={rows1} />
      <div className={classes.Amendment}>Amendment</div>
      <SimpleTable columns={columns2} rowData={rows2} />
      <div className={classes.PositionItem}>Position Item</div>
      <div className={classes.div} onClick={() => handleClick("PositionItem")}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>Bedroom:</p>
            <p>(Parents room)</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              Carpet area:
            </p>
            <p>180 sft</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              Client Budget:
            </p>
            <p>210,000.00</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              COS Budget:
            </p>
            <p>150,000.00</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              Design Id:
            </p>
            <p>1826668291_d3</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}> Ref: 3</p>
            <FontAwesomeIcon
              icon={
                postionItemVisibility === false
                  ? faAngleDoubleDown
                  : faAngleDoubleUp
              }
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
          </Grid>
        </Grid>
      </div>
      {postionItemVisibility && (
        <SimpleTable columns={columns3} rowData={rows3} />
      )}
      <div className={classes.DealItem}>Deal Item</div>
      <div className={classes.div} onClick={() => handleClick("DealItem")}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>Bedroom:</p>
            <p>(Parents room)</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              Carpet area:
            </p>
            <p>180 sft</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              Client Budget:
            </p>
            <p>210,000.00</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              COS Budget:
            </p>
            <p>150,000.00</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>
              Design Id:
            </p>
            <p>1826668291_d3</p>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p style={{ marginRight: "10px", marginLeft: "10px" }}> Ref: 3</p>
            <FontAwesomeIcon
              icon={
                dealItemVisibility === false
                  ? faAngleDoubleDown
                  : faAngleDoubleUp
              }
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
          </Grid>
        </Grid>
      </div>
      {dealItemVisibility && <SimpleTable columns={columns4} rowData={rows4} />}
      <div className={classes.PaymentMilestone}>Payment milestone</div>
      <SimpleTable columns={columns5} rowData={rows5} />
      <div className={classes.lost}>
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "red",
            marginRight: "5px",
          }}
        />
        Lost
      </div>
      <div className={classes.evaluation}>
        Evaluation Type: Poor communication; Evaluation date:02-11-23 ; Evaluate
        by Sumaiya Tabassum
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
