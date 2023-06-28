import React from "react";
import useCustomFormHook from "./CustomFormHook";

const withCustomForm = (WrappedComponent) => {
  const WithCustomForm = (props) => {
    const {
      formValues,
      handleChange,
      handleSubmit,
      itemList,
      addItem,
      sortItems,
      deleteItem, 
      errorMessage
    } = useCustomFormHook();

    return (
      <WrappedComponent
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        itemList={itemList}
        addItem={addItem}
        sortItems={sortItems}
        deleteItem={deleteItem}
        errorMessage={errorMessage}
        {...props}
      />
    );
  };

  return WithCustomForm;
};

export default withCustomForm;
