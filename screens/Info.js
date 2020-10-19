import React, { Component } from 'react';
import {Text,StyleSheet, View,Animated,TouchableWithoutFeedback,Platform,Dimensions} from 'react-native';
import { Divider } from 'react-native-elements';
import{ScrollView} from 'react-native';
export default class info extends Component {

constructor(){
super();
this.scrollYAnimatedValue = new Animated.Value(0);



}


    static navigationOptions =  ({ navigation }) =>   {

return{
title: 'უკან',
headerTitleStyle:{
    color:'white'
},
headerTintColor:'#27c4b6',

  headerStyle:{
      backgroundColor:'#424242',
    
  }  
    };

 
};





render(){
    const {  navigate,state } = this.props.navigation;
    
    const headerBackgroundColor = this.scrollYAnimatedValue.interpolate(
        {
          inputRange: [0, 150],
          outputRange: ['#36474F', '#151c1f'],
          extrapolate: 'clamp'
        });


      


return(
<View style = {styles.body}>



<TouchableWithoutFeedback onPress={() => {   this.scroller.scrollTo({x:0 ,y:0 , animated:true});
}}>
    <Animated.View style = {{ justifyContent:'center',alignItems:'center' , backgroundColor:headerBackgroundColor , borderBottomLeftRadius:18,
borderBottomRightRadius:18}} >

    <Text style = {styles.headline}>{state.params.headline}</Text>
    <Divider style = {styles.line}></Divider>

    </Animated.View>
    </TouchableWithoutFeedback>


    <ScrollView onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}  ref={(scroller) => {this.scroller = scroller}} >
<Text style = {styles.text}>{state.params.text}</Text>
</ScrollView>


</View>
);


}


}
   
const styles  = StyleSheet.create({

body:{
flex:1,
backgroundColor :'#36474F',


},
container:{




},
headline:{
    color:'white',
    margin:10,
textAlign: 'center',
fontSize:20,
fontFamily :'bpg_mikheil_stefane',
letterSpacing:1,
lineHeight: 30,
},
text:{
color:'white',
fontSize:18,
margin:5,
marginTop:15,
padding:3,


},
line:{
margin:12,
width:40,
height:3,
borderRadius:3
}








})


