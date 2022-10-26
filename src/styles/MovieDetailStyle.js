import styled from "styled-components";

export const MoviePageContainer = styled.div`
  position: relative;
  user-select: contain;

  .coverAllImage {
    position: absolute;
    opacity: 0.1;
    object-fit: cover;
    width: 100%;
    z-index: -1;
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
      gap: 20px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      gap: 30px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      gap: 38px;
    }
  }

  .nameshare {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .movieName {
    margin-top: 40px;
    font-size: 40px;
    font-weight: bolder;
    color: red;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 25px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 30px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 32px;
    }
  }

  .movieYear {
    font-size: 33px;
    font-weight: bolder;
    color: #006400;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 22px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 25px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 30px;
    }
  }

  .videoPlayer {
    /* height: 800px; */
    width: 100%;
  }

  .movieDes {
    font-size: 32px;
    font-weight: bold;
    text-align: justify;
    color: white;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 20px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 23px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 28px;
    }
  }
`;

export const ShareLinkBox = styled.div`
  text-decoration: none;
  color: white;
  transition: transform 0.5s;
  font-size: 22px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &.active {
    color: #e50914;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    color: #e50914;
    font-size: 22px;
  }

  .shareIcon {
    color: #1da1f2;
    height: 35px;
    width: 35px;

    @media (min-width: 320px) and (max-width: 480px) {
      height: 30px;
      width: 30px;
    }
  }
`;
