import styled from "styled-components";

export const MovieCardWrapper = styled.div`
  display: grid;
  border: 2px solid green;
  position: relative;
`;

export const ImageContainer = styled.img`
  height: 350px;
  width: 100%;
  object-fit: fill;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 250px;
    width: 100%;
    object-fit: fill;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  color: white;
  text-decoration: underline;

  @media (min-width: 320px) and (max-width: 480px) {
    color: white;
    font-size: 20px;
    font-weight: bolder;
    text-decoration: underline;
  }
`;

export const Description = styled.h2`
  font-size: 26px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ReleaseYear = styled.h3`
  font-size: 24px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    color: white;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 10px;
  }
`;

export const RatingBox = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;

  .starIcon {
    height: 45px;
    width: 45px;
    color: yellow;

    @media (min-width: 320px) and (max-width: 480px) {
      height: 35px;
      width: 35px;
    }
  }
`;

export const Rating = styled.span`
  position: absolute;
  right: 12px;
  color: black;
  top: 12px;
  font-weight: bolder;
  font-size: 18px;

  @media (min-width: 320px) and (max-width: 480px) {
    right: 10px;
    top: 10px;
    font-weight: bolder;
    font-size: 14px;
  }
`;
