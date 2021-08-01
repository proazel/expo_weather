import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#373B44","#4286f4"],
        title:"Thunderstorm",
        subtitle:"Just don't go outside.",
    },
    Drizzle:{
        iconName:"weather-hail",
        gradient:["#556270","#4ECDC4"],
        title:"Drizzle",
        subtitle:"Falls lightly in very small drops.",
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#3a6073","#3a7bd5"],
        title:"Rainy",
        subtitle:"Take an umbrella.",
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#CFDEF3","#E0EAFC"],
        title:"Snow",
        subtitle:"The small, soft, white pieces of ice.",
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#F2994A","#F2C94C"],
        title:"Clear",
        subtitle:"Go outside!",
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#636FA4","#E8CBC0"],
        title:"Clouds",
        subtitle:"So boring day.",
    },
    Haze:{
        iconName:"weather-hazy",
        gradient:["#19547b","#ffd89b"],
        title:"Haze",
        subtitle:"Heat or smoke in the air that makes it less clear.",
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#215f00","#e4e4d9"],
        title:"Mist",
        subtitle:"Fog produced by very small drops of water.",
    },
    Dust:{
        iconName:"weather-fog",
        gradient:["#0B486B","#F56217"],
        title:"Dust",
        subtitle:"Dry dirt in the form of powder.",
    },
}

export default function Weather({temp, condition}){
    console.log(condition);
    console.log(weatherOptions[condition].gradient);

    return(
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={90}
                    color="#fff"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired,
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        color:"#fff",
        fontSize:40,
    },
    title:{
        marginBottom:10,
        color:"#fff",
        fontSize:40,
        fontWeight:"300",
    },
    subtitle:{
        color:"#fff",
        fontSize:20,
        fontWeight:"600",
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start",
    }
});