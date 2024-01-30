import { useWeatherContext } from '@/context/weatherContex';

import WeatherFormContainer from './WeatherFormContainer';
import WeatherInformationTable from './WeatherInformationTable';

export default function WeatherContainer() {
  const { weather } = useWeatherContext();
  return (
    <main className="flex w-full items-center justify-center px-6 md:px-14">
      {weather ? <WeatherInformationTable /> : <WeatherFormContainer />}
    </main>
  );
}
