import React from 'react';
import { useParams } from 'react-router-dom';

const Slug = () => {
  //fetch the slug from the url
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default Slug;
