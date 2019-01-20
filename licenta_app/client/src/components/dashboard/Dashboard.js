import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";
import Button from "@material-ui/core/Button";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    //const user = this.props.auth.user
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <CircularProgress />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Salut <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div style={{ marginBottom: "60px" }} />
            <Button
              onClick={this.onDeleteClick.bind(this)}
              variant="contained"
              color="secondary"
            >
              Sterge contul
            </Button>
          </div>
        );
      } else {
        //user logged in but no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Salut {user.name}</p>
            <p>Te rugam sa iti completezi campurile de profil</p>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/create-profile"
            >
              Creaza profil
            </Button>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Panou control</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
