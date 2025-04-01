'use client';
import React from 'react';
import Label from '@/components/Form/Label';
import InputField from '@/components/Form/InputField';
import Button from '@/components/general/Button';
import PasswordInput from '@/components/Form/PasswordInput';

function LoginForm() {
  return (
    <form className={'pt-6 flex flex-col gap-4'}>
      <div className={'flex flex-col gap-1'}>
        <Label htmlFor={'email'}>Email Address</Label>
        <InputField
          type={'text'}
          id={'email'}
          placeholder={'email@example.com'}
          withIcon={false}
        />
      </div>
      <div className={'flex flex-col gap-1'}>
        <Label htmlFor={'password'}>Password</Label>
        <PasswordInput />
      </div>
      <Button type={'primary'}>Login</Button>
    </form>
  );
}

export default LoginForm;
