import React from 'react';
import {Card} from "../../components/UI/Card";
import {RegistrationForm} from "../../components/RegistrationForm";

export const Registration = () => {
    return (
        <Card title={'Регистрация'}>
            <RegistrationForm/>
        </Card>
    );
};