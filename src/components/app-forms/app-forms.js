import React from 'react';
import './app-forms.css';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import errorImg from './Icons_fields.png';

export default function App(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData(document.getElementById("formElem"));
        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        fetch('server.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(object),
          redirect: 'follow'
        }).then(data => data.text())
          .then(data => {
          console.log('ok');
          showThanksModal(message.success);
        }).finally(() => {
            const form = document.getElementById("formElem");
            form.reset();
        });
    }

    function openModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    const message = {
        success: '<b class="bigTextMessage">Заявка </br> отправлена!</b> <p class="miniTextMessage">Наш менеджер свяжется с Вами в ближайшее время!</p>',
    };


    function showThanksModal(message) {

        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>
                    <img src="./close-btn.png" alt="Закрыть">
                </div>
                <img src="./success__button.png" alt="Ok">
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        const closeModalButton = document.querySelector('.modal__close');
        document.onclick = function (e) {
            if (e.target.className !== "modal") {
                thanksModal.remove();
                closeModal();
            };
        };
        closeModalButton.addEventListener('click', function () {
            thanksModal.remove();
            closeModal();
        });

    }
  
    return (
    
        <div className="secondBLockForm" id='forms'>
            <h3>
                <span class="pbSpan">Заинтересовала аренда?</span>
                Оставьте заявку и мы обязательно с Вами свяжемся
            </h3>
            <p>или позвоните по номеру : <a href="tel:+79851500606">+7 985 150 06 06</a></p>
            <form id="formElem" onSubmit={handleSubmit(onSubmit)}>
                <input id="input" type='text' placeholder='Имя' autoComplete="new-password" {...register("Name", {
                    required: true
                })}
                />
                <div className="errors_block2" style={{height: 40}}>
                    {errors.Name && errors.Name.type === "required" && <span className='errorMessage'><img src={ errorImg } alt="ошибка"></img>Поле обязательно к заполнению!</span>}
                </div>
                <InputMask autoComplete="new-password" type='text' mask="+7 999 9999999" onChange={props.onChange} value={props.value}  placeholder='Телефон' {...register("Phone", {
                    required: true
                })}
                 />
                <div className="errors_block" style={{height: 40}}>
                    {errors.Phone && errors.Phone.type === "required" && <span className='errorMessage'><img src={ errorImg } alt="ошибка"></img>Поле обязательно к заполнению!</span>}
                </div>
                <input className='buttonOrange' type="submit" required value="Оставить заявку"/>
                <div className="check_block">
                    <input
                        type='checkbox'
                        placeholder='February'
                        {...register('February', {
                            required: "Поле обязательно к заполнению!",
                        })}
                        className='mx-3'
                    />
                    <div className="errors_block3" style={{height: 40}}>
                        {errors.February && errors.February.type === "required" && <span className='errorMessage'><img src={ errorImg } alt="ошибка"></img>Нажмите чекбокс!</span>}
                    </div>
                    <label htmlFor=''>Даю согласие на обработку персональных <br/> данных</label>
                </div>


            </form>
            <div className="overModal">
                <div className="modal">

                </div>
            </div>

        </div>

    );
}