import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";


import '../../input.css'
import '../../output.css'

export type PagInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;

};
export type PagProps = {
  pageNumber: number;
  info: PagInfo;
  updatePageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PagProps> = ({ pageNumber, info, updatePageNumber }) => {
  const pageChange = ({ selected }: { selected: number }) => {
    updatePageNumber(selected + 1);
  };
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="flex flex-row pagination justify-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded fs-5 prev"
        nextClassName="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item  text-green-500 bg-black rounded hover:bg-green-500 hover:text-white text-bold py-2 px-4"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;