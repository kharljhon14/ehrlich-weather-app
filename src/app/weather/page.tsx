import UserInfo from '@/features/auth/UserInfo';
import WeatherContainer from '@/features/weather/WeatherContainer';

export default function WeatherPage() {
  return (
    <main className="flex flex-col items-center justify-center space-y-6">
      <UserInfo />
      <WeatherContainer />
    </main>
  );
}
