import DashboardCard from "./dashboard-card"
import DashboardChart from "./dashboard-chart"
import DashboardTable from "./dashboard-table"


function DashboardContainer() {
  return (
    <div className="space-y-5">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
            <DashboardCard title="students" value="500"/>
            <DashboardCard title="videos" value="100"/>
            <DashboardCard title="course" value="5"/>
            <DashboardCard title="amount" value={19500}/>
        </div>
        <DashboardChart />
        <DashboardTable />
    </div>
  )
}

export default DashboardContainer