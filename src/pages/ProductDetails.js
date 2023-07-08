import {Link, useParams} from 'react-router-dom';
import {Fragment} from "react";

const ProductDetailsPage = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </Fragment>
    );
};

export default ProductDetailsPage;