import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/actions";

const FilterComponent = ({setCurrentPage, setOrder}) => {
  const [type, setType] = useState("animal");
  const [order, setOrderItem] = useState("az");
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  const handleTypeChange = e => {
    setType(e.target.value);
    setCurrentPage(1)
    setOrder(e.target.value);
  };

  const handleOrderChange = e => {
    setOrderItem(e.target.value);
    setCurrentPage(1)
    setOrder(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchItems(type, order));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Tipo:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="animal">Animal</option>
          <option value="arbol">Árbol</option>
        </select>
        <br />
        <label htmlFor="order">Orden:</label>
        <select id="order" value={order} onChange={handleOrderChange}>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
        <br />
        <button type="submit">Filtrar</button>
      </form>
      <ul>
        {items?.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;