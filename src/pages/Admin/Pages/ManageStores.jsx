import { IconSearch, IconFilter, IconDownload, IconBuildingStore, IconEye, IconAlertCircle, IconBuilding } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageBusiness = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const businesses = [
    {
      id: 1,
      businessName: 'Tech Haven Enterprise',
      ownerName: 'John Doe',
      ownerEmail: 'john@techhaven.ng',
      phone: '+234 801 234 5678',
      plan: 'Pro Plan',
      maxStores: 10,
      currentStores: 3,
      status: 'Active',
      registered: 'Jan 15, 2024',
      totalProducts: 125,
      totalOrders: 328,
      totalRevenue: '₦15,200,000',
      disputes: 2,
      rating: 4.8
    },
    {
      id: 2,
      businessName: 'Fashion Retail Group',
      ownerName: 'Sarah Johnson',
      ownerEmail: 'sarah@fashion.ng',
      phone: '+234 802 345 6789',
      plan: 'Starter Spark Plan',
      maxStores: 2,
      currentStores: 2,
      status: 'Active',
      registered: 'Feb 20, 2024',
      totalProducts: 89,
      totalOrders: 245,
      totalRevenue: '₦12,500,000',
      disputes: 0,
      rating: 4.5
    },
    {
      id: 3,
      businessName: 'Electronics Hub Ltd',
      ownerName: 'Mike Chen',
      ownerEmail: 'mike@electronics.ng',
      phone: '+234 803 456 7890',
      plan: 'Pro Plan',
      maxStores: 10,
      currentStores: 5,
      status: 'Suspended',
      registered: 'Mar 10, 2024',
      totalProducts: 200,
      totalOrders: 450,
      totalRevenue: '₦22,800,000',
      disputes: 8,
      rating: 4.2
    },
    {
      id: 4,
      businessName: 'Home & Living Co',
      ownerName: 'Emma Williams',
      ownerEmail: 'emma@homeliving.ng',
      phone: '+234 804 567 8901',
      plan: 'Basic Plan',
      maxStores: 1,
      currentStores: 1,
      status: 'Pending',
      registered: 'Oct 25, 2024',
      totalProducts: 45,
      totalOrders: 12,
      totalRevenue: '₦850,000',
      disputes: 0,
      rating: 0
    },
    {
      id: 5,
      businessName: 'Sports Gear International',
      ownerName: 'David Brown',
      ownerEmail: 'david@sportsgear.ng',
      phone: '+234 805 678 9012',
      plan: 'Pro Plan',
      maxStores: 10,
      currentStores: 4,
      status: 'Active',
      registered: 'May 5, 2024',
      totalProducts: 178,
      totalOrders: 412,
      totalRevenue: '₦18,600,000',
      disputes: 1,
      rating: 4.9
    },
    {
      id: 6,
      businessName: 'Beauty Corner Holdings',
      ownerName: 'Lisa Anderson',
      ownerEmail: 'lisa@beautycorner.ng',
      phone: '+234 806 789 0123',
      plan: 'Starter Spark Plan',
      maxStores: 2,
      currentStores: 1,
      status: 'Active',
      registered: 'Jun 12, 2024',
      totalProducts: 95,
      totalOrders: 189,
      totalRevenue: '₦9,450,000',
      disputes: 0,
      rating: 4.7
    }
  ];

  const filteredBusinesses = filterStatus === 'All' 
    ? businesses 
    : businesses.filter(business => business.status === filterStatus);

  const searchedBusinesses = searchQuery 
    ? filteredBusinesses.filter(business => 
        business.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredBusinesses;

  const handleViewBusiness = (id) => {
    navigate(`/admin/manage-business/${id}`);
  };
  const handleViewDisputes = (id) => {
    // Navigate to disputes page: /admin/business/{id}/disputes
    console.log('View disputes for business:', id);
  };

  return (
    <div className="container-mngd">
      {/* Header */}
      <div className="header-mngd">
        <div>
          <h1 className="title-mngd">Manage Businesses</h1>
          <span className="subtitle-mngd">
            Total Businesses: {businesses.length} | Active: {businesses.filter(b => b.status === 'Active').length} | 
            Pending Disputes: {businesses.reduce((sum, b) => sum + b.disputes, 0)}
          </span>
        </div>
        <div className="actions-mngd">
          <button className="btn-secondary-mngd">
            <IconDownload size={18} />
            Export Data
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="search-card-mngd">
        <div className="search-wrapper-mngd">
          <div className="search-input-wrapper-mngd">
            <IconSearch size={20} className="search-icon-mngd" />
            <input
              type="text"
              placeholder="Search by business name, owner name, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-mngd"
            />
          </div>
          <button className="btn-secondary-mngd">
            <IconFilter size={18} />
            Advanced Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid-mngd">
        <div className="stat-card-mngd">
          <div className="stat-content-mngd">
            <h3 className="stat-label-mngd">Total Businesses</h3>
            <p className="stat-value-mngd stat-value-default-mngd">{businesses.length}</p>
            <p className="stat-description-mngd stat-description-success-mngd">All registered businesses</p>
          </div>
        </div>

        <div className="stat-card-mngd">
          <div className="stat-content-mngd">
            <h3 className="stat-label-mngd">Active Businesses</h3>
            <p className="stat-value-mngd stat-value-success-mngd">
              {businesses.filter(b => b.status === 'Active').length}
            </p>
            <p className="stat-description-mngd">Currently active</p>
          </div>
        </div>

        <div className="stat-card-mngd">
          <div className="stat-content-mngd">
            <h3 className="stat-label-mngd">Suspended</h3>
            <p className="stat-value-mngd stat-value-danger-mngd">
              {businesses.filter(b => b.status === 'Suspended').length}
            </p>
            <p className="stat-description-mngd">Suspended businesses</p>
          </div>
        </div>

        <div className="stat-card-mngd">
          <div className="stat-content-mngd">
            <h3 className="stat-label-mngd">Pending Disputes</h3>
            <p className="stat-value-mngd stat-value-warning-mngd">
              {businesses.reduce((sum, b) => sum + b.disputes, 0)}
            </p>
            <p className="stat-description-mngd">Need attention</p>
          </div>
        </div>
      </div>

      {/* Businesses Table */}
      <div className="table-card-mngd">
        <div className="table-header-mngd">
          <h2 className="table-title-mngd">All Businesses</h2>
        </div>
        
        {/* Filter Buttons */}
        <div className="filter-buttons-mngd">
          <button 
            className={`filter-btn-mngd ${filterStatus === 'All' ? 'filter-btn-active-mngd' : ''}`}
            onClick={() => setFilterStatus('All')}
          >
            All Businesses
          </button>
          <button 
            className={`filter-btn-mngd ${filterStatus === 'Active' ? 'filter-btn-active-mngd' : ''}`}
            onClick={() => setFilterStatus('Active')}
          >
            Active
          </button>
          <button 
            className={`filter-btn-mngd ${filterStatus === 'Pending' ? 'filter-btn-active-mngd' : ''}`}
            onClick={() => setFilterStatus('Pending')}
          >
            Pending
          </button>
          <button 
            className={`filter-btn-mngd ${filterStatus === 'Suspended' ? 'filter-btn-active-mngd' : ''}`}
            onClick={() => setFilterStatus('Suspended')}
          >
            Suspended
          </button>
        </div>

        <div className="table-wrapper-mngd">
          <table className="table-mngd">
            <thead>
              <tr>
                <th>S/N</th>
                <th>BUSINESS NAME</th>
                <th>OWNER</th>
               
                <th>STORES</th>
               
                
                <th>DISPUTES</th>
                <th>RATING</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {searchedBusinesses.map((business, index) => (
                <tr key={business.id}>
                  <td data-label="S/N">{index + 1}</td>
                  <td data-label="Business Name">
                    <div className="business-name-cell-mngd">
                      <IconBuilding size={18} className="business-icon-mngd" />
                      <span className="business-name-text-mngd">{business.businessName}</span>
                    </div>
                  </td>
                  <td data-label="Owner">
                    <div className="owner-cell-mngd">
                      <span className="owner-name-mngd">{business.ownerName}</span>
                      <span className="owner-email-mngd">{business.ownerEmail}</span>
                    </div>
                  </td>
                
                  <td data-label="Stores">
                    <div className="stores-cell-mngd">
                      <span className="stores-count-mngd">{business.currentStores}/{business.maxStores}</span>
                      {business.currentStores >= business.maxStores && (
                        <span className="stores-max-badge-mngd">Max</span>
                      )}
                    </div>
                  </td>
                 
                 
                  <td data-label="Disputes">
                    {business.disputes > 0 ? (
                      <span className="disputes-badge-mngd">
                        <IconAlertCircle size={14} />
                        {business.disputes}
                      </span>
                    ) : (
                      <span className="no-disputes-mngd">None</span>
                    )}
                  </td>
                  <td data-label="Rating">
                    {business.rating > 0 ? (
                      <span className="rating-cell-mngd">
                        <span>⭐</span>
                        {business.rating}
                      </span>
                    ) : (
                      <span className="no-rating-mngd">No rating</span>
                    )}
                  </td>
                  <td data-label="Status">
                    <span className={`status-badge-mngd status-${business.status.toLowerCase()}-mngd`}>
                      {business.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="actions-cell-mngd">
                      <button 
                        onClick={() => handleViewBusiness(business.id)}
                        className="btn-view-mngd"
                      >
                        <IconEye size={14} />
                        View 
                      </button>
                      {business.disputes > 0 && (
                        <button 
                          onClick={() => handleViewDisputes(business.id)}
                          className="btn-disputes-mngd"
                        >
                          <IconAlertCircle size={14} />
                          Disputes
                        </button>
                      )}
                    </div>
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

export default ManageBusiness;