import React from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { createEventId, getRotationArr } from './event_utils';
import axios from 'axios';
import getAddress from '@globalObj/function/getAddress';
import { getToken } from '@cert/TokenStorage';
import errorAlert from '@globalObj/function/errorAlert';
import '@css/Rotation/Calendar.scss';
import { getAuth } from '@cert/AuthStorage';

export default class Calendar extends React.Component {
  intraId = getAuth() ? getAuth().id : null;
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'today',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={getRotationArr} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            eventDrop={handleDragAndDrop}
          />
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo) => {
    let title = this.intraId;
    if (title == null) {
      alert('로그인을 먼저 해주세요!');
      return;
    }
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
    if (title) {
      axios
        .patch(
          `${getAddress()}/api/rotation/update`,
          {
            intraId: title,
            before: '',
            after: selectInfo.startStr,
          },
          {
            headers: {
              Authorization: 'Bearer ' + getToken(),
            },
          },
        )
        .catch((err) => errorAlert(err));
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        color: '#e79f5a',
      });
    }
  };

  handleEventClick = (clickInfo) => {
    let title = this.intraId;
    if (title == null) {
      alert('로그인을 먼저 해주세요!');
      return;
    }
    if (title != clickInfo.event.title) {
      alert('본인 일정만 삭제가 가능합니다.');
      return;
    }
    if (confirm(`'${clickInfo.event.title}'를 삭제합니다`)) {
      axios
        .delete(`${getAddress()}/api/rotation/update`, {
          headers: {
            Authorization: 'Bearer ' + getToken(),
          },
          data: {
            intraId: clickInfo.event.title,
            date: clickInfo.event.startStr,
          },
        })
        .catch((err) => errorAlert(err));
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  );
}

function handleDragAndDrop(eventDropInfo) {
  var intraId = getAuth() ? getAuth().id : null;
  if (intraId == null) {
    alert('로그인을 먼저 해주세요!');
    return;
  }
  if (intraId != eventDropInfo.event.title) {
    alert('본인 일정만 변경이 가능합니다.');
    return;
  }
  axios
    .patch(
      `${getAddress()}/api/rotation/update`,
      {
        intraId: eventDropInfo.event.title,
        before: eventDropInfo.oldEvent.startStr,
        after: eventDropInfo.event.startStr,
      },
      {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        },
      },
    )
    .catch((err) => errorAlert(err));
}
