import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { MoviePoster } from '../Components/MoviePoster';
import { useMovies } from '../Hooks/useMovies'
import Carousel from 'react-native-snap-carousel';

const {width:windowwidth} = Dimensions.get('window')

export const HomeScreen = () => {

    const {isLoading,nowPlaying,popular,news} = useMovies();

    if(isLoading){

        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator color='blue' size={100}/>
            </View>
        )
    }

    return (

        <ScrollView>
        <View>
            
            <View style={{height:400,paddingTop:20}}>
                <Carousel
                    data={nowPlaying}
                    renderItem={({item})=> <MoviePoster movie={item}/>}
                    sliderWidth={windowwidth}
                    itemWidth={300}



                />
            </View>

            <View style={{height:400,marginTop:30}}>
                <Text style={{color:'white',marginBottom:20,marginLeft:30, fontSize:20}}>Populares</Text>

                    <FlatList
                        data={popular}
                        renderItem={({item}) => <MoviePoster movie={item} width={120} height={210} mh={10}/>}
                        keyExtractor={(item)=> item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />




            </View>
                


            <View style={{height:300,bottom:100}}>
                
            <Text style={{color:'white',marginLeft:30,marginBottom:20,fontSize:20}}>Proximos estrenos</Text>

                    <FlatList
                        data={news}
                        renderItem={({item}) => <MoviePoster movie={item} width={120} height={210} mh={10}/>}
                        keyExtractor={(item)=> item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />




            </View>

            <Text style={{color:'white',textAlign:'center',bottom:25}}> © Made by Federico Lastra </Text>
        </View>

        
        </ScrollView>
    )
}
