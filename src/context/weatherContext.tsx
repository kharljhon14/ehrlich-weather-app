import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

import type { Weather } from '@/types/weather';

interface WeatherState {
  weather?: Weather;
  setWeather: (weather: Weather) => void;
  resetWeather: () => void;
}

export const WeatherContext = createContext<WeatherState | undefined>(
  undefined,
);

export function useWeatherContext() {
  const context = useContext(WeatherContext);

  if (!context) throw new Error('Must be inside of a provider!');

  return context;
}

export function WeatherContextProvider({ children }: PropsWithChildren) {
  const [weather, setWeather] = useState<Weather | undefined>();

  const contextValue = useMemo(
    () => ({
      weather,
      setWeather: (newWeather: Weather) => setWeather(newWeather),
      resetWeather: () => setWeather(undefined),
    }),
    [weather],
  );

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}
