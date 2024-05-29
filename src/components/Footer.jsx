import React,{ lazy } from 'react'
import styled from 'styled-components'
// import gulogo from '../assets/images/gu_logo_2.png'
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin
} from 'react-icons/ai'
import { getImageURL } from '../utils/image-util'
const Map = React.lazy(() => import('./Map'))


const ThreadsIcon = (props) =>
  <svg height={props.size} width={props.size} stroke="currentColor" fill="currentColor" aria-label="Threads" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path className="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>

export const social = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/infofest.unigoa/',
    icon: AiOutlineInstagram
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100091512002371',
    icon: AiOutlineFacebook
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/@InfoFestGoaUniversity',
    icon: AiOutlineYoutube
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/infofest_unigoa',
    icon: AiOutlineTwitter
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/infofestunigoa/',
    icon: AiOutlineLinkedin
  },
  {
    name: 'Threads',
    link: 'https://www.threads.net/@infofest.unigoa',
    icon: ThreadsIcon
  },
]

export default function Footer({ ...props }) {
  return (
    <Wrapper {...props} className='cyber-razor-top bg-slate-800'>
      <div className="container">
        <div className="row">
          <div className='wrap'>
            {/* <img className='gu-logo' src={getImageURL('gu_logo_2.png')} alt="Goa University" /> */}
            <div>
              <h4>Goa University</h4>
              <h5>Goa Business School</h5>
              <p>Discipline of Computer Science & Technology</p>
              <p>
                <a href="mailto:infofest@unigoa.ac.in" className='flex items-center '>
                  <AiOutlineMail size={26} /> infofest@unigoa.ac.in
                </a>
              </p>
            </div>
          </div>
          <div className="contact">
            {social.map((item, index) =>
              <a href={item.link} key={index} className='contact__item' target="_blank" rel="noreferrer" title={item.name}>
                <item.icon size={36} />
              </a>
            )}
          </div>
        </div>
        <div className="row">
          <React.Suspense fallback={<div />}>
            <Map lat={15.459461438680943} lng={73.82432171434024} />
          </React.Suspense>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  margin-top: 4rem;

  .container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    letter-spacing: 2px;
    max-width: 990px;
    margin: 0 auto;
  }

  .row {
    width: 50%;
    padding: 2rem;
  }

  .gu-logo {
    height: 120px;
  }

  .wrap {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    div {
      margin-left: 1rem;
      
      h4, h5 {
        margin: 0;
      }

      h5 {
        font-weight: normal;
        font-size: .9rem;
      }

      p {
        font-size: .8rem;
        font-weight: normal;
        margin: 0;
        opacity: .7;
      }

    }
  }

  .contact {
    padding-top: 1rem;
    margin-left: 3px;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: .5rem;

    &__item {
      width: auto;
      color: white;

      &:hover {
        color: #3b96d8;
      }
    }
  }

  @media screen and (max-width: 628px) {
    .container{
      flex-direction: column;
      padding: 1rem;
      width: auto;
    }

    .row {
      width: 95%;
      padding: 1rem 0;
    }
  }
`
