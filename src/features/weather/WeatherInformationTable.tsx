'use client';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { useWeatherContext } from '@/context/weatherContext';

export default function WeatherInformationTable() {
  const { weather, resetWeather } = useWeatherContext();

  return (
    <div className="w-full space-y-8 md:max-w-3xl">
      {weather && (
        <>
          <Table
            aria-label="Example static collection table"
            isStriped
          >
            <TableHeader>
              <TableColumn className="text-lg">{weather.name}</TableColumn>
              <TableColumn> </TableColumn>
              <TableColumn className="hidden md:table-cell"> </TableColumn>
              <TableColumn className="hidden md:table-cell"> </TableColumn>
              <TableColumn className="hidden md:table-cell"> </TableColumn>
              <TableColumn className="hidden md:table-cell"> </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className="font-semibold">(mm/dd/yyyy)</TableCell>
                <TableCell className="font-semibold">Temp(F)</TableCell>
                <TableCell className="hidden font-semibold md:table-cell">
                  Description
                </TableCell>
                <TableCell className="hidden font-semibold md:table-cell">
                  Main
                </TableCell>
                <TableCell className="hidden font-semibold md:table-cell">
                  Pressure
                </TableCell>
                <TableCell className="hidden font-semibold md:table-cell">
                  Humidity
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  {new Date(weather.dt * 1000).toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </TableCell>
                <TableCell>{weather.main.temp}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {weather.weather[0].description}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {weather.weather[0].main}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {weather.main.pressure}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {weather.main.humidity}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-end">
            <Button onClick={resetWeather}>Back</Button>
          </div>
        </>
      )}
    </div>
  );
}
