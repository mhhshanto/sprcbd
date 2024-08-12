"use client"
import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { Button, Form } from 'react-bootstrap';
import { Loader2 } from 'lucide-react';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import toast, { Toaster } from 'react-hot-toast';
import "./dashboard.css"


const img_hosting_api = `https://api.imgbb.com/1/upload?key=dba83ae483256811942a712f4a815835`

function EditBlog({ blog }) {

    const [content, setContent] = useState(blog?.content);
    const [content2, setContent2] = useState(blog?.content2);
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
        const queryTitle = title.toLowerCase().split(' ').join('-');

        // photo no-1
        const photo = form.photo.files[0];
        let img_url
        if(photo){
            const imgFile = { image: photo }
            const res = await axiosPublic.post(img_hosting_api, imgFile, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })

           img_url = res?.data?.data?.display_url;
        }

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


            const formData = {
                title,
                img_url,
                img_url2,
                queryTitle,
                id: blog._id,
                Author_Name,
                content,
                content2,
                category
            };

            if (!content.trim()) {
                setLoading(false)
                return toast.error('Blog description is missing')
            }

                axiosPublic.patch('/edit-blog', { formData })
                    .then(res => {
                        if (res.data.acknowledged) {
                            toast.success('Blog edit successfully!')
                            setLoading(false)
                        }
                    })
                    .catch(err => {
                        setLoading(false)
                    })
            

    };



    return (
        <div className="">
            <div className='rounded p-4 w-100 shadow-lg border'>
                <h1 className='mb-6 fw-semibold display-4'>Edit The Blog</h1>
                <form onSubmit={submitPost} className='w-100 d-flex flex-column gap-3'>
                    <div className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50 rounded">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input defaultValue={blog.title} required name='title' id='title' type="text" placeholder="Title" className="form-control" />
                    </div>

                    <div className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50 rounded">
                        <label htmlFor="Author Name" className="form-label">Author Name</label>
                        <input defaultValue={blog?.Author_Name} required name='Author_Name' id='Author Name' type="text" placeholder="Name" className="form-control" />
                    </div>

                    <div className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50">
                        <label className='d-block' htmlFor="exampleSelect">Select Category</label>
                        <select name='category' class="custom-select w-100 custom-select-sm" id="exampleSelect">
                            <option selected>{blog?.category}</option>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </div>

                    <div className="mb-2 w-100 md:w-80 lg:w-60 xl:w-50 rounded">
                        <label htmlFor="picture" className="form-label">Banner Photo</label>
                        <input name='photo' id="picture" type="file" className="form-control" />
                    </div>

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
                            listAdvancedTypes: true
                        }}
                    />


                    <div className="mb-2 w-100 cursor-pointer md:w-80 lg:w-60 xl:w-50">
                        <label htmlFor="picture2" className="form-label">Banner Photo-2</label>
                        <input name="photo2" id="picture2" type="file" className="form-control" />
                    </div>

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
                            <button className='btn btn-primary rounded' disabled>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Please wait
                            </button> :
                            <button
                                type='submit'
                                className='btn btn-primary rounded px-5 lg:px-12'
                            >
                                Submit
                            </button>
                    }

                </form>
            </div>
            <Toaster/>
        </div>
    )
}

export default EditBlog