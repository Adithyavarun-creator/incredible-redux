import React from "react";
import { ReleaseContainer, ReleaseButton } from "../../styles/ReleaseYear";

const ReleaseYear = ({ filterReleaseYear }) => {
  return (
    <ReleaseContainer>
      <ReleaseButton onClick={() => filterReleaseYear(2000)}>
        2000
      </ReleaseButton>
      <ReleaseButton onClick={() => filterReleaseYear(2010)}>
        2001
      </ReleaseButton>
      <ReleaseButton onClick={() => filterReleaseYear(2015)}>
        2003
      </ReleaseButton>
      <ReleaseButton onClick={() => filterReleaseYear(2020)}>
        2004
      </ReleaseButton>
    </ReleaseContainer>
  );
};

export default ReleaseYear;
