import React, { useCallback, useRef, useEffect } from "react";
import ImagesList from "components/ImagesList/ImagesList";
import Spinner from "components/Spinner/Spinner";
import SearchForm from "components/SearchForm/SearchForm";
import { useImages } from "hooks/useImages";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import Helmet from "react-helmet";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, images, setPage } = useImages({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = images ? `${images.length} results of ${keyword}` : "";

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <header className="app-header">
            <SearchForm initialKeyword={keyword} />
          </header>
          <div className="app-wrapper">
            <h3 className="app-title">{decodeURI(keyword)}</h3>
            <ImagesList images={images} />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
}
