import AppLayout from "@/components/layout/AppLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import RiskOverview from "@/components/dashboard/RiskOverview";
import RecentAnalyses from "@/components/dashboard/RecentAnalyses";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-8">
        <DashboardHeader />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Identity Leakage"
            value={64}
            description="High Risk"
            type="danger"
          />

          <MetricCard
            title="Text Risk"
            value={58}
            description="High"
            type="warning"
          />

          <MetricCard
            title="Metadata Risk"
            value={72}
            description="High"
            type="danger"
          />

          <MetricCard
            title="Behavior Risk"
            value={45}
            description="Medium"
            type="warning"
          />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <RiskOverview />
          <RecentAnalyses />
        </div>
      </div>
    </AppLayout>
  );
}