import React from 'react';
import {View,Image,TextInput,StyleSheet} from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.header}>
      <Image source={{uri : 'https://cdn-icons-png.flaticon.com/512/174/174857.png',}}
        style={{width:40, height:40,marginLeft:10}}/>
      <View style={styles.search}>
      <Image source={{uri: 'https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1641451336~hmac=86bd028c4ac05188d34d2897189d1f10'}}
        style={{width:25,height:25,marginTop:5,marginLeft:5}}/>
      <TextInput placeholder="Search for jobs..."/>
      </View>

      <View style={styles.icons}>
      <Image source={{uri : 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
         style={{height:25,width:25,marginLeft:10,marginTop:5}} />

      <Image source={{uri:'https://cdn-icons.flaticon.com/png/512/2118/premium/2118701.png?token=exp=1641452940~hmac=47fb64121c474f259293011fe0bd7b4c'}}
        style={{height:25,width:25,marginLeft:10,marginTop:5}}/>
        
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2910/2910791.png'}}
      style={{height:25,width:25,marginLeft:10,marginTop:5}}/>
      <Image source={{uri:'https://cdn-icons.flaticon.com/png/512/3115/premium/3115518.png?token=exp=1641546742~hmac=77a393a16092f990a8091da3aa33b86b'}}
      style={{height:25,width:25,marginLeft:10,marginTop:5}} />
      
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3602/3602123.png'}}
        style={{height:25,width:25,marginLeft:10,marginTop:5}}/>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/64/64572.png'}}
        style={{height:25,width:25,marginLeft:10,marginTop:5}}
      />
      </View>
    </View>
  );
}
export default App;

