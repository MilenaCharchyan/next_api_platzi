"use client";
import { getUserByIdData, selectUser } from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "bootstrap/dist/css/bootstrap.min.css"; 
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
export const DetailsUserPage=React.memo(({id}:{id:number})=>{
    const user=useAppSelector(selectUser);
    console.log(user);
    const dispatch=useAppDispatch();
    useEffect(()=>{
        if (id) {
            dispatch(getUserByIdData(id))
            
        }
    },[])
    
    return <div>
        <h3>Details User</h3>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.avatar} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Card.Text>
            {user.role}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
})
