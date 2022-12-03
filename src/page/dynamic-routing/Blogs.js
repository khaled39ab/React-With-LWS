import React, { useState } from 'react';
import Blog from './Blog';
import { blogsData } from './blogsData';
import DynamicNavbar from './DynamicNavbar';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);

    return (
        <div>
            <DynamicNavbar />
            <h1>Blogs:</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </div>

    );
};

export default Blogs;