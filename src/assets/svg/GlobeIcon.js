import React from "react";

function MainGlobe(props) {
  return <g {...props}></g>;
}

function GlobeIcon() {
  const container = [<MainGlobe key="globe" />];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="400"
      version="1.1"
      viewBox="0 0 14.175 14.175"
      xmlSpace="preserve"
    >
      <defs>
        <clipPath id="clipPath4258" clipPathUnits="userSpaceOnUse">
          <path d="M0 11.34h11.34V0H0v11.34z"></path>
        </clipPath>
      </defs>
      <g transform="matrix(1.25 0 0 -1.25 0 14.175)">
        <g
          stroke="#58928a"
          strokeOpacity="1"
          transform="rotate(11.736 5.67 5.67)"
        >
          <g stroke="#58928a" strokeOpacity="1" clipPath="url(#clipPath4258)">
            <g transform="translate(.563 5.67)">
              <path
                fill="none"
                stroke="#58928a"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="1"
                d="M0 0a5.108 5.108 0 1010.215-.001A5.108 5.108 0 000 0z"
              ></path>
            </g>
            <g transform="translate(8.411 5.67)">
              <path
                fill="none"
                stroke="#58928a"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="1"
                d="M0 0c0 2.819-1.259 5.106-2.811 5.106S-5.622 2.819-5.622 0c0-2.823 1.259-5.108 2.811-5.108S0-2.823 0 0z"
              ></path>
            </g>
            <g transform="translate(5.67 10.647)">
              <path
                fill="none"
                stroke="#58928a"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="1"
                d="M0 0v-9.855"
              ></path>
            </g>
            <g transform="translate(.563 5.67)">
              <path
                fill="none"
                stroke="#58928a"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="1"
                d="M0 0h10.214"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default GlobeIcon;
