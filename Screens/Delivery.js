
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { SliderBox } from "react-native-image-slider-box";

// export default function App() {
//   const image = [
//     require("./assets/Sliderimage/img1.jpeg"),
//     require("./assets/Sliderimage/img2.jpg.webp"),
//     require("./assets/Sliderimage/img3.webp"),
//     require("./assets/Sliderimage/img4.jpeg"),
//     require("./assets/Sliderimage/img5.webp"),
//     require("./assets/Sliderimage/img6.jpeg"),
//     require("./assets/Sliderimage/img7.jpeg"),
//   ];

//   return (
//     <SafeAreaView style={{}}>
//       <ScrollView>
//         <View style={{backgroundColor:'#fbfafb'}}>
//           <View style={{ flexDirection: "row" }}>
//             <View style={{ marginTop: 9 }}>
//               <Image
//                 style={{ width: 40, height: 35 }}
//                 source={{
//                   uri: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
//                 }}
//               />
//             </View>
//             <View style={{ marginTop: 8, flexDirection: "row" }}>
//               <Text style={{ fontSize: 18, fontWeight: 900 }}>Home</Text>
//               <View style={{ marginLeft: 3, marginTop: 8 }}>
//                 <Image
//                   style={{ width: 15, height: 10 }}
//                   source={{
//                     uri: "https://cdn-icons-png.flaticon.com/128/2985/2985150.png",
//                   }}
//                 />
//               </View>
//             </View>

//             <View style={{ marginLeft: 230, marginTop: 8 }}>
//               <Image
//                 style={{ width: 30, height: 30 }}
//                 source={{
//                   uri: "https://cdn-icons-png.flaticon.com/128/64/64572.png",
//                 }}
//               />
//             </View>
//           </View>

//           <View style={{ marginLeft: 35, marginVertical: -10 }}>
//             <Text style={{ fontSize: 10, fontWeight: 700 }}>
//               Sunshine Crown , Vasai Station , Vasai road , 401-201
//             </Text>
//           </View>

//           <View
//             style={{
//               borderWidth: 1,
//               width: 350,
//               height: 38,
//               marginTop: 30,
//               marginLeft: 22,
//               borderRadius: 10,
//             }}
//           >
//             <View style={{ flexDirection: "row" }}>
//               <View style={{ paddingLeft: 9, paddingTop: 8 }}>
//                 <Image
//                   style={{ width: 20, height: 20 }}
//                   source={{
//                     uri: "https://cdn-icons-png.flaticon.com/128/54/54481.png",
//                   }}
//                 />
//                 <View style={{}}></View>
//               </View>
//               <View></View>
//             </View>
//           </View>

//           <View style={{ marginTop: 10 }}>
//             <SliderBox
//               images={image}
//               DotColor="red"
//               inactiveDotColour="black"
//               dotStyle={{ width: 12, height: 4 }}
//               autoplay={true}
//               autoplayInterval={1500}
//               circleLoop={true}
//             />
//           </View>

//           <View style={{ flexDirection: "row", marginTop: 15 }}>
//             <View style={{ width: 200, height: 5, borderColor: "grey" }}></View>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <View>
//               <View
//                 style={{
//                   backgroundColor: "gray",
//                   width: 145,
//                   height: 0.5,
//                   marginTop: 12,
//                 }}
//               ></View>
//             </View>

//             <View style={{ marginTop: 2, marginLeft: 7 }}>
//               <Text STYLE={{ fontSize: 10 }}>F O R   Y O U </Text>
//             </View>

//             <View style={{ marginLeft: 5 }}>
//               <View
//                 style={{
//                   backgroundColor: "gray",
//                   width: 150,
//                   height: 0.5,
//                   marginTop: 12,
//                 }}
//               ></View>
//             </View>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <ScrollView horizontal={true}>
//               <View>
//                 <TouchableOpacity>
//                   <View
//                     style={{
//                       backgroundColor:'#ffff',
//                       marginLeft: 20,
//                       marginTop: 30,
//                       borderWidth: 0.2,
//                       borderColor:'grey',
//                       elevation:200,
//                       width: 180,
//                       height: 100,
//                       borderRadius: 15,
//                       flexDirection: "row",
//                     }}
//                   >
//                     <Image
//                       style={{ width: 80, height: 98, borderRadius: 8 }}
//                       source={{
//                         uri: "/Users/varunsankhe/Desktop/Food delivering project/home/assets/For you image/FY1.jpeg",
//                       }}
//                     />

