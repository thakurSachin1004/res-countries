import React from 'react';
import styled from 'styled-components';

const Flag = ({ flag, history }) => {
  return (
    <StyledDiv
      onClick={() => history.push(`/${flag.name}`)}
    >
      <StyledImage src={flag.flag} />
      <StyledFlagDetails>
        <h3>{flag.name}</h3>
        <p>
          Population{' '}
          <StyledSpan>{flag.population}</StyledSpan>
        </p>
        <p>
          Region <StyledSpan> {flag.region} </StyledSpan>
        </p>
        <p>
          Capital <StyledSpan> {flag.capital} </StyledSpan>
        </p>
      </StyledFlagDetails>
    </StyledDiv>
  );
};

export default Flag;

const StyledDiv = styled.div`
  background: ${(props) => props.theme.lightBody};
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
`;

const StyledFlagDetails = styled.div`
  margin-left: 20px;
`;

const StyledSpan = styled.span`
  color: gray;
  margin-left: 10px;
`;
