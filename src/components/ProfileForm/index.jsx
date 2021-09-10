import React, {useState} from 'react';
import './index.scss';
import {FormControl, FormGroup, Input, InputLabel} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Controller, useForm} from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import InputMask from "react-input-mask";
import {Button} from "../UI/Button";
import {ErrorMessage} from "../UI/ErrorMessage";
import {formattedDate} from "../../utils/formattedDate";
import {useActions} from "../../hooks/useActions";

export const ProfileForm = () => {
    const {handleSubmit, formState: {errors}, control} = useForm()
    const [date, setDate] = useState(new Date())
    const [cardNumber, setCardNumber] = useState('')
    const [cvcNumber, setCvcNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState(formattedDate(date))
    const {setUserCard} = useActions()

    const onSubmit = data => {
        setUserCard(data)
    }

    return (
        <div className="profile__form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth={true} className="form__control">
                    <InputLabel htmlFor="cardName">Имя владельца*</InputLabel>
                    <Controller
                        name="cardName"
                        control={control}
                        rules={{required: true}}
                        render={({field: {onChange}}) => (
                            <Input
                                id="cardName"
                                onChange={e => onChange(e)}
                            />
                        )}
                    />
                    {
                        errors.cardName && errors.cardName.type === "required" &&
                        <ErrorMessage>Это поле обязательное</ErrorMessage>
                    }
                </FormControl>
                <FormControl fullWidth={true} className="form__control">
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
                <FormGroup row={true} className="form__group">
                    <FormControl>
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
                                        value={date}
                                        minDate={new Date()}
                                        onChange={(value) => {
                                            onChange(value)
                                            setDate(value)
                                            setExpiryDate(formattedDate(value))
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
                    <FormControl>
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
                <Button>Сохранить</Button>
            </form>

            <div className="profile__card">
                <div className="profile__card-head">
                    <img src={`${process.env.PUBLIC_URL}/images/card-icon.svg`} alt=""/>
                    <div className="profile__card-expiryDate">{expiryDate}</div>
                </div>
                <div className="profile__card-number">{cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}</div>
                <div className="profile__card-footer">
                    <img src={`${process.env.PUBLIC_URL}/images/chip-icon.svg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/master-card.svg`} alt=""/>
                </div>
            </div>
        </div>
    );
};