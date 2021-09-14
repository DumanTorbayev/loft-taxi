import React from 'react';
import {useForm} from "react-hook-form";
import {Button} from "../UI/Button";
import {Link} from "react-router-dom";
import {ROUTES_PATH} from "../../routes";
import {ErrorMessage} from "../UI/ErrorMessage";
import {useActions} from "../../hooks/useActions";
import {FormControl, Input, InputLabel} from "@material-ui/core";
import {useSelector} from "react-redux";
import {Alert} from "@material-ui/lab";
import usePortal from "react-useportal";

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {setAuth} = useActions()
    const {isLoading, error} = useSelector(state => state.auth)
    const { Portal } = usePortal({
        bindTo: document && document.getElementById('alert-portal')
    })

    const onSubmit = data => {
        setAuth(data)
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__title">Войти</div>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel htmlFor="email">Email*</InputLabel>
                    <Input
                        id="email"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                    {errors.email && errors.email.type === "required" &&
                    <ErrorMessage>Это поле обязательное</ErrorMessage>}
                    {errors.email && errors.email.type === "pattern" && <ErrorMessage>Некорректный email</ErrorMessage>}
                </FormControl>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel htmlFor="password">Пароль*</InputLabel>
                    <Input
                        id="password"
                        type="password"
                        {...register("password", {required: true,})}
                    />
                    {errors.password && <ErrorMessage>Это поле обязательное</ErrorMessage>}
                </FormControl>
                <a href="#" className="form__restore-password">Забыли пароль?</a>

                <Button preloader={isLoading} disabled={isLoading}>Войти</Button>

                <div className="form__redirect-btn">
                    Новый пользователь?
                    <Link to={ROUTES_PATH.registration}>Регистрация</Link>
                </div>
            </form>
            {error && <Portal><Alert severity="error">{error}</Alert></Portal>}
        </>

    );
};