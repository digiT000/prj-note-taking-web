import React from 'react';
import Title from '@/components/typhography/Title';
import Text from '@/components/typhography/Text';
import Logo from '@/components/general/Logo';
import SsoButton from '@/components/general/SSOButton';
import Separator from '@/components/general/Separator';
import Link from 'next/link';
import LoginForm from '@/components/Form/LoginForm';

function LoginPage() {
  return (
    <div className={'w-screen h-screen flex justify-center items-center p-4'}>
      <div
        className={
          'rounded-xl bg-neutral-0 dark:bg-neutral-950 w-full max-w-xl mx-auto  flex flex-col gap-4 py-10 px-4 md:p-12'
        }
      >
        <Logo className={'mx-auto'} />
        <div className={'flex flex-col gap-2'}>
          <Title
            textPreset={1}
            order={1}
            className={'text-neutral-950 dark:text-neutral-50 text-center'}
          >
            Welcome to Note
          </Title>
          <Text textPreset={5} className={'text-center '}>
            Please log in to continue
          </Text>
        </div>
        <LoginForm />
        <div
          className={
            'flex flex-col gap-4 pt-6 border-t border-t-neutral-200 dark:border-t-neutral-800'
          }
        >
          <Text textPreset={5} className={'text-center'}>
            Or log in with:
          </Text>
          <SsoButton type={'google'} />
        </div>
        <Separator />
        <Text textPreset={5} className={'text-center'}>
          No account yet?{' '}
          <Link
            className={'text-neutral-950 dark:text-neutral-50'}
            href={'/auth/create-account'}
          >
            Sign Up
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default LoginPage;
