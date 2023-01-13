//all comments of article on one page
const CommentCard = ({comment}) => {
    return (
        <main className="CommentCard">
            <dt>{comment.author}</dt>
            <dd>{comment.body}</dd>
        </main>
    )
}
export default CommentCard