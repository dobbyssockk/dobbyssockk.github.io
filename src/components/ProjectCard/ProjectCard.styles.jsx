import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  img {
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img, &:active img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 10px;
    box-sizing: border-box;

    h3 {
      font-size: 18px;
      color: #FFF;
      margin-bottom: 5px;
      text-align: center;
    }

    p {
      font-size: 14px;
      color: #FFF;
      margin-bottom: 10px;
      text-align: center;
    }

    a {
      border: 2px solid white;
      padding: 10px 20px;
      text-decoration: none;
      color: white;
      text-align: center;
      transition: background-color 0.3s ease;
    }

    a:hover {
      background-color: white;
      color: black;
    }

    .tech-line {
      font-size: 12px;
      margin-top: 10px;
      color: #aaa;
      font-weight: 400;
      text-align: center;
    }
  }

  &:hover .overlay, &item:active .overlay {
    opacity: 1;
  }
`;