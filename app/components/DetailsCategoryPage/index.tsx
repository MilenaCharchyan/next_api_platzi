"use client";
import { getCategoryByIdData, selectCategory } from "@/lib/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "bootstrap/dist/css/bootstrap.min.css"; 
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
export const DetailsCategoryPage=React.memo(({id}:{id:number})=>{
    const category=useAppSelector(selectCategory);
    console.log(category);
    const dispatch=useAppDispatch();
    useEffect(()=>{
        if (id) {
            dispatch(getCategoryByIdData(id))
            
        }
    },[])
    return <div>
        <h3>Details Category</h3>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={category.image} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
      </Card.Body>
    </Card>

    </div>
})
