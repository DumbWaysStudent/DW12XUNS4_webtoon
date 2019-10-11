import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    ScrollView,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

class FavoriteScreen extends Component {

    constructor() {
        super()
       
        this.state = {
            banners: [{
                title: 'The Secret of Angel',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                count: 90
            }, {
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                count: 110
            }, {
                title: 'Young Mom',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                count: 75
            },{
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                count: 213
            },{
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                count: 422
            },{
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                count: 89
            },
            ]
        }
    }

    renderPage(image, index) {
        return (
            <View key={index}>
            <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
    
    render() {
        return (
        
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                <View style={{height:50,
                borderBottomColor: '#dddddd',
                marginVertical: 6 }}>
                <View style={{flexDirection:'row-reverse', padding: 1, 
                backgroundColor:'white',marginHorizontal: 10,
                marginVertical: 1,
                shadowOffset:{width:0, height:0},
                shadowColor: 'black',
                shadowOpacity: 0.2, elevation:2, borderRadius: 50}}>
                <Icon name="ios-search" size={25} style={{padding:10}} />
                <TextInput
                underlineColorAndroid='transparent' 
                placeholder="Search"
                placeholderTextColor="grey"
                style={{ flex:1, fontWeight:'700', 
                backgroundColor:'white'}} />
                </View>
                </View>
                <ScrollView
                scrollEventThrottle={0}>
                <View>
                <View style={{flex:3}}>
                <View style={{marginTop: 15, paddingHorizontal: 5,}}>
                <SafeAreaView>
                <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{alert('This Is Favorite') }}>
                <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                <View>
                <Image style={{width:90, height:90, padding:10, borderRadius:15}} source={{uri : item.image}}/>
                </View>
                <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                <View style={{marginHorizontal:15}}>
                <Text style={{fontSize:17, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                <Text style={{fontSize:12, fontWeight:'bold', marginBottom:10}}>{item.count} Favorite</Text>
                </View>
                </View>
                </View> 
                </TouchableOpacity>
                }                
                keyExtractor={(item, index) => index.toString()}
                />                              
            </SafeAreaView>

            </View>
            </View>
            </View>
            </ScrollView>
            </View>
            </SafeAreaView>

        );
    }
}

export default FavoriteScreen;