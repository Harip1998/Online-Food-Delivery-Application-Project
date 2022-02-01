import FoodReducer from './FoodReducer';
import CartReducer from './CartReducer';
import { combineReducers } from 'redux';

const MainReducer = combineReducers({
    product: FoodReducer,
    cart: CartReducer
});

export default MainReducer;