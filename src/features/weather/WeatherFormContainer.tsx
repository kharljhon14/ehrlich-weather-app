import UserInfo from '../auth/UserInfo';
import WeatherForm from './WeatherForm';

export default function WeatherFormContainer() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6">
      <UserInfo />
      <WeatherForm />
    </div>
  );
}
