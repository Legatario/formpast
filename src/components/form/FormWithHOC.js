import React from "react";
import withCustomForm from "../hoc/withCustomForm";
import InputField from "../inputs/InputField";
import RadioField from "../inputs/RadioField";
import SelectField from "../inputs/SelectField";
import "./FormWithHOC.css"

const FormWithHOC = ({
  formValues,
  handleChange,
  handleSubmit,
  itemList,
  sortItems,
  deleteItem
}) => {
  const { name, email, gender, country } = formValues;

  const handleSortItemsAsc = (event) => {
    event.preventDefault();
    sortItems("asc");
  };

  const handleSortItemsDesc = (event) => {
    event.preventDefault();
    sortItems("desc");
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Alunos</h2>
      <InputField label="Nome:" value={name} onChange={handleChange("name")} />
      <InputField label="Email:" value={email} onChange={handleChange("email")} />
      <RadioField
        label="Gênero"
        options={["Homem", "Mulher", "Outro"]}
        value={gender}
        onChange={handleChange("gender")}
      />
      <SelectField
        label="Estado"
        options={["São Paulo", "Rio de Janeiro", "Minas Gerais", "Outro"]}
        value={country}
        onChange={handleChange("country")}
      />
      <button type="submit" className="sortButton">Submit</button>

      <hr />

      <h2>Item List</h2>
      <div className="buttons">
        <button className="sortButton" onClick={handleSortItemsDesc}>Descendente</button>
        <button className="sortButton" onClick={handleSortItemsAsc}>Ascendente</button>
      </div>

      <ul className="itemList">
        {itemList.map((item) => (
          <li className="item" key={item.id}>
            {item.name} - {item.email} - {item.gender} - {item.country}
            <button className="deleteButton" onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default withCustomForm(FormWithHOC);