import React from "react";

const Stars = ({ rate }: { rate: number }) => {
  return (
    <div className="Stars">
      <svg width={20} height={19} viewBox="0 0 20 19">
        <path
          className="star"
          d="M455-9.73,461.18-6l-1.64-7.03L465-17.76l-7.19-.61L455-25l-2.81,6.63-7.19.61,5.46,4.73L448.82-6Z"
          transform="translate(-445 25)"
          fill={rate >= 1 ? "#deae3d" : "transparent"}
          stroke="#deae3d"
          strokeWidth={1}
          fillRule="evenodd"
        />
      </svg>
      <svg width={20} height={19} viewBox="0 0 20 19">
        <path
          className="star"
          d="M455-9.73,461.18-6l-1.64-7.03L465-17.76l-7.19-.61L455-25l-2.81,6.63-7.19.61,5.46,4.73L448.82-6Z"
          transform="translate(-445 25)"
          fill={rate >= 2 ? "#deae3d" : "transparent"}
          stroke="#deae3d"
          strokeWidth={1}
          fillRule="evenodd"
        />
      </svg>
      <svg width={20} height={19} viewBox="0 0 20 19">
        <path
          className="star"
          d="M455-9.73,461.18-6l-1.64-7.03L465-17.76l-7.19-.61L455-25l-2.81,6.63-7.19.61,5.46,4.73L448.82-6Z"
          transform="translate(-445 25)"
          fill={rate >= 3 ? "#deae3d" : "transparent"}
          stroke="#deae3d"
          strokeWidth={1}
          fillRule="evenodd"
        />
      </svg>
      <svg width={20} height={19} viewBox="0 0 20 19">
        <path
          className="star"
          d="M455-9.73,461.18-6l-1.64-7.03L465-17.76l-7.19-.61L455-25l-2.81,6.63-7.19.61,5.46,4.73L448.82-6Z"
          transform="translate(-445 25)"
          fill={rate >= 4 ? "#deae3d" : "transparent"}
          stroke="#deae3d"
          strokeWidth={1}
          fillRule="evenodd"
        />
      </svg>
      <svg width={20} height={19} viewBox="0 0 20 19">
        <path
          className="star"
          d="M455-9.73,461.18-6l-1.64-7.03L465-17.76l-7.19-.61L455-25l-2.81,6.63-7.19.61,5.46,4.73L448.82-6Z"
          transform="translate(-445 25)"
          fill={rate >= 5 ? "#deae3d" : "transparent"}
          stroke="#deae3d"
          strokeWidth={1}
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Stars;
