import Post from "./Post";
import './styles/styles.css';
import json from './assets/json.json';
import logo from './assets/webpack-logo.png';

const post = new Post('Webpack Post title', logo);
console.log('Post to String:', post.toString());
console.log('JSON: ', json);
