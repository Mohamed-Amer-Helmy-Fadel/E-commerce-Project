import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import ViewHomeProductsHook from './../../hooks/products/view-homePage-products-hook';
import ViewProductsDetalisHook from './../../hooks/products/view-productsPage-detalis-hook';
const ProductDetalisPage = () => {

    const { id } = useParams();
    const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
    if (prod)
        var items = prod.slice(0, 4)

    if (item) {
        var rateAvg = item.ratingsAverage
        var rateQty = item.ratingsQuantity
    }
    
    // console.log('item', item)
    // console.log('rateAvg', rateAvg)
    // console.log('rateQty', rateQty)

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
                <CardProductsContainer products={items} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage

