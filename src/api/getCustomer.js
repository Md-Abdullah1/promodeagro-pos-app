import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

 export  const gettingCustomer = async (id)=>{
  console.log('in getting customer');
      try{
        await Amplify.configure({
          API: {
            GraphQL: {
              endpoint: "https://r7q2x3svonbvbg3qt4da6diuty.appsync-api.us-east-1.amazonaws.com/graphql",
              region: 'us-east-1',
              defaultAuthMode: 'apiKey',
              apiKey: 'da2-tt7a24loa5ch7ceq7onemeej7a'
            }
          }
        });
        const result = await client.graphql({
          query: `
              query GetCustomer($id: ID!) {
                  getCustomer(id: $id) {
                      name
                      phone
                      id
                  }
              }
          `,
          variables: { id: id }
      });
        console.log('getting customer result',result)
        // console.log('customers result ',result.data.listCustomers.items);
        return result.data.getCustomer
      }
      catch (error) {
        console.error('Error fetching customer:', error);
      } 
      
    }