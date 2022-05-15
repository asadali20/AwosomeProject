import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
function Users() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setUsers(response)
            })
            .catch((error) =>
                console.log(error)
            )

    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <View>
            <Text>users</Text>
            {
                users.map((item) => {
                    return (
                        <View key={item.id}>
                            <LinearGradient
                            colors={['#4c669f', '#3b5998', '#192f6a']}
                            style={{
                                display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 10, 
                            }}>
                                <Text style={{ width: '70%' }}>carygory: {item.title}</Text>
                                <Icon name='downcircleo' size={20} color='black'></Icon>
                            </LinearGradient>
                            <View>
                                <Text>
                                    
                                </Text>
                            </View>
                        </View>
                    )
                }
                )
            }
        </View>
    );
}

export default Users;