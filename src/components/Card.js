import React from 'react';
import {View} from 'react-native';

const Card =(props) =>{
return(
<View style={styles.containerStyles}>
{props.children}
</View>
);
};

const styles={
containerStyles:{
borderRadius:2,
borderColor:'#ddd,
borderwidth:2,
borderBottomWidth:0,
shadowColor:'#000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.6,
elevation:2,
marginLeft:5,
marginRight:5,
marginTop:10
}
}

export default Card;
