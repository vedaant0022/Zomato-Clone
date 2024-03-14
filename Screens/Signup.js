//Signup

import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


import React from 'react'


const Signup = () => {

  const [user,setuser] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setconfirmpassword] = useState('');

  const postsignup = () => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": user,
  "password": password,
  "confirmpassword": confirmpassword
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://6618-103-176-210-116.ngrok-free.app/api/signup", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
      
  }


  const navigation = useNavigation()
  return ( 
 
    
    <View style={styles.container}>
      
        <View>
          <Image style={{alignSelf:'center',borderBottomLeftRadius:60,borderBottomRightRadius:60,height:210,width:390}}
          source={{uri:'https://brandmusiq.com/assets/work_banner_vyEql_Zomato.jpg'}}/>
        </View>
        <View style={{marginTop:'5%'}}>
          <Text style={{fontSize:30,alignSelf:'center',fontWeight:'800'}}>India's #1 Food Delivery </Text>
          <Text style={{fontSize:30,alignSelf:'center',fontWeight:'800'}}>and Dining App</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',margin:'4%',marginTop:'4%'}}>
           <View style={{flex: 1, height: '9%', backgroundColor: '#F0F0F0'}} />
            <View>
             <Text style={{width:100, textAlign: 'center',fontSize:19,fontWeight:'600',color:'#7D7C7C'}}>Sign up</Text>
            </View>
           <View style={{flex: 1, height:'9%', backgroundColor: '#F0F0F0'}} />
        </View>

        <View style={{alignSelf:'center',flexDirection:'column'}}>
          

          <View style={{borderWidth:1,padding:'3.5%',width:320,borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff',flexDirection:'row'}}>
            <Image style={{tintColor:'grey',height:'100%',width:'6%'}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/1077/1077114.png'}}/>
            <TextInput style={{marginLeft:'4%'}}
            placeholder='Enter Username'
            value={user}
            onChangeText={setuser}
            />
            
          </View>
          <View style={{borderWidth:1,padding:'3.5%',width:320,borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff',flexDirection:'row',marginTop:'4%'}}>
            <Image style={{tintColor:'grey',height:'100%',width:'6%'}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/807/807292.png'}}/>
            <TextInput style={{marginLeft:'4%'}}          
            placeholder='Set Password'
            value={password}
            onChangeText={setPassword}
            />
            
          </View>
          <View style={{borderWidth:1,padding:'3.5%',width:320,borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff',flexDirection:'row',marginTop:'4%'}}>
            <Image style={{tintColor:'grey',height:'100%',width:'6%'}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/3064/3064155.png'}}/>
            <TextInput style={{marginLeft:'4%'}}             
             placeholder='Confirm Password'
             value={confirmpassword}
            onChangeText={setconfirmpassword}
            />
            
          </View>
          </View>

          <View style={{marginTop:'5%'}}>
            <TouchableOpacity 
            onPress={()=>{postsignup()}} 
            style={{backgroundColor:'#EB1D36',borderRadius:10,width:'70%',alignSelf:'center',padding:'3%'}}>
              <Text style={{alignSelf:'center',color:'#fff',fontSize:17,fontWeight:'600'}}>Continue</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'20%',marginRight:'20%',marginTop:'4%'}}>
           <View style={{flex: 1, height: '9%', backgroundColor: '#F0F0F0'}} />
            <View>
             <Text style={{width: 60, textAlign: 'center',fontSize:19,fontWeight:'600',color:'#7D7C7C'}}>or</Text>
            </View>
           <View style={{flex: 1, height: '9%', backgroundColor: '#F0F0F0'}} />
          </View>

          <View style={{alignSelf:'center',flexDirection:'row',marginTop:'4%'}}>

            <TouchableOpacity style={{marginLeft:'8%',marginRight:'8%'}}>
          <View style={{borderWidth:1,padding:10,width:57,borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff'}}>
            
            <Image style={{alignSelf:'center',height:22,width:22}} 
            source={{uri:'https://cdn-icons-png.flaticon.com/128/281/281764.png'}}/>
            
          </View>
          </TouchableOpacity >

          <TouchableOpacity style={{marginLeft:'8%',marginRight:'8%'}}>
          <View style={{borderWidth:1,padding:10,width:57,borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff'}}>
            
            <Image style={{alignSelf:'center',height:22,width:22}} 
            source={{uri:'https://cdn-icons-png.flaticon.com/128/731/731985.png'}}/>
            
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft:'8%',marginRight:'8%'}}>
          <View style={{borderWidth:1,padding:10,width:57,borderRadius:10,shadowOpacity:0.1,shadowOffset:10,shadowColor:'black',borderColor:'#F3F1F5',backgroundColor:'#fff'}}>
            
            <Image style={{alignSelf:'center',height:22,width:22}} 
            source={{uri:'https://cdn-icons-png.flaticon.com/128/512/512142.png'}}/>
            
          </View>
          </TouchableOpacity>

          
          </View>

          <View style={{alignSelf:'center',marginTop:'7%',flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'500',color:'#444444'}}>Already have an account?</Text><TouchableOpacity 
            onPress={()=>{ navigation.navigate("Login")}}><Text style={{fontSize:15,fontWeight:'700',color:'#EB1D36'}}> Log In</Text></TouchableOpacity>
          </View>

          <View style={{alignSelf:'center',marginTop:'4%'}}>
            <Text style={{fontSize:13,fontWeight:'500',color:'#444444'}}>By continuing, you agree to our</Text>
          </View>
          <View style={{alignSelf:'center',flexDirection:'row',marginTop:'2%'}}>
            <TouchableOpacity>
            <Text style={{fontSize:10,fontWeight:'500',color:'#444444',marginLeft:5,marginRight:5,textDecorationLine:'underline'}}>Terms of Service</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{fontSize:10,fontWeight:'500',color:'#444444',marginLeft:5,marginRight:5,textDecorationLine:'underline'}}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{fontSize:10,fontWeight:'500',color:'#444444',marginLeft:5,marginRight:5,textDecorationLine:'underline'}}>Content Policies</Text>
            </TouchableOpacity>
          </View>     
    </View>
    
  );
  }
export default Signup

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
   
  },
});

