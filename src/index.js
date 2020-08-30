import Post from "./Post";
import './styles/styles.css';
import json from './assets/json.json';
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import logo from './assets/webpack-logo.png';

const post = new Post('Webpack Post title', logo);
console.log('Post to String:', post.toString());
console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
