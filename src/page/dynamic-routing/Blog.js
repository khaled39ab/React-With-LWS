import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const {id, title, desc} = blog;

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
            <h3>{title}</h3>
            <p>{sliceStr(desc, 100)} <Link to={blog.title} state={{desc, title}}>Learn More</Link></p>

        </article>
    );
};

export default Blog;