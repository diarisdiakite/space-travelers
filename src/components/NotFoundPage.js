import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });

  return (
    <div className="main-container">
      <h2>This Page is not found</h2>
      <p>
        Please contact us at
        <strong> diarisdiakite@gmail.com </strong>
        and
        <strong> brunokambere@gmail.com</strong>
      </p>
    </div>
  );
}

export default NotFoundPage;
