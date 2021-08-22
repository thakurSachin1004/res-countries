import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const CountryDetails = (props) => {
  const [countryData, setCountryData] = useState();

  const { country } = props.match.params;

  const fetchCountryData = async () => {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const data = await res.json();
    debugger;
    if (data.length) {
      setCountryData(data[0]);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div>
      <StyledButton onClick={() => props.history.push('/')}>
        Back
      </StyledButton>
      {countryData && (
        <StyledDiv>
          <StyledImage
            src={countryData.flag}
            alt="country-flag"
          />
          <StyledCountryContainer>
            <h2>{countryData.name}</h2>
            <StyledCountryDetails>
              <div>
                <p>
                  Native name:
                  <StyledSpan>
                    {countryData.nativeName}
                  </StyledSpan>
                </p>
                <p>
                  Population:
                  <StyledSpan>
                    {countryData.population}
                  </StyledSpan>
                </p>
                <p>
                  Region:
                  <StyledSpan>
                    {countryData.region}
                  </StyledSpan>
                </p>
                <p>
                  Sub Region:
                  <StyledSpan>
                    {countryData.subregion}
                  </StyledSpan>
                </p>
                <p>
                  Capital:
                  <StyledSpan>
                    {countryData.capital}
                  </StyledSpan>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain:
                  <StyledSpan>
                    {countryData.topLevelDomain[0]}
                  </StyledSpan>
                </p>
                <p>
                  Currencies:
                  {countryData.currencies.map(
                    (currency) => (
                      <StyledSpan>
                        {currency.name}
                      </StyledSpan>
                    )
                  )}
                </p>
                <p>
                  Languages:
                  {countryData.languages.map((language) => (
                    <StyledSpan>{language.name}</StyledSpan>
                  ))}
                </p>
              </div>
            </StyledCountryDetails>
            {!!countryData.borders.length && (
              <FlexContainer>
                <p>Border Countries: </p>
                <StyledBorders>
                  {countryData.borders.map((elt) => (
                    <StyledElt>{elt}</StyledElt>
                  ))}
                </StyledBorders>
              </FlexContainer>
            )}
          </StyledCountryContainer>
        </StyledDiv>
      )}
    </div>
  );
};

export default withRouter(CountryDetails);

const StyledBorders = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin-top: 50px;

  @media (max-width: 475px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledCountryContainer = styled.div`
  width: 42%;
  @media (max-width: 475px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 40%;
  object-fit: cover;
  @media (max-width: 475px) {
    width: 100%;
  }
`;

const StyledCountryDetails = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 475px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 475px) {
    display: block;
  }
`;

const StyledElt = styled.div`
  margin-left: 14px;
  border: 1px solid lightgrey;
  padding: 5px 30px;
  font-size: 12px;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 0.1);

  @media (max-width: 475px) {
    margin-left: 0;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;

const StyledButton = styled.button`
  margin-top: 50px;
  border: 1px solid lightgrey;
  padding: 5px 30px;
  font-size: 12px;
  background: ${(props) => props.theme.lightBody};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 0.1);
`;

const StyledSpan = styled.span`
  color: gray;
  margin-left: 10px;
`;
