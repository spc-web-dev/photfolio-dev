import { formatCurrencyToUsd } from "@/lib/format-currency";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"


type Props = {
    title: string;
    value: string | number;
}

function DashboardCard({ title, value }: Props) {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-xl font-serif font-medium capitalize">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription>{typeof value === 'string' ? `${value} ${title}`: `${formatCurrencyToUsd(value)}`}</CardDescription>
        </CardContent>
    </Card>
  )
}

export default DashboardCard