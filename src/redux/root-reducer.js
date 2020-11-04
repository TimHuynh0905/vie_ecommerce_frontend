import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import shopReducer from './shop/shop-reducer';
import spinnerReducer from './spinner/spinner-reducer';
import sidebarReducer from './sidebar/sidebar-reducer';

const persistConfig = {
    key: 'root',
    storage, // local storage
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    spinner: spinnerReducer,
    sidebar: sidebarReducer,
}); 

export default persistReducer(persistConfig, rootReducer);