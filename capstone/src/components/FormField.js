const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className="form-field block text-gray-700 text-sm font-bold mb-2">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? 
        <p data-testid="error-message">{errorMessage}</p> : null}
    </div>
  );
};

export default FormField;