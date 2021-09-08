import React from 'react';
import {useForm} from "react-hook-form";
import {Button} from "../UI/Button";
import {Link} from "react-router-dom";
import {ROUTES_PATH} from "../../routes";
import {ErrorMessage} from "../UI/ErrorMessage";
import {useActions} from "../../hooks/useActions";

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {login} = useActions()

    const onSubmit = data => {
        console.log(data)
        login(true)
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__title">Войти</div>
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
            <div className="form__field form__field--last">
                <label
                    className={`form__label ${errors.password ? 'form__label--error' : ''}`}
                    htmlFor="password"
                >
                    Пароль*
                </label>
                <input
                    className="form__input"
                    id="password"
                    type="password"
                    {...register("password", {required: true,})}
                />
                {errors.password && <ErrorMessage>Это поле обязательное</ErrorMessage>}
            </div>
            <a href="#" className="form__restore-password">Забыли пароль?</a>

            <Button>Войти</Button>

            <div className="form__redirect-btn">
                Новый пользователь?
                <Link to={ROUTES_PATH.registration}>Регистрация</Link>
            </div>
        </form>
    );
};