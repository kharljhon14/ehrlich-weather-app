'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

export default function WeatherInformationTable() {
  return (
    <Table isStriped>
      <TableHeader>
        <TableColumn>Date</TableColumn>
        <TableColumn> </TableColumn>
        <TableColumn> </TableColumn>
        <TableColumn> </TableColumn>
        <TableColumn> </TableColumn>
        <TableColumn> </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Date(mm/dd/yyy)</TableCell>
          <TableCell>Temp(F)</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Main</TableCell>
          <TableCell>Pressure</TableCell>
          <TableCell>Humidity</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Date(mm/dd/yyy)</TableCell>
          <TableCell>Temp(F)</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Main</TableCell>
          <TableCell>Pressure</TableCell>
          <TableCell>Humidity</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
