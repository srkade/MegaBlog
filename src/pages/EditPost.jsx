import React,{useEffect,useState} from 'react'
import { Container,PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'



function EditPost() {
    const [posts,setPosts]=useState([])
    const {slug}=useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate("/")
        }
    },[slug,navigate])

  return {
    
  }

}

export default EditPost