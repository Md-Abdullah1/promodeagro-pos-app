// import React from 'react';
// import _ from 'lodash';
// import moment from 'moment';
// // import {
// //     Container,
// //     Content,
// //     Text,
// //     List,
// //     ListItem,
//     // Left ,
// //     Right,
// //     Body,
// //     Button,
// // } from 'react-native';

// import {
//     Container,
//     Content,
//     Text,
//     List,
//     ListItem,  // Import ListItem directly from 'react-native'
//     Button,
//     View,
// } from 'react-native';

// // import styles from './styles';

// const Receipt = ({ route }) => {

//     const { order } = route.params;
//     const lineItemList = order.lineItems.map(lineItem => (
//         <ListItem icon key={lineItem.id}>
//             <View>
//                 <Text>{lineItem.qty}</Text>
//             </View>
//             <Body>
//                 <Text>{lineItem.description}</Text>
//             </Body>
//             <View>
//                 <Text>${lineItem.total.toFixed(2)}</Text>
//             </View>
//         </ListItem>
//     ));

//     return (
//         <Container>
//             <Content>
//                 <List>
//                     <ListItem >
//                         <Text></Text>
//                     </ListItem>
//                     <ListItem>
//                         <Body>
//                             <Text>Order Number</Text>
//                             <Text note>{order.id}</Text>
//                         </Body>
//                     </ListItem>
//                     <ListItem>
//                         <Body>
//                             <Text>Date</Text>
//                             <Text note>{moment(order.createdAt).format('YYYY-MM-DD hh:mm A')}</Text>
//                         </Body>
//                     </ListItem>
//                     <ListItem >
//                         <Text></Text>
//                     </ListItem>
//                     {lineItemList}
//                     <ListItem >
//                         <Text></Text>
//                     </ListItem>
//                     <ListItem>
//                         <Body>
//                             <Text style={styles.subtotalsTxt}>Subtotal</Text>
//                         </Body>
//                         <View>
//                             <Text>${order.subtotal.toFixed(2)}</Text>
//                         </View>
//                     </ListItem>
//                     <ListItem>
//                         <Body>
//                             <Text style={styles.subtotalsTxt}>Tax</Text>
//                         </Body>
//                         <View>
//                             <Text>${order.tax.toFixed(2)}</Text>
//                         </View>
//                     </ListItem>
//                     <ListItem>
//                         <Body>
//                             <Text style={styles.subtotalsTxt}>Total</Text>
//                         </Body>
//                         <View>
//                             <Text>${order.total.toFixed(2)}</Text>
//                         </View>
//                     </ListItem>
//                     <ListItem >
//                         <Text></Text>
//                     </ListItem>
//                 </List>
//             </Content>
//         </Container>
//     );
// };

// export default Receipt;

//

import React from 'react';
import moment from 'moment';
import {View, Text} from 'react-native';

const Receipt = ({route}) => {
  const {order} = route.params;
  const lineItemList = order.lineItems.map(lineItem => (
    <View key={lineItem.id} style={{flexDirection: 'row', paddingVertical: 5}}>
      <View style={{flex: 1}}>
        <Text>{lineItem.qty}</Text>
      </View>
      <View style={{flex: 3}}>
        <Text>{lineItem.description}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text>${lineItem.total.toFixed(2)}</Text>
      </View>
    </View>
  ));

  return (
    <View>
      <View
        style={{padding: 10, borderBottomWidth: 1, borderBottomColor: 'black'}}>
        <Text />
      </View>
      <View style={{flexDirection: 'row', paddingVertical: 5}}>
        <View style={{flex: 1}}>
          <Text>Order Number</Text>
        </View>
        <View style={{flex: 3}}>
          <Text note>{order.id}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingVertical: 5}}>
        <View style={{flex: 1}}>
          <Text>Date</Text>
        </View>
        <View style={{flex: 3}}>
          <Text note>
            {moment(order.createdAt).format('YYYY-MM-DD hh:mm A')}
          </Text>
        </View>
      </View>
      <View
        style={{padding: 10, borderBottomWidth: 1, borderBottomColor: 'black'}}>
        <Text />
      </View>
      {lineItemList}
      <View
        style={{padding: 10, borderBottomWidth: 1, borderBottomColor: 'black'}}>
        <Text />
      </View>
      <View style={{flexDirection: 'row', paddingVertical: 5}}>
        <View style={{flex: 3}}>
          <Text>Subtotal</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>${order.subtotal.toFixed(2)}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingVertical: 5}}>
        <View style={{flex: 3}}>
          <Text>Tax</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>${order.tax.toFixed(2)}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingVertical: 5}}>
        <View style={{flex: 3}}>
          <Text>Total</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>${order.total.toFixed(2)}</Text>
        </View>
      </View>
      <View
        style={{padding: 10, borderBottomWidth: 1, borderBottomColor: 'black'}}>
        <Text />
      </View>
    </View>
  );
};

export default Receipt;
