import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Routes, Route, useNavigate} from 'react-router-dom';
  

const ProductDetails =({product}) =>
{
   const navigate=useNavigate() 

return(<div>
<Card>
          <Card.Body>
            
            <Card.Text>        
                <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
            </Card.Text>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <strong>Price:</strong> ${product.price}
            </Card.Text>
            <Card.Text>
              <strong>Category:</strong> {product.category}
            </Card.Text>
          </Card.Body>
          
          <Button variant="primary" onClick={()=>navigate("/card")}>Buy Now</Button>
           
        </Card>

</div>)
}
export default ProductDetails;
