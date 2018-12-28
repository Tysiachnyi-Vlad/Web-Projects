import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';
import FilterList from './components/FilterList';

class App extends Component {
    state = {
        image: 'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg',
        selectedFilter: '',
        settings: {
            contrast: 100,
            hue: 0,
            brightness: 100,
            saturate: 100,
            sepia: 0
        }
    }

    handleChange = event => {
        const setting = event.target.id;
        const value = event.target.value;
        const settings = { ...this.state.settings, [setting]: value };

        this.setState({ selectedFilter: '', settings });
    }

    updateSettings = (selectedFilter, settings) => {
        this.setState({ selectedFilter, settings });
    }

    render() {
        const { image, selectedFilter, settings } = this.state;

        return (
            <div className="app">
                <Header title="Small photo redactor" />

                <section className="content">
                    <Settings settings={settings} handleChange={this.handleChange} />

                    <main className="main">
                        <Filter settings={settings}>
                            <Image src={image} />
                        </Filter>

                        <FilterList
                            image={image}
                            settings={settings}
                            selectedFilter={selectedFilter}
                            updateSettings={this.updateSettings} />
                    </main>
                </section>

                
            </div>
        );
    }
}

export default App;