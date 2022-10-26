import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 40px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 20px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    margin-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 40px;
    margin-top: 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 40px;
    margin-top: 30px;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 50px;
  font-size: 20px;
  border: 1px solid gray;
  outline: none;

  :focus {
    text-align: center;
  }

  ::placeholder {
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 40px;
    font-size: 16px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 50%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 40px;
    font-size: 12px;
    border: 1px solid gray;
    outline: none;
    width: 100%;

    :focus {
      text-align: center;
    }

    ::placeholder {
      text-align: center;
    }
  }
`;
