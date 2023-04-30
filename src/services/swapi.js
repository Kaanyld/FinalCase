import axios from "axios";
export const getStarships = async (url = "https://swapi.dev/api/starships/") => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getImages = async (images ="../data/Image.json") => {
  try {
    const response = await axios.get(images);
    return response.data;
  }
  catch(error){
    console.error(error);
  }
};

