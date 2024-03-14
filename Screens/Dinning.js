import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default function App() {

  
  return (
    <View style={{ marginTop:'10%',marginStart:'1%',marginEnd:'1%',marginBottom:'25%'}}>
      <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}
       style={{height:'100%',marginTop:15}}>
       <View style={{flexDirection:'row'}}>
        <Image style={{marginTop:10,marginLeft:5}}
        source={{uri:'https://cdn-icons-png.flaticon.com/128/1008/1008001.png',height:25,width:25}}/> 
         
        <View>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:18,fontWeight:'700',marginLeft:5}}>Krishna Twp</Text>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/2722/2722987.png',height:20,width:20}}/>
          </View>
          <Text style={{marginTop:2,marginLeft:6,color:'grey',fontWeight:'500'}}>Vasai West, Tarkhad</Text>
        </View>
       </View>
      <View style={{display:'flex',flexDirection:'row',backgroundColor:'#F5F7F8',width:'90%',alignSelf:'center',marginTop:20,borderRadius:15,padding:10,shadowColor:'black',shadowOpacity:0.3,shadowOffset:10}}>
        <TextInput placeholderTextColor={'red'}
        placeholder='Search locations ...'
        style={{padding:1,width:'75%'}}/>
        <TouchableOpacity>
        <Image style={{marginTop:6,marginLeft:50,tintColor:'red'}}
        source={{uri:'https://cdn-icons-png.flaticon.com/128/54/54481.png',height:25,width:25}}/>
        </TouchableOpacity>
      </View> 

      

        <ImageBackground style={{borderRadius:15,marginTop:20}}
        source={{uri:'https://entrackr.com/storage/2019/09/Zomato-gold-1200x600.jpg',height:50}}>
          <View style={{flexDirection:'row',marginTop:15,borderRadius:10,height:300,marginTop:30}}>
         <TouchableOpacity style={{backgroundColor:'#451952',borderWidth:0,width:'30%',padding:10,paddingBottom:50,paddingTop:50,marginLeft:6,height:230,borderRadius:15,marginTop:15,shadowColor:'black',shadowOffset:1,shadowOpacity:1}}>
          <Text style={{color:'white',fontSize:21,alignSelf:'center',fontWeight:'600',marginTop:30}}>Up to 50% OFF</Text>
         </TouchableOpacity>
         <View style={{marginTop:20}}>
         <TouchableOpacity style={{backgroundColor:'#451952',borderWidth:0,width:'76%',paddingBottom:20,borderRadius:15,height:100,marginLeft:20,shadowColor:'black',shadowOffset:1,shadowOpacity:1}}>
          <Text style={{fontWeight:'600',fontSize:21,alignSelf:'center',marginTop:35,color:'white'}}>Play GOLD Heist</Text>
         </TouchableOpacity>
         <View style={{flexDirection:'row',marginTop:20}}>
         <TouchableOpacity style={{backgroundColor:'#451952',borderWidth:0,width:'35%',paddingBottom:20,borderRadius:15,height:100,marginLeft:20,shadowColor:'black',shadowOffset:1,shadowOpacity:1}}>
          <Text style={{fontSize:21,color:'white',fontWeight:'600',alignSelf:'center',marginTop:35}}>Premium</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'#451952',borderWidth:0,width:'35%',paddingBottom:20,borderRadius:15,height:100,marginLeft:20,shadowColor:'black',shadowOffset:1,shadowOpacity:1}}>
          <Text style={{fontSize:21,color:'white',fontWeight:'600',marginTop:35,alignSelf:'center'}}>Buffet</Text>
         </TouchableOpacity>
         </View>
      
         </View>
        </View>
        </ImageBackground>
      
      
      
       <View style={{marginTop:25}}>
        <ScrollView
         style={{padding:3}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
          <TouchableOpacity>
            <View style={{borderWidth:0,padding:10,marginLeft:10,backgroundColor:'#F5F7F8',borderRadius:9,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,marginBottom:9}}>
              <Text>Filters</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth:0,padding:10,marginLeft:10,borderRadius:9,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,backgroundColor:'#F5F7F8'}}>
              <Text>Nearest</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth:0,padding:10,marginLeft:10,borderRadius:9,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,backgroundColor:'#F5F7F8'}}>
              <Text>Book Table</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth:0,padding:10,marginLeft:10,borderRadius:9,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,backgroundColor:'#F5F7F8'}}>
              <Text>Pre-book Offer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth:0,padding:10,marginLeft:10,borderRadius:9,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,backgroundColor:'#F5F7F8'}}>
              <Text>Rating 4.0+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth:0,padding:10,marginLeft:10,borderRadius:9,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,backgroundColor:'#F5F7F8'}}>
              <Text>Pure Veg</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth:0,padding:10,marginLeft:10,borderRadius:9,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,backgroundColor:'#F5F7F8'}}>
              <Text>Outdoor Seating</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
       </View>
       <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'5%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 180, textAlign: 'center',fontSize:17,fontWeight:'500',color:'#7D7C7C'}}>IN THE LIMELIGHT</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>
          
          <ScrollView horizontal
          showsHorizontalScrollIndicator={false}>
          <ImageBackground style={{height:230,marginTop:30,width:350,alignSelf:'center',borderRadius:20,marginLeft:15}}
          source={{uri:'https://hips.hearstapps.com/veranda/assets/16/34/best-restaurants-soleil.jpg'}}>
            <View style={{borderWidth:1,backgroundColor:'black',width:'35%',borderRadius:10,margin:10}}>
             <Text style={{color:'white',alignSelf:'center'}}> Up to 20% OFF</Text>
            </View>
            <View style={{borderWidth:0,backgroundColor:'white',width:'55%',borderRadius:10,margin:10,marginTop:115,padding:5}}>
             <Text style={{color:'black',alignSelf:'center',fontSize:16,fontWeight:'600'}}>Backyard Beer Garden</Text>
            </View>
            <View style={{borderWidth:1,backgroundColor:'black',width:'35%',borderRadius:10,marginLeft:10,padding:3}}>
             <Text style={{color:'white',alignSelf:'center'}}>Book your Tables</Text>
            </View>
          </ImageBackground>

          <ImageBackground style={{height:230,marginTop:30,width:350,alignSelf:'center',borderRadius:20,marginLeft:15}}
          source={{uri:'https://elitetraveler.com/wp-content/uploads/sites/8/2017/10/Hotel-Eden-La-Terrazza-scaled-e1600071873644.jpg'}}>
            <View style={{borderWidth:1,backgroundColor:'black',width:'35%',borderRadius:10,margin:10}}>
             <Text style={{color:'white',alignSelf:'center'}}> Up to 20% OFF</Text>
            </View>
            <View style={{borderWidth:0,backgroundColor:'white',width:'23%',borderRadius:10,margin:10,marginTop:115,padding:5}}>
             <Text style={{color:'black',alignSelf:'center',fontSize:16,fontWeight:'600'}}>Bustle</Text>
            </View>
            <View style={{borderWidth:1,backgroundColor:'black',width:'55%',borderRadius:10,marginLeft:10,padding:3}}>
             <Text style={{color:'white',alignSelf:'center'}}>Borivali's Scenetic Rooftop</Text>
            </View>
          </ImageBackground>

          <ImageBackground style={{height:230,marginTop:30,width:350,alignSelf:'center',borderRadius:20,marginLeft:15}}
          source={{uri:'https://b.zmtcdn.com/data/pictures/4/20735294/9c824299543a8c4edce5234558139687.jpg'}}>
            <View style={{borderWidth:1,backgroundColor:'black',width:'35%',borderRadius:10,margin:10}}>
             <Text style={{color:'white',alignSelf:'center'}}> Up to 50% OFF</Text>
            </View>
            <View style={{borderWidth:0,backgroundColor:'white',width:'18%',borderRadius:10,margin:10,marginTop:115,padding:5}}>
             <Text style={{color:'black',alignSelf:'center',fontSize:16,fontWeight:'600'}}>Fillo</Text>
            </View>
            <View style={{borderWidth:1,backgroundColor:'black',width:'35%',borderRadius:10,marginLeft:10,padding:3}}>
             <Text style={{color:'white',alignSelf:'center'}}>Book you Tables</Text>
            </View>
          </ImageBackground>

          <ImageBackground style={{height:230,marginTop:30,width:350,alignSelf:'center',borderRadius:20,marginLeft:15}}
          source={{uri:'https://b.zmtcdn.com/data/pictures/0/16541530/11cb52f95668fadd771932d0c2049dc5.jpg?fit=around|750:500&crop=750:500;*,*'}}>
            <View style={{borderWidth:1,backgroundColor:'black',width:'30%',borderRadius:10,margin:10}}>
             <Text style={{color:'white',alignSelf:'center'}}> Flat 10% OFF</Text>
            </View>
            <View style={{borderWidth:0,backgroundColor:'white',width:'58%',borderRadius:10,margin:10,marginTop:115,padding:5}}>
             <Text style={{color:'black',alignSelf:'center',fontSize:16,fontWeight:'600'}}>Sannidhi Bar & Kitchen</Text>
            </View>
            <View style={{borderWidth:1,backgroundColor:'black',width:'55%',borderRadius:10,marginLeft:10,padding:3}}>
             <Text style={{color:'white',alignSelf:'center'}}>Explore stunning new look</Text>
            </View>
          </ImageBackground>
          </ScrollView>

          
          <View style={{flexDirection:'row',alignSelf:'center',marginTop:40}}>
            <TouchableOpacity style={{borderWidth:0,width:'40%',padding:10,height:100,borderRadius:15,backgroundColor:'#F5F7F8',shadowColor:'black',shadowOpacity:0.5,shadowOffset:1}}>
              
                <Text style={{alignSelf:'center',fontSize:17,fontWeight:'600'}}>Walk-in offers</Text>
                 <Image style={{alignSelf:'center',marginTop:5}}
                 source={{uri:'https://cdn-icons-png.flaticon.com/128/3041/3041130.png',height:50,width:50}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:0,width:'40%',padding:10,marginLeft:20,borderRadius:15,backgroundColor:'#F5F7F8',shadowColor:'black',shadowOpacity:0.5,shadowOffset:1}}>
              
                <Text style={{alignSelf:'center',fontSize:17,fontWeight:'600'}}>Book in advance</Text>
                <Image style={{alignSelf:'center',marginTop:5}}
                 source={{uri:'https://cdn-icons-png.flaticon.com/128/10691/10691802.png',height:50,width:50}}/>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'7%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 270, textAlign: 'center',fontSize:17,fontWeight:'500',color:'#7D7C7C'}}>WHAT ARE YOU LOOKING FOR ?</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>
          
          <View style={{flexDirection:'row',alignSelf:'center',marginTop:'5%'}}>
            <TouchableOpacity>
              <ImageBackground style={{height:180,width:110}}
              source={{uri:'https://static3.businessinsider.com/image/5bff2780bde70f5e29339ab6-1885/istock-865208774.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:5,fontWeight:'600'}}>Romantic Dining</Text>
              </ImageBackground>
            </TouchableOpacity>
            <View>
            <TouchableOpacity>
              <ImageBackground style={{height:85,width:120,marginLeft:10}}
              source={{uri:'https://media.metrolatam.com/2020/06/20/cafe-35c04944f6fef498aff1abfe5184e3b2-1200x800.jpg'}}>
                <Text style={{color:'white',fontSize:17,marginLeft:4,marginTop:60,fontWeight:'600'}}>Cafe</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:85,width:120,marginLeft:10,marginTop:10}}
              source={{uri:'https://1.bp.blogspot.com/-XeHNyAlJdKY/VaqYsl0rHiI/AAAAAAAAsSc/US5JS1a6Hio/s1600/food%2B3.JPG'}}>
                <Text style={{color:'white',fontSize:17,marginTop:40,fontWeight:'600'}}>Premium Dining</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity>
              <ImageBackground style={{height:85,width:120,marginLeft:10}}
              source={{uri:'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/c/u/p37833-15295686725b2b5da0ae64d.jpg?w=400'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:60,fontWeight:'600'}}>Newly Opened</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:85,width:120,marginTop:10,marginLeft:10}}
              source={{uri:'https://i.pinimg.com/originals/d6/8d/bc/d68dbcf247ca98f823e13ea291da7b32.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:4,fontWeight:'600'}}>Buffet</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
          <TouchableOpacity>
              <ImageBackground style={{height:180,width:110}}
              source={{uri:'https://succeedtravel.com/wp-content/uploads/2022/05/nightlife-scaled.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:10,fontWeight:'600'}}>Nightlife</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:180,width:120,marginLeft:10}}
              source={{uri:'https://images.deliveryhero.io/image/fd-pk/LH/f9ky-hero.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:140,fontWeight:'600'}}>Quick Bites</Text>
              </ImageBackground>
            </TouchableOpacity>
            <View>
            <TouchableOpacity>
              <ImageBackground style={{height:85,width:120,marginLeft:10}}
              source={{uri:'https://eventsforlondon.co.uk/wp-content/uploads/2019/07/wine-and-dine-image.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:10,fontWeight:'600'}}>Drink & Dine</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:85,width:120,marginTop:10,marginLeft:10}}
              source={{uri:'https://d1y822qhq55g6.cloudfront.net/default/_superImage/800.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:3,fontWeight:'600'}}>Family Dining</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'9%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 220, textAlign: 'center',fontSize:17,fontWeight:'500',color:'#7D7C7C'}}>MUST-TRIES IN MUMBAI</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>
           
          <ScrollView horizontal>
          <View style={{flexDirection:'row',marginTop:'0.5%'}}>
          <TouchableOpacity>
              <ImageBackground style={{height:230,width:160,marginTop:30,borderTopLeftRadius:20,marginLeft:15}}
              source={{uri:'https://images.squarespace-cdn.com/content/v1/596fd9989f7456d6bbc11ad1/1582761721802-BJIJB642RRTJ7MOCHTE5/Formosa1.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:190,fontWeight:'600'}}>so what's new</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:230,width:160,marginTop:30,borderTopLeftRadius:20,marginLeft:15}}
              source={{uri:'https://curlytales.com/wp-content/uploads/2019/08/1-6.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:190,fontWeight:'600'}}>best in mumbai</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:230,width:160,marginTop:30,borderTopLeftRadius:20,marginLeft:15}}
              source={{uri:'https://www.qantas.com/content/dam/travelinsider/images/explore/north-america/usa/los-angeles/best-restaurants-for-celebrity-spotting-in-la/12d8a9b2-94ae-4633-b0bd-d63921358c0f.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:190,fontWeight:'600'}}>trend spotting</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:230,width:160,marginTop:30,borderTopLeftRadius:20,marginLeft:15}}
              source={{uri:'https://sftimes.com/wp-content/uploads/2020/12/waterfront1-scaled.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:190,fontWeight:'600'}}>sea view dining</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:230,width:160,marginTop:30,borderTopLeftRadius:20,marginLeft:15}}
              source={{uri:'https://s24214.pcdn.co/wp-content/uploads/2021/05/Serena-Rooftop-best-brunch-miami-with-a-view-1536x1024.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:190,fontWeight:'600'}}>let's brunch</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground style={{height:230,width:160,marginTop:30,borderTopLeftRadius:20,marginLeft:15}}
              source={{uri:'https://images.fineartamerica.com/images-medium-large/what-a-view-james-bo-insogna.jpg'}}>
                <Text style={{color:'white',fontSize:17,alignSelf:'center',marginTop:190,fontWeight:'600'}}>what a view</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          </ScrollView>
           <View>
          <TouchableOpacity style={{marginTop:'5%'}}>
            <View style={{borderWidth:0,padding:10,marginLeft:10,borderRadius:15,shadowColor:'black',shadowOpacity:0.3,shadowOffset:1,backgroundColor:'#F5F7F8',alignSelf:'center'}}>
              <Text style={{color:'red',fontWeight:600}}>Explore More </Text>
            </View>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'4%'}}>
           <View style={{flex: 1, height: '3%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 220, textAlign: 'center',fontSize:17,fontWeight:'500',color:'#7D7C7C'}}>POPULAR RESTAURANTS AROUND YOU</Text>
            </View>
           <View style={{flex: 1, height: '3%', backgroundColor: 'grey'}} />
          </View>
          
          <View>
          <ImageBackground style={{height:280,marginTop:30,width:360,alignSelf:'center',borderRadius:50}}
          source={{uri:'https://i.ytimg.com/vi/UAPkTPe7kDA/maxresdefault.jpg'}}>
            
            <View style={{borderWidth:0,backgroundColor:'white',width:'94%',borderRadius:10,margin:10,marginTop:175,padding:5,height:90}}>
              <View style={{flexDirection:'row',marginLeft:5,marginTop:5}}>
             <Text style={{color:'black',fontSize:18,fontWeight:'600'}}>CTC- Chai Tandoor Cafe</Text>
             <View style={{borderWidth:0,backgroundColor:'green',padding:3,borderRadius:5,marginLeft:75}}><Text style={{color:'white'}}>3.4<Image style={{tintColor:'white'}}
             source={{uri:'https://cdn-icons-png.flaticon.com/128/2893/2893811.png',height:10,width:10,}}/></Text></View>
             </View>
             <View style={{flexDirection:'row',marginTop:8,marginLeft:5}}>
             <Text style={{color:'grey',fontSize:12}}>Nalasopara, Mumbai</Text>
             <Text style={{color:'grey',fontSize:12,marginLeft:160}}>5.2 Km</Text>
             </View>
             <View style={{flexDirection:'row',marginTop:8,marginLeft:5}}>
             <Text style={{color:'green',fontSize:12}}>Pure Veg</Text>
             <Text style={{fontSize:12,fontWeight:'600',color:'grey',marginLeft:180}}>Rs 350 for two</Text>
             </View>
            </View>
            
          </ImageBackground>
          </View>

          <View>
          <ImageBackground style={{height:280,marginTop:30,width:360,alignSelf:'center',borderRadius:20}}
          source={{uri:'https://brunswickbowling.com/imgr/galleries/The_Game_Ranch_Powai_Mumbai-_India/378283/CE-Game_Ranch_Powai_Mumbai-_India_16x9_150_05_9ae8b01ff43eb7beb86139306e25ad5a.jpg'}}>
            
            <View style={{borderWidth:0,backgroundColor:'white',width:'94%',borderRadius:10,margin:10,marginTop:175,padding:5,height:90}}>
              <View style={{flexDirection:'row',marginLeft:5,marginTop:5}}>
             <Text style={{color:'black',fontSize:18,fontWeight:'600'}}>The Game Ranch</Text>
             <View style={{borderWidth:0,backgroundColor:'green',padding:3,borderRadius:5,marginLeft:135}}><Text style={{color:'white'}}>4.4<Image style={{tintColor:'white'}}
             source={{uri:'https://cdn-icons-png.flaticon.com/128/2893/2893811.png',height:10,width:10}}/></Text></View>
             </View>
             <View style={{flexDirection:'row',marginTop:8,marginLeft:5}}>
             <Text style={{color:'grey',fontSize:12}}>Bhayandar, Mumbai</Text>
             <Text style={{color:'grey',fontSize:12,marginLeft:165}}>4.2 Km</Text>
             </View>
             <View style={{flexDirection:'row',marginTop:8,marginLeft:5}}>
             <Text style={{color:'grey',fontSize:12}}>Pizza . North Indian</Text>
             <Text style={{fontSize:12,fontWeight:'600',color:'grey',marginLeft:125}}>Rs 120 for two</Text>
             </View>
            </View>
            
          </ImageBackground>
          </View>

          <View>
          <ImageBackground style={{height:280,marginTop:30,width:360,alignSelf:'center',borderRadius:20}}
          source={{uri:'https://i.pinimg.com/originals/1e/35/7c/1e357c3fdefffcbc6ad148a16793b4c3.jpg'}}>
            
            <View style={{borderWidth:0,backgroundColor:'white',width:'94%',borderRadius:10,margin:10,marginTop:175,padding:5,height:90}}>
              <View style={{flexDirection:'row',marginLeft:5,marginTop:5}}>
             <Text style={{color:'black',fontSize:18,fontWeight:'600'}}>Live Singing</Text>
             <View style={{borderWidth:0,backgroundColor:'green',padding:3,borderRadius:5,marginLeft:175}}><Text style={{color:'white'}}>4.8<Image style={{tintColor:'white'}}
             source={{uri:'https://cdn-icons-png.flaticon.com/128/2893/2893811.png',height:10,width:10}}/></Text></View>
             </View>
             <View style={{flexDirection:'row',marginTop:8,marginLeft:5}}>
             <Text style={{color:'grey',fontSize:12}}>Borivali, Mumbai</Text>
             <Text style={{color:'grey',fontSize:12,marginLeft:183}}>5.2 Km</Text>
             </View>
             <View style={{flexDirection:'row',marginTop:8,marginLeft:5}}>
             <Text style={{color:'grey',fontSize:12}}>Orchestra . Band</Text>
             <Text style={{fontSize:12,fontWeight:'600',color:'grey',marginLeft:140}}>Rs 670 for two</Text>
             </View>
            </View> 
          </ImageBackground>
          </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },
});

