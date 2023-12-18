import React from 'react'
import {useSearchParams} from "react-router-dom"
import Select from './Select';
function FilterDropDown({options,filterField}) {
  const [searchParams,setSearchParams] =  useSearchParams();
  const value = searchParams.get(filterField) || ""

  function handleChange  (e) {
    searchParams.set(filterField,e.target.value)
    setSearchParams(value)
  }
  return (
<Select onChange={handleChange} filterField="category" options={options}/>
  )
}

export default FilterDropDown