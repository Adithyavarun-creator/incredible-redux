import React from "react";
import {
  ArticleContainer,
  ArticleImage,
  ArticleContent,
  ArticleImageBox,
  AboutTextArticle,
  AboutTextBox,
} from "../styles/AboutPageStyles";
import AboutImage from "../assets/netflixposter.png";
import BackButton from "../components/BackButton/BackButton";
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <>
      <ArticleContainer>
        <BackButton text="Go Back" link="/" />
        <Header title="About The Start !!!" />
        <ArticleImageBox>
          <ArticleImage src={AboutImage} alt="" />
        </ArticleImageBox>
        <AboutTextBox>
          <AboutTextArticle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus pariatur iste consectetur quibusdam maxime excepturi eos
            laudantium recusandae doloremque possimus saepe vitae, molestias
            amet itaque corporis vel dolorem cum iusto laboriosam quaerat, ab
            nobis quisquam exercitationem architecto? Voluptatem quo
            voluptatibus fugit. Aperiam, reiciendis dolor repellat porro
            asperiores beatae consequuntur, nostrum voluptatem quae nisi amet
            labore quis at. Delectus, aperiam voluptate, non cumque commodi
            placeat id eligendi, minus illo tenetur optio eveniet molestiae
            mollitia sed est et labore? Illo natus, recusandae asperiores,
            perferendis tempora repellat modi minima eum ipsam aperiam labore
            earum cupiditate architecto! Aspernatur illum ab veniam sit aliquam
            reiciendis?
          </AboutTextArticle>
        </AboutTextBox>
      </ArticleContainer>
    </>
  );
};

export default AboutPage;
