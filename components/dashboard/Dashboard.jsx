"use client"
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Form, Spinner } from 'react-bootstrap';
import useAxiosPublic from '../../hooks/useAxiosPublic'
import { transliterate } from 'transliteration';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import './dashboard.css'


const img_hosting_api = `https://api.imgbb.com/1/upload?key=dba83ae483256811942a712f4a815835`



function Dashboard() {
    const [content, setContent] = useState('');
    const [content2, setContent2] = useState('');
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)


    const handleModelChange = (model) => {
        setContent(model);
    };

    const handleModelChange2 = (model) => {
        setContent2(model);
    };



    const submitPost = async (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const Author_Name = form.Author_Name.value;
        const category = form.category.value;
        const queryTitle = transliterate(title).toLowerCase().replace(/[^\w\s-]/g, '').trim()
            .replace(/\s+/g, '-');
        // photo on-1
        const photo = form.photo.files[0];
        const imgFile = { image: photo }
        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
        const img_url = res?.data?.data?.display_url;

        // photo no-2
        const photo2 = form.photo2.files[0];
        let img_url2
        if(photo2){
            const imgFile2 = { image: photo2 }
            const res2 = await axiosPublic.post(img_hosting_api, imgFile2, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })

           img_url2 = res2?.data?.data?.display_url;
        }
        
         
        

        // create date
        const postedDate = new Date();
        

        const formData = {
            title,
            img_url,
            img_url2,
            queryTitle,
            content,
            content2,
            Author_Name,
            postedDate,
            category
        };

        if (!content.trim()) {
            setLoading(false)
            return toast.error('Blog description is missing')
        }

        if (img_url) {

            axiosPublic.post('/single-blog', { formData })
                .then(res => {
                    if (res.data.acknowledged) {
                        setLoading(false)
                        toast.success('Blog post successfully!')

                    }
                })
                .catch(err => {
                    setLoading(false)
                })
        } else {
            toast.error('Photo is not support!')
            setLoading(false)
        }

    };


    return (
        <div className="min-vh-100">
            <div className="rounded p-4 w-100 shadow-lg border">
                <h1 className="mb-4 font-weight-semibold display-4">Post A Blog</h1>
                <Form onSubmit={submitPost} className="w-100 d-flex flex-column gap-3">

                    <Form.Group className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50">
                        <Form.Label htmlFor="title">Title</Form.Label>
                        <Form.Control required name="title" id="title" type="text" placeholder="Title" />
                    </Form.Group>

                    <Form.Group className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50">
                        <Form.Label htmlFor="Author Name">Author Name</Form.Label>
                        <Form.Control required name="Author_Name" id="Author Name" type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50">
                        <Form.Label className='d-block' htmlFor="exampleSelect">Select Category</Form.Label>
                        <select name='category' class="custom-select w-100 custom-select-sm" id="exampleSelect">
                            <option selected>Open this Categories menu</option>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-2 w-100 cursor-pointer md:w-80 lg:w-60 xl:w-50">
                        <Form.Label htmlFor="picture">Banner Photo</Form.Label>
                        <Form.Control required name="photo" id="picture" type="file" />
                    </Form.Group>

                    <FroalaEditor
                        tag='textarea'
                        model={content}
                        onModelChange={handleModelChange}
                        config={{
                            placeholderText: 'Edit Your Blog Details Here!',
                            charCounterCount: false,
                            toolbarButtons: [
                                'bold', 'italic', 'underline',
                                'fontSize', 'color',
                                'outdent', 'indent', 'undo', 'redo', 'clearFormatting', 'selectAll', 'align', 'formatOL', 'formatUL'
                            ],
                            fontSizeSelection: true,
                            fontSize: ['8', '10', '12', '14', '16', '18', '24', '30', '36', '42', '48'],
                            listAdvancedTypes: true,
                        }}
                    />

                    <Form.Group className="mb-2 w-100 cursor-pointer md:w-80 lg:w-60 xl:w-50">
                        <Form.Label htmlFor="picture2">Banner Photo-2</Form.Label>
                        <Form.Control name="photo2" id="picture2" type="file" />
                    </Form.Group>

                    <FroalaEditor
                        tag='textarea'
                        model={content2}
                        onModelChange={handleModelChange2}
                        config={{
                            placeholderText: 'Edit Your Blog Details Here!',
                            charCounterCount: false,
                            toolbarButtons: [
                                'bold', 'italic', 'underline',
                                'fontSize', 'color',
                                'outdent', 'indent', 'undo', 'redo', 'clearFormatting', 'selectAll', 'align', 'formatOL', 'formatUL'
                            ],
                            fontSizeSelection: true,
                            fontSize: ['8', '10', '12', '14', '16', '18', '24', '30', '36', '42', '48'],
                            listAdvancedTypes: true,
                        }}
                    />

                    {
                        loading ?
                            <Button className="w-auto rounded" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Please wait
                            </Button> :
                            <Button type="submit" className="w-auto lg:px-4 px-2 rounded">
                                Submit
                            </Button>
                    }

                </Form>
            </div>

            <Toaster />
        </div>
    );
}

export default Dashboard