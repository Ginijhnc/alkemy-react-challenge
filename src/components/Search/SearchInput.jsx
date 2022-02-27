import { Input, Button, ValidationMessage } from "../../globalStyles";
import { useDispatch } from "react-redux";
import { types } from "../../types/types";
import { useState } from "react";
import axios from "axios";
import { useFormik } from 'formik';

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_URL;

const SearchInput = () => {
   const dispatch = useDispatch();

   const validate = (values) => {
      const errors = {};

      if (!values.dish) {
         errors.dish = 'This field is required';
      } else if (values.dish.length < 3) {
         errors.dish = 'The search needs to have at least 2 characters.';
      }
      return errors;
   };

   const formik = useFormik({
      initialValues: {
         dish: ''
      },
      validate,
      onSubmit: (values) => handleSubmitDish(values),
   });

   const handleSubmitDish = async () => {
      const eldish = formik.values.dish;
      const url = `${URL}complexSearch?apiKey=${API_KEY}&query=${eldish}&addRecipeNutrition=true&number=12`;
      const response = await axios.get(url);
      const { results } = response.data;
      const action = {
         type: types.search,
         payload: results,
      };
      dispatch(action);
   };

   return (
      <>
         <Input name="dish" Large value={formik.values.dish} onChange={formik.handleChange} />
         <Button type="submit" onClick={formik.handleSubmit} style={{ marginLeft: "10px" }}>Submit</Button>
         {formik.errors.dish && <ValidationMessage style={{ color: "#d3c0ee", fontWeight: "400" }}>{formik.errors.dish}</ValidationMessage>}
      </>
   );
};

export default SearchInput;