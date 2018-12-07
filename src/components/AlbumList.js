import React,{Component} from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component
{
	state ={ albums:[] };

	ComponentWillMount()
	{
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response=> this.setState({albums:response.data}));
	}
	renderAlbums(){
	return this.state.albums.map(album => 
		<AlbumDetail key={album.title} album={album}/>);
	}

	render(){
	return(
	<View>
	<Text>hello bitch</Text>
	{this.renderAlbums()}
	</View>
	);
}
}
export default AlbumList;
