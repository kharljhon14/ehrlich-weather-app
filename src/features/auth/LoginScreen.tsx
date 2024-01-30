import { Button } from '@nextui-org/react';

export default function LoginScreen() {
  return (
    <div className="mx-12 mt-36 flex items-center justify-center">
      <div className="max-w-xl space-y-6">
        <p>
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </p>
        <Button color="primary">Login</Button>
      </div>
    </div>
  );
}
