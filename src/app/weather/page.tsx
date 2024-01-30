import UserInfo from '@/features/auth/UserInfo';
import WeatherForm from '@/features/weather/WeatherForm';

export default function WeatherPage() {
  return (
    <main className="flex flex-col items-center justify-center space-y-6">
      <UserInfo />
      <WeatherForm />
    </main>
  );
}
