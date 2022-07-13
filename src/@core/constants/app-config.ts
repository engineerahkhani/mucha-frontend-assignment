const APP_CONFIG = {
  defaultLang: 'en',
  apiBaseUrl: process.env.REACT_APP_BASE_URL || 'https://api.github.com/',
  apiKey:
    process.env.REACT_APP_COUNTRIES_API_KEY ||
    'd2e285fa-c915-4e8e-bfb0-c6486e88cd3d',
};

export default APP_CONFIG;
