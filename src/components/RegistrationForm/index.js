import React from 'react';
import {useForm} from "react-hook-form";
import {Button} from "../UI/Button";
import {Link} from "react-router-dom";
import {ROUTES_PATH} from "../../routes";
import {ErrorMessage} from "../UI/ErrorMessage";
import {useActions} from "../../hooks/useActions";
import {FormControl, FormGroup, Input, InputLabel} from "@material-ui/core";
import {useStyles} from "../../hooks/useStyles";
import {useSelector} from "react-redux";
import {Alert} from "@material-ui/lab";
import usePortal from "react-useportal";
import {getError, getIsLoading, getIsRegister} from "../../store/selectors";

export const RegistrationForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {setRegistration} = useActions()
    const classes = useStyles()
    const isRegisterIn = useSelector(state => getIsRegister(state.registration))
    const isLoading = useSelector(state => getIsLoading(state.registration))
    const error = useSelector(state => getError(state.registration))
    const {Portal} = usePortal({
        bindTo: document && document.getElementById('alert-portal')
    })

    const onSubmit = data => {
        setRegistration(data)
    }

    return (
        <>
            <form className="form form--registration" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__title">Регистрация</div>
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
                <FormGroup row={true} className={classes.gap}>
                    <FormControl margin="normal" className={classes.formControl}>
                        <InputLabel htmlFor="name">Имя*</InputLabel>
                        <Input
                            id="name"
                            {...register("name", {required: true,})}
                        />
                        {errors.name && errors.name.type === "required" &&
                        <ErrorMessage>Это поле обязательное</ErrorMessage>}
                    </FormControl>
                    <FormControl margin="normal" className={classes.formControl}>
                        <InputLabel htmlFor="surname">Фамилия*</InputLabel>
                        <Input
                            id="surname"
                            {...register("surname", {required: true,})}
                        />
                        {errors.surname && errors.surname.type === "required" &&
                        <ErrorMessage>Это поле обязательное</ErrorMessage>}
                    </FormControl>
                </FormGroup>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel htmlFor="password">Придумайте пароль*</InputLabel>
                    <Input
                        id="password"
                        type="password"
                        {...register("password", {required: true,})}
                    />
                    {errors.password && errors.password.type === "required" &&
                    <ErrorMessage>Это поле обязательное</ErrorMessage>}
                </FormControl>

                <Button preloader={isLoading} disabled={isLoading}>Зарегистрироваться</Button>

                <div className="form__redirect-btn">
                    Новый пользователь?
                    <Link to={ROUTES_PATH.login}>Войти</Link>
                </div>
            </form>
            {error && <Portal><Alert severity="error">{error}</Alert></Portal>}
            {isRegisterIn && <Portal><Alert severity="success">Регистрация прошла успешно</Alert></Portal>}
        </>
    );
};