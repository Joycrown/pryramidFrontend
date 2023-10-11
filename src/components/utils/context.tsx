/* eslint-disable react-refresh/only-export-components */
// FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type FormContextType = {
  formData: {
    first_name: string;
    last_name: string;
    dob: string;
    email: string;
    password: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<typeof initialFormData>>;
};

// Initial form data
const initialFormData = {
  first_name: "",
  last_name: "",
  dob: "",
  email: "",
  password: "",
};

// Create the context with initial values
const FormContext = createContext<FormContextType | undefined>(undefined);

// Custom hook for using the context
const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

// Create a provider component
const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);

  const contextValue: FormContextType = {
    formData,
    setFormData,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export { FormProvider, useFormContext };
