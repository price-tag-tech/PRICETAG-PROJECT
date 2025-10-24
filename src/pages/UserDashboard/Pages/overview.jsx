import React, { useState } from 'react';
import {
  ShoppingBagIcon,
  CubeIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  TruckIcon,
  EllipsisVerticalIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { IconTrendingUp2 } from '@tabler/icons-react';



export default function Overview() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const periods = ['Today', 'This Week', 'This Month', 'Last Month', 'This Year'];
  const categories = ['All Category', 'Service', 'Goods'];

  // Mock data for stats
  const stats = [
    {
      title: "Total Orders",
      value: "24",
      change: "+12.5%",
      changeType: "increase",
      subtitle: "From the Last month",
      icon: ShoppingBagIcon,
      color: "#667eea"
    },
    {
      title: "Active Orders",
      value: "8",
      change: "+8.2%",
      changeType: "increase",
      subtitle: "From the Last month",
      icon: CubeIcon,
      color: "#f59e0b"
    },
    {
      title: "Total Spent",
      value: "₦3,842",
      change: "+15.3%",
      changeType: "increase",
      subtitle: "From the Last month",
      icon: CurrencyDollarIcon,
      color: "#10b981"
    },
  ];

  // Mock data for recent purchases
  const recentPurchases = [
    {
      id: "ORD-2024-001",
      date: "Dec 20, 2024",
      item: "Premium Health Consultation",
      category: "Service",
      status: "Completed",
      amount: "₦150.00",
      items: 1
    },
    {
      id: "ORD-2024-002",
      date: "Dec 18, 2024",
      item: "Medical Equipment Set",
      category: "Goods",
      status: "Delivered",
      amount: "₦420.00",
      items: 3
    },
    {
      id: "ORD-2024-003",
      date: "Dec 15, 2024",
      item: "Lab Test Package",
      category: "Service",
      status: "Processing",
      amount: "₦280.00",
      items: 1
    },
    {
      id: "ORD-2024-004",
      date: "Dec 12, 2024",
      item: "Wellness Supplements",
      category: "Goods",
      status: "Delivered",
      amount: "₦95.00",
      items: 2
    },
    {
      id: "ORD-2024-005",
      date: "Dec 10, 2024",
      item: "Physical Therapy Session",
      category: "Service",
      status: "Completed",
      amount: "₦120.00",
      items: 1
    },
    {
      id: "ORD-2024-006",
      date: "Dec 8, 2024",
      item: "Home Care Kit",
      category: "Goods",
      status: "Cancelled",
      amount: "₦65.00",
      items: 1
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
      case 'Delivered':
        return <CheckCircleIcon className="status-icon-ovr" />;
      case 'Processing':
        return <ClockIcon className="status-icon-ovr" />;
      case 'Cancelled':
        return <XCircleIcon className="status-icon-ovr" />;
      default:
        return <TruckIcon className="status-icon-ovr" />;
    }
  };

  // Filter purchases based on search and category
  const filteredPurchases = recentPurchases.filter(purchase => {
    const matchesSearch = purchase.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          purchase.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Category' || purchase.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle row selection
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

  return (
    <div className="overview-container-ovr">
      {/* Header Section */}
      <div className="header-card-ovr">
        <div className="header-content-ovr">
          <div className="header-left-ovr">
            <h1 className="header-title-ovr">
              Welcome back, Emeka!
            </h1>
            <p className="header-date-ovr">
              <CalendarIcon className="date-icon-ovr" />
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="header-actions-ovr">
            <div className="dropdown-container-ovr">
              <button 
                className="period-btn-ovr"
                onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
              >
                {selectedPeriod}
                <ChevronDownIcon className="chevron-icon-ovr" />
              </button>
              {showPeriodDropdown && (
                <div className="dropdown-menu-ovr">
                  {periods.map(period => (
                    <div
                      key={period}
                      className="dropdown-item-ovr"
                      onClick={() => {
                        setSelectedPeriod(period);
                        setShowPeriodDropdown(false);
                      }}
                    >
                      {period}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="export-btn-ovr">
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid-ovr">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card-ovr">
            <div className="stat-header-ovr">
              <div className="left-start-header">
                <div
                  className="stat-icon-wrapper-ovr"
                  style={{
                    background: `${stat.color}15`,
                    color: stat.color
                  }}
                >
                  <stat.icon className="stat-icon-ovr" />
                </div>
                <h3 className="stat-title-ovr">
                  {stat.title}
                </h3>
              </div>
              <button className="stat-menu-btn-ovr">
                <EllipsisVerticalIcon className="menu-icon-ovr" />
              </button>
            </div>

            <div className="stat-value-ovr">
              {stat.value}
            </div>
            <div className="stat-footer-ovr">
              <span className={`stat-change-ovr ${stat.changeType}`}>
                <IconTrendingUp2 className="trend-icon-ovr" />
                {stat.change}
              </span>
              <span className="stat-subtitle-ovr">
                {stat.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Purchases Section */}
      <div className="purchases-card-ovr">
        <div className="purchases-header-ovr">
          <h2 className="purchases-title-ovr">
            Recent Purchases
          </h2>
          <div className="purchases-actions-ovr">
            {selectedRows.length > 0 && (
              <button className="delete-btn-ovr" onClick={handleDelete}>
                <TrashIcon className="delete-icon-ovr" />
                Delete ({selectedRows.length})
              </button>
            )}
            <div className="search-box-ovr">
              <MagnifyingGlassIcon className="search-icon-ovr" />
              <input
                type="text"
                placeholder="Search orders or items"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-ovr"
              />
            </div>
            <div className="dropdown-container-ovr">
              <button 
                className="category-btn-ovr"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                {selectedCategory}
                <ChevronDownIcon className="chevron-icon-ovr" />
              </button>
              {showCategoryDropdown && (
                <div className="dropdown-menu-ovr">
                  {categories.map(category => (
                    <div
                      key={category}
                      className="dropdown-item-ovr"
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
            <button className="filter-btn-ovr">
              Filter
              <FunnelIcon className="filter-icon-ovr" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper-ovr">
          <table className="purchases-table-ovr">
            <thead>
              <tr className="table-header-row-ovr">
                <th className="table-header-ovr">
                  <input 
                    type="checkbox" 
                    className="checkbox-ovr"
                    checked={selectedRows.length === filteredPurchases.length && filteredPurchases.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="table-header-ovr">Order ID</th>
                <th className="table-header-ovr">Date</th>
                <th className="table-header-ovr">Item</th>
                <th className="table-header-ovr">Category</th>
                <th className="table-header-ovr">Status</th>
                <th className="table-header-ovr">Items</th>
                <th className="table-header-ovr table-header-right-ovr">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredPurchases.map((purchase, index) => (
                <tr key={index} className="table-row-ovr">
                  <td className="table-cell-ovr">
                    <input 
                      type="checkbox" 
                      className="checkbox-ovr"
                      checked={selectedRows.includes(purchase.id)}
                      onChange={() => handleRowSelect(purchase.id)}
                    />
                  </td>
                  <td className="table-cell-ovr order-id-ovr">
                    {purchase.id}
                  </td>
                  <td className="table-cell-ovr date-cell-ovr">
                    {purchase.date}
                  </td>
                  <td className="table-cell-ovr item-cell-ovr">
                    {purchase.item}
                  </td>
                  <td className="table-cell-ovr">
                    <span className={`category-badge-ovr ${purchase.category.toLowerCase()}`}>
                      {purchase.category}
                    </span>
                  </td>
                  <td className="table-cell-ovr">
                    <span className={`status-badge-ovr ${purchase.status.toLowerCase()}`}>
                      {getStatusIcon(purchase.status)}
                      {purchase.status}
                    </span>
                  </td>
                  <td className="table-cell-ovr items-count-ovr">
                    {purchase.items}
                  </td>
                  <td className="table-cell-ovr amount-cell-ovr">
                    {purchase.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-wrapper-ovr">
          <p className="pagination-info-ovr">
            Showing 1 to {filteredPurchases.length} of 24 results
          </p>
          <div className="pagination-buttons-ovr">
            <button className="pagination-btn-ovr">
              Previous
            </button>
            <button className="pagination-btn-ovr active">
              1
            </button>
            <button className="pagination-btn-ovr">
              2
            </button>
            <button className="pagination-btn-ovr">
              3
            </button>
            <button className="pagination-btn-ovr">
              Next
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}