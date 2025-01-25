import React from "react";
import service from "../appwrite/conf"
import {Link} from "react-router-dom"

// $id is a syntax for id in "appwrite"
// For displaying the post card in the home page, we need to pass the id, title and featuredImage
function postCard({$id, title, featuredImage}){
    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={service.getFilePreview(featuredImage)} alt={title} 
                    // getFilePreview() is a function in the "conf.js" file from where service is imported
                    className="rounded-xl" />
                </div>
                <h2
                className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default postCard