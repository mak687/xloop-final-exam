import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    fetch('https://mocki.io/v1/990942b2-d6e4-426e-971a-76f5af845669')
      .then(response => response.json())
      .then(data => {
        const laptopDetail = data.find(laptop => laptop.id === id);
        setLaptop(laptopDetail);
      });
  }, [id]);

  if (!laptop) {
    return <p>Loading...</p>;
  }
  console.log(laptop)

  return (
    <div>
      <h1>{laptop.specifications.brand} {laptop.specifications.model}</h1>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image  src={laptop.imageUrl}  rounded width="50%"/>
          </Col>
          <Col xs={6} md={4}>
          <p><strong>Processor:</strong> {laptop.specifications.processor}</p>
          <p><strong>RAM:</strong> {laptop.specifications.memory} GB</p>
          <p><strong>Storage:</strong> {laptop.specifications.storage} </p>
          <p><strong>Price:</strong> ${laptop.pricing.basePrice}</p>
          </Col>
        </Row>
    </Container>
    
     
      <Table striped bordered hover>
      <tbody>
          <tr>
            <th colSpan="2">Display  </th>
          </tr>
          <tr>
             <td>Resolution </td><td> {laptop.specifications.display.resolution}</td>
           </tr>
           <tr>
             <td>Size </td><td> {laptop.specifications.display.size}</td>
            </tr>
            <tr>
             <td>Type </td><td> {laptop.specifications.display.type}</td>
            </tr>

            <tr>
              <th colSpan="2">Model  </th>
            </tr>
            <tr> 
              <td colSpan="2"> {laptop.specifications.model}</td>
            </tr>
            
            <tr>
              <th colSpan="2">Year  </th>
            </tr>
            <tr> 
              <td colSpan="2"> {laptop.specifications.year}</td>
            </tr>
            </tbody>
      </Table>

      <Link to={`/`}>
            <button className='btn btn-primary'> Back to Listing</button>
        </Link>
    </div>
  );
};

export default LaptopDetail;
