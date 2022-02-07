import { useSelector, useDispatch } from "react-redux";

import { actionFilters } from "./filtersSlice";

const Categories = () => {
    const { activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const buttonsData = [
        {category: 'all', label: "Все"},
        {category: 'meat', label: "Мясные"},
        {category: 'vegetarian', label: "Вегетарианская"},
        {category: 'grill', label: "Гриль"},
        {category: 'spicy', label: "Острые"},
        {category: 'closed', label: "Закрытые"}
    ];

    const buttons = buttonsData.map(({category, label}) => {
        let active = activeFilter === category;
    
        return <li
                className={active ? "active" : null}
                key={category}
                onClick={() => dispatch(actionFilters(category))}
                >{label}</li>
    })
    

    return (
        <div className="categories">
            <ul>
                {buttons}
            </ul>
        </div>
    )
};

export default Categories;