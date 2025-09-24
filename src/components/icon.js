import React from 'react'

import PropTypes from 'prop-types'

import './icon.css'

const Icon = (props) => {
  return (
    <div
      data-type={props.type}
      className={`icon-container ${props.rootClassName} `}
    >
      {props.type === 'repeat' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7 23L3 19L7 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 1L21 5L17 9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'rewind' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 19L13 12L22 5V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 19L2 12L11 5V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'ccw' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M1 4V10H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.51 15C4.15839 16.8404 5.38734 18.4202 7.01166 19.5014C8.63598 20.5826 10.5677 21.1066 12.5157 20.9945C14.4637 20.8824 16.3226 20.1402 17.8121 18.8798C19.3017 17.6193 20.3413 15.909 20.7742 14.0064C21.2072 12.1037 21.0101 10.112 20.2126 8.3311C19.4152 6.55025 18.0605 5.0768 16.3528 4.13277C14.6451 3.18874 12.6769 2.82527 10.7447 3.09712C8.81245 3.36897 7.02091 4.26142 5.64 5.64L1 10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cw' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 4V10H17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20.49 15C19.84 16.8399 18.6096 18.4187 16.9842 19.4985C15.3588 20.5783 13.4265 21.1006 11.4784 20.9866C9.53038 20.8726 7.67216 20.1286 6.18376 18.8667C4.69536 17.6047 3.65743 15.8932 3.22637 13.9901C2.79531 12.0869 2.99448 10.0952 3.79386 8.31507C4.59325 6.53495 5.94954 5.06286 7.65836 4.12064C9.36717 3.17841 11.3359 2.8171 13.268 3.09114C15.2 3.36518 16.9906 4.25974 18.37 5.64L23 10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'rss' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'save' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 21V13H7V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 3V8H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'scissors' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 4L8.12 15.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.47 14.48L20 20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.12 8.12L12 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'search' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 21L16.65 16.65"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'send' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 2L11 13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'server' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 18H6.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 6H6.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bar-chart2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 20V14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 20V10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 20V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bar-chart' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 20V16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 20V10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 20V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'battery-charging' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 13V11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.19M15 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H13.81"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 6L7 12H13L9 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'battery' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 13V11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 6H3C1.89543 6 1 6.89543 1 8V16C1 17.1046 1.89543 18 3 18H17C18.1046 18 19 17.1046 19 16V8C19 6.89543 18.1046 6 17 6Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'aperture' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.31 8L20.05 17.94"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.69 8H21.17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7.38 12L13.12 2.06"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.69001 16L3.95001 6.06"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.31 16H2.83002"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.62 12L10.88 21.94"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'settings' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5162)">
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5162">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'share2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.59 13.51L15.42 17.49"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.41 6.50999L8.59 10.49"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'share' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 6L12 2L8 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'shield-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5166)">
            <path
              d="M19.69 14C19.8911 13.3522 19.9955 12.6783 20 12V5L12 2L8.84 3.18"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.73 4.73L4 5V12C4 18 12 22 12 22C14.117 20.8829 16.0197 19.4001 17.62 17.62"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5166">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'shield' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'shopping-bag' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 6H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'shopping-cart' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'shuffle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 3H21V8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 20L21 3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 16V21H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 15L21 21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 4L9 9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'sidebar' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 3V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'skip-back' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5 19V5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19 20L9 12L19 4V20Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bookmark' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'box' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 16V7.99999C20.9996 7.64927 20.9071 7.3048 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.3048 3.00036 7.64927 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.27002 6.96001L12 12.01L20.73 6.96001"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22.08V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'briefcase' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'calendar' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 10H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 2V6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 2V6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'archive' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 8V21H3V8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 12H14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M23 3H1V8H23V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'skip-forward' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 5V19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 4L15 12L5 20V4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'slack' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15.5 19H14V20.5C14 21.33 14.67 22 15.5 22C16.33 22 17 21.33 17 20.5C17 19.67 16.33 19 15.5 19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.5 14C10.33 14 11 14.67 11 15.5V20.5C11 21.33 10.33 22 9.5 22C8.67 22 8 21.33 8 20.5V15.5C8 14.67 8.67 14 9.5 14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.5 14H5V15.5C5 16.33 4.33 17 3.5 17C2.67 17 2 16.33 2 15.5C2 14.67 2.67 14 3.5 14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 14.5C14 13.67 14.67 13 15.5 13H20.5C21.33 13 22 13.67 22 14.5C22 15.33 21.33 16 20.5 16H15.5C14.67 16 14 15.33 14 14.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 9.5C10 8.67 9.33 8 8.5 8H3.5C2.67 8 2 8.67 2 9.5C2 10.33 2.67 11 3.5 11H8.5C9.33 11 10 10.33 10 9.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20.5 10H19V8.5C19 7.67 19.67 7 20.5 7C21.33 7 22 7.67 22 8.5C22 9.33 21.33 10 20.5 10Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.5 10C13.67 10 13 9.33 13 8.5V3.5C13 2.67 13.67 2 14.5 2C15.33 2 16 2.67 16 3.5V8.5C16 9.33 15.33 10 14.5 10Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2C7.67 2 7 2.67 7 3.5C7 4.33 7.67 5 8.5 5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'slash' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.92999 4.92999L19.07 19.07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'sliders' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 21V16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 16H23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 21V14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 14H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 21V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 8H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 12V3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8V3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 10V3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'smartphone' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'smile' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 9H15.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 9H9.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'speaker' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 6H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'square' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'star' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'stop-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 9H9V15H15V9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevron-down' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevron-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevron-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevron-up' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-down-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12L12 16L16 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8V16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'sun' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5186)">
            <path
              d="M12 21V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.36 18.36L19.78 19.78"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.22 19.78L5.64 18.36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21 12H23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 12H3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.36 5.64L19.78 4.22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.22 4.22L5.64 5.64"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 1V3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5186">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'sunrise' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 22H1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 18H23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 18H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.36 11.64L19.78 10.22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.22 10.22L5.64 11.64"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2V9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 6L12 2L16 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'sunset' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 22H1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 18H23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 18H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.36 11.64L19.78 10.22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.22 10.22L5.64 11.64"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 9V2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 5L12 9L8 5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'tablet' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'tag' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 7H7.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'target' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'terminal' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 19H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 17L10 11L4 5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'thermometer' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5246)">
            <path
              d="M14 14.76V3.5C14 2.83696 13.7366 2.20107 13.2678 1.73223C12.7989 1.26339 12.163 1 11.5 1C10.837 1 10.2011 1.26339 9.73223 1.73223C9.26339 2.20107 9 2.83696 9 3.5V14.76C8.19728 15.2963 7.58832 16.0766 7.26307 16.9856C6.93782 17.8946 6.91352 18.8841 7.19376 19.8079C7.47399 20.7317 8.04391 21.541 8.81934 22.1161C9.59476 22.6912 10.5346 23.0017 11.5 23.0017C12.4654 23.0017 13.4052 22.6912 14.1807 22.1161C14.9561 21.541 15.526 20.7317 15.8062 19.8079C16.0865 18.8841 16.0622 17.8946 15.7369 16.9856C15.4117 16.0766 14.8027 15.2963 14 14.76Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5246">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'thumbs-down' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 2H19.67C20.236 1.98999 20.7859 2.18813 21.2154 2.55681C21.645 2.9255 21.9242 3.43905 22 4V11C21.9242 11.5609 21.645 12.0745 21.2154 12.4432C20.7859 12.8119 20.236 13.01 19.67 13H17M10 15V19C10 19.7956 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L17 13V2H5.72003C5.2377 1.99454 4.76965 2.16359 4.40212 2.47599C4.0346 2.78839 3.79235 3.22309 3.72003 3.7L2.34003 12.7C2.29652 12.9866 2.31586 13.2793 2.39669 13.5577C2.47753 13.8362 2.61793 14.0937 2.80817 14.3125C2.99842 14.5313 3.23395 14.7061 3.49846 14.8248C3.76297 14.9435 4.05012 15.0033 4.34003 15H10Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'thumbs-up' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'clipboard' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'clock' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 6V12L16 14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cloud-drizzle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5058)">
            <path
              d="M12 21V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 19V21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 19V21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 15V17"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 13V15"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 13V15"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2915C22.964 13.2715 23.1231 12.1016 22.8886 10.9782C22.654 9.85476 22.0402 8.84622 21.15 8.12184C20.2599 7.39746 19.1476 7.00135 18 7H16.74C16.423 5.77252 15.8188 4.63795 14.9773 3.6898C14.1357 2.74166 13.0809 2.00708 11.8997 1.54662C10.7186 1.08617 9.44488 0.91302 8.18365 1.04145C6.92243 1.16987 5.70978 1.5962 4.64567 2.28529C3.58155 2.97437 2.69644 3.90649 2.06328 5.0048C1.43012 6.10311 1.06704 7.33618 1.00398 8.60235C0.940923 9.86853 1.17968 11.1316 1.70058 12.2874C2.22147 13.4431 3.00959 14.4586 3.99997 15.25"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5058">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'cloud-lightning' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5059)">
            <path
              d="M19 16.9C20.2151 16.6532 21.2953 15.9638 22.0307 14.9655C22.7661 13.9671 23.1043 12.7312 22.9797 11.4975C22.8551 10.2638 22.2765 9.12046 21.3563 8.28937C20.4361 7.45828 19.2399 6.99875 18 6.99999H16.74C16.4087 5.71731 15.764 4.53698 14.8639 3.56498C13.9638 2.59298 12.8363 1.85972 11.5828 1.43106C10.3293 1.00239 8.98897 0.891726 7.68213 1.109C6.37529 1.32628 5.14287 1.86469 4.0955 2.6759C3.04814 3.48711 2.21862 4.54573 1.68143 5.75671C1.14424 6.96768 0.916185 8.29311 1.01775 9.61399C1.11931 10.9349 1.54731 12.2098 2.26332 13.3245C2.97932 14.4391 3.96093 15.3584 5.12 16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13 11L9 17H15L11 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5059">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'arrow-down-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 7L7 17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 17H7V7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'toggle-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 5H8C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19H16C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 15C9.65685 15 11 13.6569 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'toggle-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 5H8C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19H16C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'tool' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M14.7 6.30001C14.5168 6.48694 14.4141 6.73826 14.4141 7.00001C14.4141 7.26176 14.5168 7.51308 14.7 7.70001L16.3 9.30001C16.4869 9.48324 16.7382 9.58587 17 9.58587C17.2617 9.58587 17.5131 9.48324 17.7 9.30001L21.47 5.53001C21.9728 6.6412 22.1251 7.87924 21.9065 9.07916C21.6878 10.2791 21.1087 11.3839 20.2463 12.2463C19.3838 13.1087 18.279 13.6878 17.0791 13.9065C15.8792 14.1251 14.6412 13.9728 13.53 13.47L6.61999 20.38C6.22217 20.7778 5.6826 21.0013 5.11999 21.0013C4.55738 21.0013 4.01782 20.7778 3.61999 20.38C3.22217 19.9822 2.99867 19.4426 2.99867 18.88C2.99867 18.3174 3.22217 17.7778 3.61999 17.38L10.53 10.47C10.0272 9.35882 9.87491 8.12078 10.0935 6.92087C10.3122 5.72095 10.8913 4.61617 11.7537 3.75373C12.6161 2.8913 13.7209 2.31218 14.9208 2.09355C16.1208 1.87493 17.3588 2.02718 18.47 2.53001L14.71 6.29001L14.7 6.30001Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'trash2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M3 6H5H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 11V17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 11V17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'trash' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M3 6H5H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'trello' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 7H14V12H17V7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 7H7V16H10V7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'trending-down' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 18L13.5 8.5L8.5 13.5L1 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 18H23V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'trending-up' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 6L13.5 15.5L8.5 10.5L1 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 6H23V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'triangle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M10.29 3.85999L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9962 3.53002 21H20.47C20.8192 20.9962 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.85999C13.5318 3.5661 13.2807 3.32311 12.9812 3.15447C12.6817 2.98584 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98584 11.0188 3.15447C10.7193 3.32311 10.4683 3.5661 10.29 3.85999V3.85999Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'truck' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 8H20L23 11V16H16V8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 3H1V16H16V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'codesandbox' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 16V7.99999C20.9996 7.64927 20.9071 7.3048 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.3048 3.00036 7.64927 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 12L16.5 14.6V19.79"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7.5 19.79V14.6L3 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.27002 6.95999L12 12.01L20.73 6.95999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22.08V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7.5 4.20999L12 6.80999L16.5 4.20999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'coffee' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 1V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 1V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 1V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'columns' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 3V21M12 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H12V3ZM12 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H12V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'command' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-down-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7 7L17 17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 7V17H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'tv' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V9C22 7.89543 21.1046 7 20 7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 2L12 7L7 2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'twitch' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 11V7M21 2H3V18H8V22L12 18H17L21 14V2ZM11 11V7V11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'type' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9 20H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 7V4H20V7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 4V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'umbrella' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22C14.2044 22 13.4413 21.6839 12.8787 21.1213C12.3161 20.5587 12 19.7956 12 19V12M23 12C22.7388 9.26357 21.467 6.72275 19.433 4.87366C17.399 3.02458 14.7489 2 12 2C9.25114 2 6.60096 3.02458 4.56697 4.87366C2.53297 6.72275 1.2612 9.26357 1 12H23Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'underline' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 21H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 3V10C6 11.5913 6.63214 13.1174 7.75736 14.2426C8.88258 15.3679 10.4087 16 12 16C13.5913 16 15.1174 15.3679 16.2426 14.2426C17.3679 13.1174 18 11.5913 18 10V3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'unlock' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 11V7C6.99876 5.76005 7.45828 4.56387 8.28938 3.64367C9.12047 2.72347 10.2638 2.1449 11.4975 2.02029C12.7312 1.89568 13.9671 2.2339 14.9655 2.96931C15.9638 3.70472 16.6533 4.78485 16.9 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'upload-cloud' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5248)">
            <path
              d="M16 16L12 12L8 16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 12V21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20.39 18.39C21.3653 17.8583 22.1358 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6902 21.9435 10.7355 21.0667 10.0535C20.1898 9.3714 19.1109 9.00075 18 9.00001H16.74C16.4373 7.82926 15.8732 6.74235 15.0899 5.82101C14.3067 4.89967 13.3248 4.16786 12.2181 3.68062C11.1113 3.19338 9.90854 2.96337 8.70011 3.0079C7.49167 3.05242 6.30906 3.37031 5.24117 3.93768C4.17328 4.50505 3.2479 5.30712 2.53461 6.2836C1.82132 7.26008 1.33868 8.38555 1.12297 9.57541C0.90726 10.7653 0.964096 11.9885 1.2892 13.1533C1.61431 14.318 2.19923 15.3939 2.99999 16.3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 16L12 12L8 16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5248">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'upload' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 8L12 3L7 8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 3V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'user-check' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 11L19 13L23 9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'corner-right-down' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M10 15L15 20L20 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 4H11C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'corner-right-up' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M10 9L15 4L20 9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 20H11C12.0609 20 13.0783 19.5786 13.8284 18.8284C14.5786 18.0783 15 17.0609 15 16V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'corner-up-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9 14L4 9L9 4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'corner-up-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15 14L20 9L15 4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 20V13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-down' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 5V19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19 12L12 19L5 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'user-minus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M23 11H17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'user-plus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 8V14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M23 11H17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'user-x' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 8L23 13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M23 8L18 13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'user' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'users' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'video-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5278)">
            <path
              d="M10.66 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V10.34L17 11.34L23 7V17M16 16V17C16 17.5304 15.7893 18.0391 15.4142 18.4142C15.0391 18.7893 14.5304 19 14 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V7C1 6.46957 1.21071 5.96086 1.58579 5.58579C1.96086 5.21071 2.46957 5 3 5H5L16 16Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5278">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'video' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 7L16 12L23 17V7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'voicemail' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5.5 16H18.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.5 16C20.9853 16 23 13.9853 23 11.5C23 9.01472 20.9853 7 18.5 7C16.0147 7 14 9.01472 14 11.5C14 13.9853 16.0147 16 18.5 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.5 16C7.98528 16 10 13.9853 10 11.5C10 9.01472 7.98528 7 5.5 7C3.01472 7 1 9.01472 1 11.5C1 13.9853 3.01472 16 5.5 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'volume1' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15.54 8.45999C16.4773 9.39763 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4773 14.5924 15.54 15.53"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 5L6 9H2V15H6L11 19V5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'volume2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M11 5L6 9H2V15H6L11 19V5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19.07 4.92999C20.9447 6.80527 21.9978 9.34835 21.9978 12C21.9978 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.45999C16.4773 9.39763 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4773 14.5924 15.54 15.53"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'disc' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'dollar-sign' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 1V23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'download-cloud' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5082)">
            <path
              d="M8 17L12 21L16 17"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 12V21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20.88 18.09C21.7494 17.4786 22.4014 16.6061 22.7413 15.5991C23.0812 14.5921 23.0914 13.503 22.7704 12.4898C22.4494 11.4766 21.8139 10.5921 20.9561 9.96456C20.0983 9.33703 19.0628 8.99916 18 8.99999H16.74C16.4392 7.82787 15.8765 6.73924 15.0941 5.81607C14.3117 4.89291 13.3301 4.15925 12.2232 3.67035C11.1163 3.18144 9.91284 2.95002 8.70352 2.99351C7.4942 3.037 6.31051 3.35426 5.24155 3.92142C4.17259 4.48858 3.24622 5.29084 2.53218 6.26782C1.81814 7.2448 1.33505 8.37104 1.11925 9.56174C0.903464 10.7524 0.960604 11.9766 1.28637 13.142C1.61214 14.3074 2.19805 15.3838 2.99999 16.29"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5082">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'download' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 10L12 15L17 10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 15V3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-left-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8L8 12L12 16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 12H8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'volume-x' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 9L17 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 9L23 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 5L6 9H2V15H6L11 19V5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'volume' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M11 5L6 9H2V15H6L11 19V5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'watch' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 9V12L13.5 13.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.51 17.35L16.16 21.18C16.1149 21.6786 15.8845 22.1422 15.5142 22.4792C15.1439 22.8162 14.6607 23.002 14.16 23H9.83C9.32932 23.002 8.8461 22.8162 8.4758 22.4792C8.1055 22.1422 7.87505 21.6786 7.83 21.18L7.48 17.35M7.49 6.64999L7.84 2.81999C7.8849 2.32306 8.11393 1.86087 8.48211 1.52414C8.8503 1.18741 9.33105 1.00046 9.83 0.999986H14.18C14.6807 0.997954 15.1639 1.18378 15.5342 1.52076C15.9045 1.85773 16.1349 2.32134 16.18 2.81999L16.53 6.64999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'wifi-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5198)">
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 20H12.01"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16.72 11.06C17.5391 11.4597 18.305 11.9603 19 12.55"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5 12.55C6.48208 11.3108 8.26587 10.4862 10.17 10.16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1.42 9C2.80716 7.77385 4.3977 6.79922 6.12 6.12"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.71 5.05001C12.8524 4.87738 15.0077 5.13818 17.0471 5.81683C19.0865 6.49549 20.9682 7.57809 22.58 9.00001"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5198">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'wifi' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 20H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 12.55C6.97656 10.9037 9.46761 10.0021 12.04 10.0021C14.6124 10.0021 17.1034 10.9037 19.08 12.55"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1.42001 9.00001C4.34244 6.42397 8.10431 5.00266 12 5.00266C15.8957 5.00266 19.6576 6.42397 22.58 9.00001"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'wind' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9.59 4.59001C9.82231 4.35633 10.1088 4.18366 10.4239 4.08735C10.739 3.99105 11.073 3.9741 11.3963 4.038C11.7195 4.10191 12.022 4.24469 12.2768 4.45366C12.5315 4.66263 12.7307 4.9313 12.8566 5.23581C12.9825 5.54031 13.0313 5.8712 12.9985 6.19908C12.9657 6.52695 12.8524 6.84164 12.6687 7.11517C12.4849 7.38871 12.2365 7.61261 11.9454 7.76698C11.6542 7.92135 11.3295 8.0014 11 8.00001H2M12.59 19.41C12.8223 19.6437 13.1088 19.8164 13.4239 19.9127C13.739 20.009 14.073 20.0259 14.3963 19.962C14.7195 19.8981 15.022 19.7553 15.2768 19.5464C15.5315 19.3374 15.7307 19.0687 15.8566 18.7642C15.9825 18.4597 16.0313 18.1288 15.9985 17.8009C15.9657 17.4731 15.8524 17.1584 15.6687 16.8849C15.4849 16.6113 15.2365 16.3874 14.9454 16.233C14.6542 16.0787 14.3295 15.9986 14 16H2M17.73 7.73001C18.0208 7.4399 18.3787 7.22593 18.7719 7.10703C19.1652 6.98812 19.5816 6.96795 19.9845 7.0483C20.3874 7.12865 20.7642 7.30703 21.0817 7.56768C21.3993 7.82833 21.6477 8.16321 21.805 8.5427C21.9623 8.9222 22.0236 9.33461 21.9836 9.74346C21.9436 10.1523 21.8035 10.545 21.5756 10.8868C21.3477 11.2286 21.0391 11.509 20.6771 11.7032C20.3151 11.8973 19.9108 11.9993 19.5 12H2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cancel-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 9L9 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 9L15 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cancel-octogon' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 9L9 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 9L15 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cancel-square' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 9L15 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 9L9 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cancel' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 6L6 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 6L18 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'eye' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'facebook' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'fast-forward' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M13 19L22 12L13 5V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 19L11 12L2 5V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'feather' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20.24 12.24C21.3658 11.1142 21.9983 9.58719 21.9983 7.99501C21.9983 6.40282 21.3658 4.87585 20.24 3.75001C19.1142 2.62416 17.5872 1.99167 15.995 1.99167C14.4028 1.99167 12.8758 2.62416 11.75 3.75001L5 10.5V19H13.5L20.24 12.24Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 8L2 22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17.5 15H9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 12H5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 19L5 12L12 5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'youtube' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 0.999999 11.75C0.988779 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42V6.42Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'zapp-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5219)">
            <path
              d="M18.57 12.91L21 10H15.66"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 8L3 14H12L11 22L16 16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12.41 6.75L13 2L10.57 4.92"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5219">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'zap' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'zoom-out' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 21L16.65 16.65"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 11H14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'zoom-in' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 21L16.65 16.65"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 8V14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 11H14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'git-commit' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17.01 12H22.96"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1.04999 12H6.99999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'git-branch' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 3V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'gift' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 12V22H4V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 7H2V12H22V7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22V7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'frown' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 9H15.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 9H9.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'framer' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5 16H12M5 16V9H19V2H5L19 16H12H5ZM5 16L12 23V16H5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'folder-plus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 11V17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 14H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'folder-minus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 14H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'flag' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 22V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'filter' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-right-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16L16 12L12 8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'folder' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-up-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 12L12 8L8 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16V8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-up-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 17L7 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 17V7H17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bell-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5185)">
            <path
              d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.63 13C18.1851 11.3714 17.973 9.68804 18 8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6.26 6.26001C6.08627 6.82362 5.99861 7.41023 6 8.00001C6 15 3 17 3 17H17"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18 7.99999C18.0016 6.91306 17.7079 5.8461 17.1503 4.91308C16.5927 3.98007 15.7922 3.21605 14.8341 2.70263C13.8761 2.18921 12.7966 1.94569 11.7109 1.99806C10.6252 2.05043 9.57417 2.39674 8.67 2.99999"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5185">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'bell' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'camera-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5181)">
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V17.34M15.28 15.28C14.9481 15.765 14.5134 16.171 14.0068 16.469C13.5002 16.7669 12.9342 16.9496 12.3489 17.004C11.7637 17.0584 11.1737 16.9831 10.6209 16.7836C10.0681 16.5841 9.56601 16.2652 9.15042 15.8496C8.73483 15.434 8.41593 14.9319 8.2164 14.3791C8.01688 13.8263 7.94163 13.2363 7.99601 12.6511C8.05039 12.0658 8.23306 11.4998 8.53103 10.9932C8.829 10.4866 9.23495 10.0519 9.72 9.72M21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6L21 21Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5181">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'camera' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevrons-down' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7 13L12 18L17 13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 6L12 11L17 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevrons-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M11 17L6 12L11 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 17L13 12L18 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cloud-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5254)">
            <path
              d="M22.61 16.95C22.9322 16.1893 23.0609 15.3606 22.9845 14.5381C22.9082 13.7155 22.6293 12.9246 22.1726 12.2362C21.716 11.5478 21.0959 10.9832 20.3677 10.593C19.6396 10.2027 18.8261 9.99902 18 10H16.74C16.3318 8.39249 15.4341 6.95158 14.171 5.87666C12.908 4.80173 11.3421 4.14593 9.68999 4M4.99999 5C3.43807 5.86364 2.2098 7.22478 1.51058 8.86691C0.811359 10.509 0.681344 12.3378 1.14122 14.0623C1.60109 15.7869 2.62444 17.3081 4.04847 18.384C5.47251 19.4599 7.21543 20.0288 8.99999 20H18C18.5798 19.9993 19.155 19.8978 19.7 19.7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5254">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'cloud-rain' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5264)">
            <path
              d="M16 13V21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 13V21"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 15V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 16.58C21.0512 16.1195 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1231 12.1016 22.8886 10.9781C22.6541 9.85472 22.0402 8.84617 21.15 8.12179C20.2599 7.39742 19.1476 7.00131 18 6.99996H16.74C16.423 5.77248 15.8189 4.63791 14.9773 3.68976C14.1358 2.74161 13.0809 2.00703 11.8998 1.54658C10.7186 1.08612 9.44491 0.912974 8.18368 1.0414C6.92246 1.16983 5.70981 1.59615 4.6457 2.28524C3.58158 2.97433 2.69647 3.90644 2.06331 5.00475C1.43015 6.10307 1.06708 7.33613 1.00401 8.60231C0.940954 9.86849 1.17971 11.1315 1.70061 12.2873C2.2215 13.4431 3.00962 14.4585 4 15.25"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5264">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'extensions' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <rect width="24" height="24" stroke="black"></rect>
          <path
            d="M8.30036 3.54327C8.01841 3.07303 8.20638 2.4147 8.67629 2.13256C9.24018 1.85042 9.89805 2.03852 10.18 2.50875L11.3078 4.38969L12.3416 3.73136C13.3754 3.16708 14.6911 3.44922 15.255 4.48374L19.0143 10.973C20.236 13.042 19.4842 15.6753 17.4166 16.8039L15.537 17.9325C15.9129 18.4967 16.2888 18.967 16.7587 19.3432C17.1346 19.6253 17.5106 19.8134 17.8865 19.8134C18.1684 19.9075 18.5444 19.8134 19.0143 19.5313L21.3638 18.2146C21.8337 17.9325 22.4916 18.1206 22.8675 18.5908C23.1495 19.061 22.9615 19.7194 22.4916 20.0955L20.1421 21.4122C19.2962 21.8824 18.4504 22.0705 17.6046 21.9765C16.7587 21.8824 16.1008 21.5063 15.537 21.036C14.7851 20.4717 14.2212 19.7194 13.7513 18.967L11.8717 20.0015C9.80407 21.2241 7.17258 20.4717 6.0448 18.4027L2.28553 11.9135C1.72164 10.8789 2.00358 9.56228 3.03738 8.998L3.9772 8.43371L2.84942 6.55277C2.56747 6.17659 2.75544 5.51826 3.22534 5.23612C3.69525 4.95397 4.35313 5.14207 4.72905 5.6123L5.85683 7.49324L9.42814 5.42421L8.30036 3.54327ZM13.5633 16.7099L10.7439 18.3087C9.71009 18.8729 8.39434 18.5908 7.83045 17.5563L4.07118 11.067L13.3754 5.70635L17.1346 12.1956C17.6985 13.2301 17.4166 14.5468 16.3828 15.1111L13.5633 16.7099Z"
            fill="#001350"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      )}
      {props.type === 'solutions' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16.39 9.00006C16.3828 7.95219 16.1438 6.9189 15.6901 5.97434C15.2363 5.02977 14.5792 4.19735 13.7657 3.53681C12.9522 2.87627 12.0026 2.40399 10.985 2.15385C9.96737 1.90372 8.90702 1.88193 7.88 2.09006C6.44238 2.35827 5.12646 3.07441 4.12059 4.13597C3.11471 5.19752 2.47045 6.55008 2.28 8.00006C2.11289 9.15367 2.23361 10.3307 2.6314 11.4264C3.02919 12.522 3.69172 13.5024 4.56 14.2801C5.49 15.1101 6.08 15.6601 6.08 16.9101V19.0001C6.07866 19.2521 6.12748 19.5019 6.22362 19.7349C6.31976 19.9679 6.4613 20.1794 6.63999 20.3572C6.81868 20.5349 7.03095 20.6754 7.26444 20.7703C7.49793 20.8652 7.74797 20.9127 8 20.9101H10.65C11.1539 20.9101 11.6372 20.7099 11.9935 20.3536C12.3498 19.9972 12.55 19.514 12.55 19.0101V17.0101C12.55 15.7101 13.15 15.1101 14.11 14.2301C14.8325 13.5645 15.4084 12.7557 15.801 11.8553C16.1936 10.9548 16.3942 9.98238 16.39 9.00006V9.00006Z"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.25 8.44C5.33861 7.5973 5.69858 6.80619 6.27571 6.18578C6.85284 5.56536 7.6159 5.14922 8.45 5"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.16 16.9301H12.29"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.05 21.22V22H10.4V21.13"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.71 20.91H16.39C16.8939 20.91 17.3772 20.7098 17.7335 20.3535C18.0898 19.9972 18.29 19.5139 18.29 19.01V17.01C18.29 15.71 18.89 15.11 19.86 14.23C20.6926 13.4592 21.3281 12.4999 21.713 11.4326C22.098 10.3653 22.2212 9.22124 22.0723 8.09646C21.9233 6.97168 21.5066 5.89907 20.8572 4.96874C20.2077 4.0384 19.3445 3.27752 18.34 2.75"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.34 2.74998C17.761 2.44623 17.1413 2.22732 16.5 2.09998"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.83 16.9301H18.06"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.72 21.22V22H16.17V21.13"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.39 9.00006C16.3828 7.95219 16.1438 6.9189 15.6901 5.97434C15.2363 5.02977 14.5792 4.19735 13.7657 3.53681C12.9522 2.87627 12.0026 2.40399 10.985 2.15385C9.96737 1.90372 8.90702 1.88193 7.88 2.09006C6.44238 2.35827 5.12646 3.07441 4.12059 4.13597C3.11471 5.19752 2.47045 6.55008 2.28 8.00006C2.11289 9.15367 2.23361 10.3307 2.6314 11.4264C3.02919 12.522 3.69172 13.5024 4.56 14.2801C5.49 15.1101 6.08 15.6601 6.08 16.9101V19.0001C6.07866 19.2521 6.12748 19.5019 6.22362 19.7349C6.31976 19.9679 6.4613 20.1794 6.63999 20.3572C6.81868 20.5349 7.03095 20.6754 7.26444 20.7703C7.49793 20.8652 7.74797 20.9127 8 20.9101H10.65C11.1539 20.9101 11.6372 20.7099 11.9935 20.3536C12.3498 19.9972 12.55 19.514 12.55 19.0101V17.0101C12.55 15.7101 13.15 15.1101 14.11 14.2301C14.8325 13.5645 15.4084 12.7557 15.801 11.8553C16.1936 10.9548 16.3942 9.98238 16.39 9.00006Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.25 8.44C5.33861 7.5973 5.69858 6.80619 6.27571 6.18578C6.85284 5.56536 7.6159 5.14922 8.45 5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.16 16.9301H12.29"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.05 21.22V22H10.4V21.13"
            stroke-width="1.83"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.71 20.91H16.39C16.8939 20.91 17.3772 20.7098 17.7335 20.3535C18.0898 19.9972 18.29 19.5139 18.29 19.01V17.01C18.29 15.71 18.89 15.11 19.86 14.23C20.6926 13.4592 21.3281 12.4999 21.713 11.4326C22.098 10.3653 22.2212 9.22124 22.0723 8.09646C21.9233 6.97168 21.5066 5.89907 20.8572 4.96874C20.2077 4.0384 19.3445 3.27752 18.34 2.75"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.34 2.74998C17.761 2.44623 17.1413 2.22732 16.5 2.09998"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.83 16.9301H18.06"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.72 21.22V22H16.17V21.13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'compas' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.24 7.76001L14.12 14.12L7.76001 16.24L9.88001 9.88001L16.24 7.76001Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'copy' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cpu' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5252)">
            <path
              d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15 9H9V15H15V9Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 1V4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15 1V4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 20V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15 20V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 9H23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 14H23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 9H4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 14H4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5252">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'credit-card' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 10H23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'droplet' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 2.68994L17.66 8.34994C18.7794 9.46855 19.5418 10.894 19.8509 12.446C20.16 13.998 20.0019 15.6068 19.3965 17.0689C18.7912 18.531 17.7658 19.7808 16.4501 20.66C15.1344 21.5393 13.5875 22.0086 12.005 22.0086C10.4225 22.0086 8.87561 21.5393 7.5599 20.66C6.24419 19.7808 5.21882 18.531 4.61347 17.0689C4.00812 15.6068 3.85 13.998 4.15911 12.446C4.46822 10.894 5.23066 9.46855 6.35001 8.34994L12 2.68994Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'edit2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 3.00006C17.2626 2.73741 17.5744 2.52907 17.9176 2.38693C18.2608 2.24479 18.6286 2.17163 19 2.17163C19.3714 2.17163 19.7392 2.24479 20.0824 2.38693C20.4256 2.52907 20.7374 2.73741 21 3.00006C21.2626 3.2627 21.471 3.57451 21.6131 3.91767C21.7553 4.26083 21.8284 4.62862 21.8284 5.00006C21.8284 5.37149 21.7553 5.73929 21.6131 6.08245C21.471 6.42561 21.2626 6.73741 21 7.00006L7.5 20.5001L2 22.0001L3.5 16.5001L17 3.00006Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'figma' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2H15.5C15.9596 2 16.4148 2.09053 16.8394 2.26642C17.264 2.44231 17.6499 2.70012 17.9749 3.02513C18.2999 3.35013 18.5577 3.73597 18.7336 4.16061C18.9095 4.58525 19 5.04037 19 5.5C19 5.95963 18.9095 6.41475 18.7336 6.83939C18.5577 7.26403 18.2999 7.64987 17.9749 7.97487C17.6499 8.29988 17.264 8.55769 16.8394 8.73358C16.4148 8.90947 15.9596 9 15.5 9H12V2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 12.5C12 12.0404 12.0905 11.5852 12.2664 11.1606C12.4423 10.736 12.7001 10.3501 13.0251 10.0251C13.3501 9.70012 13.736 9.44231 14.1606 9.26642C14.5852 9.09053 15.0404 9 15.5 9C15.9596 9 16.4148 9.09053 16.8394 9.26642C17.264 9.44231 17.6499 9.70012 17.9749 10.0251C18.2999 10.3501 18.5577 10.736 18.7336 11.1606C18.9095 11.5852 19 12.0404 19 12.5C19 12.9596 18.9095 13.4148 18.7336 13.8394C18.5577 14.264 18.2999 14.6499 17.9749 14.9749C17.6499 15.2999 17.264 15.5577 16.8394 15.7336C16.4148 15.9095 15.9596 16 15.5 16C15.0404 16 14.5852 15.9095 14.1606 15.7336C13.736 15.5577 13.3501 15.2999 13.0251 14.9749C12.7001 14.6499 12.4423 14.264 12.2664 13.8394C12.0905 13.4148 12 12.9596 12 12.5V12.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V19.5C12 20.4283 11.6313 21.3185 10.9749 21.9749C10.3185 22.6313 9.42826 23 8.5 23C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'file-minus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 2V8H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 15H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'activity' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 12H18L15 21L9 3L6 12H2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'airplay' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 15L17 21H7L12 15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'file' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13 2V9H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'alert-triangle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M10.29 3.85996L1.81999 18C1.64536 18.3024 1.55296 18.6453 1.55198 18.9945C1.551 19.3437 1.64148 19.6871 1.81442 19.9905C1.98735 20.2939 2.23672 20.5467 2.5377 20.7238C2.83868 20.9009 3.18079 20.9961 3.52999 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.85996C13.5317 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3437 2.89722 12 2.89722C11.6563 2.89722 11.3183 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996V3.85996Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 9V13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 17H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'eye-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5222)">
            <path
              d="M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5222">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'film' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 2V22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 2V22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 12H22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 7H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 17H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 17H22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 7H22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'align-center' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 10H6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 6H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 14H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 18H6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'refresh-cw' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M1 20V14H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M23 4V10H17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.51 9.00001C4.01717 7.5668 4.87913 6.28542 6.01547 5.27543C7.1518 4.26545 8.52547 3.55978 10.0083 3.22427C11.4911 2.88877 13.0348 2.93436 14.4952 3.35679C15.9556 3.77922 17.2853 4.56473 18.36 5.64001L23 10M1 14L5.64 18.36C6.71475 19.4353 8.04437 20.2208 9.50481 20.6432C10.9652 21.0657 12.5089 21.1113 13.9917 20.7758C15.4745 20.4402 16.8482 19.7346 17.9845 18.7246C19.1209 17.7146 19.9828 16.4332 20.49 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'refresh-ccw' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 20V14H17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 4V10H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20.49 9.00001C19.9828 7.5668 19.1209 6.28542 17.9845 5.27543C16.8482 4.26545 15.4745 3.55978 13.9917 3.22427C12.5089 2.88877 10.9652 2.93436 9.50481 3.35679C8.04437 3.77922 6.71475 4.56473 5.64 5.64001L1 10M23 14L18.36 18.36C17.2853 19.4353 15.9556 20.2208 14.4952 20.6432C13.0348 21.0657 11.4911 21.1113 10.0083 20.7758C8.52547 20.4402 7.1518 19.7346 6.01547 18.7246C4.87913 17.7146 4.01717 16.4332 3.51 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'radio' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.24 7.75999C16.7979 8.31723 17.2404 8.97896 17.5424 9.70735C17.8443 10.4357 17.9997 11.2165 17.9997 12.005C17.9997 12.7935 17.8443 13.5742 17.5424 14.3026C17.2404 15.031 16.7979 15.6928 16.24 16.25M7.76 16.24C7.20214 15.6828 6.75959 15.021 6.45764 14.2926C6.1557 13.5642 6.00028 12.7835 6.00028 11.995C6.00028 11.2065 6.1557 10.4257 6.45764 9.69735C6.75959 8.96896 7.20214 8.30723 7.76 7.74999M19.07 4.92999C20.9447 6.80527 21.9979 9.34835 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M4.93 19.07C3.05529 17.1947 2.00214 14.6516 2.00214 12C2.00214 9.34835 3.05529 6.80527 4.93 4.92999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'printer' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 14H6V22H18V14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 9V2H18V9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'power' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18.36 6.64001C19.6184 7.8988 20.4753 9.50246 20.8223 11.2482C21.1693 12.994 20.9909 14.8034 20.3096 16.4478C19.6284 18.0921 18.4748 19.4976 16.9948 20.4864C15.5148 21.4752 13.7749 22.0029 11.995 22.0029C10.2151 22.0029 8.47515 21.4752 6.99517 20.4864C5.51519 19.4976 4.36164 18.0921 3.68036 16.4478C2.99909 14.8034 2.82069 12.994 3.16772 11.2482C3.51475 9.50246 4.37162 7.8988 5.63 6.64001"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'pocket' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V11C22 13.6522 20.9464 16.1957 19.0711 18.0711C17.1957 19.9464 14.6522 21 12 21C10.6868 21 9.38642 20.7413 8.17317 20.2388C6.95991 19.7362 5.85752 18.9997 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 10L12 14L16 10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'plus-square' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8V16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'plus-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8V16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'plus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 5V19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 12H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'play-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 8L16 12L10 16V8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'play' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5 3L19 12L5 21V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'pie-chart' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.0449 20.7824 15.5447 21.4874 13.9424 21.8048C12.3401 22.1222 10.6844 22.0422 9.12012 21.5718C7.55585 21.1015 6.1306 20.2551 4.969 19.1067C3.80739 17.9583 2.94479 16.5428 2.45661 14.984C1.96843 13.4252 1.86954 11.7705 2.16857 10.1647C2.46761 8.5588 3.15547 7.05064 4.17202 5.77205C5.18857 4.49345 6.50286 3.48333 7.99998 2.83002"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'phone-outgoing' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 7V1H17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 8L23 1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'phone-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5145)">
            <path
              d="M5.18999 12.81C3.50585 10.213 2.45435 7.25714 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997M10.68 13.31C11.6948 14.3257 12.8418 15.2002 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7605 14.9579 21.2 15.1982 21.5165 15.5662C21.8329 15.9342 22.0048 16.4047 22 16.89V19.89C22.0011 20.1685 21.9441 20.4441 21.8325 20.6993C21.7209 20.9545 21.5573 21.1836 21.3521 21.3718C21.1468 21.5601 20.9046 21.7035 20.6407 21.7927C20.3769 21.8819 20.0974 21.915 19.82 21.89C16.7428 21.5556 13.787 20.5041 11.19 18.82C9.98526 18.055 8.86852 17.1596 7.85999 16.15L10.68 13.31Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M23 1L1 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5145">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'phone-missed' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M23 1L17 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 1L23 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'phone-incoming' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 2V8H22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M23 1L16 8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'phone-forwarded' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 1L23 5L19 9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 5H23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'phone-call' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15.05 5C16.0267 5.19057 16.9244 5.66826 17.6281 6.37194C18.3317 7.07561 18.8094 7.97326 19 8.95M15.05 1C17.0793 1.22544 18.9716 2.13417 20.4162 3.57701C21.8609 5.01984 22.772 6.91101 23 8.94M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'phone' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'percent' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 5L5 19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.5 9C7.88071 9 9 7.88071 9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'pen-tool' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 19L19 12L22 15L15 22L12 19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 2L9.586 9.586"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'pause-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 15V9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 15V9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'pause' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 4H14V20H18V4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 4H6V20H10V4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'paperclip' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.5972 21.9983 8.00502 21.9983C6.41283 21.9983 4.88586 21.3658 3.76002 20.24C2.63417 19.1141 2.00168 17.5872 2.00168 15.995C2.00168 14.4028 2.63417 12.8758 3.76002 11.75L12.95 2.55998C13.7006 1.80942 14.7186 1.38776 15.78 1.38776C16.8415 1.38776 17.8595 1.80942 18.61 2.55998C19.3606 3.31054 19.7822 4.32852 19.7822 5.38998C19.7822 6.45144 19.3606 7.46942 18.61 8.21998L9.41002 17.41C9.03473 17.7853 8.52574 17.9961 7.99502 17.9961C7.46429 17.9961 6.9553 17.7853 6.58002 17.41C6.20473 17.0347 5.9939 16.5257 5.9939 15.995C5.9939 15.4643 6.20473 14.9553 6.58002 14.58L15.07 6.09998"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'package' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16.5 9.40002L7.5 4.21002"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.26999 6.96002L12 12.01L20.73 6.96002"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22.08V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'octagon' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'navigation2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 2L19 21L12 17L5 21L12 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'navigation' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M3 11L22 2L13 21L11 13L3 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'music' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 18V5L21 3V16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'move' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15 19L12 22L9 19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19 9L22 12L19 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 9L2 12L5 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 12H22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 5L12 2L15 5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2V22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'mouse-pointer' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13 13L19 19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'more-vertical' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'more-horizontal' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'moon' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41101 20.3741 6.88299 19.5345 5.67422 18.3258C4.46545 17.117 3.62593 15.589 3.2539 13.9205C2.88187 12.252 2.99271 10.5121 3.57345 8.9043C4.1542 7.29651 5.18082 5.88737 6.53321 4.84175C7.88559 3.79614 9.50779 3.15731 11.21 3C10.2134 4.34827 9.73384 6.00945 9.85852 7.68141C9.98321 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9905 14.2662 19.6517 13.7866 21 12.79V12.79Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'monitor' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M8 21H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 17V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'minus-square' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'minus-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'minus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5 12H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'minimize2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 14H10V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 21L10 14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 10H14V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 10L21 3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'minimize' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M8 3V6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8H3M21 8H18C17.4696 8 16.9609 7.78929 16.5858 7.41421C16.2107 7.03914 16 6.53043 16 6V3M16 21V18C16 17.4696 16.2107 16.9609 16.5858 16.5858C16.9609 16.2107 17.4696 16 18 16H21M3 16H6C6.53043 16 7.03914 16.2107 7.41421 16.5858C7.78929 16.9609 8 17.4696 8 18V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'mic-off' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5250)">
            <path
              d="M8 23H16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1L23 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15 9.33997V3.99997C15.0007 3.256 14.725 2.53829 14.2264 1.98617C13.7277 1.43405 13.0417 1.08691 12.3015 1.01214C11.5613 0.937375 10.8197 1.14031 10.2207 1.58156C9.62172 2.0228 9.20805 2.67088 9.06 3.39997M9 8.99997V12C9.00052 12.5929 9.17675 13.1724 9.50643 13.6653C9.83611 14.1582 10.3045 14.5423 10.8523 14.7691C11.4002 14.996 12.0029 15.0554 12.5845 14.9398C13.1661 14.8243 13.7005 14.539 14.12 14.12L9 8.99997Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 16.95C16.0238 17.9464 14.7721 18.6285 13.4056 18.9086C12.0391 19.1887 10.62 19.0542 9.3305 18.5223C8.04096 17.9903 6.93976 17.0853 6.16817 15.9232C5.39658 14.761 4.9898 13.3949 5 12V10M19 10V12C18.9996 12.4124 18.9628 12.824 18.89 13.23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 19V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5250">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'mic' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M8 23H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 19V23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1V1Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'message-square' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'message-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'menu' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M3 18H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 12H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 6H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'meh' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 15H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 9H15.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 9H9.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'maximize2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9 21H3V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 21L10 14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 3H21V9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 3L14 10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'maximize' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'map-pin' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'map' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 6V22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 2V18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'mail' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 6L12 13L2 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'log-out' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 17L21 12L16 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 12H9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'log-in' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M10 17L15 12L10 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 12H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'lock' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'loader' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 18V22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.24 16.24L19.07 19.07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.92999 19.07L7.75999 16.24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 12H22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 12H6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.24 7.75999L19.07 4.92999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.92999 4.92999L7.75999 7.75999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2V6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'list' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M8 18H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 18H3.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 12H3.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 6H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 6H3.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'linkedin' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 9H2V21H6V9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'link2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15 7H18C18.6566 7 19.3068 7.12933 19.9134 7.3806C20.52 7.63188 21.0712 8.00017 21.5355 8.46447C21.9998 8.92876 22.3681 9.47996 22.6194 10.0866C22.8707 10.6932 23 11.3434 23 12C23 12.6566 22.8707 13.3068 22.6194 13.9134C22.3681 14.52 21.9998 15.0712 21.5355 15.5355C21.0712 15.9998 20.52 16.3681 19.9134 16.6194C19.3068 16.8707 18.6566 17 18 17H15M9 17H6C5.34339 17 4.69321 16.8707 4.08658 16.6194C3.47995 16.3681 2.92876 15.9998 2.46447 15.5355C1.52678 14.5979 1 13.3261 1 12C1 10.6739 1.52678 9.40215 2.46447 8.46447C3.40215 7.52678 4.67392 7 6 7H9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 12H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'link' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M10 13C10.4295 13.5742 10.9774 14.0492 11.6066 14.393C12.2357 14.7367 12.9315 14.9411 13.6467 14.9924C14.3618 15.0436 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59702 21.9548 8.334 21.9434 7.02302C21.932 5.71204 21.4061 4.45797 20.4791 3.53093C19.5521 2.60389 18.298 2.07805 16.987 2.06666C15.676 2.05526 14.413 2.55924 13.47 3.47003L11.75 5.18003"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 11C13.5705 10.4259 13.0226 9.9508 12.3935 9.60704C11.7643 9.26328 11.0685 9.05886 10.3534 9.00765C9.63821 8.95643 8.92041 9.05961 8.24866 9.3102C7.5769 9.56079 6.96689 9.95291 6.46 10.46L3.46 13.46C2.54921 14.403 2.04524 15.666 2.05663 16.977C2.06802 18.288 2.59387 19.542 3.52091 20.4691C4.44795 21.3961 5.70201 21.922 7.013 21.9334C8.32398 21.9447 9.58699 21.4408 10.53 20.53L12.24 18.82"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'life-buoy' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.83 14.83L19.07 19.07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.93 19.07L9.17 14.83"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.83 9.16999L19.07 4.92999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.83 9.17001L18.36 5.64001"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.93 4.92999L9.17 9.16999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'layout' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 21V9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 9H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'layers' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M2 17L12 22L22 17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 12L12 17L22 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'key' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15.5 7.5L19 4M21 2L19 4L21 2ZM11.39 11.61C11.9063 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.027 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3354 18.2919 11.9291 18.9012 11.4161 19.4141C10.9032 19.9271 10.2939 20.3334 9.6233 20.6099C8.95268 20.8864 8.234 21.0275 7.50863 21.025C6.78327 21.0226 6.06554 20.8767 5.39679 20.5958C4.72804 20.3148 4.12147 19.9043 3.612 19.388C2.61013 18.3507 2.05576 16.9614 2.06829 15.5193C2.08082 14.0772 2.65925 12.6977 3.679 11.678C4.69874 10.6583 6.07821 10.0798 7.52029 10.0673C8.96238 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5L11.39 11.61ZM15.5 7.5L18.5 10.5L22 7L19 4L15.5 7.5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'italic' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M14 20H5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19 4H10"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 4L9 20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'instagram' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17.5 6.5H17.51"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'info' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'inbox' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 12H16L14 15H10L8 12H2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'image' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 15L16 10L5 21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'home' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 22V12H15V22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'hexagon' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'help-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 17H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.09003 9.00002C9.32513 8.33169 9.78918 7.76813 10.4 7.40915C11.0108 7.05018 11.7289 6.91896 12.4272 7.03873C13.1255 7.15851 13.7588 7.52154 14.2151 8.06355C14.6714 8.60555 14.9211 9.29154 14.92 10C14.92 12 11.92 13 11.92 13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'heart' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'headphones' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'hash' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 15H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 9H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 3L14 21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 3L8 21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'hard-drive' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 12H2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 16H10.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 16H6.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'grid' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 14H14V21H21V14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 14H3V21H10V14Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 3H14V10H21V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 3H3V10H10V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'globe' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 12H22"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'gitlab' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5103)">
            <path
              d="M22.65 14.39L12 22.13L1.35001 14.39C1.20723 14.285 1.10133 14.1376 1.04744 13.9687C0.993557 13.7999 0.994455 13.6183 1.05001 13.45L2.27001 9.67002L4.71001 2.16002C4.73367 2.09883 4.77135 2.04403 4.82001 2.00002C4.89925 1.92764 5.00269 1.88751 5.11001 1.88751C5.21733 1.88751 5.32077 1.92764 5.40001 2.00002C5.45139 2.04969 5.48925 2.11164 5.51001 2.18002L7.95001 9.67002H16.05L18.49 2.16002C18.5137 2.09883 18.5513 2.04403 18.6 2.00002C18.6792 1.92764 18.7827 1.88751 18.89 1.88751C18.9973 1.88751 19.1008 1.92764 19.18 2.00002C19.2314 2.04969 19.2693 2.11164 19.29 2.18002L21.73 9.69002L23 13.45C23.0505 13.6235 23.0438 13.8087 22.9807 13.978C22.9177 14.1473 22.8017 14.2918 22.65 14.39V14.39Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5103">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'github' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5102)">
            <path
              d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5102">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'git-pull-request' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 9V21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'file-text' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 17H8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 13H8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 9H9H8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 2V8H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'file-plus' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 15H15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 2V8H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'external-link' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15 3H21V9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 14L21 3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'edit3' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 20H21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'edit' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'delete' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4V4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 9L12 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 9L18 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'database' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 5V19C3 20.66 7 22 12 22C17 22 21 20.66 21 19V5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'crosshair' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22V18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 12H18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 12H2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 6V2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'crop' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5075)">
            <path
              d="M6.13 1L6 16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 6.13L16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5075">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'corner-left-up' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M14 9L9 4L4 9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 20H13C11.9391 20 10.9217 19.5786 10.1716 18.8284C9.42143 18.0783 9 17.0609 9 16V4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'corner-left-down' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M14 15L9 20L4 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 4H13C11.9391 4 10.9217 4.42143 10.1716 5.17157C9.42143 5.92172 9 6.93913 9 8V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'corner-down-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M15 10L20 15L15 20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'corner-down-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9 10L4 15L9 20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 4V11C20 12.0609 19.5786 13.0783 18.8284 13.8284C18.0783 14.5786 17.0609 15 16 15H4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'codepen' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22V15.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 8.5L12 15.5L2 8.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 15.5L12 8.5L22 15.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2V8.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'code' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M16 18L22 12L16 6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 6L2 12L8 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cloud-snow' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5060)">
            <path
              d="M12 22H12.01"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 20H16.01"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 20H8.01"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 18H12.01"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 17.58C21.0512 17.1196 21.9121 16.3116 22.4381 15.2916C22.964 14.2715 23.1231 13.1016 22.8886 11.9782C22.654 10.8548 22.0402 9.84623 21.15 9.12185C20.2599 8.39748 19.1476 8.00137 18 8.00002H16.74C16.423 6.77254 15.8188 5.63797 14.9773 4.68982C14.1357 3.74167 13.0809 3.00709 11.8997 2.54664C10.7186 2.08618 9.44488 1.91304 8.18365 2.04146C6.92243 2.16989 5.70978 2.59622 4.64567 3.2853C3.58155 3.97439 2.69644 4.9065 2.06328 6.00482C1.43012 7.10313 1.06704 8.33619 1.00398 9.60237C0.940923 10.8685 1.17968 12.1316 1.70058 13.2874C2.22147 14.4432 3.00959 15.4586 3.99997 16.25"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 16H16.01"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 16H8.01"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5060">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'cloud' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5057)">
            <path
              d="M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14112 3.86256 7.62008 3.97804 6.21664 4.49759C4.8132 5.01714 3.58363 5.91993 2.66764 7.10338C1.75165 8.28683 1.18598 9.70348 1.0349 11.1924C0.883813 12.6812 1.15338 14.1826 1.81296 15.526C2.47255 16.8693 3.4957 18.0007 4.76617 18.7916C6.03663 19.5824 7.50347 20.0011 8.99999 20H18C19.3261 20 20.5978 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5978 10.5268 19.3261 10 18 10Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2919_5057">
              <rect fill="white" width="24" height="24"></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chrome' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21.17 8H12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10.88 21.94L15.46 14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.95001 6.06L8.54001 14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevrons-up' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 18L12 13L7 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 11L12 6L7 11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'chevrons-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M13 17L18 12L13 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 17L11 12L6 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'check-square' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9 11L12 14L22 4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'check-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 4L12 14.01L9 11.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'check' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M20 6L9 17L4 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cast' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M2 20H2.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'book-open' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'book' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bold' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 12H15C16.0609 12 17.0783 12.4214 17.8284 13.1716C18.5786 13.9217 19 14.9391 19 16C19 17.0609 18.5786 18.0783 17.8284 18.8284C17.0783 19.5786 16.0609 20 15 20H6V12Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 4H14C15.0609 4 16.0783 4.42143 16.8284 5.17157C17.5786 5.92172 18 6.93913 18 8C18 9.06087 17.5786 10.0783 16.8284 10.8284C16.0783 11.5786 15.0609 12 14 12H6V4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bluetooth' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6.5 6.5L17.5 17.5L12 23V1L17.5 6.5L6.5 17.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'award' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'at-sign' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4706 2.77521 14.2726 2.26229C12.0747 1.74936 9.76794 1.99503 7.72736 2.95936C5.68677 3.92368 4.03241 5.54995 3.03327 7.57371C2.03413 9.59748 1.74898 11.8997 2.22418 14.1061C2.69938 16.3125 3.90699 18.2932 5.65064 19.7263C7.39429 21.1593 9.57144 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-up-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7 17L17 7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 7H17V17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-up' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 19V5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 12L12 5L19 12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'arrow-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M5 12H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 5L19 12L12 19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'anchor' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22V8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 12H2C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'align-right' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 18H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 14H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 10H7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 6H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'align-left' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M17 18H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 14H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 10H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 6H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'align-justify' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M21 18H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 14H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 10H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 6H3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'alert-octagon' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'alert-circle' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 16H12.01"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 8V12"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bank' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M6 17L6 11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 17L10 11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 17L14 11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 17L18 11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 10H4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19V21H3V19Z"
            stroke-width="2"
          ></path>
          <path
            d="M12 2.1577L20.3011 7L3.69892 7L12 2.1577Z"
            stroke-width="2"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'bank-transfer' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 7L12 17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.5 9H10.75C10.2859 9 9.84075 9.15804 9.51256 9.43934C9.18437 9.72064 9 10.1022 9 10.5C9 10.8978 9.18437 11.2794 9.51256 11.5607C9.84075 11.842 10.2859 12 10.75 12H13.25C13.7141 12 14.1592 12.158 14.4874 12.4393C14.8156 12.7206 15 13.1022 15 13.5C15 13.8978 14.8156 14.2794 14.4874 14.5607C14.1592 14.842 13.7141 15 13.25 15H9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 15.148L1.49945 11.25L6.50055 11.25L4 15.148Z"
            stroke-width="2"
          ></path>
          <path
            d="M20 8.85203L22.5006 12.75L17.4994 12.75L20 8.85203Z"
            stroke-width="2"
          ></path>
          <path
            d="M12 19C15.5265 19 18.4439 16.3923 18.9291 13H20.9451C20.4476 17.5 16.6326 21 12 21C9.58901 21 7.39944 20.052 5.78374 18.5083C5.41055 18.1518 5.43717 17.5628 5.80213 17.1979C6.21603 16.784 6.89412 16.824 7.33004 17.2146C8.56886 18.3248 10.2056 19 12 19Z"
            fill="#001350"
          ></path>
          <path
            d="M5.07089 11C5.55612 7.60771 8.47353 5 12 5C13.7944 5 15.4311 5.67519 16.67 6.78537C17.1059 7.17602 17.784 7.21603 18.1979 6.80213C18.5628 6.43717 18.5895 5.84822 18.2163 5.49167C16.6006 3.94804 14.411 3 12 3C7.36745 3 3.55238 6.50005 3.05493 11H5.07089Z"
            fill="#001350"
          ></path>
        </svg>
      )}
      {props.type === 'lab-flask' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M9.73134 3.43311V8.50296C9.73134 8.81904 9.64038 9.12844 9.46932 9.39424L3.63351 18.4619C2.92816 19.5578 3.71504 21 5.01836 21H19.0194C20.3148 21 21.1031 19.5733 20.4136 18.4766L14.7004 9.38897C14.5353 9.12641 14.4478 8.82258 14.4478 8.51244V3.43311"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M7.375 3H16.6288"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      )}
      {props.type === 'bapp-store' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <rect width="24" height="24" stroke="black"></rect>
          <path
            d="M19.7064 10.801C19.8351 10.332 19.9008 9.8479 19.9019 9.36154C19.8994 8.18837 19.5249 7.04621 18.8322 6.09936C18.1396 5.15251 17.1644 4.44978 16.047 4.09224C14.9297 3.73471 13.7277 3.74081 12.614 4.10967C11.5003 4.47853 10.5323 5.19112 9.84931 6.14496C9.17789 5.76662 8.42222 5.56294 7.65161 5.55258C7.03967 5.55336 6.43388 5.67476 5.8689 5.90984C5.30391 6.14491 4.7908 6.48906 4.35892 6.92259C3.92704 7.35612 3.58485 7.87054 3.35193 8.43642C3.11901 9.00229 2.99993 9.60854 3.00148 10.2205C3.00047 10.6638 3.06433 11.1048 3.19104 11.5296C2.45996 11.9139 1.86334 12.5119 1.48068 13.2439C1.09802 13.9758 0.947494 14.807 1.04915 15.6267C1.1508 16.4464 1.49982 17.2156 2.04968 17.8319C2.59955 18.4482 3.32417 18.8824 4.12699 19.0764L4.46464 19.1416C4.66059 19.1734 4.85854 19.1912 5.05702 19.1949H18.4032C19.4319 19.2003 20.4283 18.8363 21.2112 18.169C21.9942 17.5018 22.5116 16.5757 22.6695 15.5592C22.8273 14.5427 22.615 13.5033 22.0712 12.63C21.5274 11.7568 20.6883 11.1078 19.7064 10.801Z"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M8.35065 5.70068V18.958"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M13.982 7V8.34683L12 10.8032H13.9532V13.0084H16L14.018 15.5555V17"
            stroke-width="1.66044"
            stroke-miterlimit="10"
          ></path>
        </svg>
      )}
      {props.type === 'solution' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M19.26 8.99999C19.2587 7.94874 19.024 6.91089 18.5729 5.96138C18.1217 5.01187 17.4653 4.1744 16.6511 3.50944C15.8369 2.84448 14.8851 2.36863 13.8646 2.11624C12.8441 1.86384 11.7803 1.84122 10.75 2.04999C9.30655 2.32044 7.98633 3.04246 6.97983 4.11188C5.97332 5.18129 5.33256 6.5428 5.15001 7.99999C4.98468 9.15352 5.10624 10.33 5.50392 11.4254C5.9016 12.5207 6.56314 13.5012 7.43001 14.28C8.36001 15.14 9.00001 15.69 9.00001 16.94V19C9.00001 19.5039 9.20018 19.9872 9.5565 20.3435C9.91282 20.6998 10.3961 20.9 10.9 20.9H13.5C13.7494 20.9013 13.9966 20.853 14.2272 20.7579C14.4577 20.6628 14.6671 20.5227 14.843 20.3459C15.0189 20.169 15.1578 19.959 15.2517 19.7279C15.3457 19.4968 15.3927 19.2494 15.39 19V17C15.39 15.7 16 15.1 16.96 14.22C17.6854 13.5578 18.2646 12.7514 18.6607 11.8526C19.0567 10.9538 19.2608 9.9822 19.26 8.99999V8.99999Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.12 8.44C8.21174 7.59844 8.57277 6.809 9.14935 6.18917C9.72594 5.56934 10.4873 5.15226 11.32 5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.03999 16.9301H15.17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10.93 21.22V22H13.27V21.13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'cpu2' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5005)">
            <path
              d="M17.7037 4.66663H6.2963C5.39628 4.66663 4.66667 5.39624 4.66667 6.29626V17.7037C4.66667 18.6037 5.39628 19.3333 6.2963 19.3333H17.7037C18.6037 19.3333 19.3333 18.6037 19.3333 17.7037V6.29626C19.3333 5.39624 18.6037 4.66663 17.7037 4.66663Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.8518 8.33337H9.14814C8.69813 8.33337 8.33333 8.69818 8.33333 9.14819V14.8519C8.33333 15.3019 8.69813 15.6667 9.14814 15.6667H14.8518C15.3019 15.6667 15.6667 15.3019 15.6667 14.8519V9.14819C15.6667 8.69818 15.3019 8.33337 14.8518 8.33337Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <line
              x1="7.33333"
              x2="7.33333"
              y1="3.66663"
              y2="1.99996"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="7.33333"
              x2="7.33333"
              y1="22"
              y2="20.3333"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="11.9167"
              x2="11.9167"
              y1="3.66663"
              y2="1.99996"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="11.9167"
              x2="11.9167"
              y1="22"
              y2="20.3333"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="16.5"
              x2="16.5"
              y1="3.66663"
              y2="1.99996"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="16.5"
              x2="16.5"
              y1="22"
              y2="20.3333"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="20.3333"
              x2="22"
              y1="7.33337"
              y2="7.33337"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="2"
              x2="3.66667"
              y1="7.33337"
              y2="7.33337"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="20.3333"
              x2="22"
              y1="11.9166"
              y2="11.9166"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="2"
              x2="3.66667"
              y1="11.9166"
              y2="11.9166"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="20.3333"
              x2="22"
              y1="16.5"
              y2="16.5"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="2"
              x2="3.66667"
              y1="16.5"
              y2="16.5"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
          </g>
          <defs>
            <clipPath id="clip0_2919_5005">
              <rect
                fill="white"
                width="22"
                height="22"
                transform="translate(1 1)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'memory' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <g clip-path="url(#clip0_2919_5004)">
            <path
              d="M1.91666 15.7501L1.91666 6.12508C1.91666 5.87195 2.12186 5.66675 2.37499 5.66675L21.625 5.66675C21.8781 5.66675 22.0833 5.87195 22.0833 6.12508L22.0833 15.7501C22.0833 16.0032 21.8781 16.2084 21.625 16.2084L20.7083 16.2084C20.4552 16.2084 20.25 16.4136 20.25 16.6667L20.25 18.9584C20.25 19.2115 20.0407 19.4167 19.7876 19.4167L4.21213 19.4167C3.959 19.4167 3.74999 19.2115 3.74999 18.9584L3.74999 16.6667C3.74999 16.4136 3.54479 16.2084 3.29166 16.2084L2.37499 16.2084C2.12186 16.2084 1.91666 16.0032 1.91666 15.7501Z"
              stroke-width="1.83333"
            ></path>
            <line
              x1="6.49999"
              x2="6.49999"
              y1="18.5001"
              y2="16.6667"
              stroke-width="1.83333"
              stroke-linecap="round"
            ></line>
            <line
              x1="9.24999"
              x2="9.24999"
              y1="18.5001"
              y2="16.6667"
              stroke-width="1.83333"
              stroke-linecap="round"
            ></line>
            <line
              x1="12"
              x2="12"
              y1="18.5001"
              y2="16.6667"
              stroke-width="1.83333"
              stroke-linecap="round"
            ></line>
            <line
              x1="14.75"
              x2="14.75"
              y1="18.5001"
              y2="16.6667"
              stroke-width="1.83333"
              stroke-linecap="round"
            ></line>
            <line
              x1="17.5"
              x2="17.5"
              y1="18.5001"
              y2="16.6667"
              stroke-width="1.83333"
              stroke-linecap="round"
            ></line>
            <rect
              x="4.66666"
              y="13"
              rx="0.458333"
              fill="#001350"
              width="4.58333"
              height="2.75"
              transform="rotate(-90 4.66666 13)"
            ></rect>
            <rect
              x="8.33334"
              y="13"
              rx="0.458333"
              fill="#001350"
              width="4.58333"
              height="2.75"
              transform="rotate(-90 8.33334 13)"
            ></rect>
            <rect
              x="12.9167"
              y="13"
              rx="0.458333"
              fill="#001350"
              width="4.58333"
              height="2.75"
              transform="rotate(-90 12.9167 13)"
            ></rect>
            <rect
              x="16.5833"
              y="13"
              rx="0.458333"
              fill="#001350"
              width="4.58333"
              height="2.75"
              transform="rotate(-90 16.5833 13)"
            ></rect>
          </g>
          <defs>
            <clipPath id="clip0_2919_5004">
              <rect
                fill="white"
                width="22"
                height="22"
                transform="translate(23 24) rotate(180)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'speed-scan' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18.0931 3.22958L6.61458 11.7153C6.36611 11.899 6.36129 12.269 6.60489 12.4591L18.0686 21.4047C18.2629 21.5563 18.5412 21.5324 18.6947 21.3396C19.9469 19.7672 22 16.1987 22 12.0808C22 7.95614 19.9401 4.67265 18.6885 3.28049C18.5348 3.1095 18.278 3.09289 18.0931 3.22958Z"
            stroke-width="2"
          ></path>
          <path
            d="M11.754 12.0808L14.4134 13.3915C14.6429 13.5046 14.9206 13.412 15.0364 13.1838L16.1063 11.0746C16.2397 10.8116 16.5805 10.7365 16.812 10.9191L18.9255 12.5857"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M12.1919 2.99226H6.58722M5.18606 7.66281H2.85079M7.52133 17.0039H1.91668M12.6589 21.2074H9.38955"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      )}
      {props.type === 'timer' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 5.67358C6.63505 6.79705 5 9.20756 5 12C5 15.8659 8.13401 19 12 19C14.7924 19 17.2029 17.3649 18.3264 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 5.5V12L15 13.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21.1231 3.06066L19.7089 4.47487M20.7695 2L22.1837 3.41421"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M3.06051 3.06066L4.47472 4.47487M3.41406 2L1.99985 3.41421"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      )}
      {props.type === 'gauge' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M2 15.1886C2.0349 14.0019 2.28553 12.8307 2.74045 11.7324C3.23209 10.5455 3.9527 9.46702 4.86113 8.55859C5.76956 7.65016 6.84802 6.92956 8.03494 6.43792C9.22186 5.94628 10.494 5.69324 11.7787 5.69324C13.0634 5.69324 14.3356 5.94628 15.5225 6.43792C16.7094 6.92956 17.7879 7.65016 18.6963 8.55859C19.6047 9.46702 20.3253 10.5455 20.817 11.7324C21.2719 12.8307 21.5225 14.0019 21.5574 15.1886"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            d="M5.55595 15.0275L12.2341 16.7954"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <circle r="2.66692" cx="11.7787" cy="16.3609" fill="#001350"></circle>
        </svg>
      )}
      {props.type === 'chevron-double' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M18 8L12 2L6 8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6 16L12 22L18 16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      )}
      {props.type === 'ai-symbol' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          className="icon-component"
        >
          <path
            d="M13.6568 22.8492C13.6743 22.9092 13.6919 22.9698 13.7095 23.031C13.7467 23.1608 13.8653 23.25 14.0002 23.25C14.135 23.25 14.2536 23.1608 14.2908 23.031C14.3084 22.9698 14.326 22.9092 14.3435 22.8492C14.3435 22.8491 14.3436 22.8489 14.3436 22.8487C14.3989 22.6596 14.4538 22.4771 14.5085 22.3009C14.367 22.1897 14.1894 22.125 14.0002 22.125C13.8109 22.125 13.6333 22.1897 13.4918 22.301C13.5465 22.4771 13.6014 22.6596 13.6567 22.8488C13.6567 22.8489 13.6568 22.8491 13.6568 22.8492ZM9.88272 16.2499C10.8927 15.8325 11.7215 15.3391 12.4053 14.6554C13.0891 13.9717 13.5826 13.1427 14.0001 12.1326C14.4175 13.1426 14.911 13.9715 15.5947 14.6553C16.2785 15.339 17.1074 15.8325 18.1174 16.2499C17.1073 16.6674 16.2783 17.1609 15.5946 17.8447C14.9109 18.5285 14.4175 19.3573 14.0001 20.3673C13.5827 19.3572 13.0892 18.5283 12.4054 17.8446C11.7217 17.1608 10.8928 16.6673 9.88272 16.2499Z"
            fill="#001350"
            stroke-width="2.25"
          ></path>
          <path
            d="M19.7693 4.48094C20.0784 4.79006 20.4286 5.03876 20.8199 5.24995C20.4286 5.46118 20.0784 5.70991 19.7692 6.01905C19.4601 6.32825 19.2113 6.67859 19.0001 7.07007C18.7888 6.67858 18.54 6.32824 18.2308 6.01903C17.9217 5.7099 17.5715 5.46117 17.1801 5.24995C17.5715 5.03877 17.9217 4.79007 18.2308 4.48096C18.54 4.17176 18.7888 3.82142 19.0001 3.42993C19.2113 3.82141 19.4601 4.17174 19.7693 4.48094Z"
            stroke-width="2.25"
          ></path>
          <path
            d="M8.92653 8.25005C8.2351 8.55004 7.64715 8.91031 7.15389 9.40357C6.66054 9.89692 6.30019 10.485 6.0001 11.1767C5.69993 10.485 5.33953 9.89689 4.84613 9.40354C4.35285 8.91029 3.7649 8.55003 3.07348 8.25005C3.76502 7.94994 4.35303 7.58962 4.84633 7.09633C5.33965 6.60301 5.69998 6.01496 6.0001 5.32336C6.30013 6.01493 6.66042 6.60297 7.1537 7.09629C7.64697 7.58961 8.23498 7.94994 8.92653 8.25005Z"
            fill="#001350"
            stroke-width="2.25"
          ></path>
        </svg>
      )}
      {props.type === 'logo-portswigger' && (
        <svg
          fill="none"
          width="37"
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          viewBox="0 0 37 38"
          className="icon-logo-portswigger icon-component"
        >
          <g clip-path="url(#clip0_2933_150)">
            <path
              d="M36.3655 0.787903H0.578735V36.5746H36.3655V0.787903Z"
              fill="#FF6633"
            ></path>
            <path
              d="M20.3966 36.5746H16.5534V30.8678L21.7336 24.4837H16.5534V16.7221H7.17114L16.5534 5.14621V0.787903H20.3966V6.50059L15.2164 12.8905H20.3966V20.6521H29.7788L20.3966 32.2221V36.5746Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2933_150">
              <rect
                fill="white"
                width="36.9443"
                height="36.9443"
                transform="translate(0 0.209106)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'logo-burp-suite' && (
        <svg
          fill="none"
          width="38"
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          viewBox="0 0 38 38"
          className="icon-logo-burp-suite icon-component"
        >
          <g clip-path="url(#clip0_2933_148)">
            <path
              d="M36.881 0.787903H1.0885V36.5804H36.881V0.787903Z"
              fill="#FF6633"
            ></path>
            <path
              d="M20.3739 31.6086H17.5957V27.4876L21.3404 22.8688H17.5957V17.2661H10.818L17.5957 8.90258V5.75974H20.3739V9.88074L16.6349 14.4995H20.3739V20.1022H27.1515L20.3739 28.4658V31.6086Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2933_148">
              <rect
                fill="white"
                width="36.9501"
                height="36.9501"
                transform="translate(0.509766 0.209106)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'logo-enterprise' && (
        <svg
          fill="none"
          width="38"
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          viewBox="0 0 38 38"
          className="icon-logo-enterprise icon-component"
        >
          <g clip-path="url(#clip0_2933_149)">
            <path
              d="M37.2332 0.787903H1.44067V36.5804H37.2332V0.787903Z"
              fill="#0094FF"
            ></path>
            <path
              d="M20.726 31.6086H17.9478V27.4876L21.6926 22.8688H17.9478V17.2661H11.1702L17.9478 8.90258V5.75974H20.726V9.88074L16.987 14.4995H20.726V20.1022H27.5037L20.726 28.4658V31.6086Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2933_149">
              <rect
                fill="white"
                width="36.9501"
                height="36.9501"
                transform="translate(0.861816 0.209106)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'logo-pro' && (
        <svg
          fill="none"
          width="38"
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          viewBox="0 0 38 38"
          className="icon-logo-pro icon-component"
        >
          <g clip-path="url(#clip0_2933_147)">
            <path
              d="M37.1639 0.787903H1.37134V36.5804H37.1639V0.787903Z"
              fill="#5B4FFF"
            ></path>
            <path
              d="M20.6567 31.6086H17.8785V27.4876L21.6233 22.8688H17.8785V17.2661H11.1008L17.8785 8.90258V5.75974H20.6567V9.88074L16.9177 14.4995H20.6567V20.1022H27.4344L20.6567 28.4658V31.6086Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2933_147">
              <rect
                fill="white"
                width="36.9501"
                height="36.9501"
                transform="translate(0.79248 0.209106)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'logo-community' && (
        <svg
          fill="none"
          width="38"
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          viewBox="0 0 38 38"
          className="icon-logo-community icon-component"
        >
          <g clip-path="url(#clip0_2933_151)">
            <path
              d="M37.095 0.787903H1.30249V36.5804H37.095V0.787903Z"
              fill="#00A2B9"
            ></path>
            <path
              d="M20.5878 31.6086H17.8096V27.4876L21.5544 22.8688H17.8096V17.2661H11.032L17.8096 8.90258V5.75974H20.5878V9.88074L16.8488 14.4995H20.5878V20.1022H27.3655L20.5878 28.4658V31.6086Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2933_151">
              <rect
                fill="white"
                width="36.9501"
                height="36.9501"
                transform="translate(0.723633 0.209106)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'logo-charm' && (
        <svg
          fill="none"
          width="38"
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          viewBox="0 0 38 38"
          className="icon-logo-charm icon-component"
        >
          <g clip-path="url(#clip0_2933_152)">
            <path
              d="M8.39275 0.481323V5.694H1.44458L8.39275 12.7501V23.2477H13.3835V5.73251H30.8298V0.481323H8.39275Z"
              fill="#FF6633"
            ></path>
            <path
              d="M37.4651 7.40268H32.4554V24.9179H15.0281V30.1691H25.4551L32.4554 37.2878V30.1691H37.4651V7.40268Z"
              fill="#F32A4C"
            ></path>
            <path
              d="M24.8153 23.2477L24.1565 21.5197C23.8874 20.8142 23.4748 20.1743 22.9456 19.6418C22.4164 19.1093 21.7824 18.6963 21.0852 18.4297L19.4548 17.8088L21.417 16.8461C22.5218 16.3102 23.4095 15.4019 23.929 14.2759L24.8105 12.3506L25.6968 14.2759C26.2155 15.4041 27.1055 16.3131 28.2135 16.8461L30.1709 17.8088L28.3652 18.6463C27.2512 19.1651 26.3485 20.0597 25.8106 21.178L24.8153 23.2477Z"
              fill="#F9A51A"
            ></path>
            <path
              d="M18.6775 16.1675L18.3315 15.2626C18.1907 14.8921 17.9744 14.5561 17.6966 14.2765C17.4189 13.997 17.0861 13.7802 16.7201 13.6406L15.8669 13.3133L16.8954 12.8319C17.4757 12.5522 17.9417 12.0756 18.213 11.4843L18.687 10.4783L19.1609 11.4843C19.4322 12.0756 19.8982 12.5522 20.4785 12.8319L21.507 13.3133L20.5591 13.7561C19.9753 14.0297 19.5018 14.4987 19.2178 15.0845L18.6775 16.1675Z"
              fill="#F9A51A"
            ></path>
            <path
              d="M22.7157 11.2821L22.4835 10.666C22.3872 10.4147 22.24 10.1867 22.0514 9.99679C21.8627 9.80691 21.637 9.6594 21.3886 9.5638L20.8057 9.34239L21.5071 9.00547C21.9012 8.81309 22.2176 8.48832 22.4029 8.08615L22.7157 7.40268L23.0332 8.08615C23.2185 8.48832 23.535 8.81309 23.929 9.00547L24.6257 9.34239L23.9812 9.62637C23.5831 9.8085 23.2609 10.1272 23.0712 10.5264L22.7157 11.2821Z"
              fill="#F9A51A"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2933_152">
              <rect
                fill="white"
                width="36.94"
                height="37.7691"
                transform="translate(0.970703)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'logo-web-security-academy' && (
        <svg
          fill="none"
          width="45"
          xmlns="http://www.w3.org/2000/svg"
          height="43"
          viewBox="0 0 45 43"
          className="icon-logo-web-security-academy icon-component"
        >
          <g clip-path="url(#clip0_2933_146)">
            <path
              d="M44.0106 37.5347L43.9643 36.6028L43.808 33.6047L43.507 27.6605L43.4549 26.6245C43.4257 26.3128 43.4141 25.9998 43.4202 25.6868C43.4202 22.6424 43.3449 19.4474 43.4896 16.3625H43.5533C43.5996 14.001 43.6459 11.6627 43.6922 9.3475C43.7192 8.18991 43.7347 7.03233 43.7385 5.87474V3.68112C43.739 3.4182 43.7255 3.15544 43.698 2.89396C43.68 2.3995 43.5473 1.916 43.3102 1.48171C43.1662 1.24541 42.9677 1.04697 42.7314 0.902917C42.5055 0.768458 42.256 0.678111 41.9964 0.636673C41.7103 0.582741 41.4188 0.563309 41.1282 0.578793H40.3236L38.3384 0.619309L34.3794 0.70034H34.4431L21.0151 0.856614H19.9965L15.6381 0.960796L13.4503 1.04762C12.7615 1.08813 12.0554 1.08813 11.3435 1.08813C9.93125 1.08813 8.48427 1.03604 7.03729 1.03604H3.99284C3.68076 1.04948 3.37159 1.10198 3.07256 1.19231C2.78118 1.28911 2.50892 1.43601 2.26804 1.62641C2.03069 1.80561 1.84335 2.04278 1.72397 2.31517C1.63943 2.51843 1.58484 2.73289 1.56191 2.95184C1.48667 3.67533 1.41142 4.42197 1.33618 5.16862V6.94551C1.33618 8.10309 1.44036 9.22016 1.55612 10.1752V10.0999L1.72976 12.9302L1.79343 14.3193C1.79343 14.7708 1.83973 15.2338 1.83973 15.7142L2.06546 21.4211L2.17543 24.3093C2.22752 25.2527 2.22752 26.1556 2.22752 27.1049V32.0246L2.26804 32.2387C2.48219 33.3963 2.52271 36.1398 2.60953 36.9964C2.69634 37.853 2.69634 38.7328 2.82368 39.7804C2.89859 40.3564 2.9411 40.9361 2.95101 41.5168C3.42562 41.8988 3.44299 41.5168 3.52981 41.2158C3.61662 40.9148 3.78447 40.7875 4.17227 41.2563C4.56006 41.7251 4.88418 39.3579 4.96521 37.9688C5.04624 36.5797 4.71054 35.2716 4.88418 34.4555C4.98836 33.9462 5.09255 32.9159 5.162 32.204V28.3898V25.8778V24.5987L5.1157 23.3601L4.73369 13.3933L4.43851 8.42722C4.39221 7.6227 4.39221 6.81818 4.39221 6.03681C4.38824 5.65013 4.40757 5.26357 4.45009 4.87922L4.4906 4.22519C4.48883 4.21745 4.48886 4.20941 4.49067 4.20168C4.49249 4.19396 4.49604 4.18675 4.50107 4.18061C4.50609 4.17446 4.51246 4.16955 4.51967 4.16624C4.52688 4.16294 4.53476 4.16132 4.54269 4.16152H6.3601H7.72605H7.7029C8.83154 4.19625 9.98913 4.19625 11.1467 4.19625H12.8831L14.6195 4.12679C16.8594 4.03997 19.1456 3.99946 21.4145 3.95315L35.074 3.76215L38.6972 3.71585H40.5494C40.5531 3.712 40.5576 3.70894 40.5626 3.70685C40.5676 3.70476 40.5729 3.70369 40.5783 3.70369C40.5837 3.70369 40.589 3.70476 40.594 3.70685C40.599 3.70894 40.6035 3.712 40.6073 3.71585C40.613 3.74645 40.613 3.77786 40.6073 3.80845V7.10178L40.5378 11.7321L40.4162 21.0391V25.7331C40.4162 26.1151 40.4683 26.5839 40.4683 26.9717L40.5262 28.1293L40.6478 30.4445L40.8909 35.0343L41.0066 37.2106C41.0124 37.2683 41.0124 37.3265 41.0066 37.3842C41.0066 37.4479 40.943 37.4479 40.9024 37.4479H40.4973C40.0632 37.4479 39.6465 37.5057 39.2471 37.5578L38.6683 37.6447H38.5005C38.6857 38.8022 38.5352 37.882 38.5699 38.1077V37.9514L38.5236 37.6504H38.2516L37.1924 37.6967L32.8051 37.8067L24.1695 37.9456H24.0769C24.0364 37.9456 23.9496 37.9861 23.9496 37.9456V37.8357C23.9496 37.8009 23.9033 36.6781 23.9033 36.6781C23.9033 36.626 23.9033 36.6144 24.0248 36.4813C24.2101 36.2498 24.3953 36.0183 24.6036 35.7752C24.9972 35.3006 25.4197 34.8202 25.8365 34.3398L28.3947 31.4458L30.1311 29.4953L31.3234 28.1814L32.4463 26.8849L32.2553 26.6534L32.1048 26.4624L31.9717 26.283C31.8907 26.2124 31.8057 26.1467 31.717 26.0862L31.2424 25.7621C31.06 25.6179 30.8518 25.5099 30.6289 25.4437C29.9383 25.3328 29.2376 25.2979 28.5394 25.3395H26.4095L24.3085 25.38C24.2506 25.3395 24.1522 25.4148 24.1175 25.3395C24.1055 25.2725 24.1055 25.204 24.1175 25.137V21.2764C24.1506 20.5746 23.9623 19.8801 23.5792 19.2912C23.3706 19.0521 23.0939 18.8824 22.7862 18.805C22.6164 18.7686 22.4443 18.7434 22.2711 18.7297H18.7C18.7101 18.7083 18.7238 18.6887 18.7405 18.6718L18.8215 18.5503L19.0009 18.2956L19.0935 18.1625L19.1514 18.0815L19.3771 17.7921C20.5347 16.3046 21.6923 14.8055 22.792 13.237C22.8341 13.1093 22.8946 12.9884 22.9714 12.8781C23.0351 12.7624 23.0814 12.7045 23.203 12.473C23.3357 12.2566 23.4425 12.0255 23.5213 11.7842C23.5484 11.5924 23.5639 11.3991 23.5676 11.2054V9.8742C23.5676 9.29541 23.5213 8.71661 23.5213 8.13782C23.5504 7.4971 23.4979 6.85528 23.365 6.22781C23.0988 6.27411 22.7862 7.23491 22.52 6.77187C22.3463 6.48826 22.1901 7.05548 22.057 8.0047C21.9875 8.49667 21.9238 9.07547 21.8544 9.65426C21.8196 9.95523 21.7849 10.2678 21.7502 10.5803L21.6923 11.0376C21.6746 11.1257 21.6514 11.2127 21.6229 11.298C21.5798 11.3736 21.5229 11.4404 21.455 11.4948C21.455 11.4948 21.3624 11.5932 21.3103 11.6453L21.154 11.8189C20.9341 12.0505 20.7257 12.2704 20.5232 12.4672C20.2116 12.7719 19.8789 13.0543 19.5276 13.3122C18.8924 13.8317 18.3107 14.4134 17.7913 15.0486L17.0041 15.9747C16.7842 16.2236 16.5642 16.5129 16.3269 16.8023L15.3314 18.0583L14.8105 18.7239L14.5442 19.0654L14.4111 19.2391L14.3648 19.3838C14.3069 19.5574 14.249 19.76 14.1854 19.9626C14.1676 20.0091 14.1559 20.0577 14.1506 20.1073V20.2114L14.1796 20.4314C14.1897 20.5591 14.221 20.6843 14.2722 20.8018L14.3069 20.8886C14.3275 20.9372 14.3527 20.9838 14.3822 21.0275L14.4921 21.1896C14.7391 21.4644 15.0578 21.6648 15.4124 21.7684C15.5839 21.8104 15.7579 21.8414 15.9333 21.861C16.8825 21.861 17.8896 21.7973 18.8736 21.7452L20.7547 21.641H21.0962C21.154 21.641 21.154 21.7221 21.154 21.7684V22.926C21.1251 23.4642 21.1251 23.9967 21.1251 24.5292V25.6868C21.1298 26.1628 21.2079 26.6353 21.3566 27.0875C21.4261 27.2961 21.5298 27.4917 21.6634 27.6663C21.7247 27.7567 21.8059 27.8319 21.9007 27.8862C21.9528 27.9846 22.057 28.0078 22.1322 28.0656C22.5494 28.2554 23.0054 28.3447 23.4634 28.3261H27.0693C27.105 28.3146 27.1435 28.3146 27.1793 28.3261L27.1098 28.4129L26.1548 29.4721L23.5792 32.3661C23.1509 32.8523 22.7226 33.3384 22.3 33.8478C22.0859 34.0967 21.8717 34.3629 21.6576 34.6349C21.3038 35.0678 21.0507 35.5739 20.9167 36.1166V37.4305L20.9457 38.0093L21.0036 38.9064C21.017 39.1964 21.0538 39.4848 21.1135 39.7688C21.1738 40.0028 21.2822 40.2216 21.4319 40.4113L21.5303 40.5328C21.5675 40.5719 21.6104 40.6051 21.6576 40.6312C21.7531 40.6949 21.8588 40.7419 21.9701 40.7701C22.2042 40.881 22.458 40.9439 22.7168 40.9553L32.5562 40.828L37.1403 40.7238L38.2979 40.6775C38.4657 40.6775 38.8014 40.6139 39.0098 40.6139L39.5365 40.5155C39.866 40.4635 40.1985 40.4326 40.532 40.4229H41.2729C41.6103 40.4355 41.9481 40.4102 42.28 40.3476C42.6783 40.2681 43.0492 40.0866 43.3565 39.8209C43.6517 39.5506 43.8542 39.1942 43.9353 38.8022C44.0166 38.3849 44.0419 37.9587 44.0106 37.5347Z"
              fill="#FF6633"
            ></path>
            <path
              d="M22.8325 13.1617C22.8147 13.1879 22.7953 13.213 22.7747 13.237L22.8325 13.1617Z"
              fill="#FF6633"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2933_146">
              <rect
                fill="white"
                width="43.8551"
                height="42.2287"
                transform="translate(0.757324)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )}
      {props.type === 'twitter' && (
        <svg
          fill="none"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 48 48"
          className="icon-twitter icon-component"
        >
          <path d="M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937"></path>
        </svg>
      )}
      {props.type === 'discord' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          className="icon-discord icon-component"
        >
          <path
            d="M25.7 7.1Q23 5.9 20 5.3h-.1c-.2.4-.5 1-.7 1.5c-2.2-.3-4.3-.3-6.4 0c-.2-.5-.5-1-.7-1.5H12q-3 .45-5.7 1.8C2.7 12.5 1.7 17.8 2.2 23v.1c2.4 1.8 4.7 2.8 7 3.5h.1c.5-.7 1-1.5 1.4-2.3v-.1c-.8-.3-1.5-.6-2.2-1c-.1 0-.1-.1 0-.1c.1-.1.3-.2.4-.3H9c4.6 2.1 9.5 2.1 14.1 0h.1c.1.1.3.2.4.3c.1 0 0 .1 0 .1c-.7.4-1.4.8-2.2 1c0 0-.1.1 0 .1c.4.8.9 1.6 1.4 2.3h.1c2.3-.7 4.6-1.8 7-3.5V23c.6-6-1-11.2-4.2-15.9M11.4 19.9c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8s-1.1 2.8-2.5 2.8m9.3 0c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8s-1.1 2.8-2.5 2.8"
            fill="currentColor"
          ></path>
        </svg>
      )}
      {props.type === 'app-security' && (
        <img
          alt="image"
          src="/Icons/app-security.svg"
          className="icon-app-security"
        />
      )}
      {props.type === 'catch-bugs' && (
        <img
          alt="image"
          src="/Icons/catch-bugs.svg"
          className="icon-catch-bugs"
        />
      )}
      {props.type === 'secure-code' && (
        <img
          alt="image"
          src="/Icons/secure-code.svg"
          className="icon-secure-code"
        />
      )}
      {props.type === 'discover' && (
        <img
          alt="image"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08f747ed-00a5-4c49-bf33-6ab4b22224ae/c3f409e4-5e33-415d-ba69-321429c92a8c?org_if_sml=15591&amp;force_format=original"
          className="icon-discover"
        />
      )}
      {props.type === 'attack' && (
        <img alt="image" src="/Icons/attack.svg" className="icon-attack" />
      )}
      {props.type === 'report' && (
        <img alt="image" src="/Icons/report.svg" className="icon-report" />
      )}
    </div>
  )
}

Icon.defaultProps = {
  rootClassName: '',
  type: 'repeat',
}

Icon.propTypes = {
  rootClassName: PropTypes.string,
  type: PropTypes.string,
}

export default Icon
