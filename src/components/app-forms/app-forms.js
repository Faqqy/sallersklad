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


    <div className="secondBLockForm">
      <h3>Для аренды и по остальным вопросам оставьте заявку</h3>
      <p>или позвоните по номеру :<a href="tel:+79265330740">+7 926 533 07 40</a></p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder='Имя' {...register("Name", {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 3,
              message: 'Слишком короткое имя'
            }
          })} 
          />
          <input type='text' placeholder='Телефон' {...register("Phone", {
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
          <input type="submit" />
          <div className="check_block">
          <input
            type='checkbox'
            placeholder='February'
            {...register('February', {
              required: "Поле обязательно к заполнению!"
            })}
            className='mx-3'
          />
          <label htmlFor=''>Даю согласие на обработку <br />
персональных данных</label>
          </div>

          <div class="errors_block" style={{ height:40 }}>
            {errors.Phone && errors.Phone.type === "minLength" && <span>Введите 11 цифр вашего номера</span>}
            {errors.Phone && errors.Phone.type === "pattern" && <span>Для ввода допустимы только цифры</span>}
          </div>
          


          

        </form>
    </div>
    
  );
}