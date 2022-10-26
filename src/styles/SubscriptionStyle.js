import styled from "styled-components";
import { MovieButton } from "./Button";

export const SubscriptionContainer = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 18px;
  padding-bottom: 20px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  grid-template-rows: 500px 500px 500px;
  column-gap: 40px;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 230px;
    /* grid-template-rows: 250px; */
    row-gap: 5px;
    padding: 5px 5px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 280px;
    /* grid-template-rows: 250px; */
    row-gap: 45px;
    padding: 5px 5px;
  }
`;

export const GridBox = styled.div`
  border: 1px solid #e50914;
  cursor: pointer;
  transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (min-width: 320px) and (max-width: 480px) {
    border: 1px solid #e50914;
    height: 420px;
  }

  :hover {
    transform: scale(1.1);

    @media (min-width: 320px) and (max-width: 480px) {
      transform: none;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      transform: scale(1.1);
    }
  }
`;

export const PlanBox = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  background-color: red;
  flex-direction: column;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 20px 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 20px 15px;
  }

  .planName {
    font-size: 30px;
    color: black;
    font-weight: bolder;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 25px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 30px;
    }
  }
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .subPrice {
    font-size: 56px;
    color: #e50914;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 46px;
    }
  }

  .perMonth {
    font-size: 48px;
    color: #e50914;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 38px;
    }
  }
`;

export const ListElements = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    gap: 10px;
    margin-top: 15px;
  }
`;

export const PlanList = styled.li`
  font-size: 18px;
  color: white;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ButtonSubsBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (min-width: 320px) and (max-width: 480px) {
    /* margin-top: 15px; */
    margin-bottom: 0;
  }
`;

export const SignInButton = styled(MovieButton)`
  padding: 10px 24px;
  color: #e50914;
  background-color: white;
  font-size: 18px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 8px 20px;
    font-size: 15px;
  }

  :hover {
    color: white;
    background-color: #e50914;
  }
`;

export const ShareBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
