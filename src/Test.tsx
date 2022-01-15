import React, { useState, useEffect } from 'react';

// API
interface User {
  name: string;
}

// Props or State
type TodoProps = {
  name: string;
};

const Todo: React.FC<TodoProps> = ({ name = 'name' }) => {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {}, []);

  return (
    <>
      {user.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};

export default Todo;
