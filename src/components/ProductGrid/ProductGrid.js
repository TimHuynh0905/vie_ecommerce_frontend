import React from 'react';
import Card from '../Card/Card';
import { Row, Col } from 'react-bootstrap';
import './ProductGrid.css';

const ProductGrid = (props) => (
    <div className="grid">
        <Row>
            {
                props.shoesCollection.map(({ imageUrl, id, ...otherItemProps }) => (
                    <Col key={id} xl={4} lg={6} md={6} sm={6}><Card img={imageUrl} id={id} {...otherItemProps}/></Col>
                ))
            }
        </Row>
    </div>
);

export default ProductGrid;
