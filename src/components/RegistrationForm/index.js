import React from 'react';
import {useForm} from "react-hook-form";
import {Button} from "../UI/Button";
import {Link} from "react-router-dom";
import {ROUTES_PATH} from "../../routes";
import {ErrorMessage} from "../UI/ErrorMessage";
import {useActions} from "../../hooks/useActions";

export const RegistrationForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {login} = useActions()

    const onSubmit = data => {
        login()
    }

    return (
        <form className="form form--registration" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__title">Регистрация</div>
            <div className="form__field">
                <label
                    className={`form__label ${errors.email ? 'form__label--error' : ''}`}
                    htmlFor="email"
                >
                    Email*
                </label>
                <input
                    className="form__input"
                    id="email"
                    type="text"
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
                {errors.email && errors.email.type === "required" && <ErrorMessage>Это поле обязательное</ErrorMessage>}
                {errors.email && errors.email.type === "pattern" && <ErrorMessage>Некорректный email</ErrorMessage>}
            </div>
            <div className="form__field">
                <label
                    className={`form__label ${errors.name ? 'form__label--error' : ''}`}
                    htmlFor="name"
                >
                    Имя*
                </label>
                <input
                    className="form__input"
                    id="name"
                    type="text"
                    {...register("name", {required: true})}
                />
                {errors.name && errors.name.type === "required" && <ErrorMessage>Это поле обязательное</ErrorMessage>}
            </div>
            <div className="form__field">
                <label
                    className={`form__label ${errors.surname ? 'form__label--error' : ''}`}
                    htmlFor="surname"
                >
                    Фамилия*
                </label>
                <input
                    className="form__input"
                    id="surname"
                    type="text"
                    {...register("surname", {required: true})}
                />
                {errors.surname && errors.surname.type === "required" && <ErrorMessage>Это поле обязательное</ErrorMessage>}
            </div>
            <div className="form__field form__field--last">
                <label
                    className={`form__label ${errors.password ? 'form__label--error' : ''}`}
                    htmlFor="password"
                >
                    Придумайте пароль*
                </label>
                <input
                    className="form__input"
                    id="password"
                    type="password"
                    {...register("password", {required: true,})}
                />
                {errors.password && <ErrorMessage>Это поле обязательное</ErrorMessage>}
            </div>

            <Button>Зарегистрироваться</Button>

            <div className="form__redirect-btn">
                Новый пользователь?
                <Link to={ROUTES_PATH.login}>Войти</Link>
            </div>
        </form>
    );
};