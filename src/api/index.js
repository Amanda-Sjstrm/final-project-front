import axios from "axios";

export const getPlacesData = async (sw, ne) => {
  try {
    const response = await axios.get(`https://final-project-api-d77e5zoeyq-lz.a.run.app/`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
