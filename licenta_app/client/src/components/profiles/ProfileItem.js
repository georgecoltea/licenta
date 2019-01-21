import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <Paper>
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <img
                src={profile.user.avatar}
                alt=""
                className="rounded-circle"
              />
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{profile.user.name}</h3>
              <p>
                {profile.status}{" "}
                {isEmpty(profile.company) ? null : (
                  <span>la {profile.company}</span>
                )}
              </p>
              <p>
                {isEmpty(profile.location) ? null : (
                  <span>{profile.location}</span>
                )}
              </p>
              <Button
                className="mr-1"
                variant="contained"
                color="primary"
                component={Link}
                to={`/profile/${profile.handle}`}
              >
                Vezi profil
              </Button>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <h4>Tehnologii</h4>
              <ul className="list-group">
                {profile.skills.slice(0, 4).map((skill, index) => (
                  <li key={index} className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
