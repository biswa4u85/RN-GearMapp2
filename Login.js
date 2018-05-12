import React, { Component } from 'react';
import { Container, Header, Content, Button, Grid, Col, Item, Input, Icon, Text } from 'native-base';
import { StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import headerBG from './images/header.png';
import logo from './images/logo.png';
import fbLogo from './images/fb.png';
import googleLogo from './images/gplus.png';
import twitterLogo from './images/twit.png';

export default class Login extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground
                    source={headerBG}
                    style={styles.backgroundImage}>
                    <Content style={styles.mainContainer}>
                        <Image style={styles.logoImg} source={logo} />
                        <Item style={styles.items} >
                            <Icon active style={styles.icons} name='person' />
                            <Input placeholderTextColor={'#fff'} style={styles.inputs} placeholder='Username' />
                        </Item>
                        <Item style={styles.items} >
                            <Icon active style={styles.icons} name='lock' />
                            <Input placeholderTextColor={'#fff'} style={styles.inputs} placeholder='Password' />
                        </Item>
                        <Item style={styles.forget} >
                            <TouchableOpacity>
                                <Text style={styles.forgetText}>Forgot Password</Text>
                            </TouchableOpacity>
                        </Item>
                        <Item style={styles.signIn}>
                            <Button full warning style={styles.signInText} onPress={() => this.props.navigation.navigate('dash')}>
                                <Text>SIGN IN</Text>
                            </Button>
                        </Item>
                        <Item style={styles.forget} >
                            <TouchableOpacity>
                                <Text style={styles.forgetText}>Login with Social Account</Text>
                            </TouchableOpacity>
                        </Item>
                        <Grid>
                            <Col style={styles.centerInfoBox}>
                                <TouchableOpacity>
                                    <Image source={fbLogo} />
                                </TouchableOpacity>
                            </Col>
                            <Col style={styles.centerInfoBox}>
                                <TouchableOpacity>
                                    <Image source={twitterLogo} />
                                </TouchableOpacity>
                            </Col>
                            <Col style={styles.centerInfoBox}>
                                <TouchableOpacity>
                                    <Image source={googleLogo} />
                                </TouchableOpacity>
                            </Col>
                        </Grid>
                        <Item style={styles.forget} >
                            <TouchableOpacity>
                                <Text style={styles.forgetText}>SIGNUP</Text>
                            </TouchableOpacity>
                        </Item>
                    </Content>
                </ImageBackground>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        padding: 30
    },
    mainContainer: {

    },
    logoImg: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        marginLeft: 50,
        marginBottom: 50,
    },
    items: {
        borderWidth: 0.5,
        borderColor: '#fff'
    },
    icons: {
        color: '#fff',
        fontSize: 26
    },
    inputs: {
        color: '#fff',
        fontSize: 15
    },
    forget: {
        borderBottomWidth: 0,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    forgetText: {
        color: '#fff',
        fontSize: 15
    },
    signIn: {
        borderBottomWidth: 0
    },
    signInText: {
        width: '100%',
        backgroundColor: '#d65930',
        borderRadius: 10
    },
    centerInfoBox: {
        justifyContent: 'center'
    }

});
