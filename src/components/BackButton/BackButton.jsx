import React from "react";
import { ButtonBox, BackLink } from "../../styles/Button";

const BackButton = ({ link, text }) => {
  return (
    <ButtonBox>
      <BackLink to={link}>
        <span>&larr;</span>
        <span>{text}</span>
      </BackLink>
    </ButtonBox>
  );
};

export default BackButton;
