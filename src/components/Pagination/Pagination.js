import React from 'react';

import './Pagination.css';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            {pageNumbers.map((number, index) => (
                <a
                    onClick={() => paginate(number)}
                    href='#assets'
                    key={index + number}
                >
                    {number}
                </a>
            ))}
        </div>
    );
};

export default Pagination;
