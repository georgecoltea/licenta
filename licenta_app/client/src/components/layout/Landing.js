import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Mate-Info Noutati</h1>
                <p className="lead">
                  {" "}
                  Creaza un cont de student sau profesor pentru a fi la curent
                  cu ultimele noutati de la Facultatea de Matematica si
                  Informatica
                </p>
                <hr />
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  color="primary"
                  className="mr-2"
                >
                  Inregistrare
                </Button>
                <Button variant="contained" component={Link} to="/login">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
