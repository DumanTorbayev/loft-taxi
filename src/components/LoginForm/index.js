import React from 'react'
import {useForm} from 'react-hook-form'
import {Button} from '../UI/Button'
import {Link} from 'react-router-dom'
import {ErrorMessage} from '../UI/ErrorMessage'
import {useActions} from '../../hooks/useActions'
import {FormControl, Input, InputLabel} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {Alert} from '@material-ui/lab'
import usePortal from 'react-useportal'
import {getError, getIsLoading} from '../../store/selectors'
import {routesPath} from '../RootRouter'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const {setAuth} = useActions()
  const isLoading = useSelector((state) => getIsLoading(state.auth))
  const error = useSelector((state) => getError(state.auth))
  const {Portal} = usePortal({
    bindTo: document && document.getElementById('alert-portal'),
  })

  const onSubmit = (data) => {
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
            {...register('email', {
              required: {value: true, message: 'Это поле обязательное'},
              pattern: {value: /^\S+@\S+$/i, message: 'Некорректный email'},
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="password">Пароль*</InputLabel>
          <Input
            id="password"
            type="password"
            {...register('password', {
              required: {value: true, message: 'Это поле обязательное'},
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormControl>
        <a href="#" className="form__restore-password">
          Забыли пароль?
        </a>

        <Button preloader={isLoading} disabled={isLoading}>
          Войти
        </Button>

        <div className="form__redirect-btn">
          Новый пользователь?
          <Link to={routesPath.registration}>Регистрация</Link>
        </div>
      </form>
      {error && (
        <Portal>
          <Alert severity="error">{error}</Alert>
        </Portal>
      )}
    </>
  )
}
