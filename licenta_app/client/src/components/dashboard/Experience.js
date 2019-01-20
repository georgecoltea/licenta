import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileAction";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <TableRow key={exp._id}>
        <TableCell>{exp.company}</TableCell>
        <TableCell>{exp.title}</TableCell>
        <TableCell>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.onDeleteClick.bind(this, exp._id)}
          >
            Sterge
          </Button>
        </TableCell>
      </TableRow>
    ));
    return (
      <div className="mb-5">
        <h4 className="mb-4">Experienta</h4>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Companie</TableCell>
                <TableCell align="left">Functie</TableCell>
                <TableCell align="left">Perioada</TableCell>
                <TableCell align="left" />
              </TableRow>
            </TableHead>
            <TableBody>{experience}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
