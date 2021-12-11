import React from 'react'
import { connect } from 'react-redux'
import { buyicecream } from './redux/Icecream/IcecreamAction'


 function IceCreamContainer(props) {
    //  console.log('hello');
    return (
        <div>
             <h2>Number of IceCream - {props.numOfIceCream}</h2>
             <button onClick={props.IceCream} >Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numOfIceCream:state.icecream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return{
        IceCream: ()=> dispatch(buyicecream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(IceCreamContainer)