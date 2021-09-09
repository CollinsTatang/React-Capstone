import PropTypes from 'prop-types';
import { useState } from 'react';
import { Col, InputGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { countries, totalConfirmed, ready } from '../../Redux/countries/cases';
import World from '../world.svg';

const Filter = (props) => {
  const filterValues = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <InputGroup className="mb-3">
      <span className="input-group-prepend">
        <i className="input-group-text fa fa-search" />
      </span>
      <input type="text" onChange={filterValues} className="form-control no-shadow" />
    </InputGroup>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default function Home() {
  const [filter, setFilter] = useState('');
  const countryComponents = useSelector(countries)
    .filter(({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()))
    .map((country, index) => (
      <LinkContainer key={country.id} to={`/details/${country.id}`}>
        <Col
          xs={6}
          sm={6}
          md={3}
          className={`
          d-flex flex-column justify-content-between
          align-items-end
          ${([1, 0, 0, 1][index % 4]) ? 'bg-pink1' : 'bg-pink2'}
        `}
        >
          <i className="far fa-arrow-alt-circle-right text-white mt-1 mb-4 h5" />
          <span
            className="d-flex flex-column align-items-end text-white mt-4"
            style={{ cursor: 'pointer' }}
          >
            <h5 className="d-inline-block m-0 text-end fw-bold">{country.name.toUpperCase()}</h5>
            <p>
              {
              Number(country.today_confirmed).toLocaleString()
            }
              {' '}
              Cases
            </p>
          </span>
        </Col>
      </LinkContainer>
    ));

  const loader = <div className="loader" />;
  return (
    <div className="pt-3 bg-pink2">
      <Row className="m-0">
        <Col xs={6} sm={6} md={6} className="d-flex justify-content-end">
          <img
            src={World}
            alt="World"
            height="150px"
          />
        </Col>
        <Col xs={6} sm={6} md={6} className="p-0 text-white d-flex flex-column justify-content-center">
          <h1 className="fw-bold m-0">GLOBAL</h1>
          <p>
            {Number(useSelector(totalConfirmed)).toLocaleString()}
            {' '}
            Total Cases
          </p>
        </Col>
      </Row>
      <Row className="pt-3 m-0 mt-4 bg-pink1" style={{ cursor: 'pointer' }}>
        <Row>
          <Col xs={12} sm={12} md={2}>
            <h6 className="text-white fw-bold m-0 p-2 d-inline-block">STATS BY COUNTRY</h6>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Filter setFilter={setFilter} />
          </Col>
        </Row>
        { useSelector(ready) ? countryComponents : loader }
      </Row>
    </div>
  );
}
