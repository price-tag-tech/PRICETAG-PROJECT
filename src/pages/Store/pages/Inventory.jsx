import { IconSearch, IconFilter, IconPlus, IconAlertCircle, IconTrendingUp, IconTrendingDown, IconEdit, IconPackage, IconX, IconCoin, IconExclamationCircle } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';

const InventoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [showRestockModal, setShowRestockModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [restockQuantity, setRestockQuantity] = useState('');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Product images from Unsplash (real product images)
  const productImages = {
    1: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Headphones
    2: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Gaming Mouse
    3: 'https://images.unsplash.com/photo-1609592810793-abeb6c64b5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Charger
    4: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Laptop Stand
    5: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Keyboard
    6: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'  // Webcam
  };

  // Initial inventory data
  const initialInventory = [
    {
      id: 1,
      name: 'Quality Bluetooth Headset',
      code: 'PRD-020192',
      category: 'Electronics',
      stock: 45,
      reorderLevel: 20,
      unitPrice: 8000,
      totalValue: 360000,
      supplier: 'Tech Suppliers Ltd',
      lastRestocked: '2024-10-20',
      status: 'In Stock'
    },
    {
      id: 2,
      name: 'Wireless Gaming Mouse',
      code: 'PRD-030245',
      category: 'Electronics',
      stock: 12,
      reorderLevel: 15,
      unitPrice: 7500,
      totalValue: 90000,
      supplier: 'Gaming World',
      lastRestocked: '2024-10-18',
      status: 'Low Stock'
    },
    {
      id: 3,
      name: 'USB-C Fast Charger',
      code: 'PRD-045678',
      category: 'Accessories',
      stock: 0,
      reorderLevel: 25,
      unitPrice: 4000,
      totalValue: 0,
      supplier: 'Power Solutions',
      lastRestocked: '2024-10-10',
      status: 'Out of Stock'
    },
    {
      id: 4,
      name: 'Laptop Stand Pro',
      code: 'PRD-056789',
      category: 'Accessories',
      stock: 28,
      reorderLevel: 15,
      unitPrice: 25000,
      totalValue: 700000,
      supplier: 'Office Plus',
      lastRestocked: '2024-10-22',
      status: 'In Stock'
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      code: 'PRD-067890',
      category: 'Electronics',
      stock: 8,
      reorderLevel: 10,
      unitPrice: 35000,
      totalValue: 280000,
      supplier: 'Gaming World',
      lastRestocked: '2024-10-15',
      status: 'Low Stock'
    },
    {
      id: 6,
      name: '4K Webcam',
      code: 'PRD-078901',
      category: 'Electronics',
      stock: 33,
      reorderLevel: 20,
      unitPrice: 22500,
      totalValue: 742500,
      supplier: 'Tech Suppliers Ltd',
      lastRestocked: '2024-10-23',
      status: 'In Stock'
    }
  ];

  const [inventory, setInventory] = useState(initialInventory);

  // Add Product Form State
  const [newProduct, setNewProduct] = useState({
    name: '',
    code: '',
    category: '',
    stock: '',
    reorderLevel: '',
    unitPrice: '',
    supplier: ''
  });

  // Edit Product Form State
  const [editProduct, setEditProduct] = useState({
    name: '',
    code: '',
    category: '',
    stock: '',
    reorderLevel: '',
    unitPrice: '',
    supplier: ''
  });

  // Generate product code
  const generateProductCode = () => {
    const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `PRD-${randomNum}`;
  };

  // Reset add product form
  const resetAddProductForm = () => {
    setNewProduct({
      name: '',
      code: generateProductCode(),
      category: '',
      stock: '',
      reorderLevel: '',
      unitPrice: '',
      supplier: ''
    });
  };

  // Open add product modal
  const handleOpenAddProduct = () => {
    resetAddProductForm();
    setShowAddProductModal(true);
  };

  // Open edit product modal
  const handleOpenEditProduct = (product) => {
    setEditingProduct(product);
    setEditProduct({
      name: product.name,
      code: product.code,
      category: product.category,
      stock: product.stock,
      reorderLevel: product.reorderLevel,
      unitPrice: product.unitPrice,
      supplier: product.supplier
    });
    setShowEditProductModal(true);
  };

  // Handle add product form changes
  const handleAddProductChange = (field, value) => {
    setNewProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle edit product form changes
  const handleEditProductChange = (field, value) => {
    setEditProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Calculate product status based on stock and reorder level
  const calculateStatus = (stock, reorderLevel) => {
    if (stock === 0) return 'Out of Stock';
    if (stock <= reorderLevel) return 'Low Stock';
    return 'In Stock';
  };

  // Add new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    
    const product = {
      id: inventory.length + 1,
      name: newProduct.name,
      code: newProduct.code,
      category: newProduct.category,
      stock: parseInt(newProduct.stock),
      reorderLevel: parseInt(newProduct.reorderLevel),
      unitPrice: parseInt(newProduct.unitPrice),
      totalValue: parseInt(newProduct.stock) * parseInt(newProduct.unitPrice),
      supplier: newProduct.supplier,
      lastRestocked: new Date().toISOString().split('T')[0],
      status: calculateStatus(parseInt(newProduct.stock), parseInt(newProduct.reorderLevel))
    };

    setInventory(prev => [...prev, product]);
    setShowAddProductModal(false);
    resetAddProductForm();
  };

  // Update existing product
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    
    const updatedProduct = {
      ...editingProduct,
      name: editProduct.name,
      code: editProduct.code,
      category: editProduct.category,
      stock: parseInt(editProduct.stock),
      reorderLevel: parseInt(editProduct.reorderLevel),
      unitPrice: parseInt(editProduct.unitPrice),
      totalValue: parseInt(editProduct.stock) * parseInt(editProduct.unitPrice),
      supplier: editProduct.supplier,
      status: calculateStatus(parseInt(editProduct.stock), parseInt(editProduct.reorderLevel))
    };

    setInventory(prev => 
      prev.map(item => item.id === editingProduct.id ? updatedProduct : item)
    );
    setShowEditProductModal(false);
    setEditingProduct(null);
  };

  // Handle restock
  const handleRestock = (item) => {
    setSelectedItem(item);
    setShowRestockModal(true);
    setRestockQuantity('');
  };

  // Confirm restock
  const handleConfirmRestock = () => {
    if (!restockQuantity || restockQuantity <= 0) return;

    const updatedInventory = inventory.map(item => {
      if (item.id === selectedItem.id) {
        const newStock = item.stock + parseInt(restockQuantity);
        return {
          ...item,
          stock: newStock,
          totalValue: newStock * item.unitPrice,
          lastRestocked: new Date().toISOString().split('T')[0],
          status: calculateStatus(newStock, item.reorderLevel)
        };
      }
      return item;
    });

    setInventory(updatedInventory);
    setShowRestockModal(false);
    setSelectedItem(null);
    setRestockQuantity('');
  };

  // Filter inventory
  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const stats = {
    totalItems: inventory.length,
    totalValue: inventory.reduce((sum, item) => sum + item.totalValue, 0),
    lowStock: inventory.filter(i => i.status === 'Low Stock').length,
    outOfStock: inventory.filter(i => i.status === 'Out of Stock').length
  };

  // Initialize add product form with generated code
  useEffect(() => {
    resetAddProductForm();
  }, []);

  return (
    <>
      <div className="inventory-page">
        {/* Header */}
        <div className="inv-header">
          <div>
            <h1 className="inv-title">Inventory Management</h1>
            <p className="inv-subtitle">Track and manage your stock levels</p>
          </div>
          <button className="inv-add-btn" onClick={handleOpenAddProduct}>
            <IconPlus size={20} />
            <span>Add New Item</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="inv-stats">
          <div className="inv-stat-card">
            <div className="inv-stat-icon inv-stat-total">
              <IconPackage size={28} />
            </div>
            <div className="inv-stat-content">
              <div className="inv-stat-value">{stats.totalItems}</div>
              <div className="inv-stat-label">Total Items</div>
            </div>
          </div>

          <div className="inv-stat-card">
            <div className="inv-stat-icon inv-stat-value-icon">
              <IconCoin size={28} />
            </div>
            <div className="inv-stat-content">
              <div className="inv-stat-value">₦ {(stats.totalValue / 1000000).toFixed(2)}M</div>
              <div className="inv-stat-label">Total Value</div>
            </div>
          </div>

          <div className="inv-stat-card inv-stat-warning">
            <div className="inv-stat-icon inv-stat-low">
              <IconAlertCircle size={28} />
            </div>
            <div className="inv-stat-content">
              <div className="inv-stat-value">{stats.lowStock}</div>
              <div className="inv-stat-label">Low Stock</div>
            </div>
          </div>

          <div className="inv-stat-card inv-stat-danger">
            <div className="inv-stat-icon inv-stat-out">
              <IconExclamationCircle size={28} />
            </div>
            <div className="inv-stat-content">
              <div className="inv-stat-value">{stats.outOfStock}</div>
              <div className="inv-stat-label">Out of Stock</div>
            </div>
          </div>
        </div>

        {/* Alert */}
        {(stats.lowStock > 0 || stats.outOfStock > 0) && (
          <div className="inv-alert">
            <IconAlertCircle size={20} />
            <span>
              You have {stats.lowStock} low stock items and {stats.outOfStock} out of stock items that need attention.
            </span>
          </div>
        )}

        {/* Controls */}
        <div className="inv-controls">
          <div className="inv-search">
            <IconSearch size={20} />
            <input 
              type="text" 
              placeholder="Search inventory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="inv-filter"
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option>All</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        {/* Inventory Grid */}
        <div className="inv-grid">
          {filteredInventory.map(item => (
            <div key={item.id} className="inv-card">
              <div className="inv-card-header">
                <span className={`inv-status inv-status-${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
                {item.stock <= item.reorderLevel && (
                  <IconAlertCircle size={18} className="inv-warning-icon" />
                )}
              </div>

              <div className="inv-card-body">
                <div className="inv-item-image">
                  <img 
                    src={productImages[item.id]} 
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
                <h3 className="inv-item-name">{item.name}</h3>
                <p className="inv-item-code">{item.code}</p>
                <span className="inv-item-category">{item.category}</span>

                <div className="inv-stock-info">
                  <div className="inv-stock-bar-container">
                    <div 
                      className="inv-stock-bar" 
                      style={{
                        width: `${Math.min((item.stock / (item.reorderLevel * 2)) * 100, 100)}%`,
                        backgroundColor: item.stock === 0 ? '#dc2626' : item.stock <= item.reorderLevel ? '#f59e0b' : 'var(--main-green)'
                      }}
                    />
                  </div>
                  <div className="inv-stock-text">
                    <span className="inv-stock-current">{item.stock} units</span>
                    <span className="inv-stock-reorder">Reorder: {item.reorderLevel}</span>
                  </div>
                </div>

                <div className="inv-card-details">
                  <div className="inv-detail-row">
                    <span>Unit Price:</span>
                    <span className="inv-price">₦ {item.unitPrice.toLocaleString()}</span>
                  </div>
                  <div className="inv-detail-row">
                    <span>Total Value:</span>
                    <span className="inv-value">₦ {item.totalValue.toLocaleString()}</span>
                  </div>
                  <div className="inv-detail-row">
                    <span>Supplier:</span>
                    <span>{item.supplier}</span>
                  </div>
                </div>
              </div>

              <div className="inv-card-footer">
                <button 
                  className="inv-restock-btn"
                  onClick={() => handleRestock(item)}
                >
                  Restock
                </button>
                <button 
                  className="inv-edit-btn"
                  onClick={() => handleOpenEditProduct(item)}
                >
                  <IconEdit size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="modal-overlay" onClick={() => setShowAddProductModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button 
                className="modal-close"
                onClick={() => setShowAddProductModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="modal-body">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    Product Name <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={newProduct.name}
                    onChange={(e) => handleAddProductChange('name', e.target.value)}
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Product Code <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={newProduct.code}
                    onChange={(e) => handleAddProductChange('code', e.target.value)}
                    placeholder="Product code"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Category <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={newProduct.category}
                    onChange={(e) => handleAddProductChange('category', e.target.value)}
                    placeholder="e.g., Electronics, Accessories"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Supplier <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={newProduct.supplier}
                    onChange={(e) => handleAddProductChange('supplier', e.target.value)}
                    placeholder="Enter supplier name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Stock Quantity <span className="required">*</span>
                  </label>
                  <input 
                    type="number"
                    className="form-input"
                    value={newProduct.stock}
                    onChange={(e) => handleAddProductChange('stock', e.target.value)}
                    placeholder="Enter quantity"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Reorder Level <span className="required">*</span>
                  </label>
                  <input 
                    type="number"
                    className="form-input"
                    value={newProduct.reorderLevel}
                    onChange={(e) => handleAddProductChange('reorderLevel', e.target.value)}
                    placeholder="Minimum stock level"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Unit Price (₦) <span className="required">*</span>
                  </label>
                  <input 
                    type="number"
                    className="form-input"
                    value={newProduct.unitPrice}
                    onChange={(e) => handleAddProductChange('unitPrice', e.target.value)}
                    placeholder="Enter price"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowAddProductModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn-primary"
                  disabled={!newProduct.name || !newProduct.category || !newProduct.stock || !newProduct.reorderLevel || !newProduct.unitPrice}
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditProductModal && editingProduct && (
        <div className="modal-overlay" onClick={() => setShowEditProductModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Product</h2>
              <button 
                className="modal-close"
                onClick={() => setShowEditProductModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleUpdateProduct} className="modal-body">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    Product Name <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={editProduct.name}
                    onChange={(e) => handleEditProductChange('name', e.target.value)}
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Product Code <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={editProduct.code}
                    onChange={(e) => handleEditProductChange('code', e.target.value)}
                    placeholder="Product code"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Category <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={editProduct.category}
                    onChange={(e) => handleEditProductChange('category', e.target.value)}
                    placeholder="e.g., Electronics, Accessories"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Supplier <span className="required">*</span>
                  </label>
                  <input 
                    type="text"
                    className="form-input"
                    value={editProduct.supplier}
                    onChange={(e) => handleEditProductChange('supplier', e.target.value)}
                    placeholder="Enter supplier name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Stock Quantity <span className="required">*</span>
                  </label>
                  <input 
                    type="number"
                    className="form-input"
                    value={editProduct.stock}
                    onChange={(e) => handleEditProductChange('stock', e.target.value)}
                    placeholder="Enter quantity"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Reorder Level <span className="required">*</span>
                  </label>
                  <input 
                    type="number"
                    className="form-input"
                    value={editProduct.reorderLevel}
                    onChange={(e) => handleEditProductChange('reorderLevel', e.target.value)}
                    placeholder="Minimum stock level"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Unit Price (₦) <span className="required">*</span>
                  </label>
                  <input 
                    type="number"
                    className="form-input"
                    value={editProduct.unitPrice}
                    onChange={(e) => handleEditProductChange('unitPrice', e.target.value)}
                    placeholder="Enter price"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowEditProductModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn-primary"
                  disabled={!editProduct.name || !editProduct.category || !editProduct.stock || !editProduct.reorderLevel || !editProduct.unitPrice}
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Restock Modal */}
      {showRestockModal && selectedItem && (
        <div className="modal-overlay" onClick={() => setShowRestockModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Restock Item</h2>
              <button 
                className="modal-close"
                onClick={() => setShowRestockModal(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="restock-item-info">
                <div className="restock-image">
                  <img 
                    src={productImages[selectedItem.id]} 
                    alt={selectedItem.name}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
                <div>
                  <h3>{selectedItem.name}</h3>
                  <p>{selectedItem.code}</p>
                </div>
              </div>

              <div className="restock-current">
                <div className="restock-stat">
                  <div className="restock-label">Current Stock</div>
                  <div className="restock-stat-value">{selectedItem.stock} units</div>
                </div>
                <div className="restock-stat">
                  <div className="restock-label">Reorder Level</div>
                  <div className="restock-stat-value">{selectedItem.reorderLevel} units</div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Quantity to Add</label>
                <input 
                  type="number" 
                  className="form-input"
                  placeholder="Enter quantity"
                  value={restockQuantity}
                  onChange={(e) => setRestockQuantity(e.target.value)}
                  min="1"
                />
              </div>

              {restockQuantity && (
                <div className="restock-summary">
                  <div className="restock-summary-row">
                    <span>New Stock Level:</span>
                    <span className="restock-summary-value">
                      {parseInt(selectedItem.stock) + parseInt(restockQuantity)} units
                    </span>
                  </div>
                  <div className="restock-summary-row restock-summary-total-row">
                    <span>Cost ({restockQuantity} × ₦{selectedItem.unitPrice.toLocaleString()}):</span>
                    <span className="restock-summary-total">
                      ₦ {(parseInt(restockQuantity) * selectedItem.unitPrice).toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              <div className="modal-actions">
                <button 
                  className="btn-secondary"
                  onClick={() => setShowRestockModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="btn-primary"
                  onClick={handleConfirmRestock}
                  disabled={!restockQuantity || restockQuantity <= 0}
                >
                  Confirm Restock
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

   
    </>
  );
};

export default InventoryPage;