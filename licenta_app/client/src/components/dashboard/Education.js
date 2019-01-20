import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileAction";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <TableRow key={edu._id}>
        <TableCell>{edu.school}</TableCell>
        <TableCell>{edu.degree}</TableCell>
        <TableCell>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.onDeleteClick.bind(this, edu._id)}
          >
            Sterge
          </Button>
        </TableCell>
      </TableRow>
    ));
    return (
      <div>
        <h4 className="mb-4">Educatie</h4>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Scoala</TableCell>
                <TableCell align="left">Grad</TableCell>
                <TableCell align="left">Perioada</TableCell>
                <TableCell align="left" />
              </TableRow>
            </TableHead>
            <TableBody>{education}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
