import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";





function Home(product){
    const navigate=useNavigate()
    return(<div>

        <Container>
      <Row  md={3}>
        <Col > <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall_231208-2681.jpg?ga=GA1.1.491295375.1739386080&semt=ais_hybrid" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text> </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/card")}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col > <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall_231208-2681.jpg?ga=GA1.1.491295375.1739386080&semt=ais_hybrid" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text> </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/card")}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    </Row>
    </Container>
  

    </div>)
}
export default Home;