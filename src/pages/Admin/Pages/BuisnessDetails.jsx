import { IconArrowLeft, IconBuildingStore, IconUsers, IconPackage, IconChartBar, IconAlertCircle, IconPhone, IconMail, IconCalendar, IconTrendingUp, IconShoppingCart, IconStar, IconMapPin, IconEdit, IconBan, IconCheck } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BusinessDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate =  useNavigate();
   const { id } = useParams();
  // Mock business data - in real app, this would come from route params/API
  const business = {
    id: 1,
    businessName: 'Tech Haven Enterprise',
    ownerName: 'John Doe',
    ownerEmail: 'john@techhaven.ng',
    phone: '+234 801 234 5678',
    address: '15 Allen Avenue, Ikeja, Lagos',
    plan: 'Pro Plan',
    maxStores: 10,
    currentStores: 3,
    status: 'Active',
    registered: 'Jan 15, 2024',
    totalProducts: 125,
    totalOrders: 328,
    totalRevenue: '₦15,200,000',
    disputes: 2,
    rating: 4.8,
    description: 'Leading technology retail business specializing in consumer electronics, gadgets, and accessories.',
    businessRegNumber: 'RC-1234567',
    taxId: 'TIN-98765432'
  };

  const stores = [
    {
      id: 1,
      storeName: 'Tech Haven Ikeja',
      storeUrl: 'techhaven-ikeja',
      location: 'Ikeja, Lagos',
      products: 45,
      orders: 128,
      revenue: '₦6,200,000',
      status: 'Active',
      created: 'Jan 15, 2024',
      rating: 4.9
    },
    {
      id: 2,
      storeName: 'Tech Haven VI',
      storeUrl: 'techhaven-vi',
      location: 'Victoria Island, Lagos',
      products: 52,
      orders: 145,
      revenue: '₦7,500,000',
      status: 'Active',
      created: 'Feb 20, 2024',
      rating: 4.8
    },
    {
      id: 3,
      storeName: 'Tech Haven Lekki',
      storeUrl: 'techhaven-lekki',
      location: 'Lekki Phase 1, Lagos',
      products: 28,
      orders: 55,
      revenue: '₦1,500,000',
      status: 'Active',
      created: 'Sep 10, 2024',
      rating: 4.6
    }
  ];

  const recentOrders = [
    { id: '#ORD-1234', store: 'Tech Haven Ikeja', customer: 'Jane Smith', amount: '₦45,000', status: 'Completed', date: 'Oct 28, 2024' },
    { id: '#ORD-1235', store: 'Tech Haven VI', customer: 'Mike Johnson', amount: '₦125,000', status: 'Processing', date: 'Oct 29, 2024' },
    { id: '#ORD-1236', store: 'Tech Haven Lekki', customer: 'Sarah Williams', amount: '₦32,000', status: 'Completed', date: 'Oct 30, 2024' },
    { id: '#ORD-1237', store: 'Tech Haven Ikeja', customer: 'David Brown', amount: '₦89,000', status: 'Pending', date: 'Nov 01, 2024' },
  ];

  const disputes = [
    { id: 1, orderId: '#ORD-1089', customer: 'Alice Cooper', reason: 'Product not as described', status: 'Open', date: 'Oct 25, 2024', store: 'Tech Haven VI' },
    { id: 2, orderId: '#ORD-1102', customer: 'Bob Martin', reason: 'Delayed delivery', status: 'Resolved', date: 'Oct 22, 2024', store: 'Tech Haven Ikeja' }
  ];

  const handleBack = () => {
    navigate('/admin/manage-business');
  };

  const handleEditBusiness = () => {
    console.log('Edit business');
  };

  const handleSuspendBusiness = () => {
    console.log('Suspend business');
  };

  const handleActivateBusiness = () => {
    console.log('Activate business');
  };

  return (
    <div className="container-bd">
      {/* Header */}
      <div className="header-bd">
        <button onClick={handleBack} className="back-btn-bd">
          <IconArrowLeft size={20} />
          Back to Businesses
        </button>
      </div>

      {/* Business Info Card */}
      <div className="info-card-bd">
        <div className="info-header-bd">
          <div className="info-left-bd">
            <div className="business-icon-large-bd">
              <IconBuildingStore size={32} />
            </div>
            <div>
              <h1 className="business-name-bd">{business.businessName}</h1>
              <div className="business-meta-bd">
                <span className={`status-badge-bd status-${business.status.toLowerCase()}-bd`}>
                  {business.status}
                </span>
                <span className="plan-badge-bd">{business.plan}</span>
                <span className="rating-bd">
                  <IconStar size={16} fill="#fbbf24" color="#fbbf24" />
                  {business.rating}
                </span>
              </div>
            </div>
          </div>
          <div className="info-actions-bd">
            <button onClick={handleEditBusiness} className="btn-secondary-bd">
              <IconEdit size={18} />
              Edit
            </button>
            {business.status === 'Active' ? (
              <button onClick={handleSuspendBusiness} className="btn-danger-bd">
                <IconBan size={18} />
                Suspend
              </button>
            ) : (
              <button onClick={handleActivateBusiness} className="btn-success-bd">
                <IconCheck size={18} />
                Activate
              </button>
            )}
          </div>
        </div>

        <div className="info-grid-bd">
          <div className="info-item-bd">
            <IconUsers size={18} className="info-icon-bd" />
            <div>
              <span className="info-label-bd">Owner</span>
              <span className="info-value-bd">{business.ownerName}</span>
            </div>
          </div>
          <div className="info-item-bd">
            <IconMail size={18} className="info-icon-bd" />
            <div>
              <span className="info-label-bd">Email</span>
              <span className="info-value-bd">{business.ownerEmail}</span>
            </div>
          </div>
          <div className="info-item-bd">
            <IconPhone size={18} className="info-icon-bd" />
            <div>
              <span className="info-label-bd">Phone</span>
              <span className="info-value-bd">{business.phone}</span>
            </div>
          </div>
          <div className="info-item-bd">
            <IconCalendar size={18} className="info-icon-bd" />
            <div>
              <span className="info-label-bd">Registered</span>
              <span className="info-value-bd">{business.registered}</span>
            </div>
          </div>
          <div className="info-item-bd">
            <IconMapPin size={18} className="info-icon-bd" />
            <div>
              <span className="info-label-bd">Address</span>
              <span className="info-value-bd">{business.address}</span>
            </div>
          </div>
          <div className="info-item-bd">
            <IconBuildingStore size={18} className="info-icon-bd" />
            <div>
              <span className="info-label-bd">Stores</span>
              <span className="info-value-bd">{business.currentStores}/{business.maxStores}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid-bd">
        <div className="stat-card-bd">
          <div className="stat-icon-bd stat-icon-revenue-bd">
            <IconTrendingUp size={24} />
          </div>
          <div>
            <h3 className="stat-label-bd">Total Revenue</h3>
            <p className="stat-value-bd">{business.totalRevenue}</p>
            <p className="stat-change-bd stat-change-positive-bd">+12.5% from last month</p>
          </div>
        </div>

        <div className="stat-card-bd">
          <div className="stat-icon-bd stat-icon-orders-bd">
            <IconShoppingCart size={24} />
          </div>
          <div>
            <h3 className="stat-label-bd">Total Orders</h3>
            <p className="stat-value-bd">{business.totalOrders}</p>
            <p className="stat-change-bd stat-change-positive-bd">+8.3% from last month</p>
          </div>
        </div>

        <div className="stat-card-bd">
          <div className="stat-icon-bd stat-icon-products-bd">
            <IconPackage size={24} />
          </div>
          <div>
            <h3 className="stat-label-bd">Total Products</h3>
            <p className="stat-value-bd">{business.totalProducts}</p>
            <p className="stat-change-bd">Across all stores</p>
          </div>
        </div>

        <div className="stat-card-bd">
          <div className="stat-icon-bd stat-icon-disputes-bd">
            <IconAlertCircle size={24} />
          </div>
          <div>
            <h3 className="stat-label-bd">Active Disputes</h3>
            <p className="stat-value-bd">{business.disputes}</p>
            <p className="stat-change-bd stat-change-negative-bd">Need attention</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container-bd">
        <div className="tabs-bd">
          <button 
            className={`tab-bd ${activeTab === 'overview' ? 'tab-active-bd' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-bd ${activeTab === 'stores' ? 'tab-active-bd' : ''}`}
            onClick={() => setActiveTab('stores')}
          >
            Stores ({stores.length})
          </button>
          <button 
            className={`tab-bd ${activeTab === 'orders' ? 'tab-active-bd' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Recent Orders
          </button>
          <button 
            className={`tab-bd ${activeTab === 'disputes' ? 'tab-active-bd' : ''}`}
            onClick={() => setActiveTab('disputes')}
          >
            Disputes ({disputes.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content-bd">
          {activeTab === 'overview' && (
            <div className="overview-content-bd">
              <div className="overview-section-bd">
                <h3 className="section-title-bd">Business Description</h3>
                <p className="description-text-bd">{business.description}</p>
              </div>
              <div className="overview-grid-bd">
                <div className="overview-item-bd">
                  <span className="overview-label-bd">Business Reg. Number</span>
                  <span className="overview-value-bd">{business.businessRegNumber}</span>
                </div>
                <div className="overview-item-bd">
                  <span className="overview-label-bd">Tax ID</span>
                  <span className="overview-value-bd">{business.taxId}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stores' && (
            <div className="stores-grid-bd">
              {stores.map(store => (
                <div key={store.id} className="store-card-bd">
                  <div className="store-header-bd">
                    <div>
                      <h3 className="store-name-bd">{store.storeName}</h3>
                      <p className="store-url-bd">/{store.storeUrl}</p>
                    </div>
                    <span className={`status-badge-bd status-${store.status.toLowerCase()}-bd`}>
                      {store.status}
                    </span>
                  </div>
                  <div className="store-location-bd">
                    <IconMapPin size={16} />
                    {store.location}
                  </div>
                  <div className="store-stats-bd">
                    <div className="store-stat-bd">
                      <span className="store-stat-label-bd">Products</span>
                      <span className="store-stat-value-bd">{store.products}</span>
                    </div>
                    <div className="store-stat-bd">
                      <span className="store-stat-label-bd">Orders</span>
                      <span className="store-stat-value-bd">{store.orders}</span>
                    </div>
                    <div className="store-stat-bd">
                      <span className="store-stat-label-bd">Revenue</span>
                      <span className="store-stat-value-bd">{store.revenue}</span>
                    </div>
                  </div>
                  <div className="store-footer-bd">
                    <span className="store-rating-bd">
                      <IconStar size={14} fill="#fbbf24" color="#fbbf24" />
                      {store.rating}
                    </span>
                    <span className="store-created-bd">Created: {store.created}</span>
                  </div>
                  <button className="btn-view-store-bd">View Store Details</button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="table-wrapper-bd">
              <table className="table-bd">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Store</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map(order => (
                    <tr key={order.id}>
                      <td data-label="Order ID" className="order-id-bd">{order.id}</td>
                      <td data-label="Store">{order.store}</td>
                      <td data-label="Customer">{order.customer}</td>
                      <td data-label="Amount" className="amount-bd">{order.amount}</td>
                      <td data-label="Status">
                        <span className={`order-status-bd order-status-${order.status.toLowerCase()}-bd`}>
                          {order.status}
                        </span>
                      </td>
                      <td data-label="Date">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'disputes' && (
            <div className="disputes-list-bd">
              {disputes.map(dispute => (
                <div key={dispute.id} className="dispute-card-bd">
                  <div className="dispute-header-bd">
                    <div>
                      <h4 className="dispute-order-bd">{dispute.orderId}</h4>
                      <p className="dispute-store-bd">{dispute.store}</p>
                    </div>
                    <span className={`dispute-status-bd dispute-status-${dispute.status.toLowerCase()}-bd`}>
                      {dispute.status}
                    </span>
                  </div>
                  <div className="dispute-body-bd">
                    <div className="dispute-info-bd">
                      <span className="dispute-label-bd">Customer:</span>
                      <span className="dispute-value-bd">{dispute.customer}</span>
                    </div>
                    <div className="dispute-info-bd">
                      <span className="dispute-label-bd">Reason:</span>
                      <span className="dispute-value-bd">{dispute.reason}</span>
                    </div>
                    <div className="dispute-info-bd">
                      <span className="dispute-label-bd">Date:</span>
                      <span className="dispute-value-bd">{dispute.date}</span>
                    </div>
                  </div>
                  <button className="btn-view-dispute-bd">View Details</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default BusinessDetails;