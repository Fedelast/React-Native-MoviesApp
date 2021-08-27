import React from 'react'
import {Image, Text, View } from 'react-native'

export const ActorCard = ({actor}) => {
    return (
        <View style={
            {
                borderWidth:2,
                borderColor:'white',
                width:105,
                borderRadius:5,
                marginHorizontal:10,
                alignItems:'center',
                marginVertical:10,
                flexWrap:'wrap'
                
            }
        }>
            <Image
                
                source={{
                    uri:`https://image.tmdb.org/t/p/w500${actor.profile_path}`
                }}
                style={{
                    width:'100%',
                    height:100
                }}
            />

            <Text style={{color:'white',marginHorizontal:10,marginVertical:5}}>{actor.name}</Text>
            
        </View>
    )
}
