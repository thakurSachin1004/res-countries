import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Flag from './flag';
import { withRouter } from 'react-router-dom';

const FlagContainer = (props) => {
  const [flagsData, setFlagsData] = useState([]);

  let debounceTimer;

  const fetchFlagData = async (url) => {
    const res = await fetch(url);
    const flags = await res.json();
    setFlagsData(flags);
  };

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetchFlagData(url);
  }, []);

  const onRegionChange = (region) => {
    const url =
      region === 'all'
        ? 'https://restcountries.eu/rest/v2/all'
        : `https://restcountries.eu/rest/v2/region/${region}`;
    fetchFlagData(url);
  };

  const onSearch = (country) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      if (country.length > 0) {
        const filteredData = flagsData.filter(
          (elt) =>
            elt.name.toLowerCase() === country.toLowerCase()
        );
        setFlagsData(filteredData);
      } else if (country.length === 0) {
        fetchFlagData(
          'https://restcountries.eu/rest/v2/all'
        );
      }
    }, 1000);
  };

  return (
    <>
      <StyledContainer>
        <StyledInput
          type="search"
          placeholder="Search for a country..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <StyledSelect
          name="region"
          onChange={(e) => onRegionChange(e.target.value)}
        >
          <option value="africa">all</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </StyledSelect>
      </StyledContainer>

      <StyledDiv>
        {!!flagsData.length &&
          flagsData.map((elt) => (
            <Flag flag={elt} history={props.history} />
          ))}
      </StyledDiv>
    </>
  );
};

export default withRouter(FlagContainer);

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 76px;
  margin-top: 40px;

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 475px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  width: 380px;
  height: 38px;
  border: ${(props) => props.theme.lightBody};
  background: ${(props) => props.theme.lightBody};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
  @media (max-width: 475px) {
    width: auto;
    margin-bottom: 20px;
  }
`;

const StyledSelect = styled.select`
  width: 200px;
  height: 38px;
  border: ${(props) => props.theme.lightBody};
  background: ${(props) => props.theme.lightBody};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
`;
