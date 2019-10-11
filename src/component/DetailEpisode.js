import React from 'react';
import {
   View,
   Text,
   FlatList,
   Image
} from 'react-native'

const story = [
   {id : 1,image : 'https://swebtoon-phinf.pstatic.net/20190827_250/1566898055433i783q_JPEG/1566898055400882944.jpg?type=q90'},
   {id : 2,image : 'https://swebtoon-phinf.pstatic.net/20190827_281/1566898055481N6GB8_JPEG/1566898055460882944.jpg?type=q90'},
   {id : 3,image : 'https://swebtoon-phinf.pstatic.net/20190827_281/1566898055481N6GB8_JPEG/1566898055460882944.jpg?type=q90'}
]

function Story({image}) {
   console.log(image);
   return (
      <Image
         source={{uri:image}}
         style={{width:'100%',height:500}}
      />
   )
}


function DetailEpisode() {
   return (
      <FlatList
        data={story}
        renderItem={({ item }) => <Story key={item.id} {...item}  />}
        keyExtractor={item => item.id.toString()}
      />
   )
}

export default DetailEpisode;