import {Amplify} from 'aws-amplify';
import {generateClient, graphqlOperation} from 'aws-amplify/api';

const client = generateClient();
export const updatingOrder = async (order) => {
  // data {paymentMethod: payment,        id: orderId,        status: 'FULFILLED',        totolPrice: updateTotal,        customerId: customerId, }
  console.log('updating order ', order);
  try {
    await Amplify.configure({
      API: {
        GraphQL: {
          endpoint:
          "https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql",
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a',
        },
      },
    });
    const result = await client.graphql({
      query: `
      mutation UpdateOrder($id:ID!,$paymentMethod: PaymentCategory!,$status: OrderStatus!) 
      {
        updateOrder(input: { 
            id:$id , status: $status, paymentMethod: $paymentMethod,
        }) {
          totalPrice
          id
        
          status
          paymentMethod
        }
      }
      
      `,
     
      variables: {
        id:order.id,
        status:order.status,
        paymentMethod: order.paymentMethod,

      },
    });

    console.log('success', result);
    return result.data.updateOrder;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};