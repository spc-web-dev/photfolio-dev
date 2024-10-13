"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", students: 100 },
    { month: "February", students: 150 },
    { month: "March", students: 200 },
    { month: "April", students: 220 },
    { month: "May", students: 250 },
    { month: "June", students: 290 },
    { month: "July", students: 320 },
    { month: "August", students: 390 },
    { month: "September", students: 450 },
    { month: "October", students: 500 },
  ];
  

const chartConfig = {
  students: {
    label: "students",
    color: "#3b82f6",
  }
} satisfies ChartConfig

export default function DashboardChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[400px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="students" fill="var(--color-students)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
