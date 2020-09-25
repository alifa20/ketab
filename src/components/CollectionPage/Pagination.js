import { Link } from "gatsby";
import React from "react";

const Pagination = ({ numPages, currentPage }) => {
  let dotCount = 5;
  return (
    <div className="pro-pagination-style text-center mt-30">
      <ul>
        {/* <li>
          <a className="prev" href="#">
            <i className="fa fa-angle-double-left"></i>
          </a>
        </li> */}

        {currentPage > 1 && (
          <li>
            <Link to={`/collection/${currentPage - 1}`} className="prev">
              <i className="fa fa-angle-double-left"></i>
            </Link>
          </li>
        )}
        {Array.from(new Array(numPages).keys()).map((_, i) => {
          const page = i + 1;
          //   if (page === 0) return null;
          const diff = Math.abs(page - currentPage);
          if (page === numPages) return null;

          if (diff < 2 || page === numPages || page === 1) {
            return (
              <li key={page}>
                <Link
                  to={`/collection/${page}`}
                  className={page === currentPage ? "active" : ""}
                >
                  {page}
                </Link>
              </li>
            );
          }

          dotCount -= 1;
          if (dotCount > 0) return <li key={page}>.</li>;
          return null;
          //   if (diff > 2 && diff < 6 && page !== numPages - 1) return <li>.</li>;
          //   if (diff > 5 && page < numPages - 2) return null;

          //   return (
          //     <li key={page}>
          //       <Link
          //         to={`/collection/${page - 1}`}
          //         className={page === currentPage ? "active" : ""}
          //       >
          //         {page - 1}
          //       </Link>
          //     </li>
          //   );
        })}

        {currentPage < numPages - 1 && (
          <li>
            <Link to={`/collection/${currentPage + 1}`} className="next">
              <i className="fa fa-angle-double-right"></i>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
