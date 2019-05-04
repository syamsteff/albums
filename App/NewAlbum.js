// import React, { Component } from 'react';
import axios from 'axios';
// import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title } from 'native-base';

// export default class ListAvatarExample extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dataAlbum: [],
//         }
//     }

//     componentDidMount() {
//         axios.get('https://rallycoding.herokuapp.com/api/music_albums')
//             .then(response => {
//                 this.setState({ dataAlbum: response.data})
//                 console.log(this.state.dataAlbum);
//             });
//     }

//     renderAlbums() {
//         return this.state.dataAlbum.map(data => {
//             return <List>
//             <ListItem avatar>
//               <Left>
//                 <Thumbnail source={{ uri: data.thumbnail_image }} />
//               </Left>
//               <Body>
//                 <Text>{ data.title }</Text>
//                 <Text note>Doing what you like will always keep you happy . .</Text>
//               </Body>
//               <Right>
//                 <Text note>3:43 pm</Text>
//               </Right>
//             </ListItem>
//           </List>
//         })
//     }
    
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button hasText transparent>
//               <Text>Back</Text>
//             </Button>
//           </Left>
//           <Body>
//             <Title>           Album</Title>
//           </Body>
//           {/* <Right>
//             <Button hasText transparent>
//               <Text>Cancel</Text>
//             </Button>
//           </Right> */}
//         </Header>
//         <Content>
//             {this.renderAlbums()}
//         </Content>
//       </Container>
//     );
//   }
// }

import React, { Component } from 'react';
import { Image, Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { tsImportEqualsDeclaration } from '@babel/types';
export default class CardImageExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
        dataAlbum: [],
    }
}

componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ dataAlbum: response.data})
            console.log(this.state.dataAlbum);
        });
}

renderAlbums() {
  return this.state.dataAlbum.map(data => {
    return (
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: data.thumbnail_image}} />
                <Body>
                  <Text>{data.title}</Text>
                  <Text note>{data.artist}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: data.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Button full onPress={() => Linking.openURL(data.url)}>
                  <Icon active name="cart"/>
                  <Text>BUY</Text>
                </Button> 
            </CardItem>
          </Card>
    )
  });
}
  render() {
    return (
      <Container>
         <Header>
           <Left>
            <Button hasText transparent>
               <Text>Back</Text>
             </Button>
           </Left>
           <Body>
             <Title>           Album</Title>
           </Body>
           {/* <Right>
             <Button hasText transparent>
               <Text>Cancel</Text>
             </Button>
           </Right> */}
         </Header>
        <Content>
          {this.renderAlbums()}
        </Content>
      </Container>
    );
  }
}