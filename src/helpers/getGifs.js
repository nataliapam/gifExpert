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
        img: img.images.fixed_height.url,
        height: img.images.fixed_height.height,
        width: img.images.fixed_height.width,
        source: img.source_post_url,
        type: img.type.substr(0, 1).toUpperCase(),
        original: img.images.original.url,
      };
    });
    return gifs;
  } catch (error) {
    console.log(error);
  }
};
