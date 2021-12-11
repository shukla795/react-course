import React from 'react'
import {connect} from "react-redux"
import { buyCake } from './redux/cakes/CakeAction'
import { buyicecream } from './redux/Icecream/IcecreamAction'
function ItemContainer(props) {
    return (
        <div>
            <h2>item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state , ownprops) => {
    const itemState = ownprops.cake?state.cake.numOfCakes:state.icecream.numOfIceCream
    return{
    item :itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
      ? () => dispatch(buyCake())
      : () => dispatch(buyicecream())
    return {
      buyItem: dispatchFunction
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)  (ItemContainer)
