import { IconUsers, IconShoppingBag, IconCurrencyNaira, IconTrendingUp } from '@tabler/icons-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [filterPeriod, setFilterPeriod] = useState('This Week');

  const revenueData = [
    { day: 'Mon', value: 2500000 },
    { day: 'Tue', value: 3200000 },
    { day: 'Wed', value: 2800000 },
    { day: 'Thu', value: 4100000 },
    { day: 'Fri', value: 3600000 },
    { day: 'Sat', value: 4800000 },
    { day: 'Sun', value: 5200000 },
  ];

  const maxValue = Math.max(...revenueData.map(d => d.value));

  const recentActivities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Registered new account',
      type: 'User Registration',
      time: '5 minutes ago',
      status: 'Pending'
    },
    {
      id: 2,
      user: 'Tech Store NG',
      action: 'Submitted KYC documents',
      type: 'KYC Review',
      time: '15 minutes ago',
      status: 'Pending'
    },
    {
      id: 3,
      user: 'Sarah Johnson',
      action: 'Requested payout of ₦500,000',
      type: 'Finance',
      time: '1 hour ago',
      status: 'Processing'
    },
    {
      id: 4,
      user: 'Mike Store',
      action: 'Business verification approved',
      type: 'Business',
      time: '2 hours ago',
      status: 'Completed'
    },
    {
      id: 5,
      user: 'Customer #12345',
      action: 'Submitted support ticket',
      type: 'Support',
      time: '3 hours ago',
      status: 'Open'
    }
  ];

  return (
    <div className="overview-container-ovr">
      {/* Welcome Header */}
      <div className="store-welcome">
        <div>
          <h1 className="store-welcome-title">Super Admin Dashboard</h1>
          <span className="store-member-since">Platform Overview & Management</span>
        </div>
        <div className="store-actions">
          <select 
            className="store-customize-btn"
            value={filterPeriod}
            onChange={(e) => setFilterPeriod(e.target.value)}
            style={{cursor: 'pointer'}}
          >
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px'}}>
        <div className="store-stat-card">
          <div className="store-stat-number" style={{color: '#2563eb', background: '#dbeafe'}}>
            <IconUsers size={40} />
          </div>
          <div className="store-stat-info">
            <h3>Total Users</h3>
            <p style={{fontSize: '24px', fontWeight: '600', color: '#1a1a1a', margin: '4px 0'}}>45,231</p>
            <p style={{color: '#16a34a', fontSize: '12px'}}>↑ 12.5% from last month</p>
          </div>
        </div>

        <div className="store-stat-card">
          <div className="store-stat-number" style={{color: '#16a34a', background: '#f0fdf4'}}>
            <IconShoppingBag size={40} />
          </div>
          <div className="store-stat-info">
            <h3>Active Stores</h3>
            <p style={{fontSize: '24px', fontWeight: '600', color: '#1a1a1a', margin: '4px 0'}}>8,432</p>
            <p style={{color: '#16a34a', fontSize: '12px'}}>↑ 8.3% from last month</p>
          </div>
        </div>

        <div className="store-stat-card">
          <div className="store-stat-number" style={{color: '#d97706', background: '#fef3c7'}}>
            <IconCurrencyNaira size={40} />
          </div>
          <div className="store-stat-info">
            <h3>Platform Revenue</h3>
            <p style={{fontSize: '24px', fontWeight: '600', color: '#1a1a1a', margin: '4px 0'}}>₦25.8M</p>
            <p style={{color: '#16a34a', fontSize: '12px'}}>↑ 15.2% from last month</p>
          </div>
        </div>

        <div className="store-stat-card">
          <div className="store-stat-number" style={{color: '#9333ea', background: '#f3e8ff'}}>
            <IconTrendingUp size={40} />
          </div>
          <div className="store-stat-info">
            <h3>Total Transactions</h3>
            <p style={{fontSize: '24px', fontWeight: '600', color: '#1a1a1a', margin: '4px 0'}}>123,456</p>
            <p style={{color: '#16a34a', fontSize: '12px'}}>↑ 18.7% from last month</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="store-content-grid">
        {/* Left Column - Quick Actions */}
        <div className="store-left-column">
          

          {/* Pending Reviews */}
          <div className="store-stats-cards">
            <div className="store-stat-card store-stat-products">
              <div className="store-stat-number">24</div>
              <div className="store-stat-info">
                <h3>Pending KYC</h3>
                <p>Awaiting Review</p>
              </div>
            </div>

            <div className="store-stat-card store-stat-services">
              <div className="store-stat-number">15</div>
              <div className="store-stat-info">
                <h3>Open Tickets</h3>
                <p>Support requests</p>
              </div>
            </div>

            <div className="store-stat-card store-stat-customers">
              <div className="store-stat-number">8</div>
              <div className="store-stat-info">
                <h3>Payout Queue</h3>
                <p>Pending approval</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Revenue Chart */}
        <div className="store-right-column">
          <div className="store-chart-card">
            <h2 className="store-chart-title">Platform Revenue Overview</h2>
            <div className="store-chart">
              <div className="store-chart-y-axis">
                <span>₦ 5.2M</span>
                <span>₦ 4M</span>
                <span>₦ 3M</span>
                <span>₦ 2M</span>
                <span>₦ 1M</span>
                <span>₦ 0</span>
              </div>
              <div className="store-chart-area">
                <svg viewBox="0 0 700 300" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  <path
                    d={`M 0 ${300 - (revenueData[0].value / maxValue) * 250} 
                        Q 50 ${300 - (revenueData[0].value / maxValue) * 280}, 100 ${300 - (revenueData[1].value / maxValue) * 250}
                        Q 150 ${300 - (revenueData[1].value / maxValue) * 220}, 200 ${300 - (revenueData[2].value / maxValue) * 250}
                        Q 250 ${300 - (revenueData[2].value / maxValue) * 280}, 300 ${300 - (revenueData[3].value / maxValue) * 250}
                        Q 350 ${300 - (revenueData[3].value / maxValue) * 220}, 400 ${300 - (revenueData[4].value / maxValue) * 250}
                        Q 450 ${300 - (revenueData[4].value / maxValue) * 280}, 500 ${300 - (revenueData[5].value / maxValue) * 250}
                        Q 550 ${300 - (revenueData[5].value / maxValue) * 220}, 600 ${300 - (revenueData[6].value / maxValue) * 250}
                        L 600 300 L 0 300 Z`}
                    fill="url(#revenueGradient)"
                  />
                  <path
                    d={`M 0 ${300 - (revenueData[0].value / maxValue) * 250} 
                        Q 50 ${300 - (revenueData[0].value / maxValue) * 280}, 100 ${300 - (revenueData[1].value / maxValue) * 250}
                        Q 150 ${300 - (revenueData[1].value / maxValue) * 220}, 200 ${300 - (revenueData[2].value / maxValue) * 250}
                        Q 250 ${300 - (revenueData[2].value / maxValue) * 280}, 300 ${300 - (revenueData[3].value / maxValue) * 250}
                        Q 350 ${300 - (revenueData[3].value / maxValue) * 220}, 400 ${300 - (revenueData[4].value / maxValue) * 250}
                        Q 450 ${300 - (revenueData[4].value / maxValue) * 280}, 500 ${300 - (revenueData[5].value / maxValue) * 250}
                        Q 550 ${300 - (revenueData[5].value / maxValue) * 220}, 600 ${300 - (revenueData[6].value / maxValue) * 250}`}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                  />
                  <circle cx="600" cy={300 - (revenueData[6].value / maxValue) * 250} r="6" fill="#2563eb"/>
                </svg>
                <div className="store-chart-labels">
                  {revenueData.map(d => (
                    <span key={d.day}>{d.day}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="store-orders-card">
        <div className="store-orders-header">
          <h2>Recent Platform Activities</h2>
          <Link to="/admin/activity-logs" className="store-all-orders">
            View All Logs
          </Link>
        </div>

        <div className="store-orders-table">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>USER/STORE</th>
                <th>ACTION</th>
                <th>TYPE</th>
                <th>TIME</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity, index) => (
                <tr key={activity.id}>
                  <td data-label="S/N">{index + 1}</td>
                  <td data-label="User/Store">{activity.user}</td>
                  <td data-label="Action">{activity.action}</td>
                  <td data-label="Type">{activity.type}</td>
                  <td data-label="Time">{activity.time}</td>
                  <td data-label="Status">
                    <span className={`store-status-${activity.status.toLowerCase()}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

