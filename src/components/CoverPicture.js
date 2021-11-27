import React from "react";
import styled from "styled-components";

export const CoverPicture = ({ url, alt }) => {
  return <CoverImage src={url} alt={alt} />;
};

const CoverImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;
