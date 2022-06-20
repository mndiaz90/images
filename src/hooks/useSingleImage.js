import { useState, useContext, useEffect } from "react";
import ImageContext from "context/ImagesContext";
import getSingleImage from "services/getSingleImage";

export default function useSingleImage({ id }) {
  const { images } = useContext(ImageContext);
  const imageFromCache = images.find((singleImage) => singleImage.id === id);

  const [image, setImage] = useState(imageFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!image) {
      setIsLoading(true);
      getSingleImage({ id })
        .then((image) => {
          setImage(image);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [image, id]);

  return { image, isLoading, isError };
}
