import React, { Component } from 'react';
import './App.css';
import CrewCard from './components/CrewCard';
import FilterCrews from './components/FilterCrews';
import DuotoneFilter from './components/DuotoneFilter';
import { getCrews } from './services/ProfileService';

const crews = getCrews();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterActive: ''
    }
    this._setFilterActive = this._setFilterActive.bind(this);
  }

  _setFilterActive = ( filter ) => {
    console.log('filter : '+ filter);
    this.setState({ filterActive: filter })
  }

  render() {
    return ([
      <DuotoneFilter />,
      <div className="contents">
        <h2 className="pagetitle">
          AI crews
        </h2>
        <main>
          <FilterCrews setFilterActive={this._setFilterActive}/>
          <section className="grid-container" data-filteractive={this.state.filterActive}>
            {crews.map(crew => 
              <CrewCard 
                key={crew.id} 
                id={crew.id} 
                name={crew.name} 
                image={crew.image} 
                title={crew.title} 
                segment={crew.segment} 
                group={crew.group} /> 
              )}
          </section>
        </main>
      </div>    
    ]);
  }
}

export default App;
