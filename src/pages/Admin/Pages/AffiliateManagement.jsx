import { IconUsers, IconClick, IconTrendingUp, IconCash, IconSearch, IconFilter, IconDownload, IconEye, IconChartLine, IconTarget, IconUserCheck } from '@tabler/icons-react';
import React, { useState } from 'react';

const AffiliateManagement = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const affiliates = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      joinDate: 'Jan 15, 2024',
      status: 'Active',
      totalReferrals: 45,
      successfulConversions: 28,
      conversionRate: 62.2,
      totalClicks: 1250,
      clickThroughRate: 3.6,
      totalEarnings: 420000,
      pendingEarnings: 85000,
      lastActivity: '2 hours ago',
      tier: 'Gold'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      joinDate: 'Feb 20, 2024',
      status: 'Active',
      totalReferrals: 32,
      successfulConversions: 20,
      conversionRate: 62.5,
      totalClicks: 890,
      clickThroughRate: 3.6,
      totalEarnings: 280000,
      pendingEarnings: 45000,
      lastActivity: '5 hours ago',
      tier: 'Silver'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@example.com',
      joinDate: 'Mar 10, 2024',
      status: 'Active',
      totalReferrals: 68,
      successfulConversions: 52,
      conversionRate: 76.5,
      totalClicks: 2100,
      clickThroughRate: 3.3,
      totalEarnings: 780000,
      pendingEarnings: 125000,
      lastActivity: '1 day ago',
      tier: 'Platinum'
    },
    {
      id: 4,
      name: 'Emma Williams',
      email: 'emma@example.com',
      joinDate: 'Apr 05, 2024',
      status: 'Inactive',
      totalReferrals: 12,
      successfulConversions: 5,
      conversionRate: 41.7,
      totalClicks: 320,
      clickThroughRate: 3.8,
      totalEarnings: 75000,
      pendingEarnings: 0,
      lastActivity: '15 days ago',
      tier: 'Bronze'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david@example.com',
      joinDate: 'May 12, 2024',
      status: 'Active',
      totalReferrals: 55,
      successfulConversions: 38,
      conversionRate: 69.1,
      totalClicks: 1680,
      clickThroughRate: 3.3,
      totalEarnings: 570000,
      pendingEarnings: 95000,
      lastActivity: '3 hours ago',
      tier: 'Gold'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa@example.com',
      joinDate: 'Jun 18, 2024',
      status: 'Pending',
      totalReferrals: 8,
      successfulConversions: 3,
      conversionRate: 37.5,
      totalClicks: 180,
      clickThroughRate: 4.4,
      totalEarnings: 45000,
      pendingEarnings: 45000,
      lastActivity: '1 hour ago',
      tier: 'Bronze'
    }
  ];

  const filteredAffiliates = filterStatus === 'All' 
    ? affiliates 
    : affiliates.filter(affiliate => affiliate.status === filterStatus);

  const searchedAffiliates = searchQuery 
    ? filteredAffiliates.filter(affiliate => 
        affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        affiliate.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredAffiliates;

  const totalStats = {
    totalAffiliates: affiliates.length,
    activeAffiliates: affiliates.filter(a => a.status === 'Active').length,
    totalReferrals: affiliates.reduce((sum, a) => sum + a.totalReferrals, 0),
    totalConversions: affiliates.reduce((sum, a) => sum + a.successfulConversions, 0),
    totalClicks: affiliates.reduce((sum, a) => sum + a.totalClicks, 0),
    totalEarnings: affiliates.reduce((sum, a) => sum + a.totalEarnings, 0)
  };

  const handleViewDetails = (id) => {
    console.log('View affiliate details:', id);
  };

  const topPerformers = [...affiliates]
    .sort((a, b) => b.totalEarnings - a.totalEarnings)
    .slice(0, 5);

  return (
    <div className="container-am">
      {/* Header */}
      <div className="header-am">
        <div>
          <h1 className="title-am">Affiliate Management</h1>
          <p className="subtitle-am">Track referrals, clicks, and conversions</p>
        </div>
        <div className="actions-am">
          <button className="btn-secondary-am">
            <IconDownload size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="stats-grid-am">
        <div className="stat-card-am">
          <div className="stat-icon-am stat-icon-users-am">
            <IconUsers size={24} />
          </div>
          <div>
            <h3 className="stat-label-am">Total Affiliates</h3>
            <p className="stat-value-am">{totalStats.totalAffiliates}</p>
            <p className="stat-description-am">{totalStats.activeAffiliates} Active</p>
          </div>
        </div>

        <div className="stat-card-am">
          <div className="stat-icon-am stat-icon-referrals-am">
            <IconUserCheck size={24} />
          </div>
          <div>
            <h3 className="stat-label-am">Total Referrals</h3>
            <p className="stat-value-am">{totalStats.totalReferrals}</p>
            <p className="stat-description-am">{totalStats.totalConversions} Converted</p>
          </div>
        </div>

        <div className="stat-card-am">
          <div className="stat-icon-am stat-icon-clicks-am">
            <IconClick size={24} />
          </div>
          <div>
            <h3 className="stat-label-am">Total Clicks</h3>
            <p className="stat-value-am">{totalStats.totalClicks.toLocaleString()}</p>
            <p className="stat-description-am">{((totalStats.totalConversions / totalStats.totalClicks) * 100).toFixed(1)}% CTR</p>
          </div>
        </div>

        <div className="stat-card-am">
          <div className="stat-icon-am stat-icon-earnings-am">
            <IconCash size={24} />
          </div>
          <div>
            <h3 className="stat-label-am">Total Earnings Paid</h3>
            <p className="stat-value-am">₦{totalStats.totalEarnings.toLocaleString()}</p>
            <p className="stat-description-am">All time</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="search-card-am">
        <div className="search-wrapper-am">
          <div className="search-input-wrapper-am">
            <IconSearch size={20} className="search-icon-am" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-am"
            />
          </div>
          <button className="btn-secondary-am">
            <IconFilter size={18} />
            Advanced Filter
          </button>
        </div>
      </div>

      {/* Top Performers Section */}
      <div className="top-performers-am">
        <div className="section-header-am">
          <h2 className="section-title-am">Top Performers</h2>
          <span className="section-badge-am">Top 5</span>
        </div>
        <div className="performers-grid-am">
          {topPerformers.map((affiliate, index) => (
            <div key={affiliate.id} className="performer-card-am">
              <div className="performer-rank-am">#{index + 1}</div>
              <div className="performer-avatar-am">
                {affiliate.name.charAt(0)}
              </div>
              <div className="performer-info-am">
                <h3 className="performer-name-am">{affiliate.name}</h3>
                <p className="performer-email-am">{affiliate.email}</p>
              </div>
              <div className="performer-stats-am">
                <div className="performer-stat-am">
                  <span className="performer-stat-label-am">Earnings</span>
                  <span className="performer-stat-value-am">₦{affiliate.totalEarnings.toLocaleString()}</span>
                </div>
                <div className="performer-stat-am">
                  <span className="performer-stat-label-am">Conversions</span>
                  <span className="performer-stat-value-am">{affiliate.successfulConversions}</span>
                </div>
                <div className="performer-stat-am">
                  <span className="performer-stat-label-am">Rate</span>
                  <span className="performer-stat-value-am">{affiliate.conversionRate}%</span>
                </div>
              </div>
              <span className={`tier-badge-am tier-${affiliate.tier.toLowerCase()}-am`}>
                {affiliate.tier}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Affiliates Table */}
      <div className="table-card-am">
        <div className="table-header-am">
          <h2 className="table-title-am">All Affiliates</h2>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons-am">
          <button 
            className={`filter-btn-am ${filterStatus === 'All' ? 'filter-btn-active-am' : ''}`}
            onClick={() => setFilterStatus('All')}
          >
            All Affiliates
          </button>
          <button 
            className={`filter-btn-am ${filterStatus === 'Active' ? 'filter-btn-active-am' : ''}`}
            onClick={() => setFilterStatus('Active')}
          >
            Active
          </button>
          <button 
            className={`filter-btn-am ${filterStatus === 'Pending' ? 'filter-btn-active-am' : ''}`}
            onClick={() => setFilterStatus('Pending')}
          >
            Pending
          </button>
          <button 
            className={`filter-btn-am ${filterStatus === 'Inactive' ? 'filter-btn-active-am' : ''}`}
            onClick={() => setFilterStatus('Inactive')}
          >
            Inactive
          </button>
        </div>

        <div className="table-wrapper-am">
          <table className="table-am">
            <thead>
              <tr>
                <th>AFFILIATE</th>
                <th>TIER</th>
                <th>REFERRALS</th>
                <th>CONVERSIONS</th>
                <th>CONV. RATE</th>
                <th>CLICKS</th>
                <th>EARNINGS</th>
                <th>PENDING</th>
                <th>LAST ACTIVITY</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {searchedAffiliates.map((affiliate) => (
                <tr key={affiliate.id}>
                  <td data-label="Affiliate">
                    <div className="affiliate-cell-am">
                      <div className="affiliate-avatar-am">
                        {affiliate.name.charAt(0)}
                      </div>
                      <div>
                        <span className="affiliate-name-am">{affiliate.name}</span>
                        <span className="affiliate-email-am">{affiliate.email}</span>
                      </div>
                    </div>
                  </td>
                  <td data-label="Tier">
                    <span className={`tier-badge-am tier-${affiliate.tier.toLowerCase()}-am`}>
                      {affiliate.tier}
                    </span>
                  </td>
                  <td data-label="Referrals">{affiliate.totalReferrals}</td>
                  <td data-label="Conversions">
                    <span className="conversions-am">{affiliate.successfulConversions}</span>
                  </td>
                  <td data-label="Conv. Rate">
                    <span className="conversion-rate-am">{affiliate.conversionRate}%</span>
                  </td>
                  <td data-label="Clicks">{affiliate.totalClicks.toLocaleString()}</td>
                  <td data-label="Earnings" className="earnings-am">
                    ₦{affiliate.totalEarnings.toLocaleString()}
                  </td>
                  <td data-label="Pending" className="pending-am">
                    ₦{affiliate.pendingEarnings.toLocaleString()}
                  </td>
                  <td data-label="Last Activity">{affiliate.lastActivity}</td>
                  <td data-label="Status">
                    <span className={`status-badge-am status-${affiliate.status.toLowerCase()}-am`}>
                      {affiliate.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <button 
                      onClick={() => handleViewDetails(affiliate.id)}
                      className="btn-view-am"
                    >
                      <IconEye size={14} />
                      View
                    </button>
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

export default AffiliateManagement;