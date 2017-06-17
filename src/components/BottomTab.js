import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

const HOTIMG = require('../images/bottomtab/hot.png');
const HOTIMG_FOCUS = require('../images/bottomtab/hot-ac.png');
const EYEIMG = require('../images/bottomtab/browse.png');
const EYEIMG_FOCUS = require('../images/bottomtab/browse-ac.png');
const MEIMG = require('../images/bottomtab/account.png');
const MEIMG_FOCUS = require('../images/bottomtab/account-ac.png');

const HOT = {
    prop: 'hot',
    label : '热映'
}
const EYE = {
    prop:'eye',
    label:'找片'
}
const ME = {
    prop:'me',
    label:'我的'
}

export default class BottomTab extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: HOT.prop }
    }
    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag.prop}
                title={tag.label}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => <Image style={styles.tabIcon} source={img} />}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg} />}
                onPress={() => this.setState({ selectedTab: tag.prop })}>
                {childView}
            </TabNavigator.Item>
        );
    }
    _createChildView(tag) {
        return (
            <View style={{ flex: 1, backgroundColor: '#00baff', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 22 }}>{tag.label}</Text>
            </View>
        )
    }
    render() {
        return (
            <TabNavigator tabBarStyle={styles.tab}>
                {this._renderTabItem(HOTIMG, HOTIMG_FOCUS, HOT, this._createChildView(HOT))}
                {this._renderTabItem(EYEIMG, EYEIMG_FOCUS, EYE, this._createChildView(EYE))}
                {this._renderTabItem(MEIMG, MEIMG_FOCUS, ME, this._createChildView(ME))}
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    tabIcon: {
        width: 25,
        height: 25,
        resizeMode: 'stretch',
        marginTop: 10
    },
    titleStyle:{
        color:'#9b9b9b'
    },
    selectedTitleStyle:{
        color:'#494949'
    },
});  