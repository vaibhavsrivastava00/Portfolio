import React from 'react';
import styled from 'styled-components';

const LeetCodeButton = () => {
  return (
    <StyledWrapper>
      <button className="Btn" aria-label="LeetCode" onClick={() => window.open('https://leetcode.com/u/Vaibhav_Srivastava_08/', '_blank')}>
        <span className="svgContainer">
          <svg viewBox="0 0 50 50" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M36.5 36.5L13.5 13.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round"/>
              <path d="M25 45C35.4934 45 44.5 35.9934 44.5 25.5C44.5 15.0066 35.4934 6 25 6C14.5066 6 5.5 15.0066 5.5 25.5C5.5 35.9934 14.5066 45 25 45Z" stroke="#FFA116" strokeWidth="4"/>
              <path d="M19 31L31 19" stroke="#292D3E" strokeWidth="4" strokeLinecap="round"/>
            </g>
          </svg>
        </span>
        <span className="BG" />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    border-radius: 10px;
    transition: all .3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #FFA116 0%, #292D3E 100%);
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all .3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }
`;

export default LeetCodeButton; 