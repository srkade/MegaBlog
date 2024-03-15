import React,{useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input,RTE,Select} from '../index'
import appwruteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { UseSelector } from 'react-redux'

function PostForm(post) {
    const {register,handleSubmit,watch,setValue,control,getValues,}= useForm({defaultValues:{
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.status || '',
    }})
  return (
    <div>PostForm</div>
  )
}
export default PostForm
