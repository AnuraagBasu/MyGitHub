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

export default {
  getCleanUserDetails,
};
