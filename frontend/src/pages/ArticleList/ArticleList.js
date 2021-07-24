import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { ROUTE_ARTICLE_PREFIX, ROUTE_ARTICLE_CREATE } from '../../constants';
import { listArticles } from '../../services/articles';

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await listArticles();
            setArticles(data);
        };

        fetchArticles();
    }, []);

    const renderArticles = () => articles.map((article) => {
        const { id, title, author, regions, content } = article;
        console.log({ article })


        return (
            <div>
                <Card className="text-center" border="primary" style={{ width: '100rem' }} key={id}>

                    {author != null &&
                        <Card.Header>
                            <p>Author:  {author.firstname + ' ' + author.lastname}</p>
                        </Card.Header>}
                    <Card.Body>
                        <Card.Title>
                            <Link to={`${ROUTE_ARTICLE_PREFIX}/${id}`}>{title}</Link>
                        </Card.Title>
                        <Card.Text>
                            {content}<br /><br />
                            <p>Region(s):  {regions.map(({ id, name }) => name).join(",")}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </div>
        );
    });

    return (
        <div className="ArticleList">
            <h1>Articles</h1>
            <Link className="d-block mb-3" to={ROUTE_ARTICLE_CREATE}>
                Create a new Article
            </Link>
            {renderArticles()}
        </div>
    );
}

export default ArticleList;
