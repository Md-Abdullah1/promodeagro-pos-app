import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';

const client = generateClient();

export const fetchingOrders = async () => {
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
            query ListOrders(
                $filter: ModelOrderFilterInput
                $limit: Int
                $nextToken: String
              ) {
                listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
                  items {
                    id
                    totalPrice
                    createdAt
                    updatedAt
                    _version
                    __typename
                    customerId
                    status
                    paymentMethod
                    items{
                      productId
                      quantity
                    }
                  }
                }
              }
          `,
    });
    console.log('orders result ', result);
    return result.data.listOrders.items;
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};
