"use client";
import { toggleSearchModalClose } from "../../redux/features/searchModalSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SearchForm from "../form/SearchForm";

const SearchFormModal = () => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector(
    (state) => state.searchModal.isSearchModalOpen
  );
  const closeModal = () => {
    dispatch(toggleSearchModalClose());
  };
  return (
    <div className={`search-field ${showModal ? "active" : ""}`}>
      <div className="search">
        <SearchForm />
        <button className="close-btn" onClick={closeModal}>
          <i className="fa fa-close"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchFormModal;
