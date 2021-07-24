import React, { useState, useEffect } from 'react';
//import Multiselect from 'react-widgets/lib/Multiselect'
import DropdownList from 'react-widgets/lib/DropdownList'


import { listAuthors } from '../../services/authors';

function AuthorDropDown({ onChange }) {
    const [authors, setAuthors] = useState([]);
    console.log(authors)

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            console.log({data})
            setAuthors(data);
        };

        fetchAuthors();
    }, []);
    
        return (
            <div className="RegionDropdown">
                <DropdownList
                    data={authors}
                    textField= "firstname"
                    dataKey="id"
                    onChange={onChange}
                    allowCreate={false}
                />
            </div>
       );
}

export default AuthorDropDown;
