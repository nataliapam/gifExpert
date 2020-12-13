export const getGifs = async (category) => {
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=KCDBakFHx67sZY3ZogVnudMlcvHtOg7t&q=" +
    category +
    "&limit=10";
  try {
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        img: img.images.downsized_medium.url,
        featured: true,
      };
    });
    return gifs;
    //  setImages(gifs);
    //zconsole.log(gifs);
  } catch (error) {
    console.log(error);
  }
};