//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           paddingLeft: 8,
//                           paddingTop: 15,
//                           fontWeight: 800,
//                         }}
//                       >
//                         Zeal SkyBar
//                       </Text>
//                       <Text
//                         style={{
                          
//                           color: "gray",
//                           fontSize: 11,
//                           paddingLeft: 8,
//                           paddingTop: 6,
//                         }}
//                       >
//                         Sea Food
//                       </Text>

//                       <View style={{ flexDirection: "row" }}>
//                         <Image
//                           style={{
//                             width: 15,
//                             height: 15,
//                             marginTop: 25,
//                             marginLeft: 8,
//                           }}
//                           source={{
//                             uri: "https://cdn-icons-png.flaticon.com/128/384/384318.png",
//                           }}
//                         />
//                         <Text
//                           style={{ fontSize: 9, marginTop: 29, marginLeft: 3 }}
//                         >
//                           20-25min
//                         </Text>
//                       </View>
//                     </View>
//                   </View>
//                 </TouchableOpacity>

//                 <TouchableOpacity>
//                   <View
//                     style={{
//                       backgroundColor:'#ffff',
//                       marginLeft: 20,
//                       marginTop: 30,
//                       borderWidth: 0.2,
//                       borderColor:'grey',
//                       elevation:200,
//                       width: 180,
//                       height: 100,
//                       borderRadius: 15,
//                       flexDirection: "row",
//                     }}
//                   >
//                     <Image
//                       style={{ width: 80, height: 98, borderRadius: 8 }}
//                       source={{
//                         uri: "/Users/varunsankhe/Desktop/Food delivering project/home/assets/For you image/fy2.jpeg",
//                       }}
//                     />

//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           paddingLeft: 8,
//                           paddingTop: 15,
//                           fontWeight: 800,
//                         }}
//                       >
//                         Tasty Chinese{" "}
//                       </Text>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           paddingLeft: 8,
//                           paddingTop: 0,
//                           fontWeight: 800,
//                         }}
//                       >
//                         Corner
//                       </Text>
//                       <Text
//                         style={{
//                           color: "gray",
//                           fontSize: 11,
//                           paddingLeft: 8,
//                           paddingTop: 6,
//                         }}
//                       >
//                         Chinese
//                       </Text>

//                       <View style={{ flexDirection: "row" }}>
//                         <Image
//                           style={{
//                             width: 15,
//                             height: 15,
//                             marginTop: 15,
//                             marginLeft: 8,
//                           }}
//                           source={{
//                             uri: "https://cdn-icons-png.flaticon.com/128/384/384318.png",
//                           }}
//                         />
//                         <Text
//                           style={{ fontSize: 9, marginTop: 19, marginLeft: 3 }}
//                         >
//                           40-55min
//                         </Text>
//                       </View>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               {/* Second Row */}

//               <View>
//                 <TouchableOpacity>
//                   <View
//                     style={{
//                       backgroundColor:'#ffff',
//                       marginLeft: 20,
//                       marginTop: 30,
//                       borderWidth: 0.2,
//                       borderColor:'grey',
//                       elevation:200,
//                       width: 180,
//                       height: 100,
//                       borderRadius: 15,
//                       flexDirection: "row",
//                     }}
//                   >
//                     <Image
//                       style={{ width: 80, height: 98, borderRadius: 8 }}
//                       source={{
//                         uri: "/Users/varunsankhe/Desktop/Food delivering project/home/assets/For you image/fy3.jpeg",
//                       }}
//                     />

//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           paddingLeft: 8,
//                           paddingTop: 15,
//                           fontWeight: 800,
//                         }}
//                       >
//                         Delish Bakery
//                       </Text>
//                       <Text
//                         style={{
//                           color: "gray",
//                           fontSize: 11,
//                           paddingLeft: 8,
//                           paddingTop: 6,
//                         }}
//                       >
//                         Desserts
//                       </Text>

//                       <View style={{ flexDirection: "row" }}>
//                         <Image
//                           style={{
//                             width: 15,
//                             height: 15,
//                             marginTop: 25,
//                             marginLeft: 8,
//                           }}
//                           source={{
//                             uri: "https://cdn-icons-png.flaticon.com/128/384/384318.png",
//                           }}
//                         />
//                         <Text
//                           style={{ fontSize: 9, marginTop: 29, marginLeft: 3 }}
//                         >
//                           10-15min
//                         </Text>
//                       </View>
//                     </View>
//                   </View>
//                 </TouchableOpacity>

