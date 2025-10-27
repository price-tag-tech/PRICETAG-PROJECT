import React, { useState } from 'react';
import { IconSearch, IconFilter, IconEye, IconMail, IconPhone, IconCalendar, IconShoppingCart, IconCoin, IconStar, IconStarFilled, IconMapPin,IconUsers } from '@tabler/icons-react';

const CustomersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  // Sample customer data
  const customers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+234 801 234 5678',
      location: 'Lagos, Nigeria',
      totalOrders: 12,
      totalSpent: 184500,
      lastOrder: '2024-10-25',
      joinDate: '2023-05-15',
      
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Michael Adebayo',
      email: 'michael.a@email.com',
      phone: '+234 802 345 6789',
      location: 'Abuja, Nigeria',
      totalOrders: 8,
      totalSpent: 96700,
      lastOrder: '2024-10-22',
      joinDate: '2024-01-20',
     
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'Chinwe Okoro',
      email: 'chinwe.o@email.com',
      phone: '+234 803 456 7890',
      location: 'Port Harcourt, Nigeria',
      totalOrders: 3,
      totalSpent: 45200,
      lastOrder: '2024-10-18',
      joinDate: '2024-08-10',
      
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      name: 'David Chukwu',
      email: 'david.c@email.com',
      phone: '+234 804 567 8901',
      location: 'Ibadan, Nigeria',
      totalOrders: 15,
      totalSpent: 234000,
      lastOrder: '2024-10-24',
      joinDate: '2022-11-05',
      
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 5,
      name: 'Grace Williams',
      email: 'grace.w@email.com',
      phone: '+234 805 678 9012',
      location: 'Kano, Nigeria',
      totalOrders: 6,
      totalSpent: 78300,
      lastOrder: '2024-10-20',
      joinDate: '2024-03-12',
     
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 6,
      name: 'Emmanuel Bello',
      email: 'emmanuel.b@email.com',
      phone: '+234 806 789 0123',
      location: 'Enugu, Nigeria',
      totalOrders: 1,
      totalSpent: 12500,
      lastOrder: '2024-09-15',
      joinDate: '2024-09-01',
      
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  // Customer orders sample data
  const customerOrders = [
    { id: 'ORD-001', date: '2024-10-25', amount: 24500, status: 'Delivered', items: 2 },
    { id: 'ORD-002', date: '2024-10-20', amount: 18700, status: 'Delivered', items: 1 },
    { id: 'ORD-003', date: '2024-10-15', amount: 32000, status: 'Processing', items: 3 },
    { id: 'ORD-004', date: '2024-10-10', amount: 15600, status: 'Delivered', items: 1 }
  ];

  // Filter customers
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || customer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const stats = {
    totalCustomers: customers.length,
    activeCustomers: customers.filter(c => c.status === 'Active' || c.status === 'VIP').length,
    newCustomers: customers.filter(c => c.status === 'New').length,
    totalRevenue: customers.reduce((sum, customer) => sum + customer.totalSpent, 0)
  };

  // View customer details
  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowCustomerModal(true);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return `₦ ${amount.toLocaleString()}`;
  };

  

 

  return (
    <div className="customers-page">
      {/* Header */}
      <div className="customers-header">
        <div>
          <h1 className="customers-title">Customers</h1>
          <p className="customers-subtitle">Manage and view your customer information</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="orders-stats">
        <div className="customer-stat-card">
          <div className="customer-stat-icon customer-stat-total">
            <IconUsers size={24} />
          </div>
          <div className="customer-stat-content">
            <div className="customer-stat-value">{stats.totalCustomers}</div>
            <div className="customer-stat-label">Total Customers</div>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="customer-stat-icon customer-stat-active">
            <IconStar size={24} />
          </div>
          <div className="customer-stat-content">
            <div className="customer-stat-value">{stats.activeCustomers}</div>
            <div className="customer-stat-label">Active Customers</div>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="customer-stat-icon customer-stat-new">
            <IconCalendar size={24} />
          </div>
          <div className="customer-stat-content">
            <div className="customer-stat-value">{stats.newCustomers}</div>
            <div className="customer-stat-label">New This Month</div>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="customer-stat-icon customer-stat-revenue">
            <IconCoin size={24} />
          </div>
          <div className="customer-stat-content">
            <div className="customer-stat-value">₦ {(stats.totalRevenue / 1000).toFixed(0)}K</div>
            <div className="customer-stat-label">Total Revenue</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="customers-controls">
        <div className="customer-search">
          <IconSearch size={20} />
          <input 
            type="text" 
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select 
          className="customer-filter"
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>VIP</option>
          <option>Active</option>
          <option>New</option>
        </select>
      </div>

      {/* Customers Table */}
      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Orders</th>
              <th>Total Spent</th>
            
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td>
                  <div className="customer-info">
                    <img src={customer.avatar} alt={customer.name} className="customer-avatar" />
                    <div>
                      <div className="customer-name">{customer.name}</div>
                      <div className="customer-location">
                        <IconMapPin size={14} />
                        {customer.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="customer-contact">
                    <div className="customer-email">{customer.email}</div>
                    <div className="customer-phone">{customer.phone}</div>
                  </div>
                </td>
                <td>
                  <div className="customer-orders">
                    <span className="orders-count">{customer.totalOrders}</span>
                    <span className="orders-label">orders</span>
                  </div>
                </td>
                <td>
                  <div className="customer-spent">
                    {formatCurrency(customer.totalSpent)}
                  </div>
                </td>
               
                <td>
                  <button 
                    className="view-customer-btn"
                    onClick={() => handleViewCustomer(customer)}
                  >
                    <IconEye size={18} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer Detail Modal */}
      {showCustomerModal && selectedCustomer && (
        <div className="modal-overlay" onClick={() => setShowCustomerModal(false)}>
          <div className="modal-content customer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Customer Details</h2>
              <button 
                className="modal-close"
                onClick={() => setShowCustomerModal(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              {/* Customer Profile */}
              <div className="customer-profile">
                <img src={selectedCustomer.avatar} alt={selectedCustomer.name} className="customer-profile-avatar" />
                <div className="customer-profile-info">
                  <h3>{selectedCustomer.name}</h3>
                  <p className="customer-profile-location">
                    <IconMapPin size={16} />
                    {selectedCustomer.location}
                  </p>
                  <div className="customer-profile-stats">
                    <div className="profile-stat">
                      <span className="profile-stat-value">{selectedCustomer.totalOrders}</span>
                      <span className="profile-stat-label">Orders</span>
                    </div>
                    <div className="profile-stat">
                      <span className="profile-stat-value">{formatCurrency(selectedCustomer.totalSpent)}</span>
                      <span className="profile-stat-label">Total Spent</span>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="customer-contact-info">
                <h4>Contact Information</h4>
                <div className="contact-details">
                  <div className="contact-item">
                    <IconMail size={18} />
                    <span>{selectedCustomer.email}</span>
                  </div>
                  <div className="contact-item">
                    <IconPhone size={18} />
                    <span>{selectedCustomer.phone}</span>
                  </div>
                  <div className="contact-item">
                    <IconCalendar size={18} />
                    <span>Joined {new Date(selectedCustomer.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="customer-orders-section">
                <h4>Recent Orders</h4>
                <div className="orders-list">
                  {customerOrders.map(order => (
                    <div key={order.id} className="order-item">
                      <div className="order-info">
                        <div className="order-id">{order.id}</div>
                        <div className="order-date">{new Date(order.date).toLocaleDateString()}</div>
                      </div>
                      <div className="order-details">
                        <span className="order-amount">{formatCurrency(order.amount)}</span>
                        <span className="order-status">{order.status}</span>
                        <span className="order-items">{order.items} items</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  className="btn-secondary"
                  onClick={() => setShowCustomerModal(false)}
                >
                  Close
                </button>
                {/* <button className="btn-primary">
                 
                  Send Message
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}

  
    </div>
  );
};

export default CustomersPage;