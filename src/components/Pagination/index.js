import './Pagination.css'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            <ul className="pages" data-test="pages">
                {pageNumbers.map(page => (
                    <li className="page" key={page}>
                        <button onClick={() => paginate(page)}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination