import React, { Component } from 'react';
import FoodItems from '../Components/restaurantPage/FoodItems';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { addToCart } from "../Store/Actions/cartAction";
import axios from 'axios';
import { Spinner } from 'reactstrap';

class FoodReducer extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            items: []
        };
    }
    addToCart = (item) => {
        this.props.addToCart(item);
    }
    componentDidMount() {
        axios.get(`http://localhost:4001/item`)
            .then(res => {
                console.log("got data", res)
                this.setState({
                    items: res.data
                });
            })
            .catch(error => {
                console.log("error", error)

            });

    }
    renderSpinner() {
        return (
            <div  >
                <span className="load">Loading.....</span>
                <Spinner type="grow" color="success" className="spinner00" />
            </div>

        )
    }
    renderItems() {
        return (
            <div className="container-fluid">

                <div className="row">

                    {
                        this.state.items.map(item => <FoodItems item={item} addToCart={this.addToCart} inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.item.id === item.id).length > 0} key={item.id} />)
                    }

                </div>

            </div>
        )
    }
    renderData() {
        return (
            this.state.items === undefined ? this.renderSpinner() : this.renderItems()
        )
    }
    render() {
        console.log("Data", this);

        return this.renderData();
    }
}
const mapStateToProps = (state) => {

    return {
        item: state.items,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(FoodReducer)



