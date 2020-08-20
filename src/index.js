import Post from "./Post";
import './styles/styles.css';
import json from './assets/json.json';

const post = new Post('webpack Post title');
console.log('Post to String:', post.toString());
console.log('JSON: ', json);