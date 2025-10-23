import React, { useState } from 'react';
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  TruckIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

export default function OrdersAndPurchases() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedRows, setSelectedRows] = useState([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'active', 'completed'

  const categories = ['All Category', 'Service', 'Goods'];
  const statuses = ['All Status', 'Completed', 'Delivered', 'Processing', 'Cancelled'];

  // Extended mock data
  const allPurchases = [
    {
      id: "ORD-2024-001",
      date: "Dec 20, 2024",
      item: "Premium Health Consultation",
      category: "Service",
      status: "Completed",
      amount: "₦150.00",
      items: 1,
      paymentMethod: "Card",
      deliveryDate: "Dec 20, 2024"
    },
    {
      id: "ORD-2024-002",
      date: "Dec 18, 2024",
      item: "Medical Equipment Set",
      category: "Goods",
      status: "Delivered",
      amount: "₦420.00",
      items: 3,
      paymentMethod: "Transfer",
      deliveryDate: "Dec 22, 2024"
    },
    {
      id: "ORD-2024-003",
      date: "Dec 15, 2024",
      item: "Lab Test Package",
      category: "Service",
      status: "Processing",
      amount: "₦280.00",
      items: 1,
      paymentMethod: "Card",
      deliveryDate: "Dec 25, 2024"
    },
    {
      id: "ORD-2024-004",
      date: "Dec 12, 2024",
      item: "Wellness Supplements",
      category: "Goods",
      status: "Delivered",
      amount: "₦95.00",
      items: 2,
      paymentMethod: "Cash",
      deliveryDate: "Dec 15, 2024"
    },
    {
      id: "ORD-2024-005",
      date: "Dec 10, 2024",
      item: "Physical Therapy Session",
      category: "Service",
      status: "Completed",
      amount: "₦120.00",
      items: 1,
      paymentMethod: "Card",
      deliveryDate: "Dec 10, 2024"
    },
    {
      id: "ORD-2024-006",
      date: "Dec 8, 2024",
      item: "Home Care Kit",
      category: "Goods",
      status: "Cancelled",
      amount: "₦65.00",
      items: 1,
      paymentMethod: "Card",
      deliveryDate: "N/A"
    },
    {
      id: "ORD-2024-007",
      date: "Dec 5, 2024",
      item: "Dental Checkup",
      category: "Service",
      status: "Completed",
      amount: "₦200.00",
      items: 1,
      paymentMethod: "Transfer",
      deliveryDate: "Dec 5, 2024"
    },
    {
      id: "ORD-2024-008",
      date: "Dec 3, 2024",
      item: "First Aid Kit",
      category: "Goods",
      status: "Delivered",
      amount: "₦85.00",
      items: 1,
      paymentMethod: "Card",
      deliveryDate: "Dec 7, 2024"
    },
    {
      id: "ORD-2024-009",
      date: "Dec 1, 2024",
      item: "Mental Health Consultation",
      category: "Service",
      status: "Processing",
      amount: "₦180.00",
      items: 1,
      paymentMethod: "Transfer",
      deliveryDate: "Dec 28, 2024"
    },
    {
      id: "ORD-2024-010",
      date: "Nov 28, 2024",
      item: "Fitness Equipment",
      category: "Goods",
      status: "Delivered",
      amount: "₦350.00",
      items: 4,
      paymentMethod: "Card",
      deliveryDate: "Dec 2, 2024"
    }
  ];

  // Summary stats
  const stats = {
    total: allPurchases.length,
    active: allPurchases.filter(p => p.status === 'Processing').length,
    completed: allPurchases.filter(p => ['Completed', 'Delivered'].includes(p.status)).length,
    cancelled: allPurchases.filter(p => p.status === 'Cancelled').length,
    totalSpent: allPurchases.reduce((sum, p) => {
      const amount = parseFloat(p.amount.replace('₦', '').replace(',', ''));
      return sum + amount;
    }, 0)
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
      case 'Delivered':
        return <CheckCircleIcon className="status-icon-op" />;
      case 'Processing':
        return <ClockIcon className="status-icon-op" />;
      case 'Cancelled':
        return <XCircleIcon className="status-icon-op" />;
      default:
        return <TruckIcon className="status-icon-op" />;
    }
  };

  // Filter purchases
  const filteredPurchases = allPurchases.filter(purchase => {
    const matchesSearch = purchase.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          purchase.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Category' || purchase.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All Status' || purchase.status === selectedStatus;
    
    let matchesView = true;
    if (viewMode === 'active') {
      matchesView = purchase.status === 'Processing';
    } else if (viewMode === 'completed') {
      matchesView = ['Completed', 'Delivered'].includes(purchase.status);
    }
    
    return matchesSearch && matchesCategory && matchesStatus && matchesView;
  });

  const handleRowSelect = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredPurchases.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredPurchases.map(p => p.id));
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Delete ${selectedRows.length} selected item(s)?`)) {
      console.log('Deleting:', selectedRows);
      setSelectedRows([]);
    }
  };

  const handleExport = () => {
    console.log('Exporting orders...');
    alert('Export functionality would download CSV/PDF here');
  };

  return (
    <div className="orders-container-op">
      {/* Header */}
      <div className="header-section-op">
        <div className="header-left-op">
          <h1 className="page-title-op">Orders & Purchases</h1>
          <p className="page-subtitle-op">Manage and track all your orders and purchases</p>
        </div>
        <button className="export-button-op" onClick={handleExport}>
          <ArrowDownTrayIcon className="button-icon-op" />
          Export All
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid-op">
        <div className="stat-card-op">
          <div className="stat-icon-wrapper-op" style={{ background: '#667eea15', color: '#667eea' }}>
            <ShoppingBagIcon className="stat-icon-op" />
          </div>
          <div className="stat-content-op">
            <p className="stat-label-op">Total Orders</p>
            <p className="stat-value-op">{stats.total}</p>
          </div>
        </div>

        <div className="stat-card-op">
          <div className="stat-icon-wrapper-op" style={{ background: '#f59e0b15', color: '#f59e0b' }}>
            <ClockIcon className="stat-icon-op" />
          </div>
          <div className="stat-content-op">
            <p className="stat-label-op">Active Orders</p>
            <p className="stat-value-op">{stats.active}</p>
          </div>
        </div>

        <div className="stat-card-op">
          <div className="stat-icon-wrapper-op" style={{ background: '#10b98115', color: '#10b981' }}>
            <CheckCircleIcon className="stat-icon-op" />
          </div>
          <div className="stat-content-op">
            <p className="stat-label-op">Completed</p>
            <p className="stat-value-op">{stats.completed}</p>
          </div>
        </div>

        <div className="stat-card-op">
          <div className="stat-icon-wrapper-op" style={{ background: '#10b98115', color: '#10b981' }}>
            <ShoppingBagIcon className="stat-icon-op" />
          </div>
          <div className="stat-content-op">
            <p className="stat-label-op">Total Spent</p>
            <p className="stat-value-op">₦{stats.totalSpent.toFixed(2)}</p>
          </div>
        </div>
      </div>

    

      {/* Main Content Card */}
      <div className="content-card-op">
        {/* Filters Section */}
        <div className="filters-section-op">
          <div className="filters-left-op">
            {selectedRows.length > 0 && (
              <button className="delete-btn-op" onClick={handleDelete}>
                <TrashIcon className="button-icon-op" />
                Delete ({selectedRows.length})
              </button>
            )}
          </div>
          
          <div className="filters-right-op">
            <div className="search-box-op">
              <MagnifyingGlassIcon className="search-icon-op" />
              <input
                type="text"
                placeholder="Search orders or items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-op"
              />
            </div>

            <div className="dropdown-container-op">
              <button 
                className="filter-button-op"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                {selectedCategory}
                <ChevronDownIcon className="button-icon-op" />
              </button>
              {showCategoryDropdown && (
                <div className="dropdown-menu-op">
                  {categories.map(category => (
                    <div
                      key={category}
                      className="dropdown-item-op"
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="dropdown-container-op">
              <button 
                className="filter-button-op"
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              >
                {selectedStatus}
                <ChevronDownIcon className="button-icon-op" />
              </button>
              {showStatusDropdown && (
                <div className="dropdown-menu-op">
                  {statuses.map(status => (
                    <div
                      key={status}
                      className="dropdown-item-op"
                      onClick={() => {
                        setSelectedStatus(status);
                        setShowStatusDropdown(false);
                      }}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="filter-button-op">
              <AdjustmentsHorizontalIcon className="button-icon-op" />
              More Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper-op">
          <table className="orders-table-op">
            <thead>
              <tr className="table-header-row-op">
                <th className="table-header-op">
                  <input 
                    type="checkbox" 
                    className="checkbox-op"
                    checked={selectedRows.length === filteredPurchases.length && filteredPurchases.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="table-header-op">Order ID</th>
                <th className="table-header-op">Date</th>
                <th className="table-header-op">Item</th>
                <th className="table-header-op">Category</th>
                <th className="table-header-op">Status</th>
                <th className="table-header-op">Payment</th>
                <th className="table-header-op">Items</th>
                <th className="table-header-op table-header-right-op">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredPurchases.length > 0 ? (
                filteredPurchases.map((purchase, index) => (
                  <tr key={index} className="table-row-op">
                    <td className="table-cell-op">
                      <input 
                        type="checkbox" 
                        className="checkbox-op"
                        checked={selectedRows.includes(purchase.id)}
                        onChange={() => handleRowSelect(purchase.id)}
                      />
                    </td>
                    <td className="table-cell-op order-id-op">
                      {purchase.id}
                    </td>
                    <td className="table-cell-op">
                      <div className="date-cell-op">
                        <CalendarIcon className="date-icon-op" />
                        {purchase.date}
                      </div>
                    </td>
                    <td className="table-cell-op item-cell-op">
                      {purchase.item}
                    </td>
                    <td className="table-cell-op">
                      <span className={`category-badge-op ${purchase.category.toLowerCase()}`}>
                        {purchase.category}
                      </span>
                    </td>
                    <td className="table-cell-op">
                      <span className={`status-badge-op ${purchase.status.toLowerCase()}`}>
                        {getStatusIcon(purchase.status)}
                        {purchase.status}
                      </span>
                    </td>
                    <td className="table-cell-op payment-cell-op">
                      {purchase.paymentMethod}
                    </td>
                    <td className="table-cell-op items-count-op">
                      {purchase.items}
                    </td>
                    <td className="table-cell-op amount-cell-op">
                      {purchase.amount}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="empty-state-op">
                    <div className="empty-content-op">
                      <ShoppingBagIcon className="empty-icon-op" />
                      <p className="empty-title-op">No orders found</p>
                      <p className="empty-subtitle-op">Try adjusting your filters or search query</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredPurchases.length > 0 && (
          <div className="pagination-wrapper-op">
            <p className="pagination-info-op">
              Showing 1 to {filteredPurchases.length} of {allPurchases.length} results
            </p>
            <div className="pagination-buttons-op">
              <button className="pagination-btn-op">Previous</button>
              <button className="pagination-btn-op active">1</button>
              <button className="pagination-btn-op">2</button>
              <button className="pagination-btn-op">3</button>
              <button className="pagination-btn-op">Next</button>
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
}
