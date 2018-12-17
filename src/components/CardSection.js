import React from 'react'
import {View ,Text} from 'react-native'

const CardSection =(props) =>{
	return(
		<View style={styles.containerStyle}>
		{props.children}
		</View>
		)
}

const styles={
containerStyle:{
	borderWidthBotton:2,
	padding:10,
	justifyContent:'flex-start',
	flexDirection:'row',
	position:'relative',
	borderColor:'#fff'
}

}
export default CardSection