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
           totalItems = state.items;

    let subTotal, total = 0;

    state.items.foreach((item) => {
        subTotal += item.price;
    });

    return {...state, delivery: delivery,
                      service: service,
                      subTotal: subTotal,
                      canCheckout: totalItems>0,
                      canClearBasket: totalItems>0,
                      total: total };
}

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const items = state.items.push(action.payload);
            return calculateBasketTotal({...state, items:items });
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.push(action.payload) }
        case 'UPDATE_QTY':
            return { ...state, items: state.items.push(action.payload) }
        default:
            return state
    }
}

export default basket