//                 <TouchableOpacity>
//                   <View
//                     style={{
//                       backgroundColor:'#ffff',
//                       marginLeft: 20,
//                       marginTop: 30,
//                       borderWidth: 0.2,
//                       borderColor:'grey',
//                       elevation:200,
//                       width: 180,
//                       height: 100,
//                       borderRadius: 15,
//                       flexDirection: "row",
//                     }}
//                   >
//                     <Image
//                       style={{ width: 80, height: 98, borderRadius: 8 }}
//                       source={{
//                         uri: "/Users/varunsankhe/Desktop/Food delivering project/home/assets/For you image/fy4.jpeg",
//                       }}
//                     />

//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           paddingLeft: 8,
//                           paddingTop: 15,
//                           fontWeight: 800,
//                         }}
//                       >
//                         Mysterious{" "}
//                       </Text>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           paddingLeft: 8,
//                           paddingTop: 0,
//                           fontWeight: 800,
//                         }}
//                       >
//                         Box
//                       </Text>
//                       <Text
//                         style={{
//                           color: "gray",
//                           fontSize: 11,
//                           paddingLeft: 8,
//                           paddingTop: 6,
//                         }}
//                       >
//                         Salads
//                       </Text>

//                       <View style={{ flexDirection: "row" }}>
//                         <Image
//                           style={{
//                             width: 15,
//                             height: 15,
//                             marginTop: 15,
//                             marginLeft: 8,
//                           }}
//                           source={{
//                             uri: "https://cdn-icons-png.flaticon.com/128/384/384318.png",
//                           }}
//                         />
//                         <Text
//                           style={{ fontSize: 9, marginTop: 19, marginLeft: 3 }}
//                         >
//                           30-35min
//                         </Text>
//                       </View>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               {/* Third Row */}

//               <View>
//                 <View
//                   style={{
//                     backgroundColor:'#ffff',
//                     marginLeft: 20,
//                     marginTop: 30,
//                     borderWidth: 0.2,
//                     borderColor:'grey',
//                     elevation:200,
//                     width: 180,
//                     height: 100,
//                     borderRadius: 15,
//                     flexDirection: "row",
//                   }}
//                 >
//                   <Image
//                     style={{ width: 80, height: 98, borderRadius: 8 }}
//                     source={{
//                       uri: "/Users/varunsankhe/Desktop/Food delivering project/home/assets/For you image/fy5.jpeg",
//                     }}
//                   />

//                   <View>
//                     <Text
//                       style={{
//                         fontSize: 12,
//                         paddingLeft: 8,
//                         paddingTop: 15,
//                         fontWeight: 800,
//                       }}
//                     >
//                       TGC
//                     </Text>
//                     <Text
//                       style={{
//                         color: "gray",
//                         fontSize: 11,
//                         paddingLeft: 8,
//                         paddingTop: 6,
//                       }}
//                     >
//                       Shakes
//                     </Text>

//                     <View style={{ flexDirection: "row" }}>
//                       <Image
//                         style={{
//                           width: 15,
//                           height: 15,
//                           marginTop: 25,
//                           marginLeft: 8,
//                         }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/384/384318.png",
//                         }}
//                       />
//                       <Text
//                         style={{ fontSize: 9, marginTop: 29, marginLeft: 3 }}
//                       >
//                         10-20min
//                       </Text>
//                     </View>
//                   </View>
//                 </View>

//                 <View
//                   style={{
//                     backgroundColor:'#ffff',
//                     marginLeft: 20,
//                     marginTop: 30,
//                     borderWidth: 0.2,
//                     borderColor:'grey',
//                     elevation:200,
//                     width: 180,
//                     height: 100,
//                     borderRadius: 15,
//                     flexDirection: "row",
//                   }}
//                 >
//                   <Image
//                     style={{ width: 80, height: 98, borderRadius: 8 }}
//                     source={{
//                       uri: "/Users/varunsankhe/Desktop/Food delivering project/home/assets/For you image/fy6.jpeg",
//                     }}
//                   />

//                   <View>
//                     <Text
//                       style={{
//                         fontSize: 12,
//                         paddingLeft: 8,
//                         paddingTop: 15,
//                         fontWeight: 800,
//                       }}
//                     >
//                       WOW{" "}
//                     </Text>
//                     <Text
//                       style={{
//                         fontSize: 12,
//                         paddingLeft: 8,
//                         paddingTop: 0,
//                         fontWeight: 800,
//                       }}
//                     >
//                       Momos
//                     </Text>
//                     <Text
//                       style={{
//                         color: "gray",
//                         fontSize: 11,
//                         paddingLeft: 8,
//                         paddingTop: 6,
//                       }}
//                     >
//                       Chinese
//                     </Text>

