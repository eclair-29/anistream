// Kitsu API Configuration
// ...
const accessToken = "eedc17b6e668bfa7960479df913a42a363814b77bd1da6d56c7971abf9bda126";

export const kitsuAPI = {
  URL: "https://kitsu.io/api/edge",
  credentials: {
    headers: { "Authorization": `Bearer ${accessToken}` }
  }
};
