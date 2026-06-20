import "./Pagination.css";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const generatePages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev) => prev - 1)
          }
        >
          Previous
        </button>

        {generatePages().map((page) => (
          <button
            key={page}
            className={`pagination-page ${
              currentPage === page
                ? "pagination-page-active"
                : ""
            }`}
            onClick={() =>
              setCurrentPage(page)
            }
          >
            {page}
          </button>
        ))}

        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => prev + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}