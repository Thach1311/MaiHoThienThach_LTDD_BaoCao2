import { View,Text,TouchableOpacity,StyleSheet,TextInput,Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome icon library
import { useState } from "react";
export default function Screen02({navigation}) {
    const [size,setSize] = useState(4)
    const [border, setBorder] = useState(false)
    const [select, setSelect] = useState('smart')
   

    const handleSize = () =>{
        setSize(6)
    }
    const dataSmart = [
        {
            img: require("../assets/Data/1.png"),
            price:'$899',
            name:'Smart phone 1'
        },
        {
            img: require("../assets/Data/2.png"),
            price:'$899',
            name:'Smart phone 2'
        },
        {
            img: require("../assets/Data/3.png"),
            price:'$789',
            name:'Smart phone 3'
        },
        {
            img: require("../assets/Data/4.png"),
            price:'$999',
            name:'Smart phone 4'
        },
        {
            img: require("../assets/Data/5.jpg"),
            price:'$959',
            name:'Smart phone 5'
        },
        {
            img: require("../assets/Data/6.jpg"),
            price:'$969',
            name:'Smart phone 6'
        },

    ]

    const dataIpad = [
        {
            img: require("../assets/Data/ip1.jpg"),
            price:'$899',
            name:'Ipad 1'
        },
        {
            img: require("../assets/Data/ip2.jpg"),
            price:'$899',
            name:'Ipad 2'
        },
        {
            img: require("../assets/Data/ip3.jpg"),
            price:'$789',
            name:'Ipad 3'
        },
        {
            img: require("../assets/Data/ip4.jpg"),
            price:'$999',
            name:'Ipad 4'
        },
        {
            img: require("../assets/Data/ip5.jpg"),
            price:'$959',
            name:'Ipad 5'
        },
        {
            img: require("../assets/Data/ip6.jpg"),
            price:'$999',
            name:'Ipad 6'
        },

    ]

    const dataMacbook = [
        {
            img: require("../assets/Data/mc1.jpg"),
            price:'$899',
            name:'Macbook 1'
        },
        {
            img: require("../assets/Data/mc2.jpg"),
            price:'$1899',
            name:'Macbook 2'
        },
        {
            img: require("../assets/Data/mc3.jpg"),
            price:'$1789',
            name:'Macbook 3'
        },
        {
            img: require("../assets/Data/mc4.jpg"),
            price:'$999',
            name:'Macbook 4'
        },
        {
            img: require("../assets/Data/mc5.jpg"),
            price:'$2099',
            name:'Macbook 5'
        },
        {
            img: require("../assets/Data/mc6.jpg"),
            price:'$499',
            name:'Macbook 6'
        },

    ]

    const [dataname,setDataName] = useState(dataSmart)
    
    const products = [
        { id: 'smart', image: require("../assets/Data/smart.png"), name: dataSmart,custom: styles.product1 },
        { id: 'ipad', image: require("../assets/Data/ipad.png"), name: dataIpad,custom: styles.product2 },
        { id: 'macbook', image: require("../assets/Data/macbook.png"), name: dataMacbook,custom: styles.product3},
    ];

    const handlePress = (products) =>{
        setDataName(products.name)
        setSize(4)
        setSelect(products.id)
    }


    const dataType = [
        {
            name: "Best Sales",
            size: 4,
            customer:styles.chooseType
        },
        {
            name: "Best Matched",
            size: 2,
            customer:styles.chooseType
        },
        {
            name: "Popular",
            size: 5,
            customer:styles.chooseType
        },
    ]
    const [typeName, setTypeName] = useState("Best Sales")
    const handleType = (type) => {
        setSize(type.size)
        setTypeName(type.name)
    }
    return (  
        <View style={{backgroundColor:'#fff',height:'100%',padding:'20px',overflow:'scroll'}}>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
               <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Screen01")}}> 
                       <Icon name="arrow-left"></Icon>
                    </TouchableOpacity>
                    <Text style={{fontWeight:'800',marginLeft:'10px',fontSize:'26px'}}>Electronics</Text>
               </View>

                <View>
                        <Image source={require("../assets/Data/cart_avt.png")}></Image>
                </View>
            </View>

            <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.input}>
                    <Image style={{width:'10px',height:'10px',marginRight:'10px'}} source={require("../assets/Data/search.png")}></Image>
                    <TextInput keyboardType="default" placeholder="Search" style={{outline:'none'}}></TextInput>
                </View>

                <Image source={require("../assets/Data/list.png")}></Image>
            </View>

            <View style={{marginTop:'20px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontWeight:'700',fontSize:'23px'}}>Categories</Text>
                <TouchableOpacity>
                  <Text>See all </Text>
                </TouchableOpacity>
            </View>

            <View  style={{marginBottom:'30px',marginTop:'20px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                {
                    products.map((product) => (
                        <View key={product.id}>
                            <TouchableOpacity style={[product.custom,select === product.id && styles.borderChoose]} onPress={()=> {handlePress(product)}}>
                                <Image source={product.image}></Image>
                            </TouchableOpacity>
                         </View>
                    ))
                }
            </View>


            <View  style={{marginBottom:'30px',marginTop:'20px',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                {
                    dataType.map((type) => (
                        <TouchableOpacity style={typeName === type.name && styles.chooseType} onPress={() => {handleType(type)}}>
                              <Text style={typeName === type.name && styles.chooseTypeText}>{type.name}</Text>
                      </TouchableOpacity>
                    ))
                }
            </View>


            <View>
               {
                dataname.slice(0,size).map((sm,key) => (
                    <View style={{padding:'20px',borderColor:'#dddd',borderWidth:'1px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>  
                    <View>
                        <Image source={sm.img}></Image>
                    </View>
                    <View>
                        <Text>{sm.name}</Text>
                        <Image source={require("../assets/Data/Rating 5.png")}></Image>
                    </View>
                    <View>
                        <Image source={require("../assets/Data/noname.png")}></Image>
                        <Text style={{fontWeight:'800'}}>{sm.price}</Text>
                    </View>
                </View>
                ))
               }
            </View>

            <View>
                <TouchableOpacity style={styles.seeall} onPress={handleSize}>
                    <Text>See all</Text>
                </TouchableOpacity>
            </View>

               <View>
                    <Image  style={{width:'350px'}} source={require("../assets/Data/banner.png")}></Image>
               </View>

               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',padding:'20px',marginTop:'30px',width:'100%',borderTopWidth:'1px',borderColor:'#000'}}>
                    <View style={{textAlign:'center'}}>
                        <Image style={{height:'36px',width:'36px'}} source={require("../assets/Data/home.png")}></Image>
                        <Text  style={{color:'#58d4e4',fontWeight:'800'}}>Home</Text>
                    </View>

                    <View style={{textAlign:'center'}}>
                        <Image style={{height:'36px',width:'36px'}} source={require("../assets/Data/search.png")}></Image>
                        <Text>Search</Text>
                    </View>

                    <View style={{textAlign:'center'}}>
                        <Image source={require("../assets/Data/mdi_heart-outline.png")}></Image>
                        <Text>Favorites</Text>
                    </View>

                    <View style={{textAlign:'center'}}>
                        <Image source={require("../assets/Data/solar_inbox-outline.png")}></Image>
                        <Text>Inbox</Text>
                    </View>

                    <View style={{textAlign:'center'}}>
                        <Image source={require("../assets/Data/codicon_account.png")}></Image>
                        <Text>Account</Text>
                    </View>
               </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#f3f4f6',
        width:"250px",
        height:'40px',
        borderRadius:'5px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:'20px'
    },
    product1:{
        backgroundColor:'#d9cbf6',
        borderRadius:'5px',
        height:'100px',
        width:'100px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    product2:{
        backgroundColor:'#c5d1f7',
        borderRadius:'5px',
        height:'100px',
        width:'100px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    product3:{
        backgroundColor:'#f9d8c0',
        borderRadius:'5px',
        height:'100px',
        width:'100px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    borderChoose:{
        borderWidth:'2px',
        borderColor:'blue'
    },
    chooseType:{
        backgroundColor:'#ebfdff',
        width:'120px',
        borderRadius:'20px',
    },
    chooseTypeText:{
        fontWeight:'800',
        color:'#3dcde1',
        textAlign:'center',
    },
    seeall:{
        marginTop:'30px',
        marginBottom:'30px',
        width:'350px',
        height:"35px",
        backgroundColor:'#c0c1c3',
        borderRadius:'5px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})