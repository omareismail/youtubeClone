import axios from "axios";

const key = "AIzaSyA7s67tDTkKhIUi6opSqb8-RBFXoUvHUuc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "Snippet",
    maxResult: 15,
    key: key,
  },
});
