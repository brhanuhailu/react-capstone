import React from 'react';
import { FaCoins } from 'react-icons/fa';
import styled from 'styled-components';

const Spinner = styled.div`
  padding: 0;
  margin: 0;
  width: 10rem;
  height: 10rem;
  margin: auto;
  border: none;
  border-top: 3px white solid;
  border-left: 3px white solid;
  border-radius: 50%;
  animation: rotateIn infinite 1s linear;
  @keyframes rotateIn {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Message = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  float: 50%;
  font-size: 1.3em;
  animation: msg infinite 2s linear;
  @keyframes msg {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

const Loading = () => (
  <>
    <SpinnerContainer>
      <Spinner />
      <Message>
        <FaCoins fontSize="10em" />
      </Message>
    </SpinnerContainer>
  </>
);

export default Loading;
