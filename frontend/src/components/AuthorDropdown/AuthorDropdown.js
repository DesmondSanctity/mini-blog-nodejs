import React, { useState, useEffect } from 'react';
import DropdownList from 'react-widgets/lib/DropdownList'


import { listAuthors } from '../../services/authors';

function AuthorDropDown({ onChange, authorId }) {
    const [authors, setAuthors] = useState([]);
    const emptyAuthorPlaceholder = { firstname: " ", lastname: " ", id: null};

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            setAuthors(data);
        };

        fetchAuthors();
    }, []);
    
    return (
        <div className="RegionDropdown">
            <DropdownList
                value={authorId ? (authors.find(author => author.id === authorId)).firstname +' '+ (authors.find(author => author.id === authorId)).lastname  : ""}
                data={[ emptyAuthorPlaceholder, ...authors]}
                textField="firstname"
                dataKey="id"
                onChange={onChange}
                allowCreate={false}
            />
        </div>
    );
}

export default AuthorDropDown;
