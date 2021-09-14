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

export const ProfileForm = () => {
    const {card, isLoading} = useSelector(state => state.profile)
    const {handleSubmit, formState: {errors}, control} = useForm()
    const [expiryDate, setExpiryDate] = useState(card.expiryDate ? card.expiryDate : new Date())
    const [cardName, setCardName] = useState(card.cardName)
    const [cardNumber, setCardNumber] = useState(card.cardNumber)
    const [cvcNumber, setCvcNumber] = useState(card.cvc)
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
                        rules={{required: true}}
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
                    {
                        errors.cardName && errors.cardName.type === "required" &&
                        <ErrorMessage>Это поле обязательное</ErrorMessage>
                    }
                </FormControl>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel htmlFor="cardNumber">Номер карты*</InputLabel>
                    <Controller
                        name="cardNumber"
                        control={control}
                        rules={{required: true}}
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
                    />
                    {
                        errors.cardNumber && errors.cardNumber.type === "required" &&
                        <ErrorMessage>Это поле обязательное</ErrorMessage>
                    }
                </FormControl>
                <FormGroup row={true} className={classes.gap}>
                    <FormControl margin="normal" className={classes.formControl}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller
                                name="expiryDate"
                                control={control}
                                rules={{required: true}}
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
                        {
                            errors.expiryDate && errors.expiryDate.type === "required" &&
                            <ErrorMessage>Это поле обязательное</ErrorMessage>
                        }
                    </FormControl>
                    <FormControl margin="normal" className={classes.formControl}>
                        <InputLabel htmlFor="cvc">CVC*</InputLabel>
                        <Controller
                            name="cvc"
                            control={control}
                            rules={{required: true, minLength: {value: 3}}}
                            render={({field: {onChange}}) => (
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
                        />
                        {
                            errors.cvc && errors.cvc.type === "required" &&
                            <ErrorMessage>Это поле обязательное</ErrorMessage>
                        }
                        {
                            errors.cvc && errors.cvc.type === "minLength" &&
                            <ErrorMessage>Это поле обязательное</ErrorMessage>
                        }
                    </FormControl>
                </FormGroup>
                <Button preloader={isLoading} disabled={isLoading}>Сохранить</Button>
            </form>
        </div>
    );
};