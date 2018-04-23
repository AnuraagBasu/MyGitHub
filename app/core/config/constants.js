const Constants = {
  authBaseURL: 'https://github.com/',
  apiBaseURL: process.env.API_BASE_URL || '/api/',
  gitHubClientId: process.env.GITHUB_CLIENT_ID || 'b78fae18d14431bfaf74',
  gitHubClientSecret: process.env.GITHUB_CLIENT_SECRET || '7c5b0e17eec3c19b0dc01bcc6b5c8c762d28a08d',
  repoListPageSize: 5,
};

export default Constants;
