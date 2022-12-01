import React from 'react';

const Blogs = ({ blog }) => {

    return (
        <article style={{ margin: '20px' }}>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
        </article>
    );
};

export default Blogs;