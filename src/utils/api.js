import axios from "axios";
import { BASE_API } from "./constants";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async (type) => {
  try {
    const response = await axios.get(`${BASE_API}/${type}stories.json`);
    const storyIds = response.data;
    const stories = await Promise.all(storyIds.slice(0, 20).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
