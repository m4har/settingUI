import React, { Component } from 'react';
import { Text, Button, Container, Header, Content, Title, Left, Right, Body, Icon, Card, CardItem } from 'native-base';


export default class Setting extends Component {
    static navigationOptions = { title: 'Settings', header: null };
    render() {
        return( 
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Settings</Title>
                </Body>
            </Header>
            <Content>
                {/* 1 row */}
                <Card bordered>
                    <Text>Settings</Text>
                    <CardItem bordered button 
                    onPress={() => this.props.navigation.navigate('AboutPage')}>
                        <Body>
                            <Icon name="settings">
                                <Text> About Phone</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button
                    onPress={()=> this.props.navigation.navigate('CameraPage')}>
                        <Body>
                            <Icon name="logo-android">
                                <Text> Update Manager</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button>
                        <Body>
                            <Icon name="md-bonfire">
                                <Text>Firewall & Security</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                </Card>
                <Card bordered>
                    <Text>Network Manager</Text>
                    <CardItem bordered>
                        <Body>
                            <Icon name="logo-buffer">
                                <Text>Sim card & mobile networks</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button>
                        <Body>
                            <Icon name="wifi">
                                <Text>Wifi</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button>
                        <Body>
                            <Icon name="bluetooth">
                                <Text>Bluetooth</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button>
                        <Body>
                            <Icon name="share">
                                <Text>Portable Hotspot</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button>
                        <Body>
                            <Icon name="md-git-network">
                                <Text>VPN</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button>
                        <Body>
                            <Icon name="water">
                                <Text>Data Usage</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                    <CardItem bordered button>
                        <Body>
                            <Icon name="more">
                                <Text>More</Text>
                            </Icon>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
        );

    }
}


// const styles = styleSheet.create({
// JudulSetting:{

// },
// });