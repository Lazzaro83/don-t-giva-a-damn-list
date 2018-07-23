import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { base } from './base.js';
import './courseList.css';

import {
	Segment,
	Header,
	List,
} from 'semantic-ui-react';

class CourseList extends Component {
	constructor(){
		super();
		this.state = {
			courseList: [],
		}
	}

	componentWillMount() {
		const pathname = window.location.pathname.slice(1);

		this.ref = base.syncState(`fucks/${pathname}`, {
			context: this,
			state: "courseList"
		});
	}

	render() {
		const { courseList } = this.state;
		return (
			<div className='courseList'>
				<Segment
					inverted
					loading={courseList.length === 0}
				>
					<Header
						as='h1'
						textAlign='center'
						className='courseList_header'
					>
						Sender wishes to say:
					</Header>
					<List
						divided
						inverted
						relaxed
						size='massive'
					>
						{ courseList.map( course =>
							<List.Item className='courseList_item' key={course}>
								<List.Content>
									<List.Header>{course}!!!</List.Header>
								</List.Content>
							</List.Item>
						)}
					</List>
				</Segment>
				<Segment
					inverted
					color='red'
					textAlign='center'
					className='courseList_responseLink'>
					<Link to="/">Respond to the sender with your list.</Link>
				</Segment>
			</div>
		);
	}
}

export default CourseList;
