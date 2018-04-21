const getCleanUserDetails = (details) => {
  return {
    name: details.name,
    handle: details.login,
    bio: details.bio,
    location: details.location,
    email: details.email,
    repoCount: details.public_repos,
  };
};

const getCleanRepos = (repos) => {
  return repos.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      url: repo.url,
      desc: repo.description,
      language: repo.language,
      watchCount: repo.watchers_count,
      forksCount: repo.forks_count,
      starsCount: repo.stargazers_count,
    };
  });
};

export default {
  getCleanUserDetails,
  getCleanRepos,
};
