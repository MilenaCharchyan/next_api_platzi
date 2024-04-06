"use client";
import { getCategoriesData, selectCategories } from "@/lib/features/category/categorySlice";
import { deleteProductByIdData, filterProductByCategoryData, filterProductByPriceRangeData, filterProductByTitleData, getProductsData, selectProducts } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { IRange } from "@/lib/type/type";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Range } from "react-range";
export const ShowProductsPage = React.memo(() => {
    const products = useAppSelector(selectProducts)
    const categories = useAppSelector(selectCategories)

    const [rangevalue, setrangevalue] = useState<IRange>({
        price_min: 0,
        price_max: 100
    })
    console.log(products);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProductsData(''))
        dispatch(getCategoriesData(''))

    }, [])

    return <div>
        <h3>Show Products</h3>
        <Form.Select onChange={(e) => {
            dispatch(filterProductByCategoryData(+e.target.value))
        }}>
            {
                categories.map(elm => {
                    return <option key={elm.id} value={elm.id}>{elm.name}</option>
                })
            }
        </Form.Select>
        <hr />
        <Form.Control
            onChange={(e) => {
                dispatch(filterProductByTitleData(e.target.value))
            }}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />


        <hr />
        <br />
        <h3>min - {rangevalue.price_min} </h3>
        <h3>max - {rangevalue.price_max} </h3>
        <Range
            step={0.1}
            min={0}
            max={1000}
            values={[rangevalue.price_min, rangevalue.price_max]}
            onChange={(values) => {
                setrangevalue({
                    price_min: values[0],
                    price_max: values[1]
                })
                dispatch(filterProductByPriceRangeData(rangevalue))
            }}
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '6px',
                        width: '50%',
                        backgroundColor: '#44F'
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({ props }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '20px',
                        width: '20px',
                        backgroundColor: '#00f'
                    }}
                />
            )}
        />

        <br />
        <br />
        <hr />
        {
            products.map(elm => {
                return (
                    <Card key={elm.id} style={{ width: '12rem', display: "inline-block" }}>
                        {
                            elm.images.map((elm, i) => {
                                return <Card.Img src={elm} key={i} width={50} />
                            })}
                        <Card.Body>
                            <Card.Title>{elm.title}</Card.Title>
                            <Card.Title>{elm.price} </Card.Title>
                            <Card.Title>{elm.category.name}</Card.Title>

                            <Link href={"/product/" + elm.id}>Product Details</Link>
                            <Button onClick={() => {
                                dispatch(deleteProductByIdData(elm.id))
                                    .unwrap()
                                    .then(res => {
                                        dispatch(getProductsData(''))
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



