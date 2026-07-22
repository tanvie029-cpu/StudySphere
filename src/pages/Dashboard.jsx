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
    <main className="max-w-7xl mx-auto px-6 py-6">
      <Greeting name="Tanvi" />
        
      <div className="grid grid-cols-2 gap-6 mt-8">
      <GoalCard />
      <QuickActions />
      </div>  
      
      <DeadlineCard />
      <Stats />
      <SubjectGrid />
      <Heatmap />
      <ProgressChart />
    </main>
  );
}

export default Dashboard;