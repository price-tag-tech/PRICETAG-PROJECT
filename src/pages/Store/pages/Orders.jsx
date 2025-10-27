import { IconSearch, IconFilter, IconDownload, IconEye, IconCheck, IconX, IconClock, IconPackage, IconHourglass, IconCurrencyNaira } from '@tabler/icons-react';
import React, { useState } from 'react';

const OrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [dateFilter, setDateFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Initial orders data
  const initialOrders = [
    {
      id: '#ORD-001',
      product: 'Quality Bluetooth Headset',
      productCode: '020192',
      quantity: 1,
      amount: 8000,
      client: 'Prince Godson',
      email: 'prince@email.com',
      phone: '+234 801 234 5678',
      date: '2024-10-26',
      time: '6:09 AM',
      status: 'Pending',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: '#ORD-002',
      product: 'Wireless Gaming Mouse',
      productCode: '030245',
      quantity: 2,
      amount: 15000,
      client: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '+234 802 345 6789',
      date: '2024-10-26',
      time: '8:45 AM',
      status: 'Completed',
      paymentMethod: 'Card Payment'
    },
    {
      id: '#ORD-003',
      product: 'USB-C Fast Charger',
      productCode: '045678',
      quantity: 3,
      amount: 12000,
      client: 'Michael Chen',
      email: 'michael@email.com',
      phone: '+234 803 456 7890',
      date: '2024-10-26',
      time: '10:20 AM',
      status: 'Completed',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: '#ORD-004',
      product: 'Laptop Stand Pro',
      productCode: '056789',
      quantity: 1,
      amount: 25000,
      client: 'Emma Williams',
      email: 'emma@email.com',
      phone: '+234 804 567 8901',
      date: '2024-10-25',
      time: '3:15 PM',
      status: 'Pending',
      paymentMethod: 'Cash'
    },
    {
      id: '#ORD-005',
      product: 'Mechanical Keyboard',
      productCode: '067890',
      quantity: 1,
      amount: 35000,
      client: 'David Brown',
      email: 'david@email.com',
      phone: '+234 805 678 9012',
      date: '2024-10-25',
      time: '5:30 PM',
      status: 'Cancelled',
      paymentMethod: 'Card Payment'
    },
    {
      id: '#ORD-006',
      product: '4K Webcam',
      productCode: '078901',
      quantity: 2,
      amount: 45000,
      client: 'Lisa Anderson',
      email: 'lisa@email.com',
      phone: '+234 806 789 0123',
      date: '2024-10-24',
      time: '11:00 AM',
      status: 'Completed',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: '#ORD-007',
      product: 'Portable SSD 1TB',
      productCode: '089012',
      quantity: 1,
      amount: 55000,
      client: 'James Wilson',
      email: 'james@email.com',
      phone: '+234 807 890 1234',
      date: '2024-10-24',
      time: '2:30 PM',
      status: 'Processing',
      paymentMethod: 'Card Payment'
    },
    {
      id: '#ORD-008',
      product: 'Smart Watch Pro',
      productCode: '090123',
      quantity: 1,
      amount: 85000,
      client: 'Olivia Taylor',
      email: 'olivia@email.com',
      phone: '+234 808 901 2345',
      date: '2024-10-23',
      time: '9:00 AM',
      status: 'Completed',
      paymentMethod: 'Bank Transfer'
    }
  ];

  const [orders, setOrders] = useState(initialOrders);

  // Filter orders based on search, status, and date
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    
    // Date filtering logic
    const orderDate = new Date(order.date);
    const today = new Date();
    const matchesDate = dateFilter === 'all' || 
                       (dateFilter === 'today' && orderDate.toDateString() === today.toDateString()) ||
                       (dateFilter === 'week' && (today - orderDate) <= 7 * 24 * 60 * 60 * 1000) ||
                       (dateFilter === 'month' && orderDate.getMonth() === today.getMonth() && orderDate.getFullYear() === today.getFullYear());
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  // Calculate statistics
  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'Pending').length,
    completed: orders.filter(o => o.status === 'Completed').length,
    cancelled: orders.filter(o => o.status === 'Cancelled').length,
    processing: orders.filter(o => o.status === 'Processing').length,
    revenue: orders.filter(o => o.status === 'Completed').reduce((sum, o) => sum + o.amount, 0)
  };

  // Handle order status updates
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    
    // Close modal if open
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(null);
    }
  };

  // Handle export orders
  const handleExportOrders = () => {
    const csvContent = [
      ['Order ID', 'Product', 'Customer', 'Quantity', 'Amount', 'Date', 'Time', 'Status', 'Payment Method'],
      ...filteredOrders.map(order => [
        order.id,
        order.product,
        order.client,
        order.quantity,
        order.amount,
        order.date,
        order.time,
        order.status,
        order.paymentMethod
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orders-export-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Handle approve order
  const handleApproveOrder = (orderId) => {
    updateOrderStatus(orderId, 'Processing');
  };

  // Handle complete order
  const handleCompleteOrder = (orderId) => {
    updateOrderStatus(orderId, 'Completed');
  };

  // Handle reject/cancel order
  const handleRejectOrder = (orderId) => {
    updateOrderStatus(orderId, 'Cancelled');
  };

  // Get status actions based on current status
  const getStatusActions = (order) => {
    switch (order.status) {
      case 'Pending':
        return (
          <>
            <button 
              className="order-action-btn order-approve" 
              title="Approve Order"
              onClick={() => handleApproveOrder(order.id)}
            >
              <IconCheck size={16} />
            </button>
            <button 
              className="order-action-btn order-reject" 
              title="Reject Order"
              onClick={() => handleRejectOrder(order.id)}
            >
              <IconX size={16} />
            </button>
          </>
        );
      case 'Processing':
        return (
          <button 
            className="order-action-btn order-complete" 
            title="Mark as Completed"
            onClick={() => handleCompleteOrder(order.id)}
          >
            <IconCheck size={16} />
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="orders-page">
      {/* Header */}
      <div className="orders-header">
        <div>
          <h1 className="orders-title">Orders Management</h1>
          <p className="orders-subtitle">Track and manage all your orders</p>
        </div>
        <button className="orders-export-btn" onClick={handleExportOrders}>
          <IconDownload size={20} />
          <span>Export Orders</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="orders-stats">
        <div className="orders-stat-card">
          <div className="orders-stat-icon orders-stat-total"><IconPackage size={29} /></div>
          <div className="orders-stat-content">
            <div className="orders-stat-value">{stats.total}</div>
            <div className="orders-stat-label">Total Orders</div>
          </div>
        </div>
        <div className="orders-stat-card">
          <div className="orders-stat-icon orders-stat-pending"><IconHourglass size={29} /></div>
          <div className="orders-stat-content">
            <div className="orders-stat-value">{stats.pending}</div>
            <div className="orders-stat-label">Pending</div>
          </div>
        </div>
        <div className="orders-stat-card">
          <div className="orders-stat-icon orders-stat-completed"><IconCheck  size={29} /></div>
          <div className="orders-stat-content">
            <div className="orders-stat-value">{stats.completed}</div>
            <div className="orders-stat-label">Completed</div>
          </div>
        </div>
        <div className="orders-stat-card">
          <div className="orders-stat-icon orders-stat-revenue"><IconCurrencyNaira size={29} /></div>
          <div className="orders-stat-content">
            <div className="orders-stat-value">₦ {stats.revenue.toLocaleString()}</div>
            <div className="orders-stat-label">Total Revenue</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="orders-controls">
        <div className="orders-search">
          <IconSearch size={20} />
          <input 
            type="text" 
            placeholder="Search orders, customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="orders-filters">
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option>All</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table-card">
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Customer</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td data-label="Order ID">
                    <span className="order-id-cell">{order.id}</span>
                  </td>
                  <td data-label="Product">
                    <div className="product-cell">
                      <div className="product-name">{order.product}</div>
                      <div className="product-code">Code: {order.productCode}</div>
                    </div>
                  </td>
                  <td data-label="Customer">
                    <div className="customer-cell">
                      <div className="customer-name">{order.client}</div>
                      <div className="customer-email">{order.email}</div>
                    </div>
                  </td>
                  <td data-label="Quantity">{order.quantity}</td>
                  <td data-label="Amount">
                    <span className="amount-cell">₦ {order.amount.toLocaleString()}</span>
                  </td>
                  <td data-label="Date">
                    <div className="date-cell">
                      <div>{order.date}</div>
                      <div className="time-cell">{order.time}</div>
                    </div>
                  </td>
                  <td data-label="Payment">{order.paymentMethod}</td>
                  <td data-label="Status">
                    <span className={`order-status order-status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="order-actions">
                      <button 
                        className="order-action-btn"
                        onClick={() => setSelectedOrder(order)}
                        title="View Details"
                      >
                        <IconEye size={16} />
                      </button>
                      {getStatusActions(order)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="order-modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="order-modal" onClick={(e) => e.stopPropagation()}>
            <div className="order-modal-header">
              <h2>Order Details</h2>
              <button className="order-modal-close" onClick={() => setSelectedOrder(null)}>×</button>
            </div>
            <div className="order-modal-content">
              <div className="order-modal-section">
                <h3>Order Information</h3>
                <div className="order-modal-grid">
                  <div className="order-modal-item">
                    <span className="order-modal-label">Order ID</span>
                    <span className="order-modal-value">{selectedOrder.id}</span>
                  </div>
                  <div className="order-modal-item">
                    <span className="order-modal-label">Status</span>
                    <span className={`order-status order-status-${selectedOrder.status.toLowerCase()}`}>
                      {selectedOrder.status}
                    </span>
                  </div>
                  <div className="order-modal-item">
                    <span className="order-modal-label">Date</span>
                    <span className="order-modal-value">{selectedOrder.date} {selectedOrder.time}</span>
                  </div>
                  <div className="order-modal-item">
                    <span className="order-modal-label">Payment Method</span>
                    <span className="order-modal-value">{selectedOrder.paymentMethod}</span>
                  </div>
                </div>
              </div>

              <div className="order-modal-section">
                <h3>Customer Information</h3>
                <div className="order-modal-grid">
                  <div className="order-modal-item">
                    <span className="order-modal-label">Name</span>
                    <span className="order-modal-value">{selectedOrder.client}</span>
                  </div>
                  <div className="order-modal-item">
                    <span className="order-modal-label">Email</span>
                    <span className="order-modal-value">{selectedOrder.email}</span>
                  </div>
                  <div className="order-modal-item">
                    <span className="order-modal-label">Phone</span>
                    <span className="order-modal-value">{selectedOrder.phone}</span>
                  </div>
                </div>
              </div>

              <div className="order-modal-section">
                <h3>Product Details</h3>
                <div className="order-product-detail">
                  <div className="order-product-info">
                    <div className="order-product-name">{selectedOrder.product}</div>
                    <div className="order-product-code">Code: {selectedOrder.productCode}</div>
                  </div>
                  <div className="order-product-qty">Qty: {selectedOrder.quantity}</div>
                  <div className="order-product-amount">₦ {selectedOrder.amount.toLocaleString()}</div>
                </div>
              </div>

              <div className="order-modal-total">
                <span>Total Amount</span>
                <span className="order-total-amount">₦ {selectedOrder.amount.toLocaleString()}</span>
              </div>

              {/* Dynamic action buttons based on order status */}
              <div className="order-modal-actions">
                {selectedOrder.status === 'Pending' && (
                  <>
                    <button 
                      className="order-modal-btn order-modal-approve"
                      onClick={() => handleApproveOrder(selectedOrder.id)}
                    >
                      <IconCheck size={20} />
                      Approve Order
                    </button>
                    <button 
                      className="order-modal-btn order-modal-reject"
                      onClick={() => handleRejectOrder(selectedOrder.id)}
                    >
                      <IconX size={20} />
                      Reject Order
                    </button>
                  </>
                )}
                {selectedOrder.status === 'Processing' && (
                  <button 
                    className="order-modal-btn order-modal-approve"
                    onClick={() => handleCompleteOrder(selectedOrder.id)}
                  >
                    <IconCheck size={20} />
                    Mark as Completed
                  </button>
                )}
                {(selectedOrder.status === 'Completed' || selectedOrder.status === 'Cancelled') && (
                  <button 
                    className="order-modal-btn order-modal-close-btn"
                    onClick={() => setSelectedOrder(null)}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default OrdersPage;