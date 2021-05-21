import React from 'react';
import styled from 'styled-components';

const CharacterCard = ({ name, image, species }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <NameWrapper>
        {name}
      </NameWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #6f989e;
  background-color: 	#dcdcdc;
  border-radius: 8px;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const NameWrapper = styled.div`
  background-color: #8ed8fc;
  text-align: center;
  border-radius: 0 0 8px 8px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
`;

const ImageWrapper = styled.div`
  width: 40%;
  padding: 8px;
  margin: auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  object-position: center center;
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

export default CharacterCard;
