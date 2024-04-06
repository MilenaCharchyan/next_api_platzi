"use client";
import { createUserData } from "@/lib/features/user/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { IUser } from "@/lib/type/type";
import "bootstrap/dist/css/bootstrap.min.css"; 
import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
export const AddUserPage=React.memo(()=>{
    const {register,handleSubmit,reset,formState:{errors}}=useForm<IUser>();
    const dispatch=useAppDispatch()
    const save=(data:IUser)=>{
        console.log(data);
        dispatch(createUserData(data))
        reset()
    }
    return <div>
        <h3>Add User</h3>
        <Form noValidate onSubmit={handleSubmit(save)}>
            <input {...register('name',{required:'enter your name'})} />
            {errors.name && <p>{errors.name.message}</p>}
            <input {...register('email',{required:'enter your email'})} />
            {errors.email && <p>{errors.email.message}</p>}
            <input {...register('password',{required:'enter your password'})} />
            {errors.password && <p>{errors.password.message}</p>}
            <input {...register('avatar',{required:'enter your avatar'})} />
            {errors.avatar && <p>{errors.avatar.message}</p>}
            <button>save</button>


        </Form>
    </div>
})
