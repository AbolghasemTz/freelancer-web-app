import React from "react";

function ReactSelect({ label, register, options, name, required }) {
  return (
    <div className="">
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
            
          </option>
        ))}
      </select>
    </div>
  );
}

export default ReactSelect;
