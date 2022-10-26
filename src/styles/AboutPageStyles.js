import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px 20px;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 15px 15px;
    gap: 35px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 15px 15px;
    gap: 45px;
  }
`;

export const ArticleImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArticleImage = styled.img`
  height: 300px;
  width: 500px;
  cursor: pointer;
  border: 1px solid #e50914;
  border-radius: 10px;

  :hover {
    -webkit-box-shadow: -1px 3px 41px 0px rgba(255, 0, 0, 1);
    -moz-box-shadow: -1px 3px 41px 0px rgba(255, 0, 0, 1);
    box-shadow: -1px 3px 41px 0px rgba(255, 0, 0, 1);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 200px;
    width: 300px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 300px;
    width: 400px;
  }
`;

export const ArticleContent = styled.article`
  font-size: 26px;
  font-weight: bolder;
  text-align: justify;
  align-items: center;
`;

export const AboutTextBox = styled(ArticleImageBox)``;

export const AboutTextArticle = styled.article`
  font-size: 30px;
  color: white;
  text-align: justify;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 26px;
  }
`;
