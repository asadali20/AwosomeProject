import { StyleSheet } from "react-native"

export const globalStyle = StyleSheet.create({

    screenbody: {
        flex: 1
    },
    listItem: {
        width: '100%',
        padding: 25,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: '#DCDCDC',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemBtn: {
        padding: 7,
        width: 100,
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1
    },
    btnbook: {
        borderColor: 'green',
        color: 'green'
    },
    btnCancle: {
        borderColor: 'red',
        color: 'red'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabHeader: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1
    },
    tabFont: {
        fontWeight: 'bold',
        fontSize: 15
    },
    activeTab: {
        color: 'darkblue',
    }
})