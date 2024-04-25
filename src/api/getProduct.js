import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
const client = generateClient();
export const getProduct = async (productId) => {
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
            query getProduct($id:ID!) {
              getProduct(id:$id) {
                id
                  image
                  name
                  price
                  unit
                  category
              }
            }
          `,variables: { id: productId }
    });

    console.log('product dettails',result);
    return result.data.getProduct
    
  } catch (error) {
    console.log('error getting product',error);
  }
};
