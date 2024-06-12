import React from 'react'
import styled from 'styled-components'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import listPlugin from '@fullcalendar/list';
import events from '../events'
import dayjs from 'dayjs'
import uniqBy from 'lodash/uniqBy'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'
// import MetaTags from '../components/MetaTags';

const startDate = '2024-09-10'
const endDate = '2024-09-11'
const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
console.log(todayStr) 
const initalDate = new Date((todayStr >= startDate && todayStr <= endDate) ? todayStr : startDate)

// function to convet 12 hour time to 24 hour time ex: 12:00 AM to 00:00
const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === '12')
    hours = '00';

  if (modifier === 'PM')
    hours = parseInt(hours, 10) + 12;

  return `${hours}:${minutes}`;
}

const INITIAL_EVENTS = events.map((event, idx) => ({
  id: event.slug,
  title: event?.codeName?.toUpperCase() ?? event.title,
  resourceId: event.venue,
  start: dayjs(new Date(event.date)).format('YYYY-MM-DD') + 'T' + convertTime12to24(event.time.from),
  end: dayjs(new Date(event.end_date ?? event.date)).format('YYYY-MM-DD') + 'T' + convertTime12to24(event.time.to),
}))

const VENUES = uniqBy(events, 'venue')
  .map((event) => ({
    id: event.venue,
    title: event.venue,
    lat: event.lat,
    lng: event.lng,
  }))

const EVENTS = [
  ...INITIAL_EVENTS,
  {
    title: 'Registrations/Reporting',
    resourceId: 'GU Chemical Science Auditorium (Block E)',
    start: '2023-08-10T09:00:00',
    end: '2023-08-10T09:30:00',
  },
  {
    title: 'INAUGRAL',
    resourceId: 'GU Chemical Science Auditorium (Block E)',
    start: '2023-08-10T09:30:00',
    end: '2023-08-10T10:00:00',
  },
  {
    title: 'Registrations/Reporting',
    resourceId: 'Goa Business School',
    start: '2023-08-11T09:00:00',
    end: '2023-08-11T10:00:00',
  },
  {
    title: 'VID CRED Submission',
    resourceId: 'Online',
    start: '2023-08-11T09:00:00',
    end: '2023-08-11T12:00:00',
  },
  {
    id: 'Hackathon',
    title: 'Hackathon (Presentation & Judging)',
    resourceId: 'Computer Science & Technology (Office Block Class)',
    start: '2023-08-11T10:00:00',
    end: '2023-08-11T13:00:00',
  },
  {
    title: 'Closing & Prize Distribution',
    resourceId: 'GU Chemical Science Auditorium (Block E)',
    start: '2023-08-11T16:00:00',
    end: '2023-08-11T18:30:00',
  }
]

export default function Schedule() {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const navigate = useNavigate();

  return (
    <StyledWrapper className='font-orbitron text-white'>
      {/* <MetaTags title='Schedule' description='Infofest 2023 Schedule' /> */}
      <FullCalendar
        key={isMobile}
        schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
        plugins={[resourceTimelinePlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'resourceTimeline,listWeek'
        }}
        initialView={isMobile ? 'listWeek' : 'resourceTimeline'}
        initialEvents={EVENTS} // alternatively, use the `events` setting to fetch from a feed
        initialDate={initalDate}
        editable={false}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={({ event }) => {
          navigate(`/events/${event._def.publicId}`)
        }}
        buttonText={{
          resourceTimeline: 'Timeline',
          listWeek: 'List',
        }}
        resources={VENUES}
        views={{
          listWeek: {
            contentHeight: `calc(41px * ${EVENTS.length + 2})`
          },
          resourceTimeline: {
            resourceAreaWidth: '20%',
            resourceAreaHeaderContent: 'Venues',
            slotMinTime: '09:00:00',
            contentHeight: '78vh',
            slotMinWidth: 50,
            // add tooltip to show event title
            eventMouseEnter: (info) => {
              const el = info.el
              el.setAttribute('title', info.event.title)
            }
          }
        }}

        validRange={{
          start: new Date(startDate),
          end: new Date(endDate + 'T18:00')
        }}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin: 1rem auto;
  margin-top: 5rem;
  padding: 0 1rem;
  max-width: 1145px;

  

  @-moz-document url-prefix() {
    .fc-scrollgrid.fc-scrollgrid-liquid > tbody > tr:first-child {
      background: #10002d;
    }
  }

  .fc-scrollgrid-section.fc-scrollgrid-section-body {
    // background: #040513;
  }

  .fc-scrollgrid thead {
    // background: #10002d;
    background:orange;
  }

  .fc .fc-list-sticky .fc-list-day > * {
    background:orange;
    z-index: 1;
  }

  .fc-theme-standard .fc-list-day-cushion, .fc .fc-cell-shaded, .fc .fc-day-disabled {
    background-color: none;
    background: none;
  }
  
  .fc-list-table tbody, .fc-timeline-event-harness {
    cursor: pointer;
  }

  .fc .fc-list-event:hover td {
    // background-color:#f99a02;
    background:white;
    color:black;
  
  }

  a.fc-list-day-text, a.fc-list-day-side-text {
    color: #fff !important;
  }

  .fc-button-group {
    // clip-path: polygon(0px 0px,0px calc(100% - 15px),15px 100%,100% 100%,100% 15px,calc(100% - 15px) 0px);

    & button.fc-listWeek-button {
      min-width: 4.5rem;
    }

    & button:focus {
      outline: none;
    }
  }

  a.fc-timeline-slot-cushion.fc-scrollgrid-sync-inner {
    color: #fff;
  }

  .fc-h-event {
    background: linear-gradient(to right, #f99a02, #ec5600);
    border: none;
  }

  @media screen and (max-width: 640px) {
    .fc .fc-toolbar.fc-header-toolbar {
      flex-wrap: wrap;
      margin-top: 1rem;
      & .fc-toolbar-chunk:nth-child(2) {
        margin-bottom: .2rem;
        order: -1;
        width: 100vw;
      }
    }
  }
`
