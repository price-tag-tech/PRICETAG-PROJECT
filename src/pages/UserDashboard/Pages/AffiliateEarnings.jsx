import { ClipboardDocumentCheckIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { IconClipboard, IconCopyCheck, IconCurrencyDollar, IconCurrencyNaira, IconUser, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';

const AffiliateEarningsPage = () => {
  const [referralLink] = useState('https://pricetag.ng/c/67d859bc-b2b4...');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const [withdrawalForm, setWithdrawalForm] = useState({
    amount: '',
    bankName: '',
    accountNumber: '',
    accountName: '',
    notes: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWithdrawalSubmit = (e) => {
    e.preventDefault();
    // Handle withdrawal submission logic here
    console.log('Withdrawal request:', withdrawalForm);
    // Close modal after submission
    setWithdrawalModalOpen(false);
    // Reset form
    setWithdrawalForm({
      amount: '',
      bankName: '',
      accountNumber: '',
      accountName: '',
      notes: ''
    });
  };

  const handleWithdrawalInputChange = (e) => {
    const { name, value } = e.target;
    setWithdrawalForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const statsData = [
    {
      id: 1,
      amount: '₦2,700',
      label: 'Total Commission',
      color: '#667eea',
      bgColor: '#667eea15'
    },
    {
      id: 2,
      amount: '₦0.00',
      label: 'Total Withdrawal',
      color: '#f59e0b',
      bgColor: '#f59e0b15'
    },
    {
      id: 3,
      amount: '₦2,700',
      label: 'Balance',
      color: '#10b981',
      bgColor: '#10b98115'
    },
    {
      id: 4,
      amount: '3',
      label: 'Total Referrals',
      color: '#8b5cf6',
      bgColor: '#8b5cf615'
    }
  ];

  const referralsData = [
    {
      id: 1,
      name: 'Ndubuisi Prince Godson',
      store: 'PG STORES',
      phone: '09037494084',
      date: '3/18/2025 - 6:39 AM',
      commission: '₦ 900'
    },
    {
      id: 2,
      name: 'Mary Grace',
      store: 'Mary G STORES',
      phone: '08101317299',
      date: '3/18/2025 - 6:39 AM',
      commission: '₦ 900'
    }
  ];

  const filteredReferrals = referralsData.filter(referral =>
    referral.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    referral.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
    referral.phone.includes(searchQuery)
  );

  const handleRowSelect = (id) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredReferrals.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredReferrals.map(r => r.id));
    }
  };

  return (
    <div className="affiliate-page-ovr">
      {/* Header */}
      <div className="header-section-ovr">
        <div className="header-left-ovr">
          <h1 className="page-title-ovr">Affiliate Earnings</h1>
          <p className="page-subtitle-ovr">
            <span className="agent-badge-ovr">
              <IconUser size={14} className=''/>
              Agent
            </span>
            Prince Godson
          </p>
        </div>

        <div className="header-actions-ovr">
          <div className="referral-box-ovr">
            <span className="referral-label-ovr">Referral Link</span>
            <input
              type="text"
              value={referralLink}
              readOnly
              className="referral-input-ovr"
            />
            <button onClick={handleCopy} className="copy-btn-ovr" title={copied ? 'Copied!' : 'Copy'}>
              {copied ? <IconCopyCheck size={20} color="#10b981" /> : <IconClipboard size={20} />}
            </button>
          </div>

          <button 
            className="withdraw-btn-ovr"
            onClick={() => setWithdrawalModalOpen(true)}
          >
            <svg className="withdraw-icon-ovr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3v-6a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3z" />
            </svg>
            Place a Withdrawal
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid-ovre">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card-ovre">
            <div
              className="stat-icon-wrapper-ovre"
              style={{ backgroundColor: stat.bgColor, color: stat.color }}
            >
              <IconCurrencyNaira size={28} />
            </div>
            <div className="stat-content-ovre">
              <p className="stat-label-ovre">{stat.label}</p>
              <p className="stat-value-ovre">{stat.amount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="info-cards-ovr">
        <div className="info-card-ovr">
          <p className="info-amount-ovr">₦900</p>
          <p className="info-label-ovr">Last Credit</p>
          <p className="info-date-ovr">3/18/2025</p>
        </div>
        <div className="info-card-ovr">
          <p className="info-amount-ovr">₦0.00</p>
          <p className="info-label-ovr">Last Withdrawal</p>
          <p className="info-date-ovr">3/18/2025</p>
        </div>
      </div>

      {/* Referrals Table */}
      <div className="content-card-ovr">
        <div className="filters-section-ovr">
          <div className="filters-left-ovr">
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>
              Your Referrals
            </h2>
          </div>

          <div className="filters-right-ovr">
            <div className="search-box-ovr">
              <svg className="search-icon-ovr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search referrals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-ovr"
              />
            </div>

            <button className="filter-btn-ovr">
              <svg className="filter-icon-ovr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>
        </div>

        <div className="table-wrapper-ovr">
          <table className="referrals-table-ovr">
            <thead>
              <tr className="table-header-row-ovr">
                <th className="table-header-ovr">
                  <input
                    type="checkbox"
                    className="checkbox-ovr"
                    checked={selectedRows.length === filteredReferrals.length && filteredReferrals.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="table-header-ovr">S/N</th>
                <th className="table-header-ovr">Name</th>
                <th className="table-header-ovr">Store</th>
                <th className="table-header-ovr">Phone Number</th>
                <th className="table-header-ovr">Date/Time</th>
                <th className="table-header-ovr table-header-right-ovr">Commission</th>
                <th className="table-header-ovr">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredReferrals.length > 0 ? (
                filteredReferrals.map((referral, index) => (
                  <tr key={referral.id} className="table-row-ovr">
                    <td className="table-cell-ovr">
                      <input
                        type="checkbox"
                        className="checkbox-ovr"
                        checked={selectedRows.includes(referral.id)}
                        onChange={() => handleRowSelect(referral.id)}
                      />
                    </td>
                    <td className="table-cell-ovr">{index + 1}</td>
                    <td className="table-cell-ovr">{referral.name}</td>
                    <td className="table-cell-ovr">
                      <span className="store-name-ovr">{referral.store}</span>
                    </td>
                    <td className="table-cell-ovr">{referral.phone}</td>
                    <td className="table-cell-ovr">{referral.date}</td>
                    <td className="table-cell-ovr commission-amount-ovr">
                      {referral.commission}
                    </td>
                    <td className="table-cell-ovr">
                      <button className="visit-btn-ovr">Visit Store</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="empty-state-ovr">
                    <div className="empty-content-ovr">
                      <svg className="empty-icon-ovr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="empty-title-ovr">No referrals found</p>
                      <p className="empty-subtitle-ovr">Try adjusting your search query</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filteredReferrals.length > 0 && (
          <div className="pagination-wrapper-ovr">
            <p className="pagination-info-ovr">
              Showing 1 to {filteredReferrals.length} of {referralsData.length} results
            </p>
            <div className="pagination-buttons-ovr">
              <button className="pagination-btn-ovr">Previous</button>
              <button className="pagination-btn-ovr active">1</button>
              <button className="pagination-btn-ovr">2</button>
              <button className="pagination-btn-ovr">3</button>
              <button className="pagination-btn-ovr">Next</button>
            </div>
          </div>
        )}
      </div>

      {/* Withdrawal Modal */}
      {withdrawalModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content ">
            <div className="modal-header">
              <h2>Place Withdrawal Request</h2>
              <button 
                className="modal-close"
                onClick={() => setWithdrawalModalOpen(false)}
              >
                <IconX size={24} />
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleWithdrawalSubmit} className="edit-form">
                <div className="form-group">
                  <label htmlFor="amount">Amount to Withdraw (₦)</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={withdrawalForm.amount}
                    onChange={handleWithdrawalInputChange}
                    placeholder="Enter amount"
                    min="100"
                    max="2700"
                    required
                  />
                  <small style={{ color: '#6b7280', fontSize: '12px' }}>
                    Available balance: ₦2,700 (Minimum withdrawal: ₦100)
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="bankName">Bank Name</label>
                  <select
                    id="bankName"
                    name="bankName"
                    value={withdrawalForm.bankName}
                    onChange={handleWithdrawalInputChange}
                    required
                  >
                    <option value="">Select Bank</option>
                    <option value="Access Bank">Access Bank</option>
                    <option value="First Bank">First Bank</option>
                    <option value="GTBank">GTBank</option>
                    <option value="Zenith Bank">Zenith Bank</option>
                    <option value="UBA">UBA</option>
                    <option value="Union Bank">Union Bank</option>
                    <option value="Fidelity Bank">Fidelity Bank</option>
                    <option value="Stanbic IBTC">Stanbic IBTC</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={withdrawalForm.accountNumber}
                    onChange={handleWithdrawalInputChange}
                    placeholder="Enter account number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="accountName">Account Name</label>
                  <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={withdrawalForm.accountName}
                    onChange={handleWithdrawalInputChange}
                    placeholder="Enter account name as it appears on bank record"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Additional Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={withdrawalForm.notes}
                    onChange={handleWithdrawalInputChange}
                    placeholder="Any additional information..."
                    rows="3"
                  />
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn-cancel"
                    onClick={() => setWithdrawalModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn-save"
                  >
                    Submit 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateEarningsPage;