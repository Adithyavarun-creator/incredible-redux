import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  padding-left: 2rem;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
  }

  .searchInput::placeholder,
  .searchInput:focus {
    text-align: center;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 14px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 14px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 14px;
    }
  }

  .filterBox {
    @media (min-width: 768px) and (max-width: 1024px) {
    }

    @media (min-width: 481px) and (max-width: 767px) {
    }

    @media (min-width: 320px) and (max-width: 480px) {
      padding: 2rem 2rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const FeatureBox = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    /* padding: 1rem 1rem; */
    padding-top: 1rem;
    gap: 10px;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 70px;
  column-gap: 35px;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 40px;
    justify-content: center;
  }
`;

export const HeaderSubtitle = styled.h2`
  background: linear-gradient(to right, #348f50, #56b4d3);
  font-size: 30px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: 40px;
  text-align: center;
`;
