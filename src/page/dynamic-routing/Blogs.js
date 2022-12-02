import React from 'react';

const Blogs = ({ blog }) => {

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
            <p>{sliceStr(blog.desc, 100)}</p>
        </article>
    );
};

export default Blogs;