//                     <View style={{ flexDirection: "row" }}>
//                       <Image
//                         style={{
//                           width: 15,
//                           height: 15,
//                           marginTop: 15,
//                           marginLeft: 8,
//                         }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/384/384318.png",
//                         }}
//                       />
//                       <Text
//                         style={{ fontSize: 9, marginTop: 19, marginLeft: 3 }}
//                       >
//                         20-25min
//                       </Text>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <View>
//               <View
//                 style={{
//                   backgroundColor: "gray",
//                   width: 135,
//                   height: 0.5,
//                   marginTop: 30,
//                 }}
//               ></View>
//             </View>

//             <View style={{ marginTop: 20, marginLeft: 9 }}>
//               <Text STYLE={{ fontSize: 10 }}>E X P L O R E </Text>
//             </View>

//             <View style={{ marginLeft: 5 }}>
//               <View
//                 style={{
//                   backgroundColor: "gray",
//                   width: 150,
//                   height: 0.5,
//                   marginTop: 30,
//                 }}
//               ></View>
//             </View>
//           </View>

//           <View STYLE={{ flexDirection: "row" }}>
//             <ScrollView horizontal={true}>
//               <View style={{ flexDirection: "row " }}>
//                 <TouchableOpacity>
//                   <View
//                     style={{
//                       borderWidth: 2,
//                       borderRadius: 15,
//                       width: 180,
//                       height: 70,
//                       marginLeft: 10,
//                       marginTop: 10,
//                       borderColor: "#BBB6BD",
//                     }}
//                   >
//                     <View style={{ marginLeft: 20, marginTop: 9 }}>
//                       <Text style={{ fontSize: 16, fontWeight: 800 }}>
//                         Offers
//                       </Text>
//                     </View>
//                     <View>
//                       <Text
//                         style={{ fontSize: 10, marginLeft: 18, marginTop: 2 }}
//                       >
//                         Flat Discount
//                       </Text>
//                     </View>
//                     <View style={{ marginLeft: 65, marginTop: 5 }}>
//                       <Image
//                         style={{ width: 15, height: 15 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/14034/14034421.png",
//                         }}
//                       />
//                     </View>
//                     <View style={{ marginLeft: 100, marginVertical: -50 }}>
//                       <Image
//                         style={{ width: 40, height: 40 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/9034/9034976.png",
//                         }}
//                       />
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               <View style={{ flexDirection: "row " }}>
//                 <TouchableOpacity>
//                   <View
//                     style={{
//                       borderWidth: 2,
//                       borderRadius: 15,
//                       width: 180,
//                       height: 70,
//                       marginLeft: 10,
//                       marginTop: 10,
//                       borderColor: "#BBB6BD",
//                     }}
//                   >
//                     <View style={{ marginLeft: 20, marginTop: 9 }}>
//                       <Text style={{ fontSize: 16, fontWeight: 800 }}>
//                         Healthy
//                       </Text>
//                     </View>
//                     <View>
//                       <Text
//                         style={{ fontSize: 10, marginLeft: 13, marginTop: 2 }}
//                       >
//                         Curated Dishes
//                       </Text>
//                     </View>
//                     <View style={{ marginLeft: 65, marginTop: 5 }}>
//                       <Image
//                         style={{ width: 15, height: 15 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/14034/14034421.png",
//                         }}
//                       />
//                     </View>
//                     <View style={{ marginLeft: 100, marginVertical: -50 }}>
//                       <Image
//                         style={{ width: 40, height: 40 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/2515/2515183.png",
//                         }}
//                       />
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               <View style={{ flexDirection: "row " }}>
//                 <View
//                   style={{
//                     borderWidth: 2,
//                     borderRadius: 15,
//                     width: 180,
//                     height: 70,
//                     marginLeft: 10,
//                     marginTop: 10,
//                     borderColor: "#BBB6BD",
//                   }}
//                 >
//                   <View style={{ marginLeft: 20, marginTop: 9 }}>
//                     <Text style={{ fontSize: 16, fontWeight: 800 }}>
//                       Deserts
//                     </Text>
//                   </View>
//                   <View>
//                     <Text
//                       style={{ fontSize: 10, marginLeft: 14, marginTop: 2 }}
//                     >
//                       Cherish Moments
//                     </Text>
//                   </View>
//                   <View style={{ marginLeft: 65, marginTop: 5 }}>
//                     <Image
//                       style={{ width: 15, height: 15 }}
//                       source={{
//                         uri: "https://cdn-icons-png.flaticon.com/128/14034/14034421.png",
//                       }}
//                     />
//                   </View>
//                   <View style={{ marginLeft: 110, marginVertical: -50 }}>
//                     <Image
//                       style={{ width: 40, height: 40 }}
//                       source={{
//                         uri: "https://cdn-icons-png.flaticon.com/128/992/992754.png",
//                       }}
//                     />
//                   </View>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <View></View>
//             <View>
//               <View
//                 style={{
//                   backgroundColor: "gray",
//                   width: 80,
//                   height: 0.5,
//                   marginTop: 25,
//                 }}
//               ></View>
//             </View>

