import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postAction";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <Paper>
        <div className="card card-body mb-3">
          <div className="row">
            <div className="col-md-2">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />

              <br />
              <p className="text-center">{post.name}</p>
            </div>
            <div className="col-md-10">
              <p className="lead">{post.text}</p>
              {showActions ? (
                <span>
                  <Button
                    className="mr-2"
                    variant="contained"
                    onClick={this.onLikeClick.bind(this, post._id)}
                  >
                    <i
                      className={classnames("fas fa-thumbs-up", {
                        "text-info": this.findUserLike(post.likes)
                      })}
                    />
                    <span className="ml-1">{post.likes.length}</span>
                  </Button>

                  <Button
                    className="mr-2"
                    variant="contained"
                    onClick={this.onUnlikeClick.bind(this, post._id)}
                  >
                    <i className="text-secondary fas fa-thumbs-down" />
                  </Button>

                  <Button
                    className="mr-1"
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/post/${post._id}`}
                  >
                    Comentarii
                  </Button>

                  {post.user === auth.user.id ? (
                    <button
                      onClick={this.onDeleteClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-danger mr-1"
                    >
                      <i className="fas fa-times" />
                    </button>
                  ) : null}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
