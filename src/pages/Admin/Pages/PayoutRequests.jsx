import { IconCash, IconSearch, IconFilter, IconCheck, IconX, IconClock, IconDownload, IconCalendar, IconTrendingUp, IconUsers } from '@tabler/icons-react';
import React, { useState } from 'react';

const PayoutRequests = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const payoutRequests = [
    {
      id: 1,
      affiliateName: 'John Doe',
      affiliateEmail: 'john@example.com',
      amount: '₦125,000',
      commissionEarned: '₦125,000',
      referrals: 15,
      conversionRate: '12.5%',
      bankName: 'GTBank',
      accountNumber: '0123456789',
      accountName: 'John Doe',
      requestDate: 'Oct 28, 2024',
      status: 'Pending',
      period: 'Oct 2024'
    },
    {
      id: 2,
      affiliateName: 'Sarah Johnson',
      affiliateEmail: 'sarah@example.com',
      amount: '₦89,500',
      commissionEarned: '₦89,500',
      referrals: 10,
      conversionRate: '15.2%',
      bankName: 'Access Bank',
      accountNumber: '9876543210',
      accountName: 'Sarah Johnson',
      requestDate: 'Oct 30, 2024',
      status: 'Approved',
      approvedDate: 'Nov 01, 2024',
      period: 'Oct 2024'
    },
    {
      id: 3,
      affiliateName: 'Mike Chen',
      affiliateEmail: 'mike@example.com',
      amount: '₦250,000',
      commissionEarned: '₦250,000',
      referrals: 28,
      conversionRate: '18.9%',
      bankName: 'First Bank',
      accountNumber: '1234567890',
      accountName: 'Mike Chen',
      requestDate: 'Oct 25, 2024',
      status: 'Processing',
      approvedDate: 'Oct 26, 2024',
      period: 'Oct 2024'
    },
    {
      id: 4,
      affiliateName: 'Emma Williams',
      affiliateEmail: 'emma@example.com',
      amount: '₦45,000',
      commissionEarned: '₦45,000',
      referrals: 5,
      conversionRate: '8.3%',
      bankName: 'UBA',
      accountNumber: '5555555555',
      accountName: 'Emma Williams',
      requestDate: 'Oct 20, 2024',
      status: 'Rejected',
      rejectedDate: 'Oct 21, 2024',
      rejectionReason: 'Insufficient documentation',
      period: 'Sep 2024'
    },
    {
      id: 5,
      affiliateName: 'David Brown',
      affiliateEmail: 'david@example.com',
      amount: '₦180,000',
      commissionEarned: '₦180,000',
      referrals: 22,
      conversionRate: '16.7%',
      bankName: 'Zenith Bank',
      accountNumber: '7777777777',
      accountName: 'David Brown',
      requestDate: 'Nov 01, 2024',
      status: 'Pending',
      period: 'Oct 2024'
    },
    {
      id: 6,
      affiliateName: 'Lisa Anderson',
      affiliateEmail: 'lisa@example.com',
      amount: '₦320,000',
      commissionEarned: '₦320,000',
      referrals: 35,
      conversionRate: '21.4%',
      bankName: 'GTBank',
      accountNumber: '8888888888',
      accountName: 'Lisa Anderson',
      requestDate: 'Oct 29, 2024',
      status: 'Completed',
      approvedDate: 'Oct 30, 2024',
      completedDate: 'Nov 02, 2024',
      period: 'Oct 2024'
    }
  ];

  const filteredRequests = filterStatus === 'All' 
    ? payoutRequests 
    : payoutRequests.filter(req => req.status === filterStatus);

  const searchedRequests = searchQuery 
    ? filteredRequests.filter(req => 
        req.affiliateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.affiliateEmail.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredRequests;

  const totalPending = payoutRequests.filter(r => r.status === 'Pending').length;
  const totalPendingAmount = payoutRequests
    .filter(r => r.status === 'Pending')
    .reduce((sum, r) => sum + parseFloat(r.amount.replace(/[₦,]/g, '')), 0);

  const handleApprove = (id) => {
    console.log('Approve payout:', id);
  };

  const handleReject = (id) => {
    console.log('Reject payout:', id);
  };

  const handleViewDetails = (id) => {
    console.log('View details:', id);
  };

  return (
    <div className="container-pr">
      {/* Header */}
      <div className="header-pr">
        <div>
          <h1 className="title-pr">Payout Requests</h1>
          <p className="subtitle-pr">View, approve, or reject affiliate earnings</p>
        </div>
        <div className="actions-pr">
          <button className="btn-secondary-pr">
            <IconDownload size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid-pr">
        <div className="stat-card-pr">
          <div className="stat-icon-pr stat-icon-pending-pr">
            <IconClock size={24} />
          </div>
          <div>
            <h3 className="stat-label-pr">Pending Requests</h3>
            <p className="stat-value-pr">{totalPending}</p>
            <p className="stat-description-pr">Awaiting approval</p>
          </div>
        </div>

        <div className="stat-card-pr">
          <div className="stat-icon-pr stat-icon-amount-pr">
            <IconCash size={24} />
          </div>
          <div>
            <h3 className="stat-label-pr">Pending Amount</h3>
            <p className="stat-value-pr">₦{totalPendingAmount.toLocaleString()}</p>
            <p className="stat-description-pr">Total pending payouts</p>
          </div>
        </div>

        <div className="stat-card-pr">
          <div className="stat-icon-pr stat-icon-approved-pr">
            <IconCheck size={24} />
          </div>
          <div>
            <h3 className="stat-label-pr">Approved This Month</h3>
            <p className="stat-value-pr">{payoutRequests.filter(r => r.status === 'Approved' || r.status === 'Processing' || r.status === 'Completed').length}</p>
            <p className="stat-description-pr">Successfully approved</p>
          </div>
        </div>

        <div className="stat-card-pr">
          <div className="stat-icon-pr stat-icon-total-pr">
            <IconTrendingUp size={24} />
          </div>
          <div>
            <h3 className="stat-label-pr">Total Requests</h3>
            <p className="stat-value-pr">{payoutRequests.length}</p>
            <p className="stat-description-pr">All time requests</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="search-card-pr">
        <div className="search-wrapper-pr">
          <div className="search-input-wrapper-pr">
            <IconSearch size={20} className="search-icon-pr" />
            <input
              type="text"
              placeholder="Search by affiliate name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-pr"
            />
          </div>
          <button className="btn-secondary-pr">
            <IconFilter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Requests Table */}
      <div className="table-card-pr">
        <div className="table-header-pr">
          <h2 className="table-title-pr">All Payout Requests</h2>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons-pr">
          <button 
            className={`filter-btn-pr ${filterStatus === 'All' ? 'filter-btn-active-pr' : ''}`}
            onClick={() => setFilterStatus('All')}
          >
            All Requests
          </button>
          <button 
            className={`filter-btn-pr ${filterStatus === 'Pending' ? 'filter-btn-active-pr' : ''}`}
            onClick={() => setFilterStatus('Pending')}
          >
            Pending
          </button>
          <button 
            className={`filter-btn-pr ${filterStatus === 'Approved' ? 'filter-btn-active-pr' : ''}`}
            onClick={() => setFilterStatus('Approved')}
          >
            Approved
          </button>
          <button 
            className={`filter-btn-pr ${filterStatus === 'Processing' ? 'filter-btn-active-pr' : ''}`}
            onClick={() => setFilterStatus('Processing')}
          >
            Processing
          </button>
          <button 
            className={`filter-btn-pr ${filterStatus === 'Completed' ? 'filter-btn-active-pr' : ''}`}
            onClick={() => setFilterStatus('Completed')}
          >
            Completed
          </button>
          <button 
            className={`filter-btn-pr ${filterStatus === 'Rejected' ? 'filter-btn-active-pr' : ''}`}
            onClick={() => setFilterStatus('Rejected')}
          >
            Rejected
          </button>
        </div>

        <div className="table-wrapper-pr">
          <table className="table-pr">
            <thead>
              <tr>
                <th>AFFILIATE</th>
                <th>AMOUNT</th>
                
                
                <th>BANK DETAILS</th>
                <th>PERIOD</th>
                <th>REQUEST DATE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {searchedRequests.map((request) => (
                <tr key={request.id}>
                  <td data-label="Affiliate">
                    <div className="affiliate-cell-pr">
                      <div className="affiliate-avatar-pr">
                        {request.affiliateName.charAt(0)}
                      </div>
                      <div>
                        <span className="affiliate-name-pr">{request.affiliateName}</span>
                        <span className="affiliate-email-pr">{request.affiliateEmail}</span>
                      </div>
                    </div>
                  </td>
                  <td data-label="Amount" className="amount-pr">{request.amount}</td>
                 

                  <td data-label="Bank Details">
                    <div className="bank-cell-pr">
                      <span className="bank-name-pr">{request.bankName}</span>
                      <span className="account-number-pr">{request.accountNumber}</span>
                      <span className="account-name-pr">{request.accountName}</span>
                    </div>
                  </td>
                  <td data-label="Period">{request.period}</td>
                  <td data-label="Request Date">{request.requestDate}</td>
                  <td data-label="Status">
                    <span className={`status-badge-pr status-${request.status.toLowerCase()}-pr`}>
                      {request.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="actions-cell-pr">
                      {request.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => handleApprove(request.id)}
                            className="btn-approve-pr"
                            title="Approve"
                          >
                            <IconCheck size={16} />
                          </button>
                          <button 
                            onClick={() => handleReject(request.id)}
                            className="btn-reject-pr"
                            title="Reject"
                          >
                            <IconX size={16} />
                          </button>
                        </>
                      )}
                      {/* <button 
                        onClick={() => handleViewDetails(request.id)}
                        className="btn-view-pr"
                      >
                        View
                      </button> */}
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

export default PayoutRequests;