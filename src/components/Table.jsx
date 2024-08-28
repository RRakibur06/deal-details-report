import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { grey } from "@material-ui/core/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    border: "1px solid #bdbdbd",
    marginTop: "5px",
  },
  table: {
    minWidth: 700,
  },
  tableHead: {
    color: grey[700],
    fontWeight: 800,
    fontSize: "13px",
    textAlign: "left",
  },
});

function SimpleTable(props) {
  const { classes, columns, rowData } = props;
  const [visible, setVisible] = useState(true);
  const [clickedRow, setClickedRow] = useState(-50);
  const handleClick = (i) => {
    setVisible(!visible);
    if (clickedRow === -50) setClickedRow(i - 1);
    else setClickedRow(-50);
    if (visible === true) rowData.splice(i, 0, ["cell1", "cell2"]);
    else if (visible === false) rowData.splice(i, 1);
  };

  return (
    <div className={classes.root}>
      <Table className={classes.table} padding="none">
        <TableHead>
          <TableRow style={{ height: "30px" }}>
            {columns?.map((c, i) => (
              <TableCell
                className={classes.tableHead}
                key={i}
                style={{
                  paddingLeft: `${i === 0 ? "10px" : "0px"}`,
                }}
              >
                {c}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData?.map((row, i) => (
            <TableRow
              key={i}
              style={{ height: "30px" }}
              onClick={() => handleClick(i + 1)}
            >
              {row?.map((item, j) => (
                <TableCell
                  component="th"
                  scope="row"
                  key={j}
                  style={{
                    paddingLeft: `${j === 0 ? "10px" : "0px"}`,
                  }}
                >
                  {item}
                </TableCell>
              ))}
              {i !== clickedRow + 1 && (
                <TableCell>
                  <FontAwesomeIcon
                    icon={
                      clickedRow === i ? faAngleDoubleUp : faAngleDoubleDown
                    }
                    style={{ fontSize: "20px" }}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  rowData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(SimpleTable);
