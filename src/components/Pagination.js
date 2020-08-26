import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ imagesPerPage, totalImages, renderPageNumbers}) => {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            {pageNumber.map(number => (
                <div key={number}>
                    <a onClick={() => renderPageNumbers(number)} href="!#">
                    {renderPageNumbers}
                        {number}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Pagination;