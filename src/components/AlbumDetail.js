import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'


const AlbumDetail = (props) =>{
const {thumbnailImage,headerTextStyle,ImageStyle,thumnailContainerStyle,headerContentStyle}=styles

return(
	<Card>
	
	<CardSection>
	<View style={thumnailContainerStyle}>
	<Image style={thumbnailImage} source={{uri:props.album.thumbnail_image}}/>
	</View>
	<View style={headerContentStyle}>
	<Text style={headerTextStyle}>{props.album.title}</Text>
	<Text>{props.album.artist}</Text>
	</View>
	</CardSection>
	
	<CardSection>
	<Image style={ImageStyle}
	source={{uri:props.album.image}}/>
	</CardSection>
	
	<CardSection>
	<Button onPress={()=>Linking.openURL(props.album.url)} text={'BUY NOW'}/>
	</CardSection>
	
	</Card>
);
};

const styles={
	headerContentStyle:{
		flexDirection:'column',
		justifyContent:'space-around'
	},
	thumbnailImage:{
		height:50,
		width:50
	},
	thumnailContainerStyle:{
		marginLeft:10,
		marginRight:10,
		justifyContent:'center',
		alignItems:'center'
	},
	headerTextStyle:{
		fontSize:20
	},
	ImageStyle:{
		height:300,
		flex:1,
		width:null
	}
}
export default AlbumDetail;