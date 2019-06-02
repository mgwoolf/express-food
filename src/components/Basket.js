import React from 'react';

const BasketItem => ({ name, options, qty, price }) => {
    return (<div>
                <div>{ qty }</div>
                <div>
                    { name }
                    { options }
                </div>
                <div>{ price }</div>
            </div>);
}


class Basket extends React.component {

    constructor(props) {
        super(props)
        this.state({
            items: [],
            canCheckout: false;
        })
    }


    render() {

        const { items, canCheckout } = this.state,
              hasItems = items.length>0 ? true : false;

        return (<div>
                    { hasItems && items.map((item, idx)=>(<BasketItem key={ idx } {...item} />) }
                    { !hasItems && (<p>No items in your basket</p>) }
                </div>);

    }
}
