import React, { useState } from 'react';
import Blog from './Blog';
import { blogsData } from './blogsData';
import DynamicNavbar from './DynamicNavbar';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);

    return (
        <div>
            <DynamicNavbar />
            <section>
                <h1>Blogs:</h1>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </section>
        </div>

    );
};

export default Blogs;