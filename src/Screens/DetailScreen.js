import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { movieDB } from '../Api/movieDb';
import { ActorCard } from '../Components/ActorCard';


export const DetailScreen = ({route}) => {

    const [cast,setCast] = useState({data:null,loading:true})

    const navigation = useNavigation();

    const movie = route.params;


    useEffect(()=>{
        movieDB.get(`${movie.id}/credits`)
        .then(data =>{
            setCast({
                data:data.data.cast,
                loading:false
            })
           
        }).catch(error =>{
            console.log(error)
        })


    },[])
    
   

    return (
        <ScrollView>
        <View style={{flex:1,alignItems:'center'}}>
            <TouchableOpacity style={{

                backgroundColor:'grey',
                width:100,height:30,alignItems:'center',
                justifyContent:'center',
                borderRadius:5,
                marginVertical:20,
                right:110

                
                }} onPress={()=>{navigation.popToTop()}}>
                <Text style={{color:'white',fontSize:19}}>Volver</Text>
            </TouchableOpacity>
            <Image
                source={{
                    uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }}
                style={{
                    height:500,
                    width:340,
                    borderRadius:10
                }}

            
            
            />

            <Text style={{color:'white',marginVertical:20,fontSize:19,fontWeight:'bold'}}>{movie.title}</Text>
            <Text style={{color:'white',marginHorizontal:10,fontSize:16}}>{movie.overview}</Text>
           
            <Text style={{color:'white',marginVertical:10,fontSize:17,fontWeight:'bold'}}>Elenco:</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                    
                {   
                    (!cast.loading) &&
                    cast.data.slice(0,6).map((x,inx) => <ActorCard key={inx} actor={x}/>)
                }
                </View>
            
        </View>
        </ScrollView>
    )
}