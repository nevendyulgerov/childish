import React, { Component } from 'react';
import uid from 'uid';
import tlite from 'tlite';
import 'tlite/tlite.css';
import DatePicker from './DatePicker';
import api from '../api/';

class Events extends Component {
    state = {
        events: [],
        isLoading: false
    };

    componentWillMount() {
        this.getEvents();
    }

    getEvents = () => {
        api.events.getItems()
            .then(this.setEvents)
            .catch(this.onError);
    };

    setEvents = (res) => {
        const events = res.data;

        const nextEvents = events.map((event) => ({
            ...event,
            id: uid()
        }));

        this.setState({
            events: nextEvents,
            isLoading: false
        })
    };

    onError = () => {
        this.setState({
            isLoading: false
        });
    };

    onChangeEventDate = ({ id }, date) => {
        const { events } = this.state;
        const nextEvents = events.map((event) => ({
            ...event,
            date: event.id === id
                ? date
                : event.date
        }));

        this.setState({
            events: nextEvents
        });
    };

    onHoverIn = (event) => {
        const targetEvent = document.querySelector(`.event-${event.id}`);

        tlite.show(targetEvent, {
            grav: 's'
        });
    };

    onHoverOut = (event) => {
        const targetEvent = document.querySelector(`.event-${event.id}`);

        tlite.hide(targetEvent);
    };

    render() {
        const { events, isLoading } = this.state;

        return (
            <div className="events">
                <h2>
                    {isLoading ? 'Loading...' : 'Events'}
                </h2>

                {events.map((event) => (
                    <div
                        key={event.id}
                        className={`event event-${event.id}`}
                        title={event.title}
                        onMouseEnter={() => this.onHoverIn(event)}
                        onMouseLeave={() => this.onHoverOut(event)}
                    >
                        <DatePicker
                            value={event.date}
                            onChange={(dates, date) => this.onChangeEventDate(event, date)}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default Events;
