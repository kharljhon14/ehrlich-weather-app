'use client';

import { Button, Input } from '@nextui-org/react';
import { type FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { getWeatherByCity } from '@/helpers/api';

export default function WeatherForm() {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const res = await getWeatherByCity(searchValue);

    if (res.status === 200) {
      setSearchValue('');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-lg flex-col items-center justify-center space-y-6"
    >
      <Input
        size="sm"
        placeholder="City"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        startContent={
          <FaSearch
            color="gray"
            size={18}
          />
        }
      />
      <Button
        type="submit"
        color="primary"
      >
        Display Weather
      </Button>
    </form>
  );
}
