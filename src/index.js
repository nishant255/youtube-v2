import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyACsMZpPMqu9q2r7V84kKyBbKtGMXhZe6g';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
        )
};

ReactDOM.render(<App />, document.querySelector('.container'));
