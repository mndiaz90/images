import { unsplash } from "./settings";

const fromApiResponseToImages = (apiResponse) => {
  const { results = [] } = apiResponse;

  if (Array.isArray(results)) {
    const images = results.map((image) => {
      const { urls, alt_description, id, user } = image;
      const {
        first_name,
        last_name,
        social: { portfolio_url },
      } = user;
      const userInfo = {
        first_name,
        last_name,
        portfolio_url,
      };
      return { description: alt_description, id, urls, userInfo };
    });
    return images;
  }
  return [];
};

export default async function getImages({
  per_page = 20,
  keyword = "random",
  page = 1,
} = {}) {
  const res = await unsplash.search.getPhotos({
    query: keyword,
    per_page,
    page,
  });
  const apiResponse = res.response;
  return fromApiResponseToImages(apiResponse);
}
