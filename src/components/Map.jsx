import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { getImageURL } from '../utils/image-util'

export default function Map({ lat, lng, containerStyles }) {
  return (
    <a href={`https://maps.google.com?q=${lat},${lng}`} target='_blank'>
      <Container style={containerStyles}>
        <MapContainer
          center={[lat, lng]}
          zoom={15}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          zoomControl={false}
          dragging={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[lat, lng]}
            icon={L.icon({
              iconUrl: getImageURL('marker-icon.png'),
              iconSize: [28, 40],
              iconAnchor: [20, 40],
              popupAnchor: [0, -40]
            })}
          />
        </MapContainer>
      </Container >
    </a>
  )
}

const Container = styled.div`
  height: 220px;
  padding: 5px;
  background-color: #3b96d8;

  &, & > div {
    clip-path: polygon(0px 0px, 0px calc(100% - 26px), 26px 100%, 100% 100%, 100% 26px, calc(100% - 26px) 0px);
  }

  & > div {
    height: 100%;
  }

  .leaflet-control-attribution {
    display: none;
  }

  .leaflet-tile-pane {
    filter: brightness(60%) invert(100%) contrast(300%) hue-rotate(268deg) saturate(24%) brightness(100%);
  }
`
