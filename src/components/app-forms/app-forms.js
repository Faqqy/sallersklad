import React from 'react';
import './app-forms.css';
import { useForm } from 'react-hook-form';

export default function App() {
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
        success: 'Заявка отправлена! Наш менеджер свяжется с Вами в ближайшее время!',
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
        setTimeout(() => {
            thanksModal.remove();
            closeModal();
        }, 2000);
    }


  
  return (
        <div className="secondBLockForm" id='forms'>
            <h3>Для аренды и по остальным вопросам оставьте заявку</h3>
            <p>или позвоните по номеру :<a href="tel:+79265330740">+7 926 533 07 40</a></p>
            <form id="formElem" onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Имя' {...register("Name", {
                    required: "Поле обязательно к заполнению!",
                    minLength: {
                        value: 3,
                        message: 'Слишком короткое имя'
                    }
                })}
                />
                <div className="errors_block2" style={{height: 40}}>
                    {errors.Name && errors.Name.type === "minLength" && <span>Слишком короткое имя</span>}
                </div>
                <input type='text' placeholder='Телефон' {...register("Phone", {
                    required: "Поле обязательно к заполнению!",
                    maxLength: 11,
                    pattern: {
                        value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
                        message: 'Для ввода телефона допустимы только цифры'
                    }
                })}
                />
                <div className="errors_block" style={{height: 40}}>
                    {errors.Phone && errors.Phone.type === "pattern" && <span>Для ввода телефона допустимы только цифры</span>}
                </div>
                <input className='buttonOrange' type="submit" value="Оставить заявку"/>
                <div className="check_block">
                    <input
                        type='checkbox'
                        placeholder='February'
                        {...register('February', {
                            required: "Поле обязательно к заполнению!",
                        })}
                        className='mx-3'
                    />
                    <label htmlFor=''>Даю согласие на обработку <br/>
                        персональных данных</label>
                </div>


            </form>
            <div className="overModal">
                <div className="modal">

                </div>
            </div>

        </div>

  );
}