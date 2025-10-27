import { IconDots, IconPlus, IconUpload } from '@tabler/icons-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StoreDashboard = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const Navigate =  useNavigate();
  const salesData = [
    { day: 'Monday', value: 350000 },
    { day: 'Tuesday', value: 200000 },
    { day: 'Wednesday', value: 480000 },
    { day: 'Thursday', value: 620000 },
    { day: 'Friday', value: 380000 },
    { day: 'Saturday', value: 720000 },
    { day: 'Sunday', value: 1000000 },
  ];

  const maxValue = Math.max(...salesData.map(d => d.value));

  const allOrders = [
    {
      id: 1,
      product: 'Quality Bluetooth Headset',
      productCode: '020192',
      quantity: 1,
      amount: '₦ 8,000',
      client: 'Prince Godson',
      date: 'a few hours... 6:09 AM',
      status: 'Pending'
    },
    {
      id: 2,
      product: 'Wireless Gaming Mouse',
      productCode: '030245',
      quantity: 2,
      amount: '₦ 15,000',
      client: 'Sarah Johnson',
      date: 'Today, 8:45 AM',
      status: 'Completed'
    },
    {
      id: 3,
      product: 'USB-C Fast Charger',
      productCode: '045678',
      quantity: 3,
      amount: '₦ 12,000',
      client: 'Michael Chen',
      date: 'Today, 10:20 AM',
      status: 'Completed'
    },
    {
      id: 4,
      product: 'Laptop Stand Pro',
      productCode: '056789',
      quantity: 1,
      amount: '₦ 25,000',
      client: 'Emma Williams',
      date: 'Yesterday, 3:15 PM',
      status: 'Pending'
    },
    {
      id: 5,
      product: 'Mechanical Keyboard',
      productCode: '067890',
      quantity: 1,
      amount: '₦ 35,000',
      client: 'David Brown',
      date: 'Yesterday, 5:30 PM',
      status: 'Cancelled'
    },
    {
      id: 6,
      product: '4K Webcam',
      productCode: '078901',
      quantity: 2,
      amount: '₦ 45,000',
      client: 'Lisa Anderson',
      date: '2 days ago, 11:00 AM',
      status: 'Completed'
    }
  ];

  const filteredOrders = filterStatus === 'All' 
    ? allOrders 
    : allOrders.filter(order => order.status === filterStatus);

 

  return (
    <>
     

      <div className="overview-container-ovr">
        {/* Welcome Header */}
        <div className="store-welcome">
          <div>
            <h1 className="store-welcome-title">Welcome Back!</h1>
            <span className="store-member-since">Member since 3rd May, 2015</span>
          </div>
          <div className="store-actions">
            <Link to={"/store-dashboard/profile"} className="store-customize-btn">Customize Store</Link>
           
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="store-content-grid">
          {/* Left Column */}
          <div className="store-left-column">
            {/* Action Buttons */}
            <div className="store-action-buttons">
              <Link to={"/store-dashboard/products"} className="store-upload-btn" >
                <IconUpload size={20} />
                <span>Upload a Product</span>
              </Link>
              <Link to={"/store-dashboard/products"} className="store-add-service-btn" >
                <IconPlus size={20}/>
                <span>Add a Service</span>
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="store-stats-cards">
              <div className="store-stat-card store-stat-products">
                <div className="store-stat-number">0</div>
                <div className="store-stat-info">
                  <h3>Products</h3>
                  <p>Uploaded Products</p>
                </div>
              </div>

              <div className="store-stat-card store-stat-services">
                <div className="store-stat-number">100</div>
                <div className="store-stat-info">
                  <h3>Services</h3>
                  <p>Uploaded services</p>
                </div>
              </div>

              <div className="store-stat-card store-stat-customers">
                <div className="store-stat-number">0</div>
                <div className="store-stat-info">
                  <h3>Customers</h3>
                  <p>Your customers</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="store-right-column">
            {/* Sales Chart */}
            <div className="store-chart-card">
              <h2 className="store-chart-title">Sales weekly Revenue</h2>
              <div className="store-chart">
                <div className="store-chart-y-axis">
                  <span>₦ 1M</span>
                  <span>₦ 800K</span>
                  <span>₦ 600K</span>
                  <span>₦ 400K</span>
                  <span>₦ 200K</span>
                  <span>₦ 0</span>
                </div>
                <div className="store-chart-area">
                  <svg viewBox="0 0 700 300" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.05"/>
                      </linearGradient>
                    </defs>
                    <path
                      d={`M 0 ${300 - (salesData[0].value / maxValue) * 250} 
                          Q 50 ${300 - (salesData[0].value / maxValue) * 280}, 100 ${300 - (salesData[1].value / maxValue) * 250}
                          Q 150 ${300 - (salesData[1].value / maxValue) * 220}, 200 ${300 - (salesData[2].value / maxValue) * 250}
                          Q 250 ${300 - (salesData[2].value / maxValue) * 280}, 300 ${300 - (salesData[3].value / maxValue) * 250}
                          Q 350 ${300 - (salesData[3].value / maxValue) * 220}, 400 ${300 - (salesData[4].value / maxValue) * 250}
                          Q 450 ${300 - (salesData[4].value / maxValue) * 280}, 500 ${300 - (salesData[5].value / maxValue) * 250}
                          Q 550 ${300 - (salesData[5].value / maxValue) * 220}, 600 ${300 - (salesData[6].value / maxValue) * 250}
                          L 600 300 L 0 300 Z`}
                      fill="url(#salesGradient)"
                    />
                    <path
                      d={`M 0 ${300 - (salesData[0].value / maxValue) * 250} 
                          Q 50 ${300 - (salesData[0].value / maxValue) * 280}, 100 ${300 - (salesData[1].value / maxValue) * 250}
                          Q 150 ${300 - (salesData[1].value / maxValue) * 220}, 200 ${300 - (salesData[2].value / maxValue) * 250}
                          Q 250 ${300 - (salesData[2].value / maxValue) * 280}, 300 ${300 - (salesData[3].value / maxValue) * 250}
                          Q 350 ${300 - (salesData[3].value / maxValue) * 220}, 400 ${300 - (salesData[4].value / maxValue) * 250}
                          Q 450 ${300 - (salesData[4].value / maxValue) * 280}, 500 ${300 - (salesData[5].value / maxValue) * 250}
                          Q 550 ${300 - (salesData[5].value / maxValue) * 220}, 600 ${300 - (salesData[6].value / maxValue) * 250}`}
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="3"
                    />
                    <circle cx="500" cy={300 - (salesData[5].value / maxValue) * 250} r="6" fill="#4ade80"/>
                  </svg>
                  <div className="store-chart-labels">
                    {salesData.map(d => (
                      <span key={d.day}>{d.day}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
          {/* Latest Orders */}
            <div className="store-orders-card">
              <div className="store-orders-header">
                <h2>Latest Orders</h2>
                <Link to="/store-dashboard/orders" className="store-all-orders">All Orders</Link>
              </div>
              
              {/* Filter Buttons */}
              <div className="store-filter-buttons">
                <button 
                  className={`store-filter-btn ${filterStatus === 'All' ? 'store-filter-active' : ''}`}
                  onClick={() => setFilterStatus('All')}
                >
                  All
                </button>
                <button 
                  className={`store-filter-btn ${filterStatus === 'Pending' ? 'store-filter-active' : ''}`}
                  onClick={() => setFilterStatus('Pending')}
                >
                  Pending
                </button>
                <button 
                  className={`store-filter-btn ${filterStatus === 'Completed' ? 'store-filter-active' : ''}`}
                  onClick={() => setFilterStatus('Completed')}
                >
                  Completed
                </button>
                <button 
                  className={`store-filter-btn ${filterStatus === 'Cancelled' ? 'store-filter-active' : ''}`}
                  onClick={() => setFilterStatus('Cancelled')}
                >
                  Cancelled
                </button>
              </div>

              <div className="store-orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>ORDERS</th>
                      <th>PRODUCT CODE</th>
                      <th>QUANTITY</th>
                      <th>AMOUNT</th>
                      <th>CLIENT NAME</th>
                      <th>DATE/TIME</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => (
                      <tr key={order.id}>
                        <td data-label="S/N">{index + 1}</td>
                        <td data-label="Orders">{order.product}</td>
                        <td data-label="Product Code">{order.productCode}</td>
                        <td data-label="Quantity">{order.quantity}</td>
                        <td data-label="Amount">{order.amount}</td>
                        <td data-label="Client Name">{order.client}</td>
                        <td data-label="Date/Time">{order.date}</td>
                        <td data-label="Status">
                          <span className={`store-status-${order.status.toLowerCase()}`}>{order.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </>
  );
};

export default StoreDashboard;