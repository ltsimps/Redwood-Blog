export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h1>{article.title}</h1>
      </header>
      <p>{article.body}</p>
      <div> Posted at: {article.createdAt}</div>
    </article>
  )
}
