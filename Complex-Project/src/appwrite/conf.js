import config from '../config/config.js';

import {Client, Databases, Storage, Query, ID} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket; // Storage service
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
            // .setKey(config.appwriteAPIKey);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,content,slug,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug, // Document ID (slug)     
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
            )
        }
        catch(error){
            console.error("Appwrite service:: createPost :: error",error);
        }

    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug, // Document ID (slug)     
            {
                title,
                content,
                featuredImage,
                status
            }
            )
        }
        catch(error){
            console.error("Appwrite service:: updatePost :: error",error);
        }



    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
            )
            return true;
        }
        catch(error){
            console.error("Appwrite service:: deletePost :: error",error);
            return false;
        }
        

    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
            )
        }
        catch(error){
            console.error("Appwrite service:: getPost :: error",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )

        }
        catch(error){
            console.error("Appwrite service:: getPosts :: error",error);
            return false;
        }
    }

    // file upload Service
    async uploadFile(file){
        try{
                await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        }
        catch(error){
            console.error("Appwrite service:: uploadFile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        }
        catch(error){
            console.error("Appwrite service:: deleteFile :: error",error);
            return false;
        }
    }

    // Since the file preview is a URL, we can directly return it from the service without the use of async/await
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId  
        )

    }


}
const service = new Service();

export default service;

