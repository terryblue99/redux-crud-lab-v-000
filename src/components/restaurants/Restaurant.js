import React, { Component } from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const {restaurant} = this.props

    return (
      this.props.restaurant.id !== '' ?
      <div>
        <li>
          {restaurant.text}
          <label> </label><button onClick={this.handleClick}>X</button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div> :
      null
    )
  }
}

export default Restaurant