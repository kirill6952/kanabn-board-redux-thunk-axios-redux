import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {useEffect} from "react";
import {fetchStatuses} from "./API/statuses";
import {useDispatch, useSelector} from "react-redux";
import Column from "./components/Column";



function App() {



  const dispatch = useDispatch();
  const statuses = useSelector( state=>state.statuses)

  console.log(statuses)

  useEffect(()=>{
    dispatch(fetchStatuses())
  },[])
  return (
      <div className="App">

          <div className="container">
            <h1>KANBAN BOARD</h1>
            <div className="row">
                {statuses.map(status => <Column
                    status={status}
                    key={status._id}
                />)}




            </div>
          </div>

      </div>
  );
}

export default App;
