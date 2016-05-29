var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.comments.map(function (comment, index) {
      return (
        <Comment author={comment.author} comment={comment.comment} key={index} />
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
})

var ready = function() {
  var fakeComments = [
    { author:"Richard", comment:"This is a comment" },
    { author:"Nils", comment:"This is another one"}
  ];

  ReactDOM.render(
    <CommentList comments={fakeComments} />,
    document.getElementById('comments')
  );
};

$(document).ready(ready);
