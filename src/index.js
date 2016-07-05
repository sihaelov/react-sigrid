import React from 'react';
import ReactDOM from 'react-dom';

import {Row, Col} from 'react-sigrid';
import Highlight from 'react-highlight';

import './style.scss';
import '../node_modules/highlight.js/styles/default.css';

class Header extends React.Component{
	render() {
		return (
			<div>
				<h1>React Sigrid Demo</h1>
				<p>A lightweight, responsive simple grid component for React</p>

				<div>
					<iframe src="https://ghbtns.com/github-btn.html?user=sihaelov&repo=react-sigrid&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
					<iframe src="https://ghbtns.com/github-btn.html?user=sihaelov&repo=react-sigrid&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
					<iframe src="https://ghbtns.com/github-btn.html?user=sihaelov&type=follow&size=large" frameBorder="0" scrolling="0" width="220px" height="30px"></iframe>
				</div>

			</div>
		);
	}
}

class Intro extends React.Component{
	render() {
		return (
			<div>

				<h2>Installation</h2>
				<code className="install">npm install react-sigrid</code>

				<h2>Usage</h2>

				<Highlight className='javascript'>
{`import {Row, Col} from 'react-sigrid'

<Row>
    <Col small={12} medium={9} large={7}></Col>
    <Col small={12} medium={3} large={5}></Col>
</Row>

// You can offset a column as per your wish.
<Row>
    <Col medium={3} mediumOffset={9} large={5} largeOffset={7}></Col>
</Row>
`}
				</Highlight>

			</div>
		);
	}
}

class Demo extends React.Component{
	render() {
		return (
			<div className="demo">

				<h2>Examples</h2>

				<Row>
					<Col small={12}>
						<code>{"small={12}"}</code>
					</Col>
				</Row>

				<Row>
					<Col small={6}>
						<code>{"small={6}"}</code>
					</Col>

					<Col small={6}>
						<code>{"small={6}"}</code>
					</Col>
				</Row>

				<Row>
					<Col small={3}>
						<code>{"small={3}"}</code>
					</Col>

					<Col small={3}>
						<code>{"small={3}"}</code>
					</Col>

					<Col small={3}>
						<code>{"small={3}"}</code>
					</Col>

					<Col small={3}>
						<code>{"small={3}"}</code>
					</Col>
				</Row>

				<h2>Combine</h2>

				<Row>
					<Col small={8}>
						<code>{"small={8}"}</code>
					</Col>

					<Col small={4}>
						<code>{"small={4}"}</code>
					</Col>
				</Row>

				<Row>
					<Col small={5}>
						<code>{"small={5}"}</code>
					</Col>

					<Col small={7}>
						<code>{"small={7}"}</code>
					</Col>
				</Row>

				<Row>
					<Col small={3}>
						<code>{"small={3}"}</code>
					</Col>

					<Col small={6}>
						<code>{"small={6}"}</code>
					</Col>

					<Col small={3}>
						<code>{"small={3}"}</code>
					</Col>
				</Row>


				<h2>Adding Responsiveness</h2>

				<Row>
					<Col small={12} medium={6} large={3}>
						<code>{"small={12} medium={6} large={3}"}</code>
					</Col>

					<Col small={12} medium={6} large={3}>
						<code>{"small={12} medium={6} large={3}"}</code>
					</Col>

					<Col small={12} medium={6} large={3}>
						<code>{"small={12} medium={6} large={3}"}</code>
					</Col>

					<Col small={12} medium={6} large={3}>
						<code>{"small={12} medium={6} large={3}"}</code>
					</Col>
				</Row>


				<h2>Offsets</h2>

				<Row>
					<Col small={8} smallOffset={2}>
						<code>{"small={8} smallOffset={2}"}</code>
					</Col>
				</Row>

				<Row>
					<Col small={4}>
						<code>{"small={4}"}</code>
					</Col>

					<Col small={5} smallOffset={2}>
						<code>{"small={5} smallOffset={2}"}</code>
					</Col>
				</Row>

				<Row>
					<Col small={12} medium={6} mediumOffset={3}>
						<code>{"small={12} medium={6} mediumOffset={3}"}</code>
					</Col>
				</Row>

			</div>
		);
	}
}


class Index extends React.Component{
	render() {
		return (
			<div>
				<Row>
					<Col small={12} medium={12} large={10} largeOffset={1} className="main">
						<Header />
						<Intro />
						<Demo />
					</Col>
				</Row>
			</div>
		);
	}
}

ReactDOM.render((
	<Index />
), document.getElementById('app'))