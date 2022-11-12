import axios from "axios";

const url = "https://apiscraping.onrender.com/api/v1/scraping/";

const scraping = async (search) => {
  if (search) {
    const { data } = await axios.get(`${url}${search}`);
    return data;
  } else {
    const { data } = await axios.get(`${url}`);
    return data;
  }
};

export default scraping;
