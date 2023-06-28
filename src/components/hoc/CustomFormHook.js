import { useState } from "react";

const useCustomFormHook = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    gender: "",
    country: ""
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
      name: "",
      email: "",
      gender: "",
      country: ""
    });
    setItemId((prevItemId) => prevItemId + 1);
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
    deleteItem
  };
};

export default useCustomFormHook;
