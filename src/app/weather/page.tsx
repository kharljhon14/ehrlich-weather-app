'use client';

import { WeatherContextProvider } from '@/context/weatherContext';
import WeatherContainer from '@/features/weather/WeatherContainer';

export default function WeatherPage() {
  return (
    <WeatherContextProvider>
      <WeatherContainer />
    </WeatherContextProvider>
  );
}
