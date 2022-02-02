import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { useHttp } from "../../hook/http.hook";
import { pizzaFetching, pizzaFetched, pizzaFetchingError } from "../../action";
import PizzaListItem from "../pizzaListItem/PizzaListItem";
import Spinner from "../spinner/Spinner";

const PizzaList = () => {
    const filteredPizzaSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.pizzas.pizza,
        (activeFilter, pizza) => {
            if (activeFilter === 0) {
                return pizza;
            } else {
                return pizza.filter(item => item.category === activeFilter)
            }
        }
    );

    const filteredPizza = useSelector(filteredPizzaSelector);
    const {request} = useHttp();
    const dispatch = useDispatch();
    const { pizzaLoadingStatus} = useSelector(state => state);

    useEffect(() => {
        dispatch(pizzaFetching());
        request("http://localhost:3001/pizzas")
            .then(data => dispatch(pizzaFetched(data)))
            .catch(() => dispatch(pizzaFetchingError()))
    }, [])

    if (pizzaLoadingStatus === "loading") {
        return <Spinner />
    } else if (pizzaLoadingStatus === "error") {
        return <h3 className="messageLoading">Ошибка загрузки</h3>
    }

    const renderPizza = (arr) => {
        if (arr.length === 0) {
            return <h3 className="messageLoading">Загрузка...</h3>
        }

        return arr.map(({id, ...props}) => {
            return <PizzaListItem key={id} {...props} />
        })
    }

    const elements = renderPizza(filteredPizza);

    return (
        <div className="content__items">
            {elements}
        </div>
    )
}

export default PizzaList;