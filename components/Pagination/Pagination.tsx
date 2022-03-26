import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { PaginationActionType } from "../../redux/types/pagination";
import styles from "./Pagination.module.css";
import Card from "../Card/Card";
import { PaginationProps } from "./Pagination.props";

export function Pagination({ products }: PaginationProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: PaginationActionType.INIT_PAGINATION,
      payload: products,
    });
  });

  const handlePageClick = (event: { selected: number }) => {
    dispatch({
      type: PaginationActionType.UPDATE_PAGINATION,
      payload: { selected: event.selected, products },
    });
  };

  function Items({ products }: PaginationProps) {
    return (
      <>
        {products.map((item) => {
          return <Card layout key={item._id} {...item}></Card>;
        })}
      </>
    );
  }

  function PaginatedItems() {
    const currentItems = useSelector(
      (state: RootState) => state.pagination.currentItems
    );
    const pageCount = useSelector(
      (state: RootState) => state.pagination.pageCount
    );

    // useEffect(() => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // }, [currentItems]);

    return (
      <>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Items products={currentItems} />
          </div>
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous"
          containerClassName={styles.pagination}
          activeClassName={styles.active}
          pageClassName={styles.pagination__item}
          pageLinkClassName={styles.pagination__link}
          disabledClassName={styles.disable}
        />
      </>
    );
  }

  return (
    <>
      <PaginatedItems />
    </>
  );
}
