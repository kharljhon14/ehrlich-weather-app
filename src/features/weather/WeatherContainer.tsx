import WeatherForm from './WeatherForm';
import WeatherInformationTable from './WeatherInformationTable';

export default function WeatherContainer() {
  return (
    <div className="flex w-full items-center justify-center px-14">
      <WeatherForm />
      <WeatherInformationTable />
    </div>
  );
}
