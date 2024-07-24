import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../services/eventService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventService.getEvents().then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h1>Indian Cultural Events</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <Link to={`/event/${event._id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
