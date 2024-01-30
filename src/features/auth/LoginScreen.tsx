'use client';

import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';

export default function LoginScreen() {
  return (
    <div className="mx-12 flex items-center justify-center">
      <div className="max-w-xl space-y-6">
        <p>
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </p>

        <Button
          type="submit"
          color="primary"
          onClick={() => signIn('github')}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
