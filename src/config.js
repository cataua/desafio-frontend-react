const config = {
  api_url: process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL,
};

export default config;