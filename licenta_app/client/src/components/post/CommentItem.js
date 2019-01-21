import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postAction";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <Paper>
        <div className="card card-body mb-3">
          <div className="row">
            <div className="col-md-2">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.avatar}
                alt=""
              />
              <br />
              <p className="text-center">{comment.name}</p>
            </div>
            <div className="col-md-10">
              <p className="lead">{comment.text}</p>
              {comment.user === auth.user.id ? (
                <Button
                  className="mr-2"
                  variant="contained"
                  color="secondary"
                  onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                  type="button"
                >
                  Sterge <i className="fas fa-times ml-2" />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
