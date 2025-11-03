
import { IconShieldCheck, IconSearch, IconFilter, IconDownload, IconEye, IconCheck, IconX, IconAlertCircle, IconFileText, IconCalendar, IconUserCheck } from '@tabler/icons-react';
import React, { useState } from 'react';

const KYCReviews = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const kycSubmissions = [
    {
      id: 1,
      name: 'Christopher Johnson',
      email: 'chris.johnson@example.com',
      phone: '+234 901 234 5678',
      submissionDate: 'Nov 02, 2024',
      kycLevel: 'Level 2',
      documentType: 'National ID',
      documentNumber: 'NIN-1234567890',
      status: 'Pending Review',
      verificationScore: 92,
      addressVerified: true,
      identityVerified: true,
      selfieMatch: 95,
      documentsUploaded: 4,
      submissionTime: '1 hour ago',
      previousAttempts: 0
    },
    {
      id: 2,
      name: 'Amanda Davis',
      email: 'amanda.d@example.com',
      phone: '+234 902 345 6789',
      submissionDate: 'Nov 02, 2024',
      kycLevel: 'Level 3',
      documentType: 'Passport',
      documentNumber: 'A12345678',
      status: 'Under Review',
      verificationScore: 88,
      addressVerified: true,
      identityVerified: true,
      selfieMatch: 91,
      documentsUploaded: 6,
      submissionTime: '3 hours ago',
      previousAttempts: 1
    },
    {
      id: 3,
      name: 'Joshua Miller',
      email: 'joshua.m@example.com',
      phone: '+234 903 456 7890',
      submissionDate: 'Nov 01, 2024',
      kycLevel: 'Level 1',
      documentType: 'Driver License',
      documentNumber: 'DL-9876543210',
      status: 'Pending Review',
      verificationScore: 78,
      addressVerified: false,
      identityVerified: true,
      selfieMatch: 82,
      documentsUploaded: 3,
      submissionTime: '1 day ago',
      previousAttempts: 0
    },
    {
      id: 4,
      name: 'Victoria Anderson',
      email: 'victoria.a@example.com',
      phone: '+234 904 567 8901',
      submissionDate: 'Nov 01, 2024',
      kycLevel: 'Level 2',
      documentType: 'National ID',
      documentNumber: 'NIN-5678901234',
      status: 'Requires Action',
      verificationScore: 65,
      addressVerified: false,
      identityVerified: false,
      selfieMatch: 68,
      documentsUploaded: 2,
      submissionTime: '1 day ago',
      previousAttempts: 2
    },
    {
      id: 5,
      name: 'Samuel Thompson',
      email: 'samuel.t@example.com',
      phone: '+234 905 678 9012',
      submissionDate: 'Oct 31, 2024',
      kycLevel: 'Level 3',
      documentType: 'Passport',
      documentNumber: 'B98765432',
      status: 'Under Review',
      verificationScore: 96,
      addressVerified: true,
      identityVerified: true,
      selfieMatch: 98,
      documentsUploaded: 7,
      submissionTime: '3 days ago',
      previousAttempts: 0
    },
    {
      id: 6,
      name: 'Rachel White',
      email: 'rachel.w@example.com',
      phone: '+234 906 789 0123',
      submissionDate: 'Oct 31, 2024',
      kycLevel: 'Level 1',
      documentType: 'Voter Card',
      documentNumber: 'VC-4567890123',
      status: 'Pending Review',
      verificationScore: 85,
      addressVerified: true,
      identityVerified: true,
      selfieMatch: 89,
      documentsUploaded: 3,
      submissionTime: '3 days ago',
      previousAttempts: 0
    },
    {
      id: 7,
      name: 'Patrick Harris',
      email: 'patrick.h@example.com',
      phone: '+234 907 890 1234',
      submissionDate: 'Oct 30, 2024',
      kycLevel: 'Level 2',
      documentType: 'National ID',
      documentNumber: 'NIN-7890123456',
      status: 'Requires Action',
      verificationScore: 58,
      addressVerified: false,
      identityVerified: true,
      selfieMatch: 62,
      documentsUploaded: 2,
      submissionTime: '4 days ago',
      previousAttempts: 3
    },
    {
      id: 8,
      name: 'Nicole Martin',
      email: 'nicole.m@example.com',
      phone: '+234 908 901 2345',
      submissionDate: 'Oct 30, 2024',
      kycLevel: 'Level 3',
      documentType: 'Passport',
      documentNumber: 'C45678901',
      status: 'Under Review',
      verificationScore: 94,
      addressVerified: true,
      identityVerified: true,
      selfieMatch: 96,
      documentsUploaded: 6,
      submissionTime: '4 days ago',
      previousAttempts: 0
    }
  ];

  const filteredSubmissions = filterStatus === 'All' 
    ? kycSubmissions 
    : kycSubmissions.filter(submission => submission.status === filterStatus);

  const searchedSubmissions = searchQuery 
    ? filteredSubmissions.filter(submission => 
        submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        submission.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        submission.documentNumber.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredSubmissions;

  const totalStats = {
    totalSubmissions: kycSubmissions.length,
    pendingReview: kycSubmissions.filter(s => s.status === 'Pending Review').length,
    underReview: kycSubmissions.filter(s => s.status === 'Under Review').length,
    requiresAction: kycSubmissions.filter(s => s.status === 'Requires Action').length
  };

  const handleViewDetails = (id) => {
    console.log('View KYC details:', id);
  };

  const handleApprove = (id) => {
    console.log('Approve KYC:', id);
  };

  const handleReject = (id) => {
    console.log('Reject KYC:', id);
  };

  const handleRequestInfo = (id) => {
    console.log('Request more info:', id);
  };

  return (
    <div className="container-kyc">
      {/* Header */}
      <div className="header-kyc">
        <div>
          <h1 className="title-kyc">KYC Reviews</h1>
          <p className="subtitle-kyc">Review and verify customer identity documents</p>
        </div>
        <div className="actions-kyc">
          <button className="btn-secondary-kyc">
            <IconDownload size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="stats-grid-kyc">
        <div className="stat-card-kyc">
          <div className="stat-icon-kyc stat-icon-total-kyc">
            <IconShieldCheck size={24} />
          </div>
          <div>
            <h3 className="stat-label-kyc">Total Submissions</h3>
            <p className="stat-value-kyc">{totalStats.totalSubmissions}</p>
            <p className="stat-description-kyc">All KYC requests</p>
          </div>
        </div>

        <div className="stat-card-kyc">
          <div className="stat-icon-kyc stat-icon-pending-kyc">
            <IconCalendar size={24} />
          </div>
          <div>
            <h3 className="stat-label-kyc">Pending Review</h3>
            <p className="stat-value-kyc">{totalStats.pendingReview}</p>
            <p className="stat-description-kyc">Awaiting verification</p>
          </div>
        </div>

        <div className="stat-card-kyc">
          <div className="stat-icon-kyc stat-icon-review-kyc">
            <IconUserCheck size={24} />
          </div>
          <div>
            <h3 className="stat-label-kyc">Under Review</h3>
            <p className="stat-value-kyc">{totalStats.underReview}</p>
            <p className="stat-description-kyc">Being processed</p>
          </div>
        </div>

        <div className="stat-card-kyc">
          <div className="stat-icon-kyc stat-icon-action-kyc">
            <IconAlertCircle size={24} />
          </div>
          <div>
            <h3 className="stat-label-kyc">Requires Action</h3>
            <p className="stat-value-kyc">{totalStats.requiresAction}</p>
            <p className="stat-description-kyc">Need more info</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="search-card-kyc">
        <div className="search-wrapper-kyc">
          <div className="search-input-wrapper-kyc">
            <IconSearch size={20} className="search-icon-kyc" />
            <input
              type="text"
              placeholder="Search by name, email or document number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-kyc"
            />
          </div>
          <button className="btn-secondary-kyc">
            <IconFilter size={18} />
            Advanced Filter
          </button>
        </div>
      </div>

      {/* KYC Submissions Table */}
      <div className="table-card-kyc">
        <div className="table-header-kyc">
          <h2 className="table-title-kyc">All KYC Submissions</h2>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons-kyc">
          <button 
            className={`filter-btn-kyc ${filterStatus === 'All' ? 'filter-btn-active-kyc' : ''}`}
            onClick={() => setFilterStatus('All')}
          >
            All Submissions
          </button>
          <button 
            className={`filter-btn-kyc ${filterStatus === 'Pending Review' ? 'filter-btn-active-kyc' : ''}`}
            onClick={() => setFilterStatus('Pending Review')}
          >
            Pending Review
          </button>
          <button 
            className={`filter-btn-kyc ${filterStatus === 'Under Review' ? 'filter-btn-active-kyc' : ''}`}
            onClick={() => setFilterStatus('Under Review')}
          >
            Under Review
          </button>
          <button 
            className={`filter-btn-kyc ${filterStatus === 'Requires Action' ? 'filter-btn-active-kyc' : ''}`}
            onClick={() => setFilterStatus('Requires Action')}
          >
            Requires Action
          </button>
        </div>

        <div className="table-wrapper-kyc">
          <table className="table-kyc">
            <thead>
              <tr>
                <th>CUSTOMER</th>
                <th>DOCUMENT TYPE</th>
                
                <th>VERIFICATION</th>
              
                
                <th>SUBMISSION DATE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {searchedSubmissions.map((submission) => (
                <tr key={submission.id}>
                  <td data-label="Customer">
                    <div className="customer-cell-kyc">
                      <div className="customer-avatar-kyc">
                        {submission.name.charAt(0)}
                      </div>
                      <div>
                        <span className="customer-name-kyc">{submission.name}</span>
                        <span className="customer-email-kyc">{submission.email}</span>
                      </div>
                    </div>
                  </td>
                 
                  <td data-label="Document Type">
                    <div className="doc-type-kyc">
                      <IconFileText size={16} />
                      {submission.documentType}
                    </div>
                  </td>
                 
                  <td data-label="Verification">
                    <div className="verification-checks-kyc">
                      <div className="check-item-kyc">
                        <span className={`check-icon-kyc ${submission.identityVerified ? 'check-success-kyc' : 'check-fail-kyc'}`}>
                          {submission.identityVerified ? '✓' : '✗'}
                        </span>
                        <span className="check-label-kyc">ID</span>
                      </div>
                      <div className="check-item-kyc">
                        <span className={`check-icon-kyc ${submission.addressVerified ? 'check-success-kyc' : 'check-fail-kyc'}`}>
                          {submission.addressVerified ? '✓' : '✗'}
                        </span>
                        <span className="check-label-kyc">Address</span>
                      </div>
                    </div>
                  </td>
                 
                 
                  <td data-label="Submission Date">
                    <div className="submission-date-kyc">
                      <span>{submission.submissionDate}</span>
                      <span className="submission-time-kyc">{submission.submissionTime}</span>
                    </div>
                  </td>
                  <td data-label="Status">
                    <span className={`status-badge-kyc status-${submission.status.toLowerCase().replace(' ', '-')}-kyc`}>
                      {submission.status}
                    </span>
                    {submission.previousAttempts > 0 && (
                      <span className="attempts-badge-kyc">
                        {submission.previousAttempts} attempt{submission.previousAttempts > 1 ? 's' : ''}
                      </span>
                    )}
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons-kyc">
                      <button 
                        onClick={() => handleViewDetails(submission.id)}
                        className="btn-view-kyc"
                        title="View Details"
                      >
                        <IconEye size={14} />
                      </button>
                      <button 
                        onClick={() => handleApprove(submission.id)}
                        className="btn-approve-kyc"
                        title="Approve"
                      >
                        <IconCheck size={14} />
                      </button>
                      <button 
                        onClick={() => handleReject(submission.id)}
                        className="btn-reject-kyc"
                        title="Reject"
                      >
                        <IconX size={14} />
                      </button>
                 
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  </div>
)};

export default KYCReviews;

