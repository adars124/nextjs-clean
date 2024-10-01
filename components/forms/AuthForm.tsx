import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {!isLogin && (
        <Input type="text" id="name" name="name" label="Full Name" required />
      )}
      <Input
        type="email"
        id="email"
        name="email"
        label="Email Address"
        required
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="Password"
        required
      />
      {!isLogin && (
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          required
        />
      )}
      <Button type="submit" variant="primary" className="w-full">
        {isLogin ? 'Log In' : 'Sign Up'}
      </Button>
    </form>
  );
};
