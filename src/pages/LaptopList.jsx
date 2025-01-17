import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LaptopFilter from './LaptopFilter';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  
  useEffect(() => {
    // Fetch laptops data from the API
    fetch('https://mocki.io/v1/990942b2-d6e4-426e-971a-76f5af845669')
      .then(response => response.json())
      .then(data => {
        setLaptops(data);
        setFilteredLaptops(data);
      });
  }, []);

  const handleFilter = (searchTerm) => {
    const filtered = laptops.filter(laptop =>
      laptop.specifications.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      laptop.specifications.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLaptops(filtered);
  };

  return (
    <div>
      <h1>Laptop List</h1>
      <LaptopFilter onFilter={handleFilter} />
      <Container>
        <Row>
        {filteredLaptops.map(laptop => (
            <Col style={{ padding: '10px' }}>
              <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={laptop.imageUrl} />
                    <Card.Body>
                      <Card.Title>{laptop.specifications.brand} {laptop.specifications.model}</Card.Title>
                      <Card.Text>
                        {laptop.specifications.processor} - {laptop.specifications.memory} GB RAM
                      </Card.Text>
                      <Link to={`/laptop/${laptop.id}`}>
                        <button className='btn-primary'>View Details</button>
                      </Link>
                    </Card.Body>
                </Card>
              </Col>
          ))}
          </Row>
        </Container>
    </div>
  );
};

export default LaptopList;
