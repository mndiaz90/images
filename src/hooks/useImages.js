import { useContext, useEffect, useState } from "react";
import getImages from "services/getImages";
import ImagesContext from "context/ImagesContext";

const INITIAL_PAGE = 1;

export function useImages({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { images, setImages } = useContext(ImagesContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    getImages({ keyword: keywordToUse }).then((images) => {
      setImages(images);
      setLoading(false);
      setPage(INITIAL_PAGE);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keywordToUse, setImages]);

  useEffect(() => {
    if (
      page === INITIAL_PAGE ||
      keywordToUse !== localStorage.getItem("lastKeyword")
    )
      return;

    getImages({ keyword: keywordToUse, page }).then((nextImages) => {
      setImages((prevImages) => prevImages.concat(nextImages));
    });
  }, [keywordToUse, page, setImages]);

  return { loading, images, setPage };
}
