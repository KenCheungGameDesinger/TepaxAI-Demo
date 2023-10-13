const config = {
  SERVER_URL:
    process.env.REACT_APP_ENV === "Development"
      ? "http://localhost:3001"
      : "https://tourgo-community.onrender.com",
};
export const SERVER_URL = config.SERVER_URL;
