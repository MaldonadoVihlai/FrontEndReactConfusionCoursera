import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onDishSelect(dishID) {        
        this.setState({ selectedDish: dishID });
    }
    render() {
        console.log('selectedDish '+this.state.dishes.filter((dishes)=>dishes.id === this.state.selectedDish)[0])
        console.log('selectedDishID '+this.state.selectedDish)
        return (            
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Ristorante Con Fusion
            </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} 
                onClick={(dishID) => this.onDishSelect(dishID)}/>
                <Dishdetail                 
                selectdDish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/> 
      </div>
    );
  }
}

export default Main;
