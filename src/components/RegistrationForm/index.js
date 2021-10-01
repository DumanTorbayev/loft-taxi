import React from 'react';
import {useForm} from "react-hook-form";
import {Button} from "../UI/Button";
import {Link} from "react-router-dom";
import {ErrorMessage} from "../UI/ErrorMessage";
import {useActions} from "../../hooks/useActions";
import {FormControl, FormGroup, Input, InputLabel} from "@material-ui/core";
import {useStyles} from "../../hooks/useStyles";
import {useSelector} from "react-redux";
import {Alert} from "@material-ui/lab";
import usePortal from "react-useportal";
import {getError, getIsLoading, getIsRegister} from "../../store/selectors";
import {routesPath} from "../RootRouter";

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
                            required: {value: true, message: 'Это поле обязательное'},
                            pattern: {value: /^\S+@\S+$/i, message: 'Некорректный email'},
                        })}
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </FormControl>
                <FormGroup row={true} className={classes.gap}>
                    <FormControl margin="normal" className={classes.formControl}>
                        <InputLabel htmlFor="name">Имя*</InputLabel>
                        <Input
                            id="name"
                            {...register("name", {
                                required: {value: true, message: 'Это поле обязательное'},
                            })}
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </FormControl>
                    <FormControl margin="normal" className={classes.formControl}>
                        <InputLabel htmlFor="surname">Фамилия*</InputLabel>
                        <Input
                            id="surname"
                            {...register("surname", {
                                required: {value: true, message: 'Это поле обязательное'},
                            })}
                        />
                        {errors.surname && <ErrorMessage>{errors.surname.message}</ErrorMessage>}
                    </FormControl>
                </FormGroup>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel htmlFor="password">Придумайте пароль*</InputLabel>
                    <Input
                        id="password"
                        type="password"
                        {...register("password", {
                            required: {value: true, message: 'Это поле обязательное'},
                        })}
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </FormControl>

                <Button preloader={isLoading} disabled={isLoading}>Зарегистрироваться</Button>

                <div className="form__redirect-btn">
                    Новый пользователь?
                    <Link to={routesPath.login}>Войти</Link>
                </div>
            </form>
            {error && <Portal><Alert severity="error">{error}</Alert></Portal>}
            {isRegisterIn && <Portal><Alert severity="success">Регистрация прошла успешно</Alert></Portal>}
        </>
    );
};