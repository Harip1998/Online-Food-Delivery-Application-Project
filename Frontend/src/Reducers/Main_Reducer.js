import Food_Reducer from './Food_Reducer';
import Cart_Reducer from './Cart_Reducer';
import { combineReducers } from 'redux';
 
const MainReducer = combineReducers({
    product: Food_Reducer,
    cart: Cart_Reducer
});
 
export default MainReducer;