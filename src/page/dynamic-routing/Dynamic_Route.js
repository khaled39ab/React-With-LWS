import React from 'react';
import { useState } from 'react';

const blogsData = [
    {
        id: 101,
        title: 'HTML',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit adipisci itaque amet non quod culpa ad alias quidem corporis, totam aspernatur hic, rem perspiciatis. Praesentium repudiandae perspiciatis veritatis quidem pariatur hic vero quibusdam, aspernatur odio mollitia provident illum temporibus animi sint eos nihil enim rem sequi inventore deserunt, molestias quam. Deleniti possimus quod at, nam modi explicabo. Voluptate sunt consectetur et iusto! Soluta nihil ratione in magnam magni dolore ipsum esse, id et quod cupiditate, vel nobis impedit illo blanditiis corporis accusantium at veritatis. Iusto qui ipsa, eveniet eos nostrum similique ullam repellat quas autem eaque! Dolore voluptate aspernatur magni odio temporibus corrupti ad consequatur, exercitationem recusandae obcaecati vitae sint necessitatibus ullam. Itaque dolore saepe, odio consequuntur vitae tenetur? Provident, quos optio nihil reprehenderit ratione consequuntur nisi assumenda sit. Iusto numquam repudiandae est illum, perspiciatis aliquid architecto magni tenetur esse aliquam repellat quasi? Non eos, impedit atque provident esse in aliquid. Laboriosam vero alias magni sunt esse illum provident dicta, earum quidem reiciendis vel blanditiis in atque nulla dolores nihil dolor deserunt sequi et exercitationem odio temporibus accusantium nisi natus. Pariatur dolor aliquid laborum quas libero maxime, saepe eum enim natus. Doloribus quo aliquam, nam commodi quam possimus dignissimos.'
    },

    {
        id: 102,
        title: 'HTML',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit adipisci itaque amet non quod culpa ad alias quidem corporis, totam aspernatur hic, rem perspiciatis. Praesentium repudiandae perspiciatis veritatis quidem pariatur hic vero quibusdam, aspernatur odio mollitia provident illum temporibus animi sint eos nihil enim rem sequi inventore deserunt, molestias quam. Deleniti possimus quod at, nam modi explicabo. Voluptate sunt consectetur et iusto! Soluta nihil ratione in magnam magni dolore ipsum esse, id et quod cupiditate, vel nobis impedit illo blanditiis corporis accusantium at veritatis. Iusto qui ipsa, eveniet eos nostrum similique ullam repellat quas autem eaque! Dolore voluptate aspernatur magni odio temporibus corrupti ad consequatur, exercitationem recusandae obcaecati vitae sint necessitatibus ullam. Itaque dolore saepe, odio consequuntur vitae tenetur? Provident, quos optio nihil reprehenderit ratione consequuntur nisi assumenda sit. Iusto numquam repudiandae est illum, perspiciatis aliquid architecto magni tenetur esse aliquam repellat quasi? Non eos, impedit atque provident esse in aliquid. Laboriosam vero alias magni sunt esse illum provident dicta, earum quidem reiciendis vel blanditiis in atque nulla dolores nihil dolor deserunt sequi et exercitationem odio temporibus accusantium nisi natus. Pariatur dolor aliquid laborum quas libero maxime, saepe eum enim natus. Doloribus quo aliquam, nam commodi quam possimus dignissimos.'
    },
    {
        id: 103,
        title: 'HTML',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit adipisci itaque amet non quod culpa ad alias quidem corporis, totam aspernatur hic, rem perspiciatis. Praesentium repudiandae perspiciatis veritatis quidem pariatur hic vero quibusdam, aspernatur odio mollitia provident illum temporibus animi sint eos nihil enim rem sequi inventore deserunt, molestias quam. Deleniti possimus quod at, nam modi explicabo. Voluptate sunt consectetur et iusto! Soluta nihil ratione in magnam magni dolore ipsum esse, id et quod cupiditate, vel nobis impedit illo blanditiis corporis accusantium at veritatis. Iusto qui ipsa, eveniet eos nostrum similique ullam repellat quas autem eaque! Dolore voluptate aspernatur magni odio temporibus corrupti ad consequatur, exercitationem recusandae obcaecati vitae sint necessitatibus ullam. Itaque dolore saepe, odio consequuntur vitae tenetur? Provident, quos optio nihil reprehenderit ratione consequuntur nisi assumenda sit. Iusto numquam repudiandae est illum, perspiciatis aliquid architecto magni tenetur esse aliquam repellat quasi? Non eos, impedit atque provident esse in aliquid. Laboriosam vero alias magni sunt esse illum provident dicta, earum quidem reiciendis vel blanditiis in atque nulla dolores nihil dolor deserunt sequi et exercitationem odio temporibus accusantium nisi natus. Pariatur dolor aliquid laborum quas libero maxime, saepe eum enim natus. Doloribus quo aliquam, nam commodi quam possimus dignissimos.'
    },
    {
        id: 104,
        title: 'HTML',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit adipisci itaque amet non quod culpa ad alias quidem corporis, totam aspernatur hic, rem perspiciatis. Praesentium repudiandae perspiciatis veritatis quidem pariatur hic vero quibusdam, aspernatur odio mollitia provident illum temporibus animi sint eos nihil enim rem sequi inventore deserunt, molestias quam. Deleniti possimus quod at, nam modi explicabo. Voluptate sunt consectetur et iusto! Soluta nihil ratione in magnam magni dolore ipsum esse, id et quod cupiditate, vel nobis impedit illo blanditiis corporis accusantium at veritatis. Iusto qui ipsa, eveniet eos nostrum similique ullam repellat quas autem eaque! Dolore voluptate aspernatur magni odio temporibus corrupti ad consequatur, exercitationem recusandae obcaecati vitae sint necessitatibus ullam. Itaque dolore saepe, odio consequuntur vitae tenetur? Provident, quos optio nihil reprehenderit ratione consequuntur nisi assumenda sit. Iusto numquam repudiandae est illum, perspiciatis aliquid architecto magni tenetur esse aliquam repellat quasi? Non eos, impedit atque provident esse in aliquid. Laboriosam vero alias magni sunt esse illum provident dicta, earum quidem reiciendis vel blanditiis in atque nulla dolores nihil dolor deserunt sequi et exercitationem odio temporibus accusantium nisi natus. Pariatur dolor aliquid laborum quas libero maxime, saepe eum enim natus. Doloribus quo aliquam, nam commodi quam possimus dignissimos.'
    },

    {
        id: 105,
        title: 'HTML',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit adipisci itaque amet non quod culpa ad alias quidem corporis, totam aspernatur hic, rem perspiciatis. Praesentium repudiandae perspiciatis veritatis quidem pariatur hic vero quibusdam, aspernatur odio mollitia provident illum temporibus animi sint eos nihil enim rem sequi inventore deserunt, molestias quam. Deleniti possimus quod at, nam modi explicabo. Voluptate sunt consectetur et iusto! Soluta nihil ratione in magnam magni dolore ipsum esse, id et quod cupiditate, vel nobis impedit illo blanditiis corporis accusantium at veritatis. Iusto qui ipsa, eveniet eos nostrum similique ullam repellat quas autem eaque! Dolore voluptate aspernatur magni odio temporibus corrupti ad consequatur, exercitationem recusandae obcaecati vitae sint necessitatibus ullam. Itaque dolore saepe, odio consequuntur vitae tenetur? Provident, quos optio nihil reprehenderit ratione consequuntur nisi assumenda sit. Iusto numquam repudiandae est illum, perspiciatis aliquid architecto magni tenetur esse aliquam repellat quasi? Non eos, impedit atque provident esse in aliquid. Laboriosam vero alias magni sunt esse illum provident dicta, earum quidem reiciendis vel blanditiis in atque nulla dolores nihil dolor deserunt sequi et exercitationem odio temporibus accusantium nisi natus. Pariatur dolor aliquid laborum quas libero maxime, saepe eum enim natus. Doloribus quo aliquam, nam commodi quam possimus dignissimos.'
    },
]

const Dynamic_Route = () => {
    const [blogs, setBlogs] = useState(blogsData);
    
    return (
        <div>

        </div>
    );
};

export default Dynamic_Route;