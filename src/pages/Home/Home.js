import ImagesList from "components/ImagesList/ImagesList";
import SearchForm from "components/SearchForm/SearchForm";
import { useImages } from "hooks/useImages";
import Helmet from "react-helmet";

export default function Home() {
  const { images } = useImages();

  return (
    <>
      <Helmet>
        <title>Home | Images</title>
      </Helmet>
      <header className="app-header">
        <SearchForm />
      </header>
      <main className="app-wrapper">
        <h3 className="app-title">Last search</h3>
        <ImagesList images={images} />
      </main>
    </>
  );
}
