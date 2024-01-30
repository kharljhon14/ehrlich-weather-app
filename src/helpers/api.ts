import type { Weather, Weather404 } from '@/types/weather';

export async function getWeatherByCity(
  city: string,
): Promise<Weather | Weather404> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL}q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=imperial`,
  );

  if (!res.ok) {
    const { cod, message } = await res.json();
    return {
      status: parseInt(cod, 10),
      message,
    };
  }
  const json = res.json();

  return {
    ...json,
    status: res.status,
  };
}
