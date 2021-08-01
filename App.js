import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from "./components/Loading";
import Weather from './components/Weather';

const API_KEY = "7e81ce86210a6edb0ce29bb7ea180829";

export default class extends React.Component{
  state = {
    isLoading:true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather,
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}6&APPID=${API_KEY}&units=metric`);

    this.setState({
      isLoading:false,
      condition:weather[0].main,
      temp,
    })
  }
  
  getLocation = async () => {
    try{
      // throw Error(); == 강제 에러 발생 출력
      await Location.getForegroundPermissionsAsync(); // 사용자에게 위치 접근 권한 승인 요청
      
      const {coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();
      
      // Send to API and get weather
      this.getWeather(latitude, longitude);
      this.setState({
        isLoading:false,
      })
    }
    catch (e){
      Alert.alert("Cant find U..","So Sad T_T"); // 승인 거부 시 에러 메시지 출력
    } 
  };

  componentDidMount(){
    this.getLocation();
  };
  
  render(){
    const {isLoading, temp, condition} = this.state;
    if (isLoading == false){
      console.log('상태 : ',isLoading);
      console.log('온도 : ',temp);
      console.log('날씨 : ',condition);
    }

    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  };
}