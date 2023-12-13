import React from "react";

function RadioInput({ label, value, register, name, id, watch,validationSchema }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="w-4 h-4 cursor-pointer accent-red-500 form-radio"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name,validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
     
    </div>
  );
}

export default RadioInput;
