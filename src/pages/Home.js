import {Link} from 'react-router-dom';
import {Fragment} from 'react';

const HomePage = () => {
    return (
        <Fragment>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="/products">the list of products</Link>.
            </p>
        </Fragment>
    );
};

export default HomePage;