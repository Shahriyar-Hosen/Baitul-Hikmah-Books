export const userInfoFromLocalstorage = JSON.parse(
  localStorage.getItem('Bookshelf-Info') as string
);
