import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview'

export default function Profile({ navigation, route }){
    const gitHubUserName = route.params.github_username;
    return <WebView style={{ flex: 1}} source={{ uri : `http://github.com/${gitHubUserName}` }} />

}
