const App = () => {
    return (
        <div >
            <Router>
                <Link to="/article/:id" component={Article} />

            </Router>
        </div>
    );
}

export default App;

const Articles = ({ data }) => {
    return (
        <div>
            {data.map(article => {
                <Link to={`article/${article.id}`}>Cliquer ici</Link>
            })}
        </div>
    )
}

const Article = ({ match }) => {

    const id = match.params.id;
    return (
  
    )
}