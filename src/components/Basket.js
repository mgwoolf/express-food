import React from 'react';
import { connect } from 'react-redux';

import { showPrice } from './../helpers/pricing';

const BasketItem = ({ name, options, qty, price }) => {
    return (<div>
                <div>{ qty }</div>
                <div>
                    { name }
                    { options }
                </div>
                <div>{ price }</div>
            </div>);
};


const BasketButtons = ({ canCheckout, canClearBasket}) => {
    return (<div className="card-body">
                <button type="button" className="btn btn-primary btn-block" disabled={ canCheckout }>Go To Checkout</button>
                { canClearBasket && (<><hr /><button type="button" className="btn btn-sm btn-block btn-outline-warning">Empty Basket</button></>) }
            </div>);
}


const Basket = ({ basket }) => {

    const { items, subTotal, delivery, service, total, canCheckout, canClearBasket } = basket,
          hasItems = items.length > 0;

    return (<div className="card mt-3">
                <div className="card-header">Basket</div>
                <div className="card-body">
                    { hasItems && items.map((item, idx)=>(<BasketItem key={ idx } {...item} />)) }
                    { !hasItems && (<p className="text-center">No items in your basket</p>) }
                </div>
                { hasItems && (
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Sub Total: { showPrice(subTotal) }</li>
                        <li className="list-group-item">Service: { showPrice(service) }</li>
                        <li className="list-group-item">Delivery: { showPrice(delivery) }</li>
                        <li className="list-group-item">Total: { showPrice(total) }</li>
                    </ul>
                ) }
                <BasketButtons canCheckout={ canCheckout } canClearBasket={ canClearBasket } />
            </div>);
};


function mapStateToBasket(state) {
    console.log(state);
    return {
        basket: state.basket
    };
}

export default connect(mapStateToBasket)(Basket);
