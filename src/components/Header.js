import React, { Component } from 'react';

import {
    Image,
    TextInput,
    View,
    StyleSheet,
    Platform
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image source={require('../images/header/logo.png')} style={styles.logo} />
                <View style={styles.searchBox}>
                    <Image source={require('../images/header/icon_search.png')} style={styles.searchIcon} />
                    <TextInput
                        keyboardType='web-search'
                        placeholder='电影/电视剧/影人'
                        underlineColorAndroid='transparent'
                        style={styles.inputText} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 30,   // 处理iOS状态栏  
        height: Platform.OS === 'ios' ? 68 : 78,   // 处理iOS状态栏  
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    logo: {
        height: 22,
        width: 46,
        resizeMode: 'stretch'  // 设置拉伸模式  
    },
    searchBox: {
        height: 40,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充  
        borderRadius: 5,  // 设置圆角边  
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12,
        justifyContent:'center'
    },
    searchIcon: {
        marginLeft: 20,
        marginRight: 10,
        width: 16,
        height: 16,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        fontSize: 14,
        color:'#111',
        textDecorationLine:'none'
    }
});

