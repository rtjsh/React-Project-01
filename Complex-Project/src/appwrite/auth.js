// If we want to change our backend service from Appwrite to any other service then we have to change only this file and not the whole project.

import config from "../config/config";

import {Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client(); // creating a new instance of the Client class from the Appwrite SDK.
    account;

    // Constructor is a special method that is called when an instance of a class is created.
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client); // the Account object is used for handling user accounts, and passing this.client (which is already set up with the correct endpoint and project) to the Account constructor links it to your specific Appwrite instance and project.
    }

    async createAccount({email, password, name}) {
        try {
            // Create a new user account with the provided email, password, and name
            await this.account.create(ID.unique(), email, password, name);
            
            // If account creation is successful, log the user in
            return this.login({email, password});
        } catch (error) {
            // Handle any errors that occur
            console.error('Error during account creation:', error);
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
        return null; // if both try and catch block fails then return null
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
