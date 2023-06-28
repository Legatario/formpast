import React, { useState } from "react";
import InputField from "../inputs/InputField";
import RadioField from "../inputs/RadioField";
import SelectField from "../inputs/SelectField";
import "../form/FormWithHOC.css"

const Classes = () => {
  const [formValues, setFormValues] = useState({   
    teacher: "",
    email: "",
    gender: "",
    matter: ""
  });
  const [itemList, setItemList] = useState([]);
  const [itemId, setItemId] = useState(1);

  const handleChange = (field) => (event) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { ...formValues, id: itemId };
    setItemList((prevItemList) => [...prevItemList, newItem]);
    setFormValues({
        teacher: "",
        email: "",
        gender: "",
        matter: ""
    });
    setItemId((prevItemId) => prevItemId + 1);
  };

  const sortItems = (order) => {
    setItemList((prevItemList) =>
      [...prevItemList].sort((a, b) => {
        if (order === "asc") {
          return a.name.localeCompare(b.name);
        } else if (order === "desc") {
          return b.name.localeCompare(a.name);
        } else if (order === "date") {
          return new Date(a.date) - new Date(b.date);
        }
        return 0;
      })
    );
  };

  const deleteItem = (id) => {
    setItemList((prevItemList) => prevItemList.filter((item) => item.id !== id));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Professores</h2>
      <InputField label="Nome" value={formValues.name} onChange={handleChange("name")} />
      <InputField label="Email" value={formValues.email} onChange={handleChange("email")} />
      <RadioField
        label="Gênero"
        options={["Homem", "Mulher", "Outro"]}
        value={formValues.gender}
        onChange={handleChange("gender")}
      />
      <SelectField
        label="Matéria"
        options={["Português", "História", "Humanas", "Exatas", "Outro"]}
        value={formValues.matter}
        onChange={handleChange("matter")}
      />
      <button type="submit"  className="sortButton">Submit</button>

      <hr />

      <h2>Item List</h2>
      <button onClick={() => sortItems("desc")}  className="sortButton">Descendente</button>
      <button onClick={() => sortItems("asc")}  className="sortButton">Ascendente</button>

      <ul className="itemList">
        {itemList.map((item) => (
          <li key={item.id} className="item">
            {item.name} - {item.email} - {item.gender} - {item.country}
            <button onClick={() => deleteItem(item.id)} className="deleteButton">Delete</button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Classes;