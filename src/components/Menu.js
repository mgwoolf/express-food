import React from 'react';
import axios from 'axios';

import MenuItem from './MenuItem';
import Loading from './Loading';

import "./Menu.scss"

const MenuSection = ({ name, items }) => {
    return (<div>
            <h3 className="my-3">{ name }</h3>
            <div className="row">
                { items.map((item, idx)=>{
                    return (<div key={ idx } className="col-sm"><MenuItem {...item} /></div>)
                }) }
            </div>
        </div>);
}

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            menuData: [],
        };
    }

    componentDidMount() {
        axios.get('mock/menu.json')
             .then((res)=>{
                 console.log(res);
                 this.setState({
                     hasLoaded: true,
                     menuData: res.data
                 })
             })
    }

    render() {
        const { hasLoaded, menuData } = this.state;
        return (<div>{ hasLoaded ? menuData.map((section, idx) => (<MenuSection key={ idx } {...section} />)) : (<Loading screenReaderText="Menu is loading..." />) }</div>);
    }

}

export default Menu;
