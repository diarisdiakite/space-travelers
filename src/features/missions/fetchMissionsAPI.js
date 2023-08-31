// import axios from 'axios';
const FEATURE_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissionsAPI = async () => {
  /* try {
    const response = await axios.get(FEATURE_URL);

    if (response.status !== 200) {
      throw new Error('Failed to fetch missions');
    }

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
  } */
  try {
    const response = await fetch(FEATURE_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch missions');
    }

    const data = await response.json();
    return data.map((mission) => ({
      ...mission,
      reserved: false,
    }));
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
  }
};

export default fetchMissionsAPI;
