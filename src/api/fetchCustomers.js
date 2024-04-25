import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

 export  const fetchingCustomers = async ()=>{
  console.log('in fetching customers');
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
        var result = await client.graphql({
          query: `
          query MyQuery {
            listCustomers {
              items {
                id
                name
                phone
                
              }
            }
          }
          `,
        });
        console.log('customers result ',result.data.listCustomers.items);
        return result.data.listCustomers.items
      }
      catch (error) {
        console.error('Error fetching customers:', error);
      } 
      
    
    }