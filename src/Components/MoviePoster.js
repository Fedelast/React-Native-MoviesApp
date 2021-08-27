import React from 'react'
import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export const MoviePoster = ({movie,width = 240,height = 360,mh=0}) => {

    const navigation = useNavigation()

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    
    
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('Detailscreen',movie)}} style={{width:width,height:height,marginHorizontal:mh}}>

            
            <Image
                source={{
                    uri:uri
                }}
                style={styles.img}
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    img:{
        flex:1,
        borderRadius:18

        
    }
})