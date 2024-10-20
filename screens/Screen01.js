import { View,Text,TouchableOpacity,Image,TextInput,StyleSheet  } from "react-native";
import { useState } from "react";
export default function Screen01({navigation}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const account = [
        {
            email:'maihothienthach1',
            pass:'111'
        },
        {
            email:'maihothienthach2',
            pass:'222'
        },
        {
            email:'maihothienthach3',
            pass:'333'
        },
        {
            email:'maihothienthach4',
            pass:'444'
        },
        {
            email:'maihothienthach5',
            pass:'555'
        },
    ]

    const handleContinue = () => {
        const validAccount = account.find(
            (acc) => acc.email === email && acc.pass === password
        );

        if (validAccount) {
            alert("Đăng nhập thành công");
            navigation.navigate("Screen02")
        } else {
            alert("Email hoặc mật khẩu của bạn không đúng");
        }
    };

    return (  
        <View> 

            <View  style={styles.logo}>
                <Image source={require("../assets/Data/icon.png")}></Image>
            </View>
            <Text style={{fontWeight:"700",textAlign:'center',fontSize:'30px'}}>Hello Again!</Text>
            <Text style={{fontWeight:"100",textAlign:'center',marginBottom:'30px'}}>Log into your account</Text>
          
            <View style={{alignItems:'center'}}>
                <View style={styles.input}>
                    <Image source={require("../assets/Data/Vector.png")}></Image>
                    <TextInput onChangeText={(text)=>{setEmail(text)}} keyboardType="default" style={{marginLeft:'10px',outline:'none',width:'85%'}} placeholder="Enter your email address"></TextInput>
                </View>
                <View style={styles.input}>
                    <Image source={require("../assets/Data/lock.png")}></Image>
                    <TextInput  onChangeText={(text)=>{setPassword(text)}} secureTextEntry={true}  keyboardType="default" style={{marginLeft:'5px',marginRight:'20px',outline:'none',width:'85%'}} placeholder="Enter your password"></TextInput>
                </View>
            </View>

            <Text style={{color:'#00bdd6',textAlign:'right',width:'320px'}}>Forgot password?</Text>
          <View style={{alignItems:'center',marginTop:'20px'}}>
               <TouchableOpacity style={styles.btn_continue} onPress={handleContinue}>
                    <Text style={{color:'white',textAlign:'center',lineHeight:'40px'}}>Continue</Text>
                </TouchableOpacity>
          </View>
           <View style={{alignItems:'center',marginTop:'30px'}}>
                <View style={{alignItems:'center',display:'flex',flexDirection:'row'}}>
                    <View style={styles.line}></View>
                    <Text style={{marginLeft:'10px',marginRight:'10px',color:'black'}}>or</Text>
                    <View style={styles.line}></View>
                </View>
           </View>

          <View style={{alignItems:'center'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Image style={{marginRight:'5px'}} source={require("../assets/Data/google.png")}></Image>
                    <Image style={{marginRight:'5px'}} source={require("../assets/Data/face.png")}></Image>
                    <Image style={{marginRight:'5px'}} source={require("../assets/Data/apple.png")}></Image>
                </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        marginTop:"30%",
        alignItems:'center',
    },
    input:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'250px',
        height:"30px",
        borderColor:'black',
        borderWidth:'1px',
        borderRadius:'5px',
        marginBottom:'10px',
        padding:'5px'
    },

    btn_continue:{
        width:'250px',
        height:'40px',
        lineHeight:'40px',
        backgroundColor:'#00bdd6',
        borderRadius:'5px'
    },
    line:{
        height:'1px',
        backgroundColor:'black',
        width:'90px',
        opacity:'0.5'
    }

})