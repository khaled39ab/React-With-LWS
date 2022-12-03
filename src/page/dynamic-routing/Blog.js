import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const sliceStr = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...'
        }
        else {
            return str;
        }
    }
    return (
        <article style={{ margin: '20px' }}>
            <h3>{blog.title}</h3>
            <p>{sliceStr(blog.desc, 100)} <Link to={blog.title}>Learn More</Link></p>

        </article>
    );
};

export default Blog;