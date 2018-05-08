import React, { Component } from 'react';
import { Container, Header, Content, Button, Grid, Col, Item, Input, Icon, Text } from 'native-base';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image source={require('./images/fb.png')} />
                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Username' />
                    </Item>
                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Password' />
                    </Item>
                    <Item>
                        <Text>Forgot Password</Text>
                    </Item>
                    <Item>
                        <Button success onPress={() => this.props.navigation.navigate('dash')}>
                            <Text>SIGN IN</Text>
                        </Button>
                    </Item>
                    <Item>
                        <Text>Login with Social Account</Text>
                    </Item>
                    <Grid>
                        <Col style={styles.centerInfoBox}>
                            <TouchableOpacity>
                                <Image source={require('./images/fb.png')} />
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.centerInfoBox}>
                            <TouchableOpacity>
                                <Image source={require('./images/fb.png')} />
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.centerInfoBox}>
                            <TouchableOpacity>
                                <Image source={require('./images/fb.png')} />
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
