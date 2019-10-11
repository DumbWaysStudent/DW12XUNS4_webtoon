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

import Carousel from 'react-native-banner-carousel'
import Icon from 'react-native-vector-icons/FontAwesome'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

class ForyouScreen extends Component {

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
        console.log(this.props.navigation)
        return (
        
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                        <ScrollView
                         scrollEventThrottle={0}>
                        <View>
                                <View style={{flex:3}}>
                                    <View style={{marginTop: 15, paddingHorizontal: 0,}}>
                                    <SafeAreaView>
                                        <FlatList
                                             data={this.state.banners}
                                             horizontal={false}
                                             showsHorizontalScrollIndicator={false}
                                             renderItem={({item}) =>
                                            <TouchableOpacity onPress={()=>{alert('My Webtoon') }}>
                                                <View style={{backgroundColor:'white',marginHorizontal:0, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                                                    <View>
                                                        <Image style={{width:80, height:90, borderRadius:15}} source={{uri : item.image}}/>
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
                <View style={{backgroundColor:'none', 
                            position: 'absolute',
                            width: 80,
                            height: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            right: 30,
                            bottom: 30,
                            }}>
                        <Icon name="plus-circle" size={75} color='#21AD38' 
                        onPress={()=>this.props.navigation.navigate('CreateWebtoon')} />
                    </View>
            </SafeAreaView>
            

        );
    }
}

export default ForyouScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    btn: {
        padding: 10,
        backgroundColor: '#FFC300',
        borderRadius:10,
        elevation: 3,
        marginLeft: 10
    }
})