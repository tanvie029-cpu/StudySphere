import Greeting from "../components/Greeting";
import GoalCard from "../components/GoalCard";
import QuickActions from "../components/QuickActions";
import DeadlineCard from "../components/DeadlineCard";
import Stats from "../components/Stats";
import SubjectGrid from "../components/SubjectGrid";
import Heatmap from "../components/Heatmap";
import ProgressChart from "../components/ProgressChart";

function Dashboard() {
  return (
    <main>
      <Greeting />
      <GoalCard />
      <QuickActions />
      <DeadlineCard />
      <Stats />
      <SubjectGrid />
      <Heatmap />
      <ProgressChart />
    </main>
  );
}

export default Dashboard;