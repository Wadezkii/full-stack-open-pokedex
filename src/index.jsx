import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './styles.css';

const root = document.getElementById('app');
const reactRoot = createRoot(root);
reactRoot.render(<App />);
