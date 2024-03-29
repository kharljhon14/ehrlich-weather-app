import type { Weather, WeatherError } from '@/types/weather';

export async function getWeatherByCity(
  city: string,
): Promise<Weather | WeatherError> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL}q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=imperial`,
  );

  if (!res.ok) {
    const json = (await res.json()) as WeatherError;
    return json;
  }

  const json = (await res.json()) as Weather;

  return json;
}
