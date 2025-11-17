function Articles({ articles }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>title</th>
          <th>upvotes</th>
          <th>date</th>
        </tr>
      </thead>

      <tbody>
        {articles.map((item) => (
          <tr key={item.date}>
            <td>{item.title}</td>
            <td>{item.upvotes}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Articles;
