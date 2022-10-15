import React from 'react';
import './app-forms.css';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(errors);


  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", {
        required: "Поле обязательно к заполнению!",
        minLength: 3
      })} 
      />
      <input {...register("Phone", {
        required: "Поле обязательно к заполнению!",
        maxLength: 11,
        minLength: {
            value: 3,
            message: 'Введите 11 цифр вашего номера'
        },
        pattern: {
            value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
            message: 'Для ввода допустимы только цифры'
        }
      })} 
      />
      <div style={{ height:40 }}>
      {errors.Phone && errors.Phone.type === "minLength" && <span>Введите 11 цифр вашего номера</span>}
      {errors.Phone && errors.Phone.type === "pattern" && <span>Для ввода допустимы только цифры</span>}
      </div>
      


      <input type="submit" />
    </form>
  );
}