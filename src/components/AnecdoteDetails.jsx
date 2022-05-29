const AnecdoteDetails = ({ anecdote }) => (
  <>
    <h2>{anecdote.content} by {anecdote.author}</h2>
    <p>Has {anecdote.votes} votes</p>
    <p>For more info see <a href={anecdote.info}>
      {anecdote.info}</a>
    </p>
  </>
)

export default AnecdoteDetails