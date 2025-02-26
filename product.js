
import React from 'react';
import ProductDetails from './ProductDetails';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

    const  products=[
        {id:1,name:'kurtis',price:999,image:"https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall_231208-2681.jpg?ga=GA1.1.491295375.1739386080&semt=ais_hybrid"},
        {id:2,name:'kurtis',price:799,image:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17894614/2022/5/6/a9d737b5-a5cf-4085-af29-3b261886d5ee1651830892554-all-about-you-Women-Kurtis-111651830892128-1.jpg"},
        {id:3,name:'kurtis',price:599,image:"https://tse2.mm.bing.net/th?id=OIP.pQJ4teF9uB6ckA-CPMRKtgHaJ4&pid=Api&P=0&h=180"},
        {id:4,name:'kurtis',price:499,image:"https://cdn.luxe.digital/media/sites/7/2019/01/23075917/dressy-smart-casual-men-style-luxury-luxe-digital.jpg"},
        {id:5,name:'Mens',price:399,image:"https://www.suitsexpert.com/wp-content/uploads/2019/04/men-suit-styles-differences-and-types.jpg"},
        {id:6,name:'Mens',price:299,image:"https://assets.vogue.com/photos/649090dfc805bb9571b62a66/master/w_1600,c_limit/milan_mens_ss24_street_style_acielle_day4_014.jpg"},
        {id:7,name:'Mens',price:199,image:"https://tse2.mm.bing.net/th?id=OIP.XkdERq6aRK2G1GH2de_EjQHaJ2&pid=Api&P=0&h=180"},
        {id:8,name:'Mens',price:1099,image:"https://assets.vogue.com/photos/649090dfc805bb9571b62a66/master/w_1600,c_limit/milan_mens_ss24_street_style_acielle_day4_014.jpg"},
        {id:9,name:'Kids',price:999,image:"https://tse2.mm.bing.net/th?id=OIP.XkdERq6aRK2G1GH2de_EjQHaJ2&pid=Api&P=0&h=180"},
        {id:10,name:'Kids',price:999,image:"https://tse2.mm.bing.net/th?id=OIP._tpWbnSsHb5CO-ZmX00exAHaE8&pid=Api&P=0&h=180"},
        {id:11,name:'Kids',price:999,image:"https://tse1.mm.bing.net/th?id=OIP.q2JADOgdzUkndGS2dQD9CQHaHa&pid=Api&P=0&h=180"},
        {id:12,name:'Kids',price:999,image:"https://tse1.mm.bing.net/th?id=OIP.hUnDAdr7W2V9S9e2U4z1mwHaHa&pid=Api&P=0&h=180"},

    ];
    function Product() {
        return(
        <div>
           {products.map((product) => (
            <Container>
                <Row  >
                    <Col md={3}   className="">
            <ProductDetails key={product.id} product={product}/>
            </Col>
            
            </Row>
            </Container>
          ))}
        </div>
    
        )}
    
    
export default Product;