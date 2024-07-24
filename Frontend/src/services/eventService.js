const API_URL = 'http://localhost:5000/events';

const getEvents = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const getEvent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export default {
  getEvents,
  getEvent
};
