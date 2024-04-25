import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';

const client = generateClient();

export const gettingOrder = async (orderId) => {
  console.log('in fetching orders');
  try {
    await Amplify.configure({
      API: {
        GraphQL: {
          endpoint:
            'https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql',
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a',
        },
      },
    });
    const result = await client.graphql({
      query: `
      query GetOrder($id:ID!) {
        getOrder(id:$id ) {
            id
            totalPrice
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
            customerOrdersId
            status
            paymentMethod
        }
        
      }
          `,variables: { id: orderId }
    });
    console.log('order result ', result.data);
    return result.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};
