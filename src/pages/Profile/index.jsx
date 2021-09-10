import React from 'react';
import './index.scss';
import {Card} from "../../components/UI/Card";
import {ProfileForm} from "../../components/ProfileForm";

export const Profile = () => {
    return (
        <div className="profile">
            <Card>
                <div className="profile__content">
                    <h2 className="profile__title">Профиль</h2>
                    <p className="profile__description">Ввдеите платежные данные</p>
                    <ProfileForm/>
                </div>
            </Card>
        </div>
    );
};