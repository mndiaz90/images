import { unsplash } from "./settings";

const fromApiResponseToImage = (apiResponse) => {
  const { urls, alt_description, id, user } = apiResponse;
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
};

export default async function getSingleImage({ id }) {
  const res = await unsplash.photos.get({
    photoId: id,
  });
  const apiResponse = res.response;
  return fromApiResponseToImage(apiResponse);
}
