import { IconPlus, IconSearch, IconFilter, IconEdit, IconTrash, IconEye, IconX, IconStar, IconStarFilled } from '@tabler/icons-react';
import React, { useState } from 'react';

const ProductsServicesPage = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Initial data with multiple images, condition, rating, and views
  const initialProducts = [
    {
      id: 1,
      name: 'Quality Bluetooth Headset',
      code: '020192',
      category: 'Electronics',
      price: '₦ 8,000',
      stock: 45,
      status: 'In Stock',
      condition: 'New',
      rating: 4.5,
      views: 1247,
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop'
      ],
      description: 'Premium wireless headset with noise cancellation and 30-hour battery life. Perfect for gaming and professional use.'
    },
    {
      id: 2,
      name: 'Wireless Gaming Mouse',
      code: '030245',
      category: 'Electronics',
      price: '₦ 7,500',
      stock: 12,
      status: 'Low Stock',
      condition: 'Refurbished',
      rating: 4.2,
      views: 892,
      images: [
        'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=400&h=400&fit=crop'
      ],
      description: 'High precision gaming mouse with RGB lighting and customizable buttons. Ergonomic design for long gaming sessions.'
    },
    {
      id: 3,
      name: 'USB-C Fast Charger',
      code: '045678',
      category: 'Accessories',
      price: '₦ 4,000',
      stock: 0,
      status: 'Out of Stock',
      condition: 'New',
      rating: 4.0,
      views: 567,
      images: [
        'https://images.unsplash.com/photo-1591290619762-9b2c0683cd79?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1609592810796-3809fb0bdca7?w=400&h=400&fit=crop'
      ],
      description: 'Quick charge compatible USB-C charger with multiple ports. Fast charging for all your devices.'
    },
    {
      id: 4,
      name: 'Laptop Stand Pro',
      code: '056789',
      category: 'Accessories',
      price: '₦ 25,000',
      stock: 28,
      status: 'In Stock',
      condition: 'New',
      rating: 4.8,
      views: 1563,
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop'
      ],
      description: 'Adjustable aluminum laptop stand for better ergonomics. Sturdy construction with ventilation for better cooling.'
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      code: '067890',
      category: 'Electronics',
      price: '₦ 35,000',
      stock: 8,
      status: 'Low Stock',
      condition: 'Used - Like New',
      rating: 4.6,
      views: 2341,
      images: [
        'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop'
      ],
      description: 'RGB mechanical keyboard with blue switches. Customizable lighting and programmable macros.'
    },
    {
      id: 6,
      name: '4K Webcam',
      code: '078901',
      category: 'Electronics',
      price: '₦ 22,500',
      stock: 33,
      status: 'In Stock',
      condition: 'New',
      rating: 4.3,
      views: 1789,
      images: [
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop'
      ],
      description: 'Ultra HD webcam for streaming and video calls. Built-in microphone and auto-focus features.'
    }
  ];

  const initialServices = [
    {
      id: 1,
      name: 'Web Development',
      code: 'SRV001',
      category: 'IT Services',
      price: '₦ 150,000',
      duration: '2-4 weeks',
      status: 'Active',
      bookings: 12,
      rating: 4.7,
      views: 845,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=400&fit=crop',
      description: 'Custom website development with modern technologies and responsive design.'
    },
    {
      id: 2,
      name: 'Graphic Design',
      code: 'SRV002',
      category: 'Design',
      price: '₦ 50,000',
      duration: '1 week',
      status: 'Active',
      bookings: 25,
      rating: 4.4,
      views: 923,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
      description: 'Professional graphic design for branding and marketing materials.'
    },
    {
      id: 3,
      name: 'SEO Optimization',
      code: 'SRV003',
      category: 'Marketing',
      price: '₦ 75,000',
      duration: '1 month',
      status: 'Active',
      bookings: 8,
      rating: 4.1,
      views: 456,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=400&fit=crop',
      description: 'Improve your website ranking on search engines with proven SEO strategies.'
    },
    {
      id: 4,
      name: 'Mobile App Development',
      code: 'SRV004',
      category: 'IT Services',
      price: '₦ 300,000',
      duration: '4-6 weeks',
      status: 'Inactive',
      bookings: 5,
      rating: 4.9,
      views: 1234,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop',
      description: 'Native and cross-platform mobile app development for iOS and Android.'
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [services, setServices] = useState(initialServices);

  // Form states
  const [newProduct, setNewProduct] = useState({
    name: '',
    code: '',
    category: 'Electronics',
    price: '',
    stock: '',
    condition: 'New',
    rating: '',
    views: '',
    description: '',
    images: ['']
  });

  const [newService, setNewService] = useState({
    name: '',
    code: '',
    category: 'IT Services',
    price: '',
    duration: '',
    rating: '',
    views: '',
    description: '',
    image: ''
  });

  // Filter data
  const filteredProducts = products.filter(p => 
    (filterCategory === 'All' || p.category === filterCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     p.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredServices = services.filter(s => 
    (filterCategory === 'All' || s.category === filterCategory) &&
    (s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     s.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Generate codes
  const generateProductCode = () => {
    const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return randomNum;
  };

  const generateServiceCode = () => {
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `SRV${randomNum}`;
  };

  // Handle actions
  const handleView = (item) => {
    setSelectedItem(item);
    setSelectedImageIndex(0);
    setViewModal(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditModal(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setDeleteModal(true);
  };

  const handleAddNew = () => {
    if (activeTab === 'products') {
      setNewProduct({
        name: '',
        code: generateProductCode(),
        category: 'Electronics',
        price: '',
        stock: '',
        condition: 'New',
        rating: '',
        views: '',
        description: '',
        images: ['']
      });
    } else {
      setNewService({
        name: '',
        code: generateServiceCode(),
        category: 'IT Services',
        price: '',
        duration: '',
        rating: '',
        views: '',
        description: '',
        image: ''
      });
    }
    setAddModal(true);
  };

  // Confirm actions
  const confirmDelete = () => {
    if (activeTab === 'products') {
      setProducts(products.filter(p => p.id !== selectedItem.id));
    } else {
      setServices(services.filter(s => s.id !== selectedItem.id));
    }
    setDeleteModal(false);
    setSelectedItem(null);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (activeTab === 'products') {
      setProducts(products.map(p => 
        p.id === selectedItem.id ? { ...p, ...selectedItem } : p
      ));
    } else {
      setServices(services.map(s => 
        s.id === selectedItem.id ? { ...s, ...selectedItem } : s
      ));
    }
    setEditModal(false);
    setSelectedItem(null);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (activeTab === 'products') {
      const newItem = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name: newProduct.name,
        code: newProduct.code,
        category: newProduct.category,
        price: `₦ ${parseInt(newProduct.price).toLocaleString()}`,
        stock: parseInt(newProduct.stock),
        status: parseInt(newProduct.stock) === 0 ? 'Out of Stock' : parseInt(newProduct.stock) <= 10 ? 'Low Stock' : 'In Stock',
        condition: newProduct.condition,
        rating: parseFloat(newProduct.rating) || 0,
        views: parseInt(newProduct.views) || 0,
        description: newProduct.description,
        images: newProduct.images.filter(img => img.trim() !== '')
      };
      setProducts([...products, newItem]);
    } else {
      const newItem = {
        id: Math.max(...services.map(s => s.id)) + 1,
        name: newService.name,
        code: newService.code,
        category: newService.category,
        price: `₦ ${parseInt(newService.price).toLocaleString()}`,
        duration: newService.duration,
        status: 'Active',
        bookings: 0,
        rating: parseFloat(newService.rating) || 0,
        views: parseInt(newService.views) || 0,
        description: newService.description,
        image: newService.image || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
      };
      setServices([...services, newItem]);
    }
    setAddModal(false);
  };

  // Handle form changes
  const handleEditChange = (field, value) => {
    setSelectedItem(prev => ({ ...prev, [field]: value }));
  };

  const handleNewProductChange = (field, value) => {
    setNewProduct(prev => ({ ...prev, [field]: value }));
  };

  const handleNewServiceChange = (field, value) => {
    setNewService(prev => ({ ...prev, [field]: value }));
  };

  const handleAddImageField = () => {
    setNewProduct(prev => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const handleImageUrlChange = (index, value) => {
    setNewProduct(prev => ({
      ...prev,
      images: prev.images.map((img, i) => i === index ? value : img)
    }));
  };

  const handleRemoveImageField = (index) => {
    setNewProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IconStarFilled key={i} size={16} className="star-filled" />);
    }

    if (hasHalfStar) {
      stars.push(<IconStarFilled key="half" size={16} className="star-filled" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<IconStar key={`empty-${i}`} size={16} className="star-empty" />);
    }

    return stars;
  };

  // Get condition color
  const getConditionColor = (condition) => {
    switch (condition) {
      case 'New': return '#10b981';
      case 'Refurbished': return '#f59e0b';
      case 'Used - Like New': return '#3b82f6';
      case 'Used - Good': return '#8b5cf6';
      case 'Used - Fair': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-header">
        <div>
          <h1 className="products-title">Products & Services</h1>
          <p className="products-subtitle">Manage your inventory and service offerings</p>
        </div>
        <button className="products-add-btn" onClick={handleAddNew}>
          <IconPlus size={20} />
          <span>Add New {activeTab === 'products' ? 'Product' : 'Service'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="products-tabs">
        <button 
          className={`products-tab ${activeTab === 'products' ? 'products-tab-active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products ({products.length})
        </button>
        <button 
          className={`products-tab ${activeTab === 'services' ? 'products-tab-active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          Services ({services.length})
        </button>
      </div>

      {/* Search and Filter */}
      <div className="products-controls">
        <div className="products-search">
          <IconSearch size={20} />
          <input 
            type="text" 
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="products-filter">
          <IconFilter size={20} />
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option>All</option>
            <option>Electronics</option>
            <option>Accessories</option>
            <option>IT Services</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'products' ? (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.images[0]} alt={product.name} />
                <div className="product-image-badges">
                  <span 
                    className="condition-badge"
                    style={{ backgroundColor: getConditionColor(product.condition) }}
                  >
                    {product.condition}
                  </span>
                  <span className="views-badge">
                    <IconEye size={12} />
                    {product.views}
                  </span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-code">Code: {product.code}</p>
                <div className="product-meta">
                  <div className="product-category">{product.category}</div>
                  <div className="product-rating">
                    {renderStars(product.rating)}
                    <span className="rating-text">({product.rating})</span>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-price">{product.price}</div>
                  <div className="product-stock">
                    <span className={`stock-badge stock-${product.status.toLowerCase().replace(' ', '-')}`}>
                      {product.status}
                    </span>
                    <span className="stock-count">{product.stock} units</span>
                  </div>
                </div>
              </div>
              <div className="product-actions">
                <button className="product-action-btn" title="View" onClick={() => handleView(product)}>
                  <IconEye size={18} />
                </button>
                <button className="product-action-btn" title="Edit" onClick={() => handleEdit(product)}>
                  <IconEdit size={18} />
                </button>
                <button className="product-action-btn product-delete" title="Delete" onClick={() => handleDelete(product)}>
                  <IconTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="services-list">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-main">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-image-badges">
                    <span className="views-badge">
                      <IconEye size={12} />
                      {service.views}
                    </span>
                  </div>
                </div>
                <div className="service-info">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-code">Code: {service.code}</p>
                  <div className="service-meta">
                    <div className="service-category">{service.category}</div>
                    <div className="service-rating">
                      {renderStars(service.rating)}
                      <span className="rating-text">({service.rating})</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details">
                <div className="service-detail-item">
                  <span className="service-label">Price</span>
                  <span className="service-value">{service.price}</span>
                </div>
                <div className="service-detail-item">
                  <span className="service-label">Duration</span>
                  <span className="service-value">{service.duration}</span>
                </div>
                <div className="service-detail-item">
                  <span className="service-label">Bookings</span>
                  <span className="service-value">{service.bookings}</span>
                </div>
                <div className="service-detail-item">
                  <span className="service-label">Status</span>
                  <span className={`service-status service-status-${service.status.toLowerCase()}`}>
                    {service.status}
                  </span>
                </div>
              </div>
              <div className="service-actions">
                <button className="service-action-btn" title="View" onClick={() => handleView(service)}>
                  <IconEye size={18} />
                </button>
                <button className="service-action-btn" title="Edit" onClick={() => handleEdit(service)}>
                  <IconEdit size={18} />
                </button>
                <button className="service-action-btn service-delete" title="Delete" onClick={() => handleDelete(service)}>
                  <IconTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Modal */}
      {viewModal && selectedItem && (
        <div className="modal-overlay" onClick={() => setViewModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{activeTab === 'products' ? 'Product' : 'Service'} Details</h2>
              <button className="modal-close" onClick={() => setViewModal(false)}>
                <IconX size={24} />
              </button>
            </div>
            <div className="modal-body">
              {activeTab === 'products' ? (
                <>
                  {/* Product Image Gallery */}
                  <div className="modal-image-gallery">
                    <div className="main-image">
                      <img src={selectedItem.images[selectedImageIndex]} alt={selectedItem.name} />
                    </div>
                    {selectedItem.images.length > 1 && (
                      <div className="image-thumbnails">
                        {selectedItem.images.map((image, index) => (
                          <button
                            key={index}
                            className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                            onClick={() => setSelectedImageIndex(index)}
                          >
                            <img src={image} alt={`${selectedItem.name} ${index + 1}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="modal-info">
                    <div className="modal-header-info">
                      <h3>{selectedItem.name}</h3>
                      <div className="modal-rating">
                        {renderStars(selectedItem.rating)}
                        <span className="rating-value">({selectedItem.rating})</span>
                      </div>
                    </div>
                    <p className="modal-code">Code: {selectedItem.code}</p>
                    <div className="modal-badges">
                      <div className="modal-badge">{selectedItem.category}</div>
                      <div 
                        className="modal-badge p"
                        style={{ backgroundColor: getConditionColor(selectedItem.condition) }}
                      >
                        {selectedItem.condition}
                      </div>
                    </div>
                    <p className="modal-description">{selectedItem.description}</p>
                    <div className="modal-details">
                      <div className="modal-detail-row">
                        <span>Price:</span>
                        <span className="modal-price">{selectedItem.price}</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Stock:</span>
                        <span>{selectedItem.stock} units</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Status:</span>
                        <span className={`stock-badge stock-${selectedItem.status.toLowerCase().replace(' ', '-')}`}>
                          {selectedItem.status}
                        </span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Views:</span>
                        <span>{selectedItem.views.toLocaleString()}</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Rating:</span>
                        <span>{selectedItem.rating}/5 ({Math.floor(selectedItem.rating * 20)}%)</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="modal-image">
                    <img src={selectedItem.image} alt={selectedItem.name} />
                  </div>
                  <div className="modal-info">
                    <div className="modal-header-info">
                      <h3>{selectedItem.name}</h3>
                      <div className="modal-rating">
                        {renderStars(selectedItem.rating)}
                        <span className="rating-value">({selectedItem.rating})</span>
                      </div>
                    </div>
                    <p className="modal-code">Code: {selectedItem.code}</p>
                    <div className="modal-badge">{selectedItem.category}</div>
                    <p className="modal-description">{selectedItem.description}</p>
                    <div className="modal-details">
                      <div className="modal-detail-row">
                        <span>Price:</span>
                        <span className="modal-price">{selectedItem.price}</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Duration:</span>
                        <span>{selectedItem.duration}</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Bookings:</span>
                        <span>{selectedItem.bookings}</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Views:</span>
                        <span>{selectedItem.views.toLocaleString()}</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Rating:</span>
                        <span>{selectedItem.rating}/5 ({Math.floor(selectedItem.rating * 20)}%)</span>
                      </div>
                      <div className="modal-detail-row">
                        <span>Status:</span>
                        <span className={`service-status service-status-${selectedItem.status.toLowerCase()}`}>
                          {selectedItem.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal - ADDED THIS MISSING MODAL */}
      {editModal && selectedItem && (
        <div className="modal-overlay" onClick={() => setEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit {activeTab === 'products' ? 'Product' : 'Service'}</h2>
              <button className="modal-close" onClick={() => setEditModal(false)}>
                <IconX size={24} />
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSaveEdit} className="edit-form">
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    value={selectedItem.name} 
                    onChange={(e) => handleEditChange('name', e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Code</label>
                  <input 
                    type="text" 
                    value={selectedItem.code} 
                    onChange={(e) => handleEditChange('code', e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select 
                    value={selectedItem.category} 
                    onChange={(e) => handleEditChange('category', e.target.value)}
                  >
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>IT Services</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input 
                    type="text" 
                    value={selectedItem.price} 
                    onChange={(e) => handleEditChange('price', e.target.value)}
                    required 
                  />
                </div>
                {activeTab === 'products' ? (
                  <>
                    <div className="form-group">
                      <label>Stock</label>
                      <input 
                        type="number" 
                        value={selectedItem.stock} 
                        onChange={(e) => handleEditChange('stock', parseInt(e.target.value))}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Condition</label>
                      <select 
                        value={selectedItem.condition} 
                        onChange={(e) => handleEditChange('condition', e.target.value)}
                      >
                        <option>New</option>
                        <option>Refurbished</option>
                        <option>Used - Like New</option>
                        <option>Used - Good</option>
                        <option>Used - Fair</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Rating</label>
                      <input 
                        type="number" 
                        step="0.1"
                        min="0"
                        max="5"
                        value={selectedItem.rating} 
                        onChange={(e) => handleEditChange('rating', parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Views</label>
                      <input 
                        type="number" 
                        value={selectedItem.views} 
                        onChange={(e) => handleEditChange('views', parseInt(e.target.value))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea 
                        rows="3" 
                        value={selectedItem.description} 
                        onChange={(e) => handleEditChange('description', e.target.value)}
                        required 
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label>Duration</label>
                      <input 
                        type="text" 
                        value={selectedItem.duration} 
                        onChange={(e) => handleEditChange('duration', e.target.value)}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Rating</label>
                      <input 
                        type="number" 
                        step="0.1"
                        min="0"
                        max="5"
                        value={selectedItem.rating} 
                        onChange={(e) => handleEditChange('rating', parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Views</label>
                      <input 
                        type="number" 
                        value={selectedItem.views} 
                        onChange={(e) => handleEditChange('views', parseInt(e.target.value))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Bookings</label>
                      <input 
                        type="number" 
                        value={selectedItem.bookings} 
                        onChange={(e) => handleEditChange('bookings', parseInt(e.target.value))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Status</label>
                      <select 
                        value={selectedItem.status} 
                        onChange={(e) => handleEditChange('status', e.target.value)}
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea 
                        rows="3" 
                        value={selectedItem.description} 
                        onChange={(e) => handleEditChange('description', e.target.value)}
                        required 
                      />
                    </div>
                  </>
                )}
                <div className="form-actions">
                  <button type="button" className="btn-cancel" onClick={() => setEditModal(false)}>Cancel</button>
                  <button type="submit" className="btn-save">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {addModal && (
        <div className="modal-overlay" onClick={() => setAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New {activeTab === 'products' ? 'Product' : 'Service'}</h2>
              <button className="modal-close" onClick={() => setAddModal(false)}>
                <IconX size={24} />
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddItem} className="edit-form">
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    value={activeTab === 'products' ? newProduct.name : newService.name}
                    onChange={(e) => activeTab === 'products' 
                      ? handleNewProductChange('name', e.target.value)
                      : handleNewServiceChange('name', e.target.value)
                    }
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Code</label>
                  <input 
                    type="text" 
                    value={activeTab === 'products' ? newProduct.code : newService.code}
                    onChange={(e) => activeTab === 'products' 
                      ? handleNewProductChange('code', e.target.value)
                      : handleNewServiceChange('code', e.target.value)
                    }
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select 
                    value={activeTab === 'products' ? newProduct.category : newService.category}
                    onChange={(e) => activeTab === 'products' 
                      ? handleNewProductChange('category', e.target.value)
                      : handleNewServiceChange('category', e.target.value)
                    }
                  >
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>IT Services</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Price (₦)</label>
                  <input 
                    type="number" 
                    value={activeTab === 'products' ? newProduct.price : newService.price}
                    onChange={(e) => activeTab === 'products' 
                      ? handleNewProductChange('price', e.target.value)
                      : handleNewServiceChange('price', e.target.value)
                    }
                    placeholder="Enter amount"
                    required 
                  />
                </div>
                {activeTab === 'products' ? (
                  <>
                    <div className="form-group">
                      <label>Stock</label>
                      <input 
                        type="number" 
                        value={newProduct.stock}
                        onChange={(e) => handleNewProductChange('stock', e.target.value)}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Condition</label>
                      <select 
                        value={newProduct.condition}
                        onChange={(e) => handleNewProductChange('condition', e.target.value)}
                      >
                        <option>New</option>
                        <option>Refurbished</option>
                        <option>Used - Like New</option>
                        <option>Used - Good</option>
                        <option>Used - Fair</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Rating (0-5)</label>
                      <input 
                        type="number" 
                        step="0.1"
                        min="0"
                        max="5"
                        value={newProduct.rating}
                        onChange={(e) => handleNewProductChange('rating', e.target.value)}
                        placeholder="4.5"
                      />
                    </div>
                    <div className="form-group">
                      <label>Views</label>
                      <input 
                        type="number" 
                        value={newProduct.views}
                        onChange={(e) => handleNewProductChange('views', e.target.value)}
                        placeholder="1000"
                      />
                    </div>
                    <div className="form-group">
                      <label>Product Images</label>
                      {newProduct.images.map((image, index) => (
                        <div key={index} className="image-input-group">
                          <input 
                            type="url" 
                            value={image}
                            onChange={(e) => handleImageUrlChange(index, e.target.value)}
                            placeholder="https://example.com/image.jpg"
                          />
                          {newProduct.images.length > 1 && (
                            <button 
                              type="button" 
                              className="remove-image-btn"
                              onClick={() => handleRemoveImageField(index)}
                            >
                              <IconX size={16} />
                            </button>
                          )}
                        </div>
                      ))}
                      <button 
                        type="button" 
                        className="add-image-btn"
                        onClick={handleAddImageField}
                      >
                        <IconPlus size={16} />
                        Add Another Image
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label>Duration</label>
                      <input 
                        type="text" 
                        value={newService.duration}
                        onChange={(e) => handleNewServiceChange('duration', e.target.value)}
                        placeholder="e.g., 2-4 weeks"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Rating (0-5)</label>
                      <input 
                        type="number" 
                        step="0.1"
                        min="0"
                        max="5"
                        value={newService.rating}
                        onChange={(e) => handleNewServiceChange('rating', e.target.value)}
                        placeholder="4.5"
                      />
                    </div>
                    <div className="form-group">
                      <label>Views</label>
                      <input 
                        type="number" 
                        value={newService.views}
                        onChange={(e) => handleNewServiceChange('views', e.target.value)}
                        placeholder="1000"
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Image URL</label>
                      <input 
                        type="url" 
                        value={newService.image}
                        onChange={(e) => handleNewServiceChange('image', e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </>
                )}
                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    rows="3" 
                    value={activeTab === 'products' ? newProduct.description : newService.description}
                    onChange={(e) => activeTab === 'products' 
                      ? handleNewProductChange('description', e.target.value)
                      : handleNewServiceChange('description', e.target.value)
                    }
                    required 
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-cancel" onClick={() => setAddModal(false)}>Cancel</button>
                  <button type="submit" className="btn-save">Add {activeTab === 'products' ? 'Product' : 'Service'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModal && selectedItem && (
        <div className="modal-overlay" onClick={() => setDeleteModal(false)}>
          <div className="modal-content modal-small" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Confirm Delete</h2>
              <button className="modal-close" onClick={() => setDeleteModal(false)}>
                <IconX size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete <strong>{selectedItem.name}</strong>? This action cannot be undone.</p>
              <div className="form-actions">
                <button className="btn-cancel" onClick={() => setDeleteModal(false)}>Cancel</button>
                <button className="btn-delete" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductsServicesPage;