import Header from "../header/Header";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaList from "../pizzaList/PizzaList";
import Cart from "../cart/Cart";
import CartEmpty from "../cartEmpty/CartEmpty";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
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
        <Cart />
        <CartEmpty />
      </div>
    </div>
  );
}

export default App;
