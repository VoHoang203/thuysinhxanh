import React, { useState } from 'react';

const BlogAdmin = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [shortContent, setShortContent] = useState('');
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!title || !description || !shortContent || !image || !author || !date) {
      return;
    }

    setIsSubmitting(true);

    const blogData = { title, description, shortContent, image, author, date };
    console.log("Blog Post Submitted:", blogData);

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset form
    setTitle('');
    setDescription('');
    setShortContent('');
    setImage(null);
    setAuthor('');
    setDate(new Date().toISOString().split('T')[0]);
    setImagePreview(null);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setShortContent('');
    setImage(null);
    setAuthor('');
    setDate(new Date().toISOString().split('T')[0]);
    setImagePreview(null);
  };

  return (
    <div>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      <style>{`
        .admin-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          padding: 2rem 0;
        }
        .admin-card {
          border: none;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: white;
        }
        .admin-header {
          background: white;
          border-bottom: 2px solid #e9ecef;
          border-radius: 10px 10px 0 0;
          padding: 1.5rem;
        }
        .form-control {
          border-radius: 6px;
          border: 1px solid #dee2e6;
          padding: 0.75rem 1rem;
        }
        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }
        .section-box {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .section-title {
          color: #495057;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .image-upload {
          border: 2px dashed #dee2e6;
          border-radius: 6px;
          padding: 1.5rem;
          text-align: center;
          background: white;
        }
        .image-preview {
          border-radius: 6px;
          overflow: hidden;
          margin-top: 1rem;
        }
        .btn-primary {
          border-radius: 6px;
          padding: 0.75rem 2rem;
          font-weight: 500;
        }
        .btn-outline-secondary {
          border-radius: 6px;
          padding: 0.75rem 2rem;
          font-weight: 500;
        }
      `}</style>
      
      <div className="admin-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="card admin-card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="section-box">
                        <h5 className="section-title">Content Information</h5>
                        
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Blog Title *</label>
                          <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control"
                            placeholder="Enter blog title..."
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-semibold">Description *</label>
                          <textarea
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control"
                            placeholder="Enter blog description..."
                            required
                          />
                        </div>

                        <div className="mb-0">
                          <label className="form-label fw-semibold">Short Content / Excerpt *</label>
                          <textarea
                            rows={5}
                            value={shortContent}
                            onChange={(e) => setShortContent(e.target.value)}
                            className="form-control"
                            placeholder="Enter short content..."
                            required
                          />
                          <div className="form-text text-muted">
                            This excerpt will be displayed in blog previews
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="section-box">
                        <h5 className="section-title">Featured Image</h5>
                        
                        <div className="image-upload">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="form-control"
                          />
                        </div>
                        
                        {imagePreview && (
                          <div className="image-preview">
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              className="img-fluid"
                              style={{ width: '100%', height: '90px', objectFit: 'cover' }}
                            />
                          </div>
                        )}
                      </div>
                      
                      <div className="section-box">
                        <h5 className="section-title">Publishing Details</h5>
                        
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Author Name *</label>
                          <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="form-control"
                            placeholder="Enter author name..."
                            required
                          />
                        </div>

                        <div className="mb-0">
                          <label className="form-label fw-semibold">Publication Date *</label>
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex gap-3 justify-content-center">
                        <button 
                          className="btn btn-primary"
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              />
                              Publishing...
                            </>
                          ) : (
                            'Publish Blog Post'
                          )}
                        </button>
                        
                        <button 
                          className="btn btn-outline-secondary" 
                          type="button"
                          onClick={resetForm}
                          disabled={isSubmitting}
                        >
                          Reset Form
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
