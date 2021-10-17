/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';

import {View,Text,StyleSheet,TouchableOpacity,ScrollView, FlatList,Pressable,Image}from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../utils/styles';
import {filterData} from '../utils/Data'
export default function HomeScreen(){
  
  const [delivery,setDelivery] = useState(true);
  const [indexCheck,setIndexCheck] = useState("0")
    return(
 
<View style={styles.container}>
        <HomeHeader/>

           <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-around'}} >
             <TouchableOpacity onPress={()=>{ setDelivery(true)}}>
               <View style={{...styles.deliveryButton, backgroundColor:delivery?colors.buttons:colors.grey4}}>
                 <Text style={styles.deliveryText}>Delivery</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ setDelivery(false)}}>
               <View style={{...styles.deliveryButton, backgroundColor:delivery?colors.grey4:colors.buttons}}>
                <Text style={styles.deliveryText}>PickUp</Text>
               </View>
            </TouchableOpacity>
        </View>
  <ScrollView 
       showsVerticalScrollIndicator={true}
    >
    <View style={styles.filterStyle}>
      <View style={{flexDirection:'row',backgroundColor:colors.grey5,borderRadius:15,paddingHorizontal:3,paddingVertical:3}}>
         <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
              <Icon
                 type="material-community"
                 name="map-marker"
                 color={colors.grey1}
                 size={26}
              />

              <Text style={{marginLeft:5}}>Dubiyahi Chowk,Muzaffarpur</Text>
         </View>
         <View style={styles.clockStyle}>
              <Icon
                 type="material-community"
                 name="clock-time-four"
                 color={colors.grey1}
                 size={26}
              />

              <Text style={{marginLeft:5}}>Now</Text>
         </View>
      </View>
      <View>
      <Icon
           type="material-community"
           name="tune"
           color={colors.grey1}
           size={26}
      />
      </View>
    </View>
    <View style={styles.cardHeaderTextView}>
      <Text style={styles.cardHeaderText}>Categories</Text>
    </View>
    <View>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={filterData}
      keyExtractor={(item)=>item.id}
      extraData={indexCheck}
      renderItem={({item,index})=>(
        <Pressable
        onPress ={()=>{setIndexCheck(item.id)}}
    >
         <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
        <Image 
            style = {{height:60,width:60,borderRadius:30}}
            source = {item.image}
        />

        <View>
            <Text style ={indexCheck === item.id ? {...styles.smallCardTextSected}:
            {...styles.smallCardText}}>{item.name}</Text>
        </View>
         </View>
    </Pressable>
      )}
      />
    </View>
    <View style ={styles.cardHeaderTextView}>
            <Text style ={styles.cardHeaderText}>Free Delivery now</Text>
        </View>
    </ScrollView>
 </View>
    );
};

const styles=StyleSheet.create({
  container:{
    flex:1, 
  },
  deliveryButton:{
    paddingHorizontal:20,
    borderRadius:15,
    paddingVertical:5
  },
  deliveryText:{
    marginLeft:5,
    fontSize:16
  },
  filterStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginHorizontal:10,
    marginTop:10
  },
  clockStyle:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    backgroundColor:colors.headerText,
    borderRadius:15,
    paddingHorizontal:5,
    marginRight:15
  },
  cardHeaderText:{
    color:colors.grey2,
    fontSize:24,
    fontWeight:"bold",
    paddingLeft:10
  },
  cardHeaderTextView:{
    backgroundColor:colors.grey5,
    paddingVertical:5
  },
  smallCard :{
    borderRadius:30,
    backgroundColor:colors.grey5,
    justifyContent:"center",
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
},

smallCardSelected:{
    borderRadius:30,
    backgroundColor:colors.buttons,
    justifyContent:"center",
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
},

smallCardTextSected :{
    fontWeight:"bold",
    color:colors.cardbackground
},

smallCardText :{
    fontWeight:"bold",
    color:colors.grey2
},
});