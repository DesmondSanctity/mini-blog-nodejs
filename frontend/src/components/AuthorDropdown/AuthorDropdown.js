import React, { useState, useEffect } from 'react';
//import Multiselect from 'react-widgets/lib/Multiselect'
import DropdownList from 'react-widgets/lib/DropdownList'


import { listAuthors } from '../../services/authors';

function AuthorDropDown({ onChange, authorId }) {
    const [authors, setAuthors] = useState([]);
    console.log({ authorId })

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            console.log({ data })
            setAuthors(data);
        };

        fetchAuthors();
    }, []);

    return (
        <div className="RegionDropdown">
            <DropdownList
                value={authorId ? (authors.find(author => author.id === authorId)).firstname : ""}
                data={authors}
                textField="firstname"
                dataKey="id"
                onChange={onChange}
                allowCreate={false}
            />
        </div>
    );
}

export default AuthorDropDown;
