import * as $ from 'jquery';
import Post from './models/Post';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import json from './assets/json.json';
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import logo from './assets/webpack-logo.png';

const post = new Post('Webpack Post title', logo);
$('pre').addClass('code').html(post.toString());

console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
