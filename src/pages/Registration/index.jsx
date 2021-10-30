import React from 'react'
import {Card} from '../../components/UI/Card'
import {RegistrationForm} from '../../components/RegistrationForm'
import {AuthLayout} from '../../components/AuthLayout'

export const Registration = () => {
  return (
    <AuthLayout>
      <Card>
        <RegistrationForm />
      </Card>
    </AuthLayout>
  )
}
