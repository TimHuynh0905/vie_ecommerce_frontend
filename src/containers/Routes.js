import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user-selectors';
import { selectLoading } from '../redux/spinner/spinner-selectors';
import WithSpinner from '../hoc/WithSpinner';

import Home from './Home';
import AuthenticationPage from './AuthenticationPage/AuthenticationPage';
import NotFound from './NotFound/NotFound';
import ProductPage from './ShopPage/ShopPage';
import DetailPage from './DetailPage/DetailPage';
import SellPage from './SellPage/SellPage';
import StandardPage from './HowToSellPage/Standard/ImageStandard';
import HowToShipPage from './HowToSellPage/HowToShip';
import HowToSell from './HowToSellPage/HowToSell';
import ProfilePage from './ProfilePage/ProfilePage';
import SecurityPage from './ProfilePage/SecurityPage/SecurityPage';
import CartPage from './CartPage/CartPage';

const HomeWithSpinner = WithSpinner(Home);
const ProductPageWithSpinner = WithSpinner(ProductPage);
const AuthenticationPageWithSpinner = WithSpinner(AuthenticationPage);

const Routes = (props) => {
    const { isLoading } = props;
    return (
        <Switch>
            <Route 
                exact path="/" 
                render={() => <HomeWithSpinner isLoading={ isLoading }/>}
            />
            <Route 
                exact path="/signin" 
                render={() => 
                    props.currentUser ? (
                        <Redirect to="/"/>
                    ) : (
                        <AuthenticationPageWithSpinner isLoading={ isLoading }/>
                    )}
            />
            <Route 
                exact path="/shop" 
                render={() => <ProductPageWithSpinner isLoading={ isLoading }/>}
            />
            <Route exact path="/details/:id" component={DetailPage}/>
            <Route exact path="/sell-now" component={SellPage}/>
            <Route exact path="/how-to-sell" component={HowToSell}/>
            <Route exact path="/image-standards">
                <img 
                    alt="background"
                    className="background" 
                    src="/assets/images/how-to-sell/standard/standard-background.jpg"
                    style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                />
                <StandardPage/>
            </Route>
            <Route exact path="/how-to-ship">
                <img 
                    alt="background"
                    className ="background"
                    src="/assets/images/how-to-sell/ship/backgroundship.jpg"
                    style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                />
                <HowToShipPage/>
            </Route>
            <Route exact path="/profile" component={ProfilePage}/>
            <Route exact path="/profile/info" component={SecurityPage}/>
            <Route exact path="/cart" component={CartPage}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectLoading,
})

export default connect(mapStatetoProps)(Routes);
