import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListings = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  for (let i = 0; i < listing.images.length; i++) {
    data.append("images", {
      name: "image" + i,
      type: "image/jpeg",
      uri: listing.images[i],
    });
  }

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListings,
};
