import Categories from "../component/filters/Filters";
import Sort from "../component/sort/Sort";
import PizzaList from "../component/pizzaList/PizzaList";

const MainPage = () => {
    return (
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <PizzaList />
          </div>
        </div>
    )
};

export default MainPage;