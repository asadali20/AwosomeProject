import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { globalStyle } from '../../styles/globalStyles'
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Myshifts({ navigation }) {

    const [isLoading, setisLoading] = useState(false)
    const [allShifts, setAllShifts] = useState([])
    // const [activeBookings, setactiveBookings] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            setisLoading(true)
            url = 'http://10.0.2.2:8080/shifts';
            await fetch(url)
                .then((res) => res.json())
                .then((resData) => {
                    setisLoading(false)
                    console.log(resData)
                    setAllShifts(resData)
                    try{
                        const bookings = JSON.stringify(resData)
                        AsyncStorage .setItem('Bookings', bookings)
                    }
                    catch(e){console.log(e)}

                    // let result = resData.filter(item => item.booked == true)
                    // setactiveBookings(result)
                })
                .catch((e) => {
                    setisLoading(false)
                    console.log(e)
                })
        })
        return unsubscribe;
    }, [allShifts])
    // console.log('all bookings', allShifts);
    // console.log('active bookings', activeBookings);

    if (isLoading) {
        return (
            <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size="large" color="#FED034"></ActivityIndicator>

        )
    }


    return (
        <View style={globalStyle.screenbody}>
            <FlatList
                data={allShifts}
                renderItem={({ item }) =>
                {item.booked == true &&
                    <View style={globalStyle.listItem} key={item.id}>
                        <View style={{ width: '35%', display: 'flex', flexDirection: 'column' }}>
                            <Text style={{ color: 'black' }}>{moment(item.startTime).format("MM-DD-YYYY hh:mm")} - {moment(item.endTime).format("hh:mm")}</Text>
                            <Text style={{ color: 'black' }}>{item.area}</Text>

                        </View>
                       
                                <View>
                                <TouchableOpacity style={[globalStyle.itemBtn, globalStyle.btnCancle]}>
                                    <Text style={{ color: 'red' }}>cancle</Text>
                                </TouchableOpacity>
                            </View>
                        
                    </View>
                }}
            >

            </FlatList>
        </View>
    )
}