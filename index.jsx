import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './assets/css/index.css';


import ZmitiIndexApp from './index/index.jsx'

class App extends Component {
	constructor(props) {
		super(props);


		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;


	}
	render() {
		return <div className='zmiti-main-ui'>
			<ZmitiIndexApp></ZmitiIndexApp>
		</div>
	}
	componentDidMount() {


	}
}


ReactDOM.render(<App></App>, document.getElementById('zmiti-main-ui'));