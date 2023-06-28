import React, { useState } from "react";
import InputField from "../inputs/InputField";
import RadioField from "../inputs/RadioField";
import SelectField from "../inputs/SelectField";
import "../form/FormWithHOC.css"

const ErrorMessage = ({ message }) => {
    return <div className="error">{message}</div>;
  };
  
  const Classes = () => {
    const [formValues, setFormValues] = useState({
      teacher: "",
      email: "",
      gender: "",
      matter: "Português"
    });
    const [itemList, setItemList] = useState([]);
    const [itemId, setItemId] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleChange = (field) => (event) => {
      setFormValues((prevValues) => ({
        ...prevValues,
        [field]: event.target.value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Verifica se todos os campos estão preenchidos
      if (
        formValues.teacher.trim() === "" ||
        formValues.email.trim() === "" ||
        formValues.gender.trim() === ""
      ) {
        // Se algum campo estiver vazio, define a mensagem de erro
        setErrorMessage("Por favor, preencha todos os campos.");
        return;
      }
  
      const newItem = { ...formValues, id: itemId };
      setItemList((prevItemList) => [...prevItemList, newItem]);
      setFormValues({
        teacher: "",
        email: "",
        gender: "",
        matter: "Português"
      });
      setItemId((prevItemId) => prevItemId + 1);
      setErrorMessage("");
    };
  
    const sortItems = (order) => {
      setItemList((prevItemList) =>
        [...prevItemList].sort((a, b) => {
          if (order === "asc") {
            return a.teacher.localeCompare(b.teacher);
          } else if (order === "desc") {
            return b.teacher.localeCompare(a.teacher);
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
        <InputField label="Nome" value={formValues.teacher} onChange={handleChange("teacher")} />
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
        <button type="submit" className="sortButton">
          Submit
        </button>
  
        {errorMessage && <ErrorMessage message={errorMessage} />}
  
        <hr />
  
        <h2>Item List</h2>
        <button onClick={() => sortItems("desc")} className="sortButton">
          Descendente
        </button>
        <button onClick={() => sortItems("asc")} className="sortButton">
          Ascendente
        </button>
  
        <ul className="itemList">
          {itemList.map((item) => (
            <li key={item.id} className="item">
              Professor: {item.teacher} - {item.email} - {item.gender} - Matéria: {item.matter}
              <button onClick={() => deleteItem(item.id)} className="deleteButton">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </form>
    );
  };
  
  export default Classes;