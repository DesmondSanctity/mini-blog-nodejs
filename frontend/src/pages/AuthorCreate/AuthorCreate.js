import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { ROUTE_AUTHOR_LIST } from '../../constants';
import { createAuthor } from '../../services/authors';

function AuthorCreate() {
    const history = useHistory();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const handleSave = async () => {
        const payload = { firstname, lastname };
        await createAuthor(payload);
        history.push(ROUTE_AUTHOR_LIST);
    };

    return (
        <div className="ArticleCreate">
            <h1>Create Author</h1>
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

export default AuthorCreate;
