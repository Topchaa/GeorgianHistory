import React, { Component } from 'react';
import { Text, View ,TextInput,StyleSheet,Header,FlatList,Dimensions,Alert} from 'react-native';
import { SearchBar, Divider } from 'react-native-elements';
import { Icon,Input,ListItem} from 'react-native-elements';
import _ from 'lodash';

const customData = require('../AppData/data.json');

export default class GeoHistory extends Component  {
   static navigationOptions = {
title :'home',
    headerShown:false
   };
  constructor(props){

super(props)
    this.state = {

      list:customData,
      filteredList: customData ,
query : "",
search: '',


    }

    
  }


  handleChange = (text) =>{
    const formattedQuery = text;
    const filteredList = _.filter(this.state.list, list => {
      var nospacetext  = list.title.replace(/\s/g, '');
var finalstr = nospacetext.replace('-' , '');
      if(list.title.includes(formattedQuery) ){
return true;
      }else if(finalstr.includes(formattedQuery)){
return true;

      }else if(list.subtitle.includes(formattedQuery) ){
return true;
      }
       return false; 
    }
  );
    this.setState({filteredList ,query:text });   
  }



  render() { 
    
    const {  navigate } = this.props.navigation;
    return (
     <View style = {styles.body}> 
      <View style = {styles.headers}>

      <SearchBar
        placeholder="ძებნა..."s
        placeholderTextColor="grey"
        inputStyle = {styles.inputs}
        inputContainerStyle = {styles.inp}
        containerStyle = {styles.contain}
        searchIcon = {{color:'#27c4b6',size:30}}
        clearIcon = {{size:25}}
        cancelIcon = {{color:'#27c4b6'}}
        onChangeText={this.handleChange}
        labelStyle = {styles.inputs}
        value = {this.state.query}
      />


      </View>
<FlatList 
keyExtractor ={(item, index) => index.toString()}
data={this.state.filteredList}
renderItem = {({ item }) => (
  <View style = {{padding:5}}>
  <ListItem

  containerStyle = {styles.card}
    title={item.title}

    onLongPress = {this.changeColor}

    titleStyle = {styles.titles}
    subtitleStyle = {styles.subtitles}
    subtitle={item.subtitle}
    chevron= {{size:30,color:'#27c4b6' }} 
 
   
    
    onPress={ () => navigate('detailed' ,{headline: item.title ,text :item.info }) }
  
  />
</View>
)

}

/>   
      </View>
    );
    
  
  }


} 

  const styles =  StyleSheet.create({
  
    
   body:{
flex:1,
backgroundColor:'#36474F',


   },
   titles:{
color:'white',
fontWeight:'bold',
fontSize:17

   },
   subtitles:{
color:'white',
marginTop:2,


   },
   card:{


backgroundColor:'#616161',
borderColor:'#616161',
borderWidth:1,
borderRadius:5,



   },
    headers:{

      flexDirection:"row",
backgroundColor:'#FFFFFF',
justifyContent: 'center',

        
    },
    inputs:{

color:'white', 
fontFamily :'bpg_mikheil_stefane',
fontSize:26,
padding:2,


    },
  
    inp:{

      height:45,
borderRadius:30,
    borderBottomColor:"white",


    },
   contain:{
    flex:1,
    backgroundColor:'#424242',
borderBottomColor:'transparent',
borderTopColor:'transparent'
   },

});

