import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.Fragment>
<nav>
<h1>List of Top 3 NetFlix Series</h1>
</nav>
<div className='container'>
<Router>
<App></App>
</Router>


</div>

</React.Fragment>
);

