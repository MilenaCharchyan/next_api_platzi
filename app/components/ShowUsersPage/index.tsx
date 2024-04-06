"use client";
import { getUsersData, selectUser, selectUsers } from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
export const ShowUsersPage = React.memo(() => {
    const users = useAppSelector(selectUsers)
    console.log(users);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUsersData(''))
    }, [])

    return <div>
        <h3>Show Users</h3>

        {

            users.map(elm => {
                return (
                    <Card key={elm.id} style={{ width: '18rem' , display:"inline-block"}}>
                        <Card.Img variant="top" src={elm.avatar} />
                        <Card.Body>
                            <Card.Title>{elm.name} </Card.Title>
                            
                            <Link href={"/users/"+elm.id}>User Details</Link>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </div>
})
