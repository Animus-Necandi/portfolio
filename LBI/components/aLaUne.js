import React from 'react';
import { Link } from 'react-router-dom';





function LastArticle(props) {

    const content = props.idArticle.map((article) =>

        <div key={article.id} className="col d-flex flex-column justify-content-center align-items-center mb-5">


            <h1 className="m-2">{article.date} - {article.titre}</h1>
            <img className="imgArticle" src={process.env.PUBLIC_URL + '/articles/' + article.photo} alt="" width="700" height="320" />
            <p className="m-2">{article.accroche}</p>

            <Link className="btn-seeMore text-center" to={`ArticleComplet/${article.id}`}>Lire la suite</Link>

            <hr className="bg-dark w-100"></hr>



        </div>
    );
    return (
        <div>

            {content}

            <hr></hr>
        </div>
    );

}



export default LastArticle;