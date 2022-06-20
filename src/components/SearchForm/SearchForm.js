import React, { useState } from "react";
import { useLocation } from "wouter";
import "./SearchForm.css";

export default function SearchForm({ initialKeyword = "" }) {
  const [_, pushLocation] = useLocation();
  const [keyword, changeKeyword] = useState(initialKeyword);

  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      pushLocation(`/search/${keyword}`);
    }
  };

  const handleChange = (evt) => {
    changeKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <button className="search-form__button">Search</button>
        <input
          className="search-form__input"
          onChange={handleChange}
          placeholder="Search images here..."
          type="text"
          value={keyword}
        />
      </form>
    </>
  );
}
