import config from "../config/config";

import {Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // Call another method
                return this.login({email, password});
                
            }
            else {
                return userAccount
            }
        }
        catch(error) {
            console.error(error);
        }
        
    }

    async login({email, password}) {
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch(error) {
            throw error;
        }
    }

    // This method is for whether the user is logged in or not
    async getCurrentUser() {
        try{
            return await this.account.get();
        }
        catch(error) {
           console.log("Appwrite service:: getCurrentUser :: error", error); 
        }
        return null;
    }

    async logout() {
        try{
            return await this.account.deleteSessions();
        }
        catch(error) {
            throw error;
        }
    }   
}




const authService = new AuthService(); // Created an instance of AuthService class as authService is an object of AuthService class

export default authService;


// Same as above but the above code is more optimized and clean
// This is directly given in "Start with Authentication" section of the documentation of "Appwrite"

// import config from "../config/config";
// import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );
