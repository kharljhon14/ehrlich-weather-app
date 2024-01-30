import { Button, Input } from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';

export default function WeatherForm() {
  return (
    <form className="flex w-full max-w-lg flex-col items-center justify-center space-y-6">
      <Input
        size="sm"
        placeholder="City"
        startContent={
          <FaSearch
            color="gray"
            size={18}
          />
        }
      />
      <Button color="primary">Display Weather</Button>
    </form>
  );
}
