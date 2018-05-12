import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Content, Button, Grid, Col, Item, Input, Icon, Text } from 'native-base';
import { StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import headerBG from './images/header.png';
import logo from './images/logo.png';
import fbLogo from './images/fb.png';

export default class Dash extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Item style={styles.itemsIcon}>
                        <Image style={styles.singleIcon} source={fbLogo} />
                        <Image style={styles.singleIcon} source={fbLogo} />
                    </Item>
                    <Item style={styles.items}>
                        <Text style={styles.mainText}>Hi Riaz,{"\n"}What do you need to rent today ?</Text>
                    </Item>
                    <Item style={styles.itemsInput}>
                        <Icon active style={styles.icons} name='search' />
                        <Input placeholderTextColor={'#000'} style={styles.inputs} placeholder='' />
                    </Item>
                    <Item style={styles.items}>
                        <Text style={styles.mainText}>I have something for rent.</Text>
                    </Item>
                    <Item style={styles.itemsInput}>
                        <Input placeholder='' />
                    </Item>
                    <Item style={styles.items}>
                        <Text style={styles.mainText}>Wanted near you:</Text>
                    </Item>
                    <Grid>
                        <Col style={styles.centerInfoBox}>
                            <TouchableOpacity>
                                <Image source={fbLogo} />
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.centerInfoBox}>
                            <Text>I have something for rent.</Text>
                            <Text>I have something for rent.</Text>
                            <Text>I have something for rent.</Text>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={styles.centerInfoBox}>
                            <TouchableOpacity>
                                <Image source={fbLogo} />
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.centerInfoBox}>
                            <Text>I have something for rent.</Text>
                            <Text>I have something for rent.</Text>
                            <Text>I have something for rent.</Text>
                        </Col>
                    </Grid>
                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    },
    itemsIcon: {
        borderBottomWidth: 0,
        alignSelf: 'flex-end'
    },
    singleIcon: {
        margin: 10
    },
    items: {
        borderBottomWidth: 0
    },
    itemsInput: {
        borderBottomWidth: 0,
        backgroundColor: '#fff',
        margin: 10,
        paddingLeft: 10,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    icons: {
        color: '#000',
        fontSize: 30
    },
    inputs: {
        color: '#000',
        fontSize: 23
    },
    mainText: {
        color: '#000',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    centerInfoBox: {
        justifyContent: 'center',
        marginBottom: 10,
    }
});
