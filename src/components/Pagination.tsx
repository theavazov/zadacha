import { Link } from "react-router-dom";

interface IPaginationProps {
  page: number;
  setPage: (page: number) => void;
  numbers: number[];
}

export function Pagination({ page, setPage, numbers }: IPaginationProps) {
  if (numbers) {
    return (
      <div className="pagination">
        {page - 1 !== 0 ? (
          <Link
            to={`?page=${page - 1}`}
            onClick={() => setPage(page - 1)}
            className="page-btn"
          >
            Назад
          </Link>
        ) : (
          <button disabled className="page-btn disabled">
            Назад
          </button>
        )}
        <div className="pagination-links">
          {numbers.map((n) => {
            return (
              <Link
                key={n}
                to={`?page=${n}`}
                onClick={() => setPage(n)}
                className={
                  page === n ? "pagination-link active" : "pagination-link"
                }
              >
                {n}
              </Link>
            );
          })}
        </div>
        {page + 1 > numbers.slice(-1)[0] ? (
          <button disabled className="page-btn disabled">
            Далее
          </button>
        ) : (
          <Link
            to={`?page=${page + 1}`}
            onClick={() => setPage(page + 1)}
            className="page-btn"
          >
            Далее
          </Link>
        )}
      </div>
    );
  } else null;
}
