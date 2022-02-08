import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import { fetchPizza } from "../../component/pizzaList/pizzaSlice";
import PizzaListItem from "../pizzaListItem/PizzaListItem";
import Spinner from "../spinner/Spinner";

const PizzaList = () => {
    const dispatch = useDispatch();

    const filteredPizzaSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.pizzas.pizza,
        (activeFilter, pizza) => {
            if (activeFilter === "all") {
                return pizza;
            } else {
                return pizza.filter(item => item.category === activeFilter)
            }
        }
    );
    const filteredPizza = useSelector(filteredPizzaSelector);
    const { pizzaLoadingStatus} = useSelector(state => state.pizzas);
    const { cart } = useSelector(state => state.cart);
    const { activeSort } = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(fetchPizza());
    }, [])

    const sortPizza = (sortArr, active) => {
        let newArr = [...sortArr]
        function byField(field) {
            return (a, b) => a[field] > b[field] ? 1 : -1;
        }
        
        switch (active) {
            case "popularity":
                return newArr.sort(byField("rating")).reverse();
            case "price":
                return newArr.sort(byField("price"));
            case "alphabet":
                return newArr.sort(byField("name"));
            default:
                return newArr
        }
    }

    const visiblePizza = sortPizza(filteredPizza, activeSort);

    if (pizzaLoadingStatus === "loading") {
        return <Spinner />
    } else if (pizzaLoadingStatus === "error") {
        return <h3 className="messageLoading">Ошибка загрузки</h3>
    }

    const renderPizza = (arr) => {
        if (arr.length === 0) {
            return <h3 className="messageLoading">Загрузка...</h3>
        }

        return arr.map(({...props}) => {
            return <PizzaListItem 
                    key={props.id} 
                    {...props}
                    addedCount={cart[props.id] ? cart[props.id].length : 0}
                    />
        })
    }

    const elements = renderPizza(visiblePizza);

    return (
        <div className="content__items">
            {elements}
        </div>
    )
}

export default PizzaList;