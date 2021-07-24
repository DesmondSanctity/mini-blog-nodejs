import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { ROUTE_AUTHOR_LIST } from '../../constants';
import { getAuthor, editAuthor } from '../../services/authors';

function AuthorEdit(props) {
    const history = useHistory();
    const { authorId } = useParams();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    

    useEffect(() => {
        const fetchAuthor = async () => {
            const data = await getAuthor(authorId);
            setFirstName(data.firstname);
            setLastName(data.lastname);
        };

        fetchAuthor();
    }, [authorId]);

    const handleSave = async () => {
        const payload = { firstname, lastname };
        await editAuthor(authorId, payload);
        history.push(ROUTE_AUTHOR_LIST);
    };

    return (
        <div className="ArticleEdit">
            <h1>Edit Author</h1>
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={ firstname }
                        onChange={ (event) => setFirstName(event.target.value) }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={ lastname }
                        onChange={ (event) => setLastName(event.target.value) }
                    />
                </Form.Group>
                <Button variant="primary" onClick={ handleSave } >
                    Save Author
                </Button>
            </Form>
        </div>
    );
}

export default AuthorEdit;
