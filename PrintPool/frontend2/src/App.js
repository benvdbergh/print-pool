import './styles/App.css';
import React, { Component } from "react"
import MapView from './components/MapView';

class App extends Component {
    // async componentDidMount() {
    //   try {
    //     const res = await fetch('http://localhost:8000/api/todos/');
    //     const todoList = await res.json();
    //     this.setState({
    //       todoList
    //     });
    //   } catch (e) {
    //     console.log(e);
    // }
    // }
    // renderItems = () => {
    //   const { viewCompleted } = this.state;
    //   const newItems = this.state.todoList.filter(
    //     item => item.completed === viewCompleted
    //   );
    //   return newItems.map(item => (
    //     <li 
    //       key={item.id}
    //       className="list-group-item d-flex justify-content-between align-items-center"
    //     >
    //       <span 
    //         className={`todo-title mr-2 ${
    //           this.state.viewCompleted ? "completed-todo" : ""
    //         }`}
    //         title={item.description}
    //         >
    //           {item.title}
    //         </span>
    //     </li>
    //   ));
    // };

    
    viewState = {
      width: 500,
      height: 500,
      latitude: 37,
      longitude: -12.4376,
      zoom: 8
    };

    vehicles = [
      { id: 1, coordinates: [37.7577, -122.4376] },
      { id: 2, coordinates: [37.9077, -122.8076] },
      { id: 3, coordinates: [37.7577, -123.576] }
    ];


    render() {
      return (
        <div style={{ width: '400', height: '400' }}>
          <MapView viewState={this.viewState} vehicles={this.vehicles} />
        </div>
      )
    }
  }
  

export default App;
