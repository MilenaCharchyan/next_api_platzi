"use client";
import { getCategoriesData, selectCategories } from "@/lib/features/category/categorySlice";
import { createProductData } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { IProduct } from "@/lib/type/type";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
export const AddProductPage = React.memo(() => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>();
    const categories = useAppSelector(selectCategories)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCategoriesData(''))
    }, [])


    const save = (data: IProduct) => {
        console.log({...data, images:[data.images]});
        dispatch(createProductData({...data, images:["https://i.imgur.com/YaSqa06.jpeg"]}))
        .unwrap()
        .then(console.log)
        reset()

    }
    return <div>
        <h3>Add Product</h3>
        <Form noValidate onSubmit={handleSubmit(save)}>
            <Row className="mb-3">
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        required
                        {...register('title', { required: 'enter product title' })}
                        type="text"
                        placeholder="title"
                    />
                    {errors.title && <Form.Text>{errors.title.message}</Form.Text>}

                </Form.Group>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        required
                        {...register('price', { 
                            required: 'enter product price',
                            pattern:{
                                value:/^\d+$/,
                                message:"enter number value"
                            }
                         })}
                        type="text"
                        placeholder="price"
                    />
                    {errors.price && <Form.Text>{errors.price.message}</Form.Text>}

                </Form.Group>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        {...register('description', { required: 'enter product description' })}
                        type="text"
                        placeholder="description"
                    />
                    {errors.description && <Form.Text>{errors.description.message}</Form.Text>}

                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        required
                        {...register('images', { required: 'enter product image' })}
                        type="text"
                        placeholder="image"
                    />
                    {errors.images && <Form.Text>{errors.images.message}</Form.Text>}
                </Form.Group>

                <Form.Select {...register("categoryId")}>
                    {
                        categories.map(elm => {
                            return <option key={elm.id} value={elm.id}>{elm.name}</option>
                        })
                    }
                </Form.Select>

            </Row>


            <Button type="submit">Submit form</Button>
        </Form>
    </div>
})
