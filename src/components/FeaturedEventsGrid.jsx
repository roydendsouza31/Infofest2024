import React from 'react'
import events from '../events';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './ui/moving-border';
// import bgevent from '../assets/event.png'
// import { Util } from 'leaflet';

export default function FeaturedEventsGrid() {
  return (
    <div className='bg-cover bg-center py-5 text-white'>
      <h2 className='text-2xl font-semibold px-10 py-5'>Event</h2>
      <Grid>
        {events.slice(0, 5).map((event, idx) => (
          <Card key={idx} event={event} index={idx} />
        ))}
      </Grid>

       <div className='flex justify-center'> 
      <Button className="font-semibold bg-black" containerClassName="">
        <Link to="/events">More Events</Link>
      </Button>
      </div>
    </div>
  )
}

const Grid = styled.div`
  grid-gap: 23px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2,minmax(198px,auto));
  margin: 0;
  padding: .5rem 2rem;

  & > a { position: relative }

  & > a:first-child {
    grid-column: 1;
    grid-row: 1/span 2;

    &::after {
      content: '';
      background-color: #000;
      border-left: 1px solid #979797;
      top: -11px;
      height: 22px;
      position: absolute;
      left: -13px;
      transform: rotate(-135deg);
      width: 24px;
    }
  }

  & > a:last-child::after {
    content: '';
    background-color: #000;
    border-bottom: 1px solid #979797;
    bottom: -11px;
    height: 22px;
    position: absolute;
    right: -11px;
    transform: rotate(135deg);
    width: 24px;
  }


  @media screen and (max-width: 767px) {
    grid-gap: 4px;
    grid-template-columns: 1fr;
    grid-template-rows: 212px repeat(4,minmax(110px,auto));

    & > a:first-child {
      grid-column: 1;
      grid-row: 1;
    }
  }
`

const Card = ({ event, index }) => {
  return (
    <Link to={`/events/${event.slug}`}>
      <StyledCard $bg={event.image}>
        <div className="bg-overlay"></div>
        <div className="title">
          <h3><span>{(index == 0) ? event.title : event.codeName.toUpperCase()}</span></h3>
          <p>{(index == 0) ? event.description : event.title}</p>
        </div>
        <div className="meta">
          {/* <span className="date">{event.date.replaceAll('-', '.')}</span> */}
          <button className="more-button"><span>more</span></button>
        </div>
      </StyledCard>
    </Link>
  )
}

const StyledCard = styled.div`
  align-items: flex-end;
  border: 1px solid #979797;
  box-sizing: border-box;
  color: #cdcdcd;
  display: flex;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 30px 30px;
  position: relative;
  text-decoration: none;
  background: url('${props => props.$bg}') no-repeat;
  background-size: cover;
  position: relative;

  .bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100% );
  }

  .title, .meta {
    z-index: 1;
  }

  & .title { padding-top: 100px; }
  & p { font-family: BlenderProBold,sans-serif }

  & .meta {
    position: absolute;
    right: 24px;
    top: 44px;
  }

  & .more-button, & .date {
    color: #cdcdcd;
    display: block;
    font-family: BlenderProBold,sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-style: none;
    background: none;
  }

  & .more-button { display: none;  cursor: pointer; }

  &:hover {
    background: #cdcdcd;
    color: #000;
    * { color: #000 !important; }
    .date { display: none; }
    .more-button { display: block; }

    &::after { background: #000 }

    .bg-overlay { opacity: 0 }
  }

  &::after {
    background: #cdcdcd;
    content: "";
    display: block;
    height: 3px;
    left: 29px;
    position: absolute;
    top: 52px;
    width: 53px;
  }

  @media screen and (max-width: 767px) {
    &.title { padding-top: 50px; }
    & .meta { top: 19px; }
    &::after { top: 26px; }
  }
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  
  a {
    color: #cdcdcd;
    padding: 10px 20px;
    border: 1px solid #979797;

    &:hover {
      background: #cdcdcd;
      color: #000;
    }
  }

`
