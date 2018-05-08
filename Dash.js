import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Content, Button, Grid, Col, Item, Input, Icon, Text } from 'native-base';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Dash extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('login')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Image source={require('./images/fb.png')} />
                    </Body>
                </Header>
                <Content>
                    <Right>
                    <Image source={require('./images/fb.png')} />
                    <Image source={require('./images/fb.png')} />
                    </Right>
                    <Item>
                        <Text>Hi Riaz,</Text>
                        <Text>What do you need to rent today ?</Text>
                    </Item>
                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='' />
                    </Item>
                    <Item>
                        <Text>I have something for rent.</Text>
                    </Item>
                    <Item>
                        <Input placeholder='' />
                    </Item>
                    <Item>
                        <Text>Wanted near you:</Text>
                    </Item>
                    <Grid>
                        <Col style={styles.centerInfoBox}>
                            <TouchableOpacity>
                                <Image source={require('./images/fb.png')} />
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
                                <Image source={require('./images/fb.png')} />
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.centerInfoBox}>
                            <Text>I have something for rent.</Text>
                            <Text>I have something for rent.</Text>
                            <Text>I have something for rent.</Text>
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
