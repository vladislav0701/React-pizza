import { useSelector, useDispatch } from "react-redux";

import { toggleActiveFilter } from "../../action";

const Categories = () => {
    const { activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const buttonsData = [
        {category: 0, label: "Все"},
        {category: 1, label: "Мясные"},
        {category: 2, label: "Вегетарианская"},
        {category: 3, label: "Гриль"},
        {category: 4, label: "Острые"},
        {category: 5, label: "Закрытые"}
    ];

    const buttons = buttonsData.map(({category, label}) => {
        let active = activeFilter === category;
    
        return <li
                className={active ? "active" : null}
                key={category}
                onClick={() => dispatch(toggleActiveFilter(category))}
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