import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  YellowBox,
  TouchableHighlight,
  FlatList
} from 'react-native'
import InputBox from '../../components/inputBox'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  render () {
    return (
      <View>
        {this.renderStatusBar()}
        {this.renderBackground()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    )
  }

  renderBackground = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/background-image.png')}
        style={styles['onboarding__bg']}>
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderLead()}
        {this.renderForm()}
        {/* {this.renderStartButton()} */}
      </ImageBackground>
    )
  }

  renderOverlay = () => {
    return <View style={styles['onboarding__overlay']} />
  }

  renderLogo = () => {
    return (
      <View style={styles['onboarding__logo']}>
        <Image source={require('../../assets/icons/burger-city-logo.png')} />
      </View>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
              Welcome Back!
        </Text>
        <Text style={styles['onboarding__lead--p']}>
              Login to continue Burger City
        </Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['onboarding__formInput']}>
        {this.renderInputBox()}
      </View>
    )
  }

  renderInputBox = (props) => {
    return (
      <FlatList
        data={inputBox}
        renderItem={({ item }) => <InputBox {...item} />}
        keyExtractor={item => item.id}
      />
    )
  }

  renderStartButton = () => {
    return (
      <TouchableHighlight
        style={styles['onboarding__button']}
        activeOpacity={0.6}
        underlayColor="#ed941a"
        onPress={() => {}}>
        <Text style={styles['onboarding__button__text']}> Login </Text>
      </TouchableHighlight>
    )
  }
}

const inputBox = [
  {
    id: 1,
    styleBox: 'container-email',
    nameIcon: 'envelope',
    colorIcon: '#727c8e',
    size: 22,
    styleIcon: 'icon',
    placeholder: 'Email Address',
    placeholderTextColor: '#727c8e',
    styleTextInput: 'input-box-email'
  },
  {
    id: 2,
    styleBox: 'container-password',
    nameIcon: 'lock',
    colorIcon: '#727c8e',
    size: 22,
    styleIcon: 'icon',
    placeholder: 'Confirm password',
    placeholderTextColor: '#727c8e',
    styleTextInput: 'input-box-password'
  }
]

const styles = StyleSheet.create({
  onboarding__bg: {
    height: '100%',
    width: '100%'
  },
  onboarding__overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  onboarding__logo: {
    marginTop: 80,
    alignItems: 'center'
  },
  onboarding__lead: {
    marginTop: 40,
    alignItems: 'center'
  },
  'onboarding__lead--h1': {
    fontFamily: 'Nunito-Bold',
    fontSize: 25,
    includeFontPadding: false,
    color: '#ffffff'
  },
  'onboarding__lead--p': {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    includeFontPadding: false,
    color: '#ffffff',
    marginTop: 3
  },
  onboarding__formInput: {
    paddingHorizontal: 25,
    marginTop: 40
  },
  onboarding__button: {
    backgroundColor: '#ff9f1c',
    paddingVertical: 12,
    borderRadius: 5,
    marginHorizontal: 25,
    alignItems: 'center',
    marginTop: 40,
    includeFontPadding: false
  },
  onboarding__button__text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    includeFontPadding: false
  }
})

export default LoginScreen
