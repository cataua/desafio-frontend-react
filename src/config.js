const config = {
  api_url: process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL,
  discount: 0.4,
  promoCode: 'PROMOHG40',
  plansInfos: {
    'Plano P': {
      totalSites: '1',
      diskSpace: '100',
      emailAccounts: 'ilimitadas',
      siteBuilder: 'grátis',
      sslCertified: 'grátis',
    },
    'Plano M': {
      totalSites: 'ilimitados',
      diskSpace: '100',
      emailAccounts: 'ilimitadas',
      siteBuilder: 'grátis',
      sslCertified: 'grátis',
    },
    'Plano Turbo': {
      totalSites: 'ilimitados',
      diskSpace: '150',
      emailAccounts: 'ilimitadas',
      siteBuilder: 'grátis',
      sslCertified: 'grátis',
    },
  }
};

export default config;