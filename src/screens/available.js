import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { globalStyle } from '../../styles/globalStyles'

export default function Available({ navigation }) {

    const [currentpage, setCurrentpage] = useState('Helsenki')
    const [isLoading, setisLoading] = useState(false)
    const [allShifts, setAllShifts] = useState([])
    const [helsenki, setHelsenki] = useState([])
    const [tampere, setTampere] = useState([])
    const [tukur, setTukur] = useState([])

    const togglePages = (current) => {
        if (current === 'Helsenki') {
            setCurrentpage('Helsenki')
        } else if (current === 'Tampere') {
            setCurrentpage('Tampere')
        } else if (current === 'Turku') {
            setCurrentpage('Turku')
        }
    }

    const sortarray = (bookings) =>{
        const arr = [...bookings]
       console.log('bookings',bookings)
       arr.map((item)=>{
        if(item.area == 'Helsinki')
        {
            helsenki.push(item)
        }
        else if(item.area == 'Tampere')
        {
            tampere.push(item)
        }
        else if(item.area == 'Turku')
        {
            tukur.push(item)
        }
    }
        )

       setisLoading(false)
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            setisLoading(true)
            await AsyncStorage.getItem('Bookings').then(res => {
                console.log(JSON.parse(res))
                setAllShifts(JSON.parse(res))
                sortarray(JSON.parse(res))
               
            });
            return unsubscribe;
        }, [setAllShifts])
        console.log(allShifts);
        console.log('helsenki',helsenki);
        console.log('tampere',tampere);
        console.log('tukur',tukur);
    })
      
        if (isLoading) {
            return (
                <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size="large" color="#FED034"></ActivityIndicator>

            )
        }

        return (
            <View style={globalStyle.screenbody}>
                {
                    currentpage === "Helsenki" ?
                        <>
                            <View style={[globalStyle.row, globalStyle.tabHeader]}>
                                <TouchableOpacity onPress={() => togglePages('Helsenki')}><Text style={[globalStyle.activeTab, globalStyle.tabFont]}>Helsinki ({helsenki.length})</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => togglePages('Tampere')}><Text style={globalStyle.tabFont}>Tampere  ({tampere.length})</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => togglePages('Turku')}><Text style={globalStyle.tabFont}>Turku  ({tukur.length})</Text></TouchableOpacity>
                            </View>
                            <FlatList
                                data={helsenki}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>

                                    <View style={globalStyle.listItem} key={index}>
                                        <View style={{ width: '35%', display: 'flex', flexDirection: 'row' }}>
                                            <Text style={{ color: 'black' }}>{moment(item.startTime).format("MM-DD-YYYY hh:mm")} -
                                            </Text><Text style={{ color: 'black' }}>{moment(item.endTime).format("hh:mm")}</Text>
                                        </View>
                                        {item.booked == true ?
                                            <>
                                                <Text style={{ color: 'black' }}>Booked</Text>
                                                <View style={globalStyle.itemBtn}>
                                                    <Text style={{ color: 'black' }}>Book</Text>
                                                </View>
                                            </> :

                                            <View>
                                                <TouchableOpacity style={[globalStyle.itemBtn, globalStyle.btnbook]}>
                                                    <Text style={{ color: 'green' }}>Book</Text>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    </View>
                                }
                            >

                            </FlatList>
                        </> : currentpage === 'Tampere' ?
                            <>
                                <View style={[globalStyle.row, globalStyle.tabHeader]}>
                                    <TouchableOpacity onPress={() => togglePages('Helsenki')}><Text style={[globalStyle.tabFont]}>Helsinki ({helsenki.length})</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => togglePages('Tampere')}><Text style={[globalStyle.activeTab, globalStyle.tabFont]}>Tampere  ({tampere.length})</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => togglePages('Turku')}><Text style={globalStyle.tabFont}>Turku  ({tukur.length})</Text></TouchableOpacity>
                                </View>
                                <FlatList
                                data={tampere}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>

                                    <View style={globalStyle.listItem} key={index}>
                                        <View style={{ width: '35%', display: 'flex', flexDirection: 'row' }}>
                                            <Text style={{ color: 'black' }}>{moment(item.startTime).format("MM-DD-YYYY hh:mm")} -
                                            </Text><Text style={{ color: 'black' }}>{moment(item.endTime).format("hh:mm")}</Text>
                                        </View>
                                        {item.booked == true ?
                                            <>
                                                <Text style={{ color: 'black' }}>Booked</Text>
                                                <View style={globalStyle.itemBtn}>
                                                    <Text style={{ color: 'black' }}>Book</Text>
                                                </View>
                                            </> :

                                            <View>
                                                <TouchableOpacity style={[globalStyle.itemBtn, globalStyle.btnbook]}>
                                                    <Text style={{ color: 'green' }}>Book</Text>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    </View>
                                }
                            >

                            </FlatList>
                            </> : currentpage === 'Turku' ?
                                <>
                                    <View style={[globalStyle.row, globalStyle.tabHeader]}>
                                        <TouchableOpacity onPress={() => togglePages('Helsenki')}><Text style={[globalStyle.tabFont]}>Helsinki ({helsenki.length})</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => togglePages('Tampere')}><Text style={globalStyle.tabFont}>Tampere  ({tampere.length})</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => togglePages('Turku')}><Text style={[globalStyle.activeTab, globalStyle.tabFont]}>Turku  ({tukur.length})</Text></TouchableOpacity>
                                    </View>
                                    <FlatList
                                data={tukur}
                                keyExtractor={item => item.id}
                                renderItem={({ item , index }) =>

                                    <View key={index} style={globalStyle.listItem}>
                                        <View style={{ width: '35%', display: 'flex', flexDirection: 'row' }}>
                                            <Text style={{ color: 'black' }}>{moment(item.startTime).format("MM-DD-YYYY hh:mm")} -
                                            </Text><Text style={{ color: 'black' }}>{moment(item.endTime).format("hh:mm")}</Text>
                                        </View>
                                        {item.booked == true ?
                                            <>
                                                <Text style={{ color: 'black' }}>Booked</Text>
                                                <View style={globalStyle.itemBtn}>
                                                    <Text style={{ color: 'black' }}>Book</Text>
                                                </View>
                                            </> :

                                            <View>
                                                <TouchableOpacity style={[globalStyle.itemBtn, globalStyle.btnbook]}>
                                                    <Text style={{ color: 'green' }}>Book</Text>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    </View>
                                }
                            >

                            </FlatList>
                                </> :
                                <></>
                }

            </View>
        )
    }