//             <View style={{ marginTop: 16, marginLeft: 7 }}>
//               <Text STYLE={{ fontSize: 10 }}>
//                 W H A T 'S O N Y O U R M I N D ?{" "}
//               </Text>
//             </View>

//             <View style={{ marginLeft: 5 }}>
//               <View
//                 style={{
//                   backgroundColor: "gray",
//                   width: 150,
//                   height: 0.5,
//                   marginTop: 25,
//                 }}
//               ></View>
//             </View>
//           </View>

//           <View style={{ flexDirection: "row" }}>
//             <ScrollView horizontal={true}>
//               <View style={{ flexDirection: "row" }}>
//                 <View style={{ marginLeft: 15 }}>
//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 20 }}>
//                       <Image
//                         style={{ width: 70, height: 70 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/8322/8322904.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 5,
//                         }}
//                       >
//                         Chicken
//                       </Text>
//                     </View>
//                   </TouchableOpacity>

//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 20, marginTop: 15 }}>
//                       <Image
//                         style={{ width: 70, height: 70 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/1404/1404945.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 15,
//                         }}
//                       >
//                         Pizza
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{ marginLeft: 25 }}>
//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 20, marginTop: 18 }}>
//                       <Image
//                         style={{ width: 55, height: 55 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/877/877951.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 5,
//                         }}
//                       >
//                         Burger
//                       </Text>
//                     </View>
//                   </TouchableOpacity>

//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 20, marginTop: 15 }}>
//                       <Image
//                         style={{ width: 70, height: 70 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/2682/2682340.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 15,
//                         }}
//                       >
//                         Cake
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{ marginLeft: 20 }}>
//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 25, marginTop: 10 }}>
//                       <Image
//                         style={{ width: 60, height: 65 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/1033/1033228.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 5,
//                         }}
//                       >
//                         Sandwich
//                       </Text>
//                     </View>
//                   </TouchableOpacity>

//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 20, marginTop: 15 }}>
//                       <Image
//                         style={{ width: 70, height: 70 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/9487/9487332.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 15,
//                         }}
//                       >
//                         Thali
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{ marginLeft: 20 }}>
//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 25, marginTop: 10 }}>
//                       <Image
//                         style={{ width: 60, height: 65 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/7667/7667786.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 5,
//                         }}
//                       >
//                         Biryani
//                       </Text>
//                     </View>
//                   </TouchableOpacity>

//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 20, marginTop: 15 }}>
//                       <Image
//                         style={{ width: 70, height: 70 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/14676/14676017.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 15,
//                         }}
//                       >
//                         Fish
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{ marginLeft: 20 }}>
//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 25, marginTop: 10 }}>
//                       <Image
//                         style={{ width: 60, height: 65 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/2515/2515263.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 5,
//                         }}
//                       >
//                         Salad
//                       </Text>
//                     </View>
//                   </TouchableOpacity>

//                   <TouchableOpacity>
//                     <View style={{ marginLeft: 20, marginTop: 15 }}>
//                       <Image
//                         style={{ width: 70, height: 70 }}
//                         source={{
//                           uri: "https://cdn-icons-png.flaticon.com/128/924/924514.png",
//                         }}
//                       />

//                       <Text
//                         style={{
//                           fontWeight: 900,
//                           paddingTop: 3,
//                           paddingLeft: 15,
//                         }}
//                       >
//                         Coffee
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


import { View, Text } from 'react-native'
import React from 'react'

const Delivery = () => {
  return (
    <View>
      <Text>Delivery</Text>
    </View>
  )
}

export default Delivery