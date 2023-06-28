import { useState } from "react";

const useCustomFormHook = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    gender: "",
    country: "São Paulo"
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

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formValues.name.trim() === "" ||
      formValues.email.trim() === "" ||
      formValues.gender.trim() === ""
    ) {
      displayErrorMessage("Por favor, preencha todos os campos obrigatórios.")
      return;
    }
    const newItem = { ...formValues, id: itemId };
    setItemList((prevItemList) => [...prevItemList, newItem]);
    setFormValues({
      name: "",
      email: "",
      gender: "",
      country: "São Paulo"
    });
    setItemId((prevItemId) => prevItemId + 1);
    setErrorMessage("")
  };

  const addItem = (item) => {
    setItemList((prevItemList) => [...prevItemList, { ...item, id: itemId }]);
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


  return {
    formValues,
    handleChange,
    handleSubmit,
    itemList,
    addItem,
    sortItems,
    deleteItem,
    errorMessage
  };
};

export default useCustomFormHook;
