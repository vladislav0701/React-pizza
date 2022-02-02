import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHttp } from "../../hook/http.hook";
import { pizzaFetching, pizzaFetched, pizzaFetchingError } from "../../action";
import PizzaListItem from "../pizzaListItem/PizzaListItem";
import Spinner from "../spinner/Spinner";

const PizzaList = () => {
    const {request} = useHttp();
    const dispatch = useDispatch();
    const {pizza, pizzaLoadingStatus} = useSelector(state => state);

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

    const elements = renderPizza(pizza);

    return (
        <div className="content__items">
            {elements}
        </div>
    )
}

export default PizzaList;