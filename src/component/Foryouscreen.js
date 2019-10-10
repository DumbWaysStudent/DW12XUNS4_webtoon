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
import Icon from 'react-native-vector-icons/Ionicons'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
const {height,width} = Dimensions.get('window')
 
const banners =[

    'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'

]


class ForyouScreen extends Component {

    constructor() {
        super()
        this.state = {
            banners: [{
                title: 'The Secret of Angel',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Young Mom',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },{
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },{
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },{
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
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
                         scrollEventThrottle={16}
                        >
                        <View>
                            <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>
                                New Episode Mr.Robot Series
                            </Text>
                            {/* <View style={{ height: 130, marginTop: 20 }}> */}

                                {/* first banner */}
                                <View style={{flex:1}}> 

                                    <View style={styles.container}>
                                        <Carousel
                                            autoplay
                                            autoplayTimeout={3000}
                                            loop
                                            index={0}
                                            pageSize={BannerWidth}
                                        >
                                            {banners.map((image, index) => this.renderPage(image, index))}
                                        </Carousel>
                                    </View>
                                </View>

                                {/* last banner */}
                                <View style={{flex:3}}>

                                    <View style={{marginTop: 15, paddingHorizontal: 5,}}>
                                        <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>
                                        Favorite
                                        </Text>
                                    </View>

                                    
                                    <View>
                                        <SafeAreaView>
                                            <FlatList
                                                data={this.state.banners}
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({item}) =>
                                                <TouchableOpacity onPress={() => alert(item.title)}>
                                                    <View style={{marginHorizontal:10, backgroundColor:'white', borderRadius:10}}>
                                                        <Image style={{width:'100%', height:150, padding:10, borderTopLeftRadius:10, borderTopRightRadius:10}} source={{uri : item.image}}/>
                                                        <View style={{width : 150}}>
                                                            <Text style={{ textAlign: 'center', marginTop:5}}>{item.title}</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                }
                                                keyExtractor={(item, index) => index.toString()}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <View style={{marginTop: 15, paddingHorizontal: 5,}}>
                                        <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>
                                        All Episode
                                        </Text>
                                    </View>
                                    <View>

                                    <SafeAreaView>
                                        <FlatList
                                             data={this.state.banners}
                                             horizontal={false}
                                             showsHorizontalScrollIndicator={false}
                                             renderItem={({item}) =>
                                            <TouchableOpacity onPress={()=>{alert('Detail') }}>
                                                <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                                                    <View>
                                                        <Image style={{width:100, height:100, padding:10, borderRadius:15}} source={{uri : item.image}}/>
                                                    </View>
                                                   
                                                    <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                                                        <View style={{marginHorizontal:15}}>
                                                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity >
                                                            <View style={styles.btn}>
                                                                <Text>+ Favorite</Text>
                                                            </View>
                                                        </TouchableOpacity>
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