import './App.css';
import ThoughtsTracker from './Components/Journal/ThoughtsTracker';
import TasksTracker from './Components/Tasks/TasksTracker';



function App() {
  return (
    <div>
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ThoughtsTracker />
            </div>
            <div className="col-md-6">
              <TasksTracker />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
