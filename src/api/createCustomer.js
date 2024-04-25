

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
// import { API } from 'aws-amplify';
const client = generateClient();

export const creatingCustomer = async (details) => {
  console.log('in creating customer', details);
  try {
    await Amplify.configure({
      API: {
        GraphQL: {
          endpoint:"https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql",
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a',
        },
      },
    });
    const result = await client.graphql({
      query: `
              mutation  MyMutation($name: String!, $phone: String!) {
                createCustomer(input: {name: $name, phone: $phone}) {
                  name
                  phone
                  id
                  
                }
              }
            `,
      variables: {
        name: details.name,
        phone: details.phone, // Replace this with the actual total price value
      },
    });

    console.log('success', result);
    return result.data.createCustomer;
  } catch (error) {
    console.error('Error :', error);
  }
};