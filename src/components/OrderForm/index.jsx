import React, {useState} from 'react';
import {Card} from "../UI/Card";
import {useForm} from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {Button} from "../UI/Button";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {getAddresses, getIsLoading} from "../../store/selectors";

export const OrderForm = () => {
    const {register, handleSubmit} = useForm()
    const addresses = useSelector(state => getAddresses(state.order))
    const isLoading = useSelector(state => getIsLoading(state.order))
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const {getRoutes} = useActions()

    const handleChange = (e) => {
        if (e.target.name === 'from') {
            setFrom(e.target.value)
        } else {
            setTo(e.target.value)
        }
    }

    const onSubmit = data => {
        getRoutes(data);
    }

    return (
        <Card>
            <form className="form form--order" onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel id="from">Откуда</InputLabel>
                    <Select
                        labelId="from"
                        id="from"
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            getContentAnchorEl: null
                        }}
                        {...register('from')}
                        value={from}
                        onChange={handleChange}
                    >
                        {addresses.map(address => (
                            to !== address && <MenuItem key={address} value={address}>{address}</MenuItem>))
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel id="to">Куда</InputLabel>
                    <Select
                        labelId="to"
                        id="to"
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            getContentAnchorEl: null
                        }}
                        {...register('to')}
                        value={to}
                        onChange={handleChange}
                    >
                        {addresses.map(address => (
                            from !== address && <MenuItem key={address} value={address}>{address}</MenuItem>))
                        }
                    </Select>
                </FormControl>
                <Button preloader={isLoading} disabled={!from || !to || isLoading}>Заказать</Button>
            </form>
        </Card>
    );
};