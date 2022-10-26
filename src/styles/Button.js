import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieButton = styled.button`
  padding: 10px 15px;
  background-color: black;
  color: white;
  border: none;
  offset: none;
  cursor: pointer;
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
  border-radius: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BackLink = styled(Link)`
  padding: 12px 26px;
  background-color: #e50914;
  color: white;
  border: none;
  offset: none;
  cursor: pointer;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 14px 24px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 12px 20px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px 18px;
  }

  span {
    font-weight: bolder;
    font-size: 18px;
    text-align: center;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 15px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      padding: 17px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }

  :hover {
    color: #e50914;
    background-color: white;
  }
`;
