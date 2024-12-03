import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light pt-20">
      <div className="max-w-3xl mx-auto mt-10">
        {/* Add blog content here */}
        <p>My blog posts will be displayed here. Blogs can be about personal learnings or anything else I find interesting in life.</p>
      </div>
    </div>
  );
};

export default Blog;
