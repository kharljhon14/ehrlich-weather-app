'use client';

import { WeatherContextProvider } from '@/context/weatherContex';
import WeatherContainer from '@/features/weather/WeatherContainer';

export default function WeatherPage() {
  return (
    <WeatherContextProvider>
      <WeatherContainer />
    </WeatherContextProvider>
  );
}
