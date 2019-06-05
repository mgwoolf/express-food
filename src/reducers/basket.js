const initialState = {
    items: [],
    subTotal: 0,
    delivery: 0,
    service: 0,
    total: 0,
    canCheckout: false,
    canClearBasket: false,
};

const calculateBasketTotal = (state) => {
    const  delivery = 4.99,
           service = 2.99,
           totalItems = state.items.length;

    let subTotal = 0;

    state.items.forEach((item) => {
        subTotal += (Math.round(Number(item.price) * 100) / 100) * item.qty;
    });

    return {...state, delivery: delivery,
                      service: service,
                      subTotal: subTotal,
                      canCheckout: totalItems>0,
                      canClearBasket: totalItems>0,
                      total: (subTotal + delivery + service) };
}


const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            const { item, options, qty } = action.payload,
                  items = state.items;
            items.push({ ...item, options: options, qty: qty });
            return calculateBasketTotal({...state, items:items });
        case 'CLEAR_BASKET':
            return calculateBasketTotal({...state, items:[] });
        default:
            return state
    }
}

export default basket
