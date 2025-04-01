import React, { useState } from 'react';
import InputField from '@/components/Form/InputField';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPass() {
    setShowPassword((prev) => !prev);
  }
  return (
    <InputField
      type={showPassword ? 'text' : 'password'}
      id={'password'}
      withIcon={true}
      placeholder={'Enter password'}
      onShowPass={() => handleShowPass()}
      showPass={showPassword}
    />
  );
}

export default PasswordInput;
