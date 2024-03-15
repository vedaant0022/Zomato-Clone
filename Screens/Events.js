// Events

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
       <ScrollView>
          <ImageBackground 
          style={{height:270,width:'100%',borderRadius:20}}
          source={{uri:'https://64.media.tumblr.com/e9202cb2cd57af39bb8dc0609ebae85f/f05986d179001564-e3/s1280x1920/68d8f21151691e6a4547810cd3ec949c8d3b70f7.jpg'}}>
            <Image style={{marginTop:10}}
            source={{uri:'https://b.zmtcdn.com/data/o2_assets/84373403bd266411475a3367946c71541705050722.png',height:88,width:'41%'}}/>
            <Text style={{color:'white',alignSelf:'center',fontSize:17,fontWeight:'700',marginTop:195,textShadowColor:'black'}}>Discover your city's best events & experiences</Text>
          </ImageBackground>
        
        <ScrollView scrollEnabled={false}>
        <View style={{flexDirection:'row',backgroundColor:'#F5F7F8',width:'90%',alignSelf:'center',borderRadius:15,shadowColor:'black',shadowOpacity:0.3,shadowOffset:10,marginTop:70}}>
        <TextInput placeholderTextColor={'red'}
        placeholder='Search...'
        style={{padding:15,width:'75%'}}/>
        <TouchableOpacity>
        <Image style={{marginTop:10,marginLeft:50,tintColor:'red'}}
        source={{uri:'https://cdn-icons-png.flaticon.com/128/54/54481.png',height:25,width:25}}/>
        </TouchableOpacity>
        </View> 
        </ScrollView>


        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ marginTop:30,flexDirection:'row'}}>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:330,height:430,marginRight:10}}
          source={{uri:'https://b.zmtcdn.com/data/zomaland/82a83c9f9b71a40c745d75d1d6b953831707976386.png'}}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:330,height:430,marginRight:10}}
          source={{uri:'https://i.pinimg.com/originals/19/b6/e1/19b6e11237c62e30a0ba84d8aade6b87.jpg'}}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:330,height:430,marginRight:10}}
          source={{uri:'https://psdfreebies.com/wp-content/uploads/2021/05/Urban-Live-Music-Concert-Poster-Flyer-PSD-Preview-734x1024.jpg'}}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:330,height:430}}
          source={{uri:'https://i.pinimg.com/originals/e9/47/5c/e9475c1a0ac3acb23ea2a300b3ca28be.jpg'}}
        />
        </TouchableOpacity>
      </View>
    </ScrollView>
       
    <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'10%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 220, textAlign: 'center',fontSize:17,fontWeight:'500',color:'white'}}>DISCOVER OUR EVENTS</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>

          <View style={{flexDirection:'row',marginTop:30}}>
            <TouchableOpacity>
            <ImageBackground style={{height:200,width:160,borderRadius:20}}
            source={{uri:'http://getwallpapers.com/wallpaper/full/1/0/9/714687-dj-music-wallpaper-3840x2160-photo.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,marginLeft:10}}>Music</Text>
            </ImageBackground>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
            <ImageBackground style={{height:100,width:300,borderRadius:20,marginLeft:10}}
            source={{uri:'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/06/photo-taking-enjoyment-science.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,marginLeft:10}}>Experiences</Text>
            </ImageBackground>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity>
            <ImageBackground style={{height:100,width:110,borderRadius:20,marginLeft:10,marginTop:10}}
            source={{uri:'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/48588/article_aligned%402x.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,marginLeft:10}}>Comedy</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground style={{height:100,width:110,borderRadius:20,marginTop:10,marginLeft:10}}
            source={{uri:'http://1.bp.blogspot.com/-04ODm3AXEzQ/VjM_FUiOAhI/AAAAAAAACGQ/-WNOcKf__sM/s1600/c03725c9a81adb92e20789a5bb446cf1.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,marginLeft:10}}>Food</Text>
            </ImageBackground>
            </TouchableOpacity>
            </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'10%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 280, textAlign: 'center',fontSize:17,fontWeight:'500',color:'white'}}>HANDPICKED BY ZOMATO LIVE</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ marginTop:30,flexDirection:'row'}}>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://i.pinimg.com/originals/c8/99/f0/c899f03ebd1c0e34f16a5dc1562cfa5b.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Epic Holi</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>25 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 2500 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://i.pinimg.com/originals/57/a0/4e/57a04e7ece5752312996dedbcf582c7c.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Football Screenings</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>10 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 599 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://static.vecteezy.com/system/resources/previews/005/991/367/original/indian-festival-of-colors-happy-holi-celebration-holi-club-party-of-colors-can-use-for-banners-invitations-poster-design-with-time-and-venue-details-vector.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Holi Carnival: Borivali</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>29 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 449 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350}}
          source={{uri:'https://i.pinimg.com/originals/fb/68/c6/fb68c6fcc9aadf4846ed5a109634c6a1.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Chikki Mahotsav</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>17 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Free Entry</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <View style={{alignSelf:'center'}}>
      <TouchableOpacity style={{borderWidth:1,borderColor:'white',marginTop:40,padding:10,width:150,borderRadius:20}}>
        <Text style={{color:'white',alignSelf:'center'}}>Explore more</Text>
      </TouchableOpacity>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'10%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 250, textAlign: 'center',fontSize:17,fontWeight:'500',color:'white'}}>CINEMATIC EXPERIENCES</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ marginTop:30,flexDirection:'row'}}>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://www.myzillion.com/wp-content/uploads/2020/12/date_night_in-1.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Date Night</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>9 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 600 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://www.theindianwire.com/wp-content/uploads/2017/12/cover.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Bollywood Special</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>17 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 600 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'http://stat3.bollywoodhungama.in/wp-content/uploads/2016/03/ZNMD-Poster-Feature.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Zindagi Na Milegi Dobara</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>23 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 649 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350}}
          source={{uri:'https://www.themoviedb.org/t/p/original/yXtXNQV3UKq0CY6gynQeRi73L69.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Cocktail</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>18 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Free Entry</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <View style={{alignSelf:'center'}}>
      <TouchableOpacity style={{borderWidth:1,borderColor:'white',marginTop:40,padding:10,width:150,borderRadius:20}}>
        <Text style={{color:'white',alignSelf:'center'}}>Explore more </Text>
      </TouchableOpacity>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'10%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 190, textAlign: 'center',fontSize:17,fontWeight:'500',color:'white'}}>COMEDY EVENTS</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ marginTop:30,flexDirection:'row'}}>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://starsunfolded.com/wp-content/uploads/2021/12/A-poster-for-Dodh-Dahyo-2019.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Munawar Faruqui</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>20 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 999 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://www.getmytickets.com.au/wp-content/uploads/2019/10/Abhishek_Brisbane_A5-e1571879435212.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Abhishek Upmanyu</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>23 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 799 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350,marginRight:10}}
          source={{uri:'https://www.royaloperahouse.in/imagehandler/image-handler.ashx?imagepath=events/poster/bas-kar-bassi-featanubhav-singh-bassi--mumbai-253.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Anubhav Singh Bassi</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>28 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 1999 onwards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{borderRadius:20,width:250,height:350}}
          source={{uri:'https://m.media-amazon.com/images/M/MV5BYWI5YWQ3NmMtZGRmOC00MjIwLThiZjAtMWJlYTdmMjY2NGZmXkEyXkFqcGdeQXVyOTg3NTQwMTU@._V1_.jpg'}}
        />
        <Text style={{color:'white',fontSize:16,fontWeight:'700',marginTop:5,marginLeft:5}}>Zakir Khan</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>16 March</Text>
        <Text style={{color:'white',fontWeight:'700',marginLeft:5,color:'grey'}}>Rs 1299 onwards</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <View style={{alignSelf:'center'}}>
      <TouchableOpacity style={{borderWidth:1,borderColor:'white',marginTop:30,padding:10,width:150,borderRadius:20}}>
        <Text style={{color:'white',alignSelf:'center'}}>Explore more </Text>
      </TouchableOpacity>
    </View>

          <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:'5%',marginRight:'5%',marginTop:'8%'}}>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
            <View>
             <Text style={{width: 230, textAlign: 'center',fontSize:17,fontWeight:'500',color:'white'}}>EXPLORE OTHER CITIES</Text>
            </View>
           <View style={{flex: 1, height: '5%', backgroundColor: 'grey'}} />
          </View>

          <ScrollView horizontal>

          <View style={{flexDirection:'row',marginTop:30,marginBottom:'7%'}}>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://www.tripsavvy.com/thmb/QS7YoZPIIgBNklph1Cjeq3mDgUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-536116268-5b5d74e846e0fb0050adcf3b.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Bengaluru</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://karmakalpa.com/assets/images/banner-img2.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Delhi NCR</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://s4.scoopwhoop.com/osi/goa/10.gif'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Goa</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://static.toiimg.com/photo/62542248/.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Chandigarh</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://www.hyderabadtourism.travel/images/v2/header-places/golconda-fort-hyderabad-tourism-attraction-entryfee-timings-reviews-header.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Hyderabad</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://i.pinimg.com/originals/39/87/7f/39877ff696c1ebc568c63ebf7a0e31cf.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Chennai</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://1.bp.blogspot.com/-SMgdSLmvxfY/WbPlrf8-6bI/AAAAAAAABVo/dsYN9dBFju0YE_8a5CmrkkB7fki5OsRwwCLcBGAs/s1600/20170909_113929.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Kolkata</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://assets.architecturaldigest.in/photos/60083420c9d663480d547ebc/16:9/w_2560%2Cc_limit/featured-Image5-1366x768.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Ahmedabad</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <ImageBackground style={{height:140,width:120}}
            source={{uri:'https://punetourism.co.in/images/places-to-visit/headers/shaniwar-wada-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:60,alignSelf:'center'}}>Pune</Text>
            </ImageBackground>
            </TouchableOpacity>
          </View>
          </ScrollView>

    
    </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
   
  },
});
