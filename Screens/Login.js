//Login

import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {AsyncStorage} from 'react-native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'login',
        'yes.',
      );
    } catch (error) {
      // Error saving data
    }
  };

  const authenticate = () => {


    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": username,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://6618-103-176-210-116.ngrok-free.app/api/authenticate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
     if(result?.error==="Invalid credentials") alert("Invalid creds")
     else navigation.reset({
    index:0,
  routes:[{name:"Tab"}],})
    console.log(result)})
  .catch((error) => console.error(error));
  

  }


  const navigation = useNavigation()
  return (
    <View style={[styles.container]}>
      <SafeAreaView>
        <View>
          <Image style={{alignSelf:'center',marginTop:'9%'}}
          source={{uri:'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png',height:50,width:240}}/>
        </View>

        <View style={{borderWidth:0,width:'90%',height:'70%',alignSelf:'center',marginTop:'10%',borderRadius:25,backgroundColor:'#fff',shadowOpacity:1,shadowOffset:10,shadowColor:'maroon',flexDirection:'column'}}>
          <Text style={{fontSize:23,alignSelf:'center',marginTop:'6%',color:'#EB1D36',fontWeight:'700'}}>Login</Text>

          <View style={{borderWidth:1,padding:'4%',width:'90%',borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff',flexDirection:'row',alignSelf:'center',marginTop:'6%'}}>
            <Image style={{tintColor:'grey'}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/1077/1077114.png',height:20,width:20}}/>
            <TextInput 
              value={username}
              style={{marginLeft:'4%'}}
              onChangeText={setUsername}
              placeholder=' Enter Username'
            />
            
          </View>
          <View style={{borderWidth:1,padding:'4%',width:'90%',borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff',flexDirection:'row',marginTop:'5%',alignSelf:'center'}}>
            <Image style={{tintColor:'grey'}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/807/807292.png',height:20,width:20}}/>
            <TextInput 
              placeholder=' Enter password'
              value={password}
              onChangeText={setPassword}
            />
            
          </View>
          
          <View style={{marginTop:'7%'}}>
            <TouchableOpacity 
            onPress={()=>{authenticate()}}
            style={{backgroundColor:'#EB1D36',borderRadius:10,width:'70%',alignSelf:'center',padding:'3%'}}>
              <Text style={{alignSelf:'center',color:'#fff',fontSize:17,fontWeight:'600'}}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View>
          <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'15%',marginRight:'15%',marginTop:'5%'}}>
           <View style={{flex: 1, height: '8%', backgroundColor: '#F0F0F0'}} />
            <View>
             <Text style={{width: 50, textAlign: 'center',fontSize:19,fontWeight:'500',color:'#7D7C7C'}}>or</Text>
            </View>
           <View style={{flex: 1, height: '8%', backgroundColor: '#F0F0F0'}} />
          </View>

        <TouchableOpacity>
          <View style={{borderWidth:1,width:'70%',height:50,alignSelf:'center',marginTop:'6%',borderRadius:10,borderColor:'#C7C8CC'}}>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Image style={{marginTop:'5.7%'}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/2099/2099199.png',height:20,width:20}}/>
            <Text style={{marginTop:'6%',fontSize:15,fontWeight:'600',marginLeft:'4%'}}>Continue with Email</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{borderWidth:1,height:48,width:'15%',borderRadius:10,borderColor:'#C7C8CC',alignSelf:'center',marginTop:'6%'}}> 
            <Image style={{alignSelf:'center',marginTop:7}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/281/281764.png',height:30,width:30}}/>
          </View>
        </TouchableOpacity>

        <View style={{borderWidth:0.6,width:'80%',alignSelf:'center',borderColor:'#C7C8CC',marginTop:25}}></View>

          </View>
          <View style={{flexDirection:'row',alignSelf:'center',marginTop:'4%'}}>
          <Text style={{fontSize:16,fontWeight:'400'}}>New to Zomato?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}><Text style={{color:'#EB1D36',fontSize:16,fontWeight:'600'}}> Create account</Text></TouchableOpacity>
          </View>
        

        </View>

        <Text style={{color:'#fff',fontSize:18,alignSelf:'center',fontWeight:'700',marginTop:'10%'}}>Discover more places to eat around you!</Text>
      </SafeAreaView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  
    container: {
      flex:1,
      backgroundColor: '#EB1D36',
     
    },
  });

