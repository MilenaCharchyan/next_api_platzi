"use client";
import { deleteCategoryByIdData, getCategoriesData, selectCategories } from "@/lib/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
export const ShowCategoryPage = React.memo(() => {
    const categories = useAppSelector(selectCategories)
    console.log(categories);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCategoriesData(''))
    }, [])

    return <div>
        <h3>Show Category</h3>
        {
            categories.map(elm => {
                return (
                    <Card key={elm.id} style={{ width: '18rem', display: "inline-block" }}>
                        <Card.Img variant="top" src={elm.image} />
                        <Card.Body>
                            <Card.Title>{elm.name} </Card.Title>

                            <Link href={"/category/" + elm.id}>Category Details</Link>
                            <Button onClick={() => {
                                dispatch(deleteCategoryByIdData(elm.id))
                                    .unwrap()
                                    .then(res => {
                                        dispatch(getCategoriesData(''))
                                        console.log(res);

                                    })
                            }}>&times;</Button>
                        </Card.Body>
                    </Card>

                )
            })
        }
    </div>
})
