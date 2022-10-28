import React from 'react';

const NestedMapping = () => {
    const users = [
        {
            name: 'Aminul',
            age: 43,
            address: [
                { permanent: 'Banani, Dhaka' },
                { present: 'Bashundhara, Dhaka' }
            ]
        },
        {
            name: 'Salam',
            age: 31,
            address: [
                { permanent: 'Bashundhara, Dhaka' },
                { present: 'Banani, Dhaka' }
            ]
        },
        {
            name: 'Jamilur',
            age: 24,
            address: [
                { permanent: 'Badda, Dhaka' },
                { present: 'Bosila, Dhaka' }
            ]
        }
    ]

    return (
        <div>
            <h1>Learning Nested Mapping</h1>
            {
                users.map(user=><div>
                    <h3>Name: {user.name}</h3>
                    <h4>Age: {user.age}</h4>
                    {
                        user.address.map(add => <div>
                            <p>Moved to {add.present} from {add.permanent}</p>
                        </div>)
                    }
                </div>)
            }
        </div>
    );
};

export default NestedMapping;