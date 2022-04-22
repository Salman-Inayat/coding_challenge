export const imagesApi = {
  fetchImages: () =>
    fetch(`https://picsum.photos/v2/list?limit=5`).then((res) => {
      return res.json().then((data) => {
        return data;
      });
    }),
};
