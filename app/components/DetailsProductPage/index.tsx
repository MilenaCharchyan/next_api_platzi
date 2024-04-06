"use client";
import { getProductByIdData, selectProduct } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
export const DetailsProductPage = React.memo(({ id }: { id: number }) => {
    const product = useAppSelector(selectProduct);
    console.log(product);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(getProductByIdData(id))

        }
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return <div>
        <h3>Details Product</h3>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                product.images?.map((elm, i) => {
                    return <Carousel.Item key={i}>

                        <img src={elm} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}


        </Carousel>
        <Card style={{ width: '30rem' }}>
            <div style={{ display: "flex" }}>


            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                <Card.Title>{product.description}</Card.Title>
                <Card.Title>{product.categoryId}</Card.Title>
            </Card.Body>
        </Card>


    </div>
})
