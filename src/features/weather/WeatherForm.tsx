'use client';

import { Button, Input } from '@nextui-org/react';
import { type FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { useWeatherContext } from '@/context/weatherContex';
import { getWeatherByCity } from '@/helpers/api';
import type { Weather, WeatherError } from '@/types/weather';

export default function WeatherForm() {
  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { setWeather } = useWeatherContext();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const res = await getWeatherByCity(searchValue);

    switch (res.cod) {
      case 200:
        setSearchValue('');
        setWeather(res as Weather);
        break;

      default:
        setErrorMessage((res as WeatherError).message);
        break;
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-lg flex-col items-center justify-center space-y-6"
    >
      <div className="w-full">
        <Input
          size="sm"
          disabled={loading}
          isInvalid={!!errorMessage}
          errorMessage={errorMessage}
          maxLength={16}
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
      </div>

      <Button
        type="submit"
        color="primary"
        isLoading={loading}
        disabled={loading}
      >
        Display Weather
      </Button>
    </form>
  );
}
