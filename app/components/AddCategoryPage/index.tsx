"use client";
import { createCategoryData } from "@/lib/features/category/categorySlice";
import { useAppDispatch } from "@/lib/hooks";
import { ICategory } from "@/lib/type/type";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
export const AddCategoryPage = React.memo(() => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICategory>();
    const dispatch = useAppDispatch()
    const save = (data: ICategory) => {
        console.log(data);
        dispatch(createCategoryData(data))
        reset()

    }
    return <div>
        <h3>Add Category</h3>
        <Form noValidate onSubmit={handleSubmit(save)}>
            <Row className="mb-3">
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        {...register('name', { required: 'enter category name' })}
                        type="text"
                        placeholder="name"
                    />
                    {errors.name && <Form.Text>{errors.name.message}</Form.Text>}

                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        required
                        {...register('image', { required: 'enter category image' })}
                        type="text"
                        placeholder="image"
                    />
                    {errors.image && <Form.Text>{errors.image.message}</Form.Text>}
                </Form.Group>

            </Row>


            <Button type="submit">Submit form</Button>
        </Form>
    </div>
})
