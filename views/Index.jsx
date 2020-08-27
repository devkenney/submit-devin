const React = require('react');

class Index extends React.Component {
  render() {
    const {todos} = this.props;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>

          <title>My Todo List</title>
        </head>
        <body>
          <div className="jumbotron">
            <h1>Todo App</h1>
            <form className="form-inline" action="/todos" method="POST">
              <input type="text" name="text" className="form-control" />
              <input type="submit" name="" value="Create Todo" className="btn btn-secondary" />
            </form>
            <div className="container-fluid mt-5">
              <ul className="list-group">
                {
                  todos.length === 0 ?
                    <li className="list-group-item"><h2>Nothing to display</h2></li> :
                    todos.map((element) => {
                      return (
                        <li key={element._id} className="list-group-item">
                          <div class="form-group">
                            {element.text}
                          </div>
                          <form action={`/todos/${element._id}/?_method=DELETE`} method="POST">
                            <input type="submit" className="btn btn-secondary" value="Delete" />
                          </form>
                        </li>
                      )
                    })
                }
              </ul>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Index;