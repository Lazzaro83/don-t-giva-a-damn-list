import React, { Component } from 'react';
import { base } from './base.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

import {
	Form,
	Button,
	Segment,
	Modal,
	Header,
	Loader,
	Input,
	Dropdown,
} from 'semantic-ui-react';

class App extends Component {
	constructor(){
		super();
		this.state = {
			modalOpened: false,
			createdLink: '',
			firstInput: '',
			secondInput: '',
			thirdInput: '',
			fourthInput: '',
			fifthInput: '',
			selectedExpression: '',
			psovka: '',
		}
	}

	componentWillMount() {
		const createdLink = this.createLink();
		this.setState({ createdLink });
		this.ref = base.syncState("fucks/", {
			context: this,
			state: "psovka"
		});
	}

	createLink = () =>
		'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
			/[xy]/g,
			(c) => {
				const r = (Math.random() * 16) | 0;

				if (c === 'x') {
					return r.toString(16);
				}

				return ((r & 0x3) | 0x8).toString(16);
			},
		);

	createModal = () => {
		const { firstInput, secondInput, thirdInput, fourthInput, fifthInput, createdLink } = this.state;
		this.setState(prevState => ({
			psovka: {...prevState.psovka,  [createdLink]: [firstInput, secondInput, thirdInput, fourthInput, fifthInput] },
		}));
	};

	selectExpression = (e, { value }) => {
		this.setState({
			selectedExpression: value,
			firstInput: "I don't " + value,
			secondInput: "I don't " + value,
			thirdInput: "I don't " + value,
			fourthInput: "I don't " + value,
			fifthInput: "I don't " + value,
		});
	};

	render() {
		const expressionOptions = [
			{ text: "care about ",	value: "care about "},
			{ text: "give a fuck about ",	value: "give a fuck about "},
			{ text: "give a single fuck about ",	value: "give a single fuck about "},
			{ text: "give a rat's ass about ",	value: "give a rat's ass about "},
			{ text: "give a rat's ars about ",	value: "give a rat's ars about "},
			{ text: "give a tiny rat's ass about ",	value: "give a tiny rat's ass about "},
			{ text: "give a shit about ",	value: "give a shit about "},
			{ text: "give a crap about ",	value: "give a crap about "},
			{ text: "give a  *$!%&** about ",	value: "give a  *$!%&** about "},
			{ text: "give a damn about ",	value:  "give a damn about "},
		];
		return (
			<div className="App">
				<header className="App-header">
					<h1>Choose expression and write what or whom you don't care about and click button <i>Send</i>.</h1>
					<h2>Copy given link and send the list to anyone you want.</h2>
				</header>
				<Dropdown
					placeholder='Select expression...'
					fluid
					selection
					options={expressionOptions}
					onChange={this.selectExpression}
					className='App-dropdown'
				/>
				<Form>
					<Form.Field>
						<input
							placeholder="I don't ..."
							value={this.state.firstInput}
							onChange={e => this.setState({firstInput: e.target.value})}
						/>
					</Form.Field>
					<Form.Field>
						<input
							placeholder="I don't ..."
							value={this.state.secondInput}
							onChange={e => this.setState({secondInput: e.target.value})}
						/>
					</Form.Field>
					<Form.Field>
						<input
							placeholder="I don't ..."
							value={this.state.thirdInput}
							onChange={e => this.setState({thirdInput: e.target.value})}
						/>
					</Form.Field>
					<Form.Field>
						<input
							placeholder="I don't ..."
							value={this.state.fourthInput}
							onChange={e => this.setState({fourthInput: e.target.value})}
						/>
					</Form.Field>
					<Form.Field>
						<input
							placeholder="I don't ..."
							value={this.state.fifthInput}
							onChange={e => this.setState({fifthInput: e.target.value})}
						/>
					</Form.Field>
				</Form>
				<Segment
					raised
					className='App-segment'
				>
					<Modal
						trigger={
							<Button
								inverted
								color='yellow'
								onClick={() => {
									this.setState({ modalOpened: true });
									this.createModal();
								}}
							>
								Send the list
							</Button>
						}
						open={this.state.modalOpened}
					>
						<Header icon='copy' content='Copy this link and send it to whomever you want...' />
						<Modal.Content>
							{!this.state.createdLink ?
								<Loader
									inverted={true}
									size='small'
								/> :
								<Input
									fluid
									disabled={true}
									value={`${window.location.href}${this.state.createdLink}`}
									iconPosition='left'
								/>
							}
						</Modal.Content>
						<Modal.Content>
							<CopyToClipboard
								text={`${window.location.href}${this.state.createdLink}`}
								onCopy={() => this.setState({
									modalOpened: false,
									firstInput: '',
									secondInput: '',
									thirdInput: '',
									fourthInput: '',
									fifthInput: '',
									selectedExpression: '',
								})}
							>
								<Button
									content='Copy this link'
									fluid
									color='red'
									inverted
									onClick={() => this.setState({
										modalOpened: false,
										firstInput: '',
										secondInput: '',
										thirdInput: '',
										fourthInput: '',
										fifthInput: '',
										selectedExpression: '',
									})}
								/>
							</CopyToClipboard>
						</Modal.Content>
					</Modal>
				</Segment>
			</div>
		);
	}
}

export default App;
