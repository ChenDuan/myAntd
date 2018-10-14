import React, {Component} from 'react'
import {Card,Button} from 'antd'
import {connect} from 'dva'

const namespace = 'cards'

const mapStateToProps = (state) => {
	const cardList = state[namespace].data;
	return {
		cardList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClickAdd: (newCard) => {
			const action = {
				type: `${namespace}/addNewCard`,
				payload: newCard
			};
			dispatch(action)
			
		}
	}
}


@connect(mapStateToProps, mapDispatchToProps)
export default class Cards extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		cardList: [
	// 			{
	// 				id: 1,
	// 				setup: 'Did you hear about the two silk worms in a race?',
	// 				punchline: 'It ended in a tie',
	// 			},
	// 			{
	// 				id: 2,
	// 				setup: 'What happens to a frog\'s car when it breaks down?',
	// 				punchline: 'It gets toad away',
	// 			},
	// 		]
	// 	}
	// }
	
	render() {
		return (
			<div>
				{
					this.props.cardList.map(card => {
						return (
							<Card key={card.id}>
								<div>Q:{card.setup}</div>
								<div>
									<strong>A:{card.punchline}</strong>
								</div>
							</Card>
						)
					})
				}
				<div>
					<Button onClick={()=>this.props.onClickAdd({
						setup: '123',
						punchline: '使用dva'
					})}>
					增加
					</Button>
				</div>
			</div>
		)
	}
	
}