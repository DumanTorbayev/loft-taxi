import React, {useState} from 'react';
import {FormControl, FormGroup, Input, InputLabel} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Controller, useForm} from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import InputMask from "react-input-mask";
import {Button} from "../UI/Button";
import {ErrorMessage} from "../UI/ErrorMessage";
import {useActions} from "../../hooks/useActions";
import {useStyles} from "../../hooks/useStyles";
import CONSTANTS from "../../constants";
import {useSelector} from "react-redux";
import {getCard, getIsLoading} from "../../store/selectors";

export const ProfileForm = () => {
    const card = useSelector(state => getCard(state.profile))
    const isLoading = useSelector(state => getIsLoading(state.profile))
    const {handleSubmit, formState: {errors}, control, register} = useForm()
    const [expiryDate, setExpiryDate] = useState(card ? card.expiryDate : new Date())
    const [cardName, setCardName] = useState(card ? card.cardName : '')
    const [cardNumber, setCardNumber] = useState(card ? card.cardNumber : '')
    const [cvcNumber, setCvcNumber] = useState(card ? card.cvc : '')
    const {fetchUserCard} = useActions()
    const classes = useStyles()

    const onSubmit = data => {
        data.token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN)
        fetchUserCard(data)
    }

    return (
        <div className="profile__form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel htmlFor="cardName">Имя владельца*</InputLabel>
                    <Controller
                        name="cardName"
                        control={control}
                        rules={{required: {value: true, message: 'Это поле обязательное'}}}
                        render={({field: {onChange}}) => (
                            <Input
                                id="cardName"
                                value={cardName}
                                onChange={e => {
                                    onChange(e.target.value)
                                    setCardName(e.target.value)
                                }}
                            />
                        )}
                    />
                    {errors.cardName && <ErrorMessage>{errors.cardName.message}</ErrorMessage>}
                </FormControl>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel htmlFor="cardNumber">Номер карты*</InputLabel>
                    <Controller
                        control={control}
                        render={({field: {onChange}}) => (
                            <InputMask
                                mask="9999 9999 9999 9999"
                                value={cardNumber}
                                maskChar=" "
                                onChange={e => {
                                    onChange(e.target.value)
                                    setCardNumber(e.target.value)
                                }}
                            >
                                {inputProps => <Input id="cardNumber" {...inputProps}/>}
                            </InputMask>
                        )}
                        name="cardNumber"
                        rules={{
                            required: {value: true, message: 'Это поле обязательное'},
                            minLength: {value: 16, message: 'Должно быть минимум 16 символа'}
                        }}
                    />
                    {errors.cardNumber && <ErrorMessage>{errors.cardNumber.message}</ErrorMessage>}
                </FormControl>
                <FormGroup row={true} className={classes.gap}>
                    <FormControl margin="normal" className={classes.formControl}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller
                                name="expiryDate"
                                control={control}
                                rules={{required: {value: true, message: 'Это поле обязательное'}}}
                                render={({field: {onChange}}) => (
                                    <DatePicker
                                        autoOk={true}
                                        variant="dialog"
                                        openTo="year"
                                        views={["year", "month"]}
                                        label="MM/YY"
                                        format="MM/yy"
                                        value={expiryDate}
                                        minDate={new Date()}
                                        onChange={(value) => {
                                            onChange(value)
                                            setExpiryDate(value)
                                        }}
                                    />
                                )}
                            />
                        </MuiPickersUtilsProvider>
                        {errors.expiryDate && <ErrorMessage>{errors.expiryDate.message}</ErrorMessage>}
                    </FormControl>
                    <FormControl margin="normal" className={classes.formControl}>
                        <InputLabel htmlFor="cvc">CVC*</InputLabel>
                        <Controller
                            control={control}
                            render={({field: {onChange, ref}}) => (
                                <InputMask
                                    mask="999"
                                    value={cvcNumber}
                                    maskChar=" "
                                    onChange={e => {
                                        onChange(e.target.value)
                                        setCvcNumber(e.target.value)
                                    }}
                                >
                                    {() => <Input id="cvc"/>}
                                </InputMask>
                            )}
                            name="cvc"
                            rules={{
                                required: {value: true, message: 'Это поле обязательное'},
                                minLength: {value: 3, message: 'Должно быть минимум 3 символа'}
                            }}
                        />
                        {errors.cvc && <ErrorMessage>{errors.cvc.message}</ErrorMessage>}
                    </FormControl>
                </FormGroup>
                <Button preloader={isLoading} disabled={isLoading}>Сохранить</Button>
            </form>
        </div>
    );
};