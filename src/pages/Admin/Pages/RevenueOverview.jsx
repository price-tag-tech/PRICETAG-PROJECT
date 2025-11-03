import { IconCash, IconTrendingUp, IconTrendingDown, IconReceipt, IconUsers, IconPackage, IconDownload, IconCalendar, IconChartBar } from '@tabler/icons-react';
import React, { useState } from 'react';

const RevenueOverview = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [revenueType, setRevenueType] = useState('all');

  const revenueData = {
    totalRevenue: 15680000,
    subscriptionRevenue: 8450000,
    adPromotionRevenue: 7230000,
    growthRate: 23.5,
    activeSubscribers: 1245,
    totalAds: 328,
    avgRevenuePerUser: 12590
  };

  const monthlyBreakdown = [
    { month: 'Jan', subscriptions: 1200000, ads: 850000, total: 2050000 },
    { month: 'Feb', subscriptions: 1350000, ads: 920000, total: 2270000 },
    { month: 'Mar', subscriptions: 1480000, ads: 1050000, total: 2530000 },
    { month: 'Apr', subscriptions: 1520000, ads: 980000, total: 2500000 },
    { month: 'May', subscriptions: 1680000, ads: 1120000, total: 2800000 },
    { month: 'Jun', subscriptions: 1750000, ads: 1200000, total: 2950000 }
  ];

  const subscriptionTiers = [
    {
      tier: 'Basic Plan',
      price: '₦5,000/month',
      subscribers: 450,
      monthlyRevenue: 2250000,
      percentage: 26.6,
      growth: 12.5
    },
    {
      tier: 'Starter Spark Plan',
      price: '₦15,000/month',
      subscribers: 380,
      monthlyRevenue: 5700000,
      percentage: 67.5,
      growth: 18.2
    },
    {
      tier: 'Pro Plan',
      price: '₦25,000/month',
      subscribers: 415,
      monthlyRevenue: 10375000,
      percentage: 122.8,
      growth: 28.9
    }
  ];

  const adPromotions = [
    {
      type: 'Featured Product Ads',
      count: 145,
      revenue: 3625000,
      avgPrice: 25000,
      growth: 15.3
    },
    {
      type: 'Banner Ads',
      count: 98,
      revenue: 1960000,
      avgPrice: 20000,
      growth: 8.7
    },
    {
      type: 'Sponsored Listings',
      count: 85,
      revenue: 1700000,
      avgPrice: 20000,
      growth: 22.1
    }
  ];

  const topRevenueSources = [
    { source: 'Tech Haven Enterprise', type: 'Pro Plan', amount: 275000, contribution: '1.8%' },
    { source: 'Fashion Retail Group', type: 'Starter Spark', amount: 165000, contribution: '1.1%' },
    { source: 'Electronics Hub Ltd', type: 'Featured Ads', amount: 150000, contribution: '1.0%' },
    { source: 'Sports Gear International', type: 'Pro Plan', amount: 275000, contribution: '1.8%' },
    { source: 'Beauty Corner Holdings', type: 'Banner Ads', amount: 80000, contribution: '0.5%' }
  ];

  return (
    <div className="container-ro">
      {/* Header */}
      <div className="header-ro">
        <div>
          <h1 className="title-ro">Revenue Overview</h1>
          <p className="subtitle-ro">Total earnings by subscription and ad promotion</p>
        </div>
        <div className="actions-ro">
          <select className="select-ro" value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="btn-secondary-ro">
            <IconDownload size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="main-stats-ro">
        <div className="main-stat-card-ro">
          <div className="main-stat-header-ro">
            <div>
              <h3 className="main-stat-label-ro">Total Revenue</h3>
              <p className="main-stat-value-ro">₦{revenueData.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="main-stat-icon-ro main-stat-icon-total-ro">
              <IconCash size={32} />
            </div>
          </div>
          <div className="main-stat-footer-ro">
            <span className="growth-positive-ro">
              <IconTrendingUp size={16} />
              +{revenueData.growthRate}%
            </span>
            <span className="growth-text-ro">vs last month</span>
          </div>
        </div>

        <div className="main-stat-card-ro">
          <div className="main-stat-header-ro">
            <div>
              <h3 className="main-stat-label-ro">Subscription Revenue</h3>
              <p className="main-stat-value-ro">₦{revenueData.subscriptionRevenue.toLocaleString()}</p>
            </div>
            <div className="main-stat-icon-ro main-stat-icon-subscription-ro">
              <IconReceipt size={32} />
            </div>
          </div>
          <div className="main-stat-footer-ro">
            <span className="revenue-percentage-ro">
              {((revenueData.subscriptionRevenue / revenueData.totalRevenue) * 100).toFixed(1)}% of total
            </span>
          </div>
        </div>

        <div className="main-stat-card-ro">
          <div className="main-stat-header-ro">
            <div>
              <h3 className="main-stat-label-ro">Ad Promotion Revenue</h3>
              <p className="main-stat-value-ro">₦{revenueData.adPromotionRevenue.toLocaleString()}</p>
            </div>
            <div className="main-stat-icon-ro main-stat-icon-ads-ro">
              <IconChartBar size={32} />
            </div>
          </div>
          <div className="main-stat-footer-ro">
            <span className="revenue-percentage-ro">
              {((revenueData.adPromotionRevenue / revenueData.totalRevenue) * 100).toFixed(1)}% of total
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="stats-grid-ro">
        <div className="stat-card-ro">
          <div className="stat-icon-ro stat-icon-users-ro">
            <IconUsers size={24} />
          </div>
          <div>
            <h3 className="stat-label-ro">Active Subscribers</h3>
            <p className="stat-value-ro">{revenueData.activeSubscribers.toLocaleString()}</p>
          </div>
        </div>

        <div className="stat-card-ro">
          <div className="stat-icon-ro stat-icon-ads-ro">
            <IconPackage size={24} />
          </div>
          <div>
            <h3 className="stat-label-ro">Active Ads</h3>
            <p className="stat-value-ro">{revenueData.totalAds}</p>
          </div>
        </div>

        <div className="stat-card-ro">
          <div className="stat-icon-ro stat-icon-avg-ro">
            <IconCash size={24} />
          </div>
          <div>
            <h3 className="stat-label-ro">Avg Revenue per User</h3>
            <p className="stat-value-ro">₦{revenueData.avgRevenuePerUser.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Revenue Filter Buttons */}
      <div className="filter-card-ro">
        <button 
          className={`filter-btn-ro ${revenueType === 'all' ? 'filter-btn-active-ro' : ''}`}
          onClick={() => setRevenueType('all')}
        >
          All Revenue
        </button>
        <button 
          className={`filter-btn-ro ${revenueType === 'subscriptions' ? 'filter-btn-active-ro' : ''}`}
          onClick={() => setRevenueType('subscriptions')}
        >
          Subscriptions Only
        </button>
        <button 
          className={`filter-btn-ro ${revenueType === 'ads' ? 'filter-btn-active-ro' : ''}`}
          onClick={() => setRevenueType('ads')}
        >
          Ad Promotions Only
        </button>
      </div>

      {/* Content Grid */}
      <div className="content-grid-ro">
        {/* Subscription Plans */}
        {(revenueType === 'all' || revenueType === 'subscriptions') && (
          <div className="section-card-ro">
            <div className="section-header-ro">
              <h2 className="section-title-ro">Subscription Plans Revenue</h2>
              <span className="section-badge-ro">{subscriptionTiers.length} Plans</span>
            </div>
            <div className="plans-list-ro">
              {subscriptionTiers.map((tier, index) => (
                <div key={index} className="plan-item-ro">
                  <div className="plan-info-ro">
                    <h3 className="plan-name-ro">{tier.tier}</h3>
                    <p className="plan-price-ro">{tier.price}</p>
                  </div>
                  <div className="plan-stats-ro">
                    <div className="plan-stat-ro">
                      <span className="plan-stat-label-ro">Subscribers</span>
                      <span className="plan-stat-value-ro">{tier.subscribers}</span>
                    </div>
                    <div className="plan-stat-ro">
                      <span className="plan-stat-label-ro">Monthly Revenue</span>
                      <span className="plan-stat-value-ro plan-revenue-ro">₦{tier.monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="plan-stat-ro">
                      <span className="plan-stat-label-ro">Growth</span>
                      <span className="plan-growth-ro">
                        <IconTrendingUp size={14} />
                        +{tier.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ad Promotions */}
        {(revenueType === 'all' || revenueType === 'ads') && (
          <div className="section-card-ro">
            <div className="section-header-ro">
              <h2 className="section-title-ro">Ad Promotion Revenue</h2>
              <span className="section-badge-ro">{adPromotions.length} Types</span>
            </div>
            <div className="ads-list-ro">
              {adPromotions.map((ad, index) => (
                <div key={index} className="ad-item-ro">
                  <div className="ad-header-ro">
                    <h3 className="ad-type-ro">{ad.type}</h3>
                    <span className="ad-growth-ro">
                      <IconTrendingUp size={14} />
                      +{ad.growth}%
                    </span>
                  </div>
                  <div className="ad-stats-ro">
                    <div className="ad-stat-ro">
                      <span className="ad-stat-label-ro">Active Ads</span>
                      <span className="ad-stat-value-ro">{ad.count}</span>
                    </div>
                    <div className="ad-stat-ro">
                      <span className="ad-stat-label-ro">Total Revenue</span>
                      <span className="ad-stat-value-ro ad-revenue-ro">₦{ad.revenue.toLocaleString()}</span>
                    </div>
                    <div className="ad-stat-ro">
                      <span className="ad-stat-label-ro">Avg Price</span>
                      <span className="ad-stat-value-ro">₦{ad.avgPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Top Revenue Sources */}
      <div className="table-card-ro">
        <div className="table-header-ro">
          <h2 className="table-title-ro">Top Revenue Sources</h2>
        </div>
        <div className="table-wrapper-ro">
          <table className="table-ro">
            <thead>
              <tr>
                <th>RANK</th>
                <th>SOURCE</th>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CONTRIBUTION</th>
              </tr>
            </thead>
            <tbody>
              {topRevenueSources.map((source, index) => (
                <tr key={index}>
                  <td data-label="Rank">
                    <span className="rank-badge-ro">#{index + 1}</span>
                  </td>
                  <td data-label="Source" className="source-name-ro">{source.source}</td>
                  <td data-label="Type">
                    <span className="type-badge-ro">{source.type}</span>
                  </td>
                  <td data-label="Amount" className="amount-ro">₦{source.amount.toLocaleString()}</td>
                  <td data-label="Contribution">{source.contribution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  );
};

export default RevenueOverview;