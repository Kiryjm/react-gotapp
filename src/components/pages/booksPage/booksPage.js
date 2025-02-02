import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';



class BooksPage extends Component {

    gotService = new gotService();

	state = {
		selectedBook: null,
		error: false
	}

	onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	render() {

		if (this.state.error) {
			return <ErrorMessage/>
		}

		// if (!this.state.selectedBook) {
		// 	return <Spinner/>
		// }

		return(
			<ItemList 
				onItemSelected={(itemId) => {
					// this.onItemSelected(itemId);
					this.props.history.push(`${itemId}`);
				}}
				getData={this.gotService.getAllBooks}
				renderItem={({name}) => `${name}`}
			/>
		)
	}
}

export default withRouter(BooksPage);