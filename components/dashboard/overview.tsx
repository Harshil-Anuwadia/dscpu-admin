"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 12 },
  { name: "Feb", total: 17 },
  { name: "Mar", total: 21 },
  { name: "Apr", total: 140 },
  { name: "May", total: 41 },
  { name: "Jun", total: 114 },
  { name: "Jul", total: 55 },
  { name: "Aug", total: 48 },
  { name: "Sep", total: 110 },
  { name: "Oct", total: 129 },
  { name: "Nov", total: 19 },
  { name: "Dec", total: 27 },
];


export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

