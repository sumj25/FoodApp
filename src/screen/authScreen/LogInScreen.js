import React, {useContext, useState,useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { colors, globalStyle, parameters } from '../../utils/styles';
import {Icon,Button} from 'react-native-elements'
import Header from '../../components/Header';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FormButton from '../../components/FormButton';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
const LoginScreen = ({navigation}) => {
 // const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const [textInput2Focused,setTextInput2Focused]=useState(false)
  const textInput1=useRef(1)
  const textInput2=useRef(2)

  return (
   <ScrollView contentContainerStyle={styles.container}>
      <Header title="Login" type="arrow-left"/>
      <View style={{   alignContent:'center',
    alignItems:'center'}}>
      <Image
        source={require('../../assets/appLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Food App</Text>


        <View>
          <View>
            <TextInput
            style={styles.textInput1}
            placeholder="Email" 
            placeholderTextColor={colors.grey1}  
            ref={textInput1} 
            />
            </View>
            <View style={styles.textInput2}>
            <Animatable.View animation={textInput2Focused?"":"fadeInRight"} duration={200}>
           <Icon
           name="lock"
           iconStyle={{color:colors.grey3}}
           type="material"
           style={{marginLeft:2}}
           />
         </Animatable.View>
         <TextInput
            style={{width:"80%"}}
            placeholder="Password" 
            placeholderTextColor={colors.grey1}  
            ref={textInput2}
            onFocus={()=>{setTextInput2Focused(false)}}
            onBlur={()=>{setTextInput2Focused(true)}} 
            />
         <Animatable.View animation={textInput2Focused?"":"fadeInLeft"} duration={200}>
         <Icon
           name="visibility-off"
           iconStyle={{color:colors.grey3}}
           type="material"
           style={{marginRight:10}}
           />
         </Animatable.View>
         </View>
       </View>    
          <View style={{marginTop:15}}>
          <Button
          title="Log In"
          buttonStyle={globalStyle.styledButton}
          titleStyle={globalStyle.buttonTitle}/>
          </View>
      <TouchableOpacity style={styles.forgotButton} onPress={() =>{}}>
        <Text style={styles.forgotButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal:25
        }}>
        <View style={{ height: 50,
          borderWidth: 1,
      borderColor: '#a5a5a5',
      justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
       flex: 1,
          flexDirection: 'row',}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Sign up with
          </Text>
          <Image
            style={{width: 20, height: 20, marginLeft: 5}}
            source={require('../../assets/facebook.png')}
          />
        </View>
        <View style={{width: 10}}></View>
        <View style={{ height: 50,
borderWidth: 1,
borderColor: '#a5a5a5',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 5,
flex: 1,
flexDirection: 'row',}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Sign up with
          </Text>
          <Image
            style={{width: 20, height: 20, marginLeft: 5}}
            source={require('../../assets/google.png')}
          />
        </View>
      </View> 
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.forgotButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
 
 
  },
  textInput1:{
    borderWidth:1,
    borderColor:"#86939e",
    marginHorizontal:20,
    borderRadius:12,
    marginBottom:20,
    paddingLeft:15,
  },
  textInput2:{
borderWidth:1,
borderRadius:12,
marginHorizontal:20,
borderColor:"#86939e",
flexDirection:'row',
justifyContent:"space-between",
alignContent:"center",
alignItems:"center",
paddingLeft:15,
  },
  logo: {
    height: ScreenHeight/5,
    width: ScreenWidth/1.8,
    resizeMode: 'cover',
    marginTop:40
   
  },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 16,
  },
  forgotButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    textDecorationLine:"underline"
   // fontFamily: 'Lato-Regular',
  },
});