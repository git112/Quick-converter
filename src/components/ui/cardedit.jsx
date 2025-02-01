import React from 'react';
import styled from 'styled-components';

const CardE = ({ title, icon, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <div className="icon text-3xl">{icon}</div>
              <div className='title'>{title}</div>
            </div>
          </div>
          <div className="front">
            <div className="front-content">
              <div className="description">
                {description || 'Convert your files easily with our tool'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 150px;
    height: 150px; /* Changed to full height */
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515; /* Background color remains the same */
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #66fcff, #66fcff, #66fcff, #66fcff, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    text-align: center;
    padding: 10px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    font-size: 0.9rem;
    text-align: center;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

export default CardE;