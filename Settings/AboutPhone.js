import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class AboutPhone extends Component {
                 static navigationOptions = { title: "Settings", header: null };
                 render() {
                   return <Container>
                       <Header />
                       <Content>
                         <Card>
                           <CardItem>
                             <Left>
                               <Thumbnail source={{ uri: "Image URL" }} />
                               <Body>
                                 <Text>NativeBase</Text>
                                 <Text note>Android</Text>
                               </Body>
                             </Left>
                           </CardItem>
                           <CardItem cardBody>
                                   <Image source={{ uri: "https://cn.pling.com/img//hive/content-pre1/175037-1.png" }} style={{ height: 200, width: null, flex: 1 }} />
                           </CardItem>
                           <CardItem>
                             <Text>Android Kamu memiliki sistem terbaru, update kemanan terkini dan juga kernel stabil.</Text>
                           </CardItem>
                         </Card>
                       </Content>
                     </Container>;
                 }
               }
