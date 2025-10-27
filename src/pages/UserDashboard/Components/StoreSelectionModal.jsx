import React from 'react';
import { IconChevronRight, IconPlus, IconX } from '@tabler/icons-react';

const StoreSelectionModal = ({ isOpen, onClose, onSelectStore }) => {
  // Mock user plan
  const userPlan = 'Pro';
  const maxStores = userPlan === 'Pro' ? 5 : 1;

  // Mock stores data
  const stores = [
    {
      id: 1,
      name: 'PG Store',
      description: 'Your one-stop shop for quality tech products and accessories',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=PG',
      plan: 'Starter Spark Plan'
    },
    {
      id: 2,
      name: 'Tech Haven Store',
      description: 'Premium electronics and gadgets',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TH',
      plan: 'Pro Plan'
    }
  ];

  const handleStoreSelect = (store) => {
    onSelectStore(store.id);
  };

  const handleCreateStore = () => {
    onSelectStore('create');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="emk-modal-backdrop" onClick={onClose} />
      
      {/* Modal */}
      <div className="emk-store-modal">
        <div className="emk-store-modal-header">
          <div>
            <h2 className="emk-store-modal-title">Select Your Store</h2>
            <p className="emk-store-modal-subtitle">Choose which store you want to manage</p>
          </div>
          <button className="emk-modal-close-btn" onClick={onClose}>
            <IconX size={24} />
          </button>
        </div>

        <div className="emk-store-modal-content">
          <div className="emk-stores-modal-grid">
            {stores.map((store) => (
              <div 
                key={store.id} 
                className="emk-store-modal-card"
                onClick={() => handleStoreSelect(store)}
              >
                <div className="emk-store-modal-card-header">
                  <div className="emk-store-modal-card-logo">
                    <img src={store.logo} alt={store.name} />
                  </div>
                  <div className="emk-store-modal-card-arrow">
                    <IconChevronRight size={20} />
                  </div>
                </div>
                <h3 className="emk-store-modal-card-name">{store.name}</h3>
                <p className="emk-store-modal-card-description">{store.description}</p>
                <div className="emk-store-modal-card-plan">{store.plan}</div>
              </div>
            ))}

            {/* Add New Store Card */}
            {stores.length < maxStores && (
              <div 
                className="emk-store-modal-card emk-add-store-modal-card"
                onClick={handleCreateStore}
              >
                <div className="emk-add-store-modal-icon">
                  <IconPlus size={48} />
                </div>
                <h3 className="emk-add-store-modal-title">Add New Store</h3>
                <p className="emk-add-store-modal-description">
                  Create another store to expand your business
                </p>
                <div className="emk-add-store-modal-count">
                  {stores.length} of {maxStores} stores
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        /* Your existing CSS styles remain the same */
        .emk-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .emk-store-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 16px;
          width: 90%;
          max-width: 900px;
          max-height: 85vh;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          animation: slideUp 0.3s ease-out;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        .emk-store-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 24px 28px;
          border-bottom: 1px solid #e5e7eb;
        }

        .emk-store-modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .emk-store-modal-subtitle {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }

        .emk-modal-close-btn {
          background: #f3f4f6;
          border: none;
          border-radius: 8px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s;
        }

        .emk-modal-close-btn:hover {
          background: #e5e7eb;
          color: #1a1a1a;
        }

        .emk-store-modal-content {
          padding: 24px 28px;
          overflow-y: auto;
          flex: 1;
        }

        .emk-stores-modal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .emk-store-modal-card {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }

        .emk-store-modal-card:hover {
          border-color: var(--color-green);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }

        .emk-store-modal-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .emk-store-modal-card-logo {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #e5e7eb;
        }

        .emk-store-modal-card-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .emk-store-modal-card-arrow {
          color: #9ca3af;
          transition: all 0.3s;
        }

        .emk-store-modal-card:hover .emk-store-modal-card-arrow {
          color: var(--color-green);
          transform: translateX(4px);
        }

        .emk-store-modal-card-name {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .emk-store-modal-card-description {
          font-size: 14px;
          color: #6b7280;
          margin: 0 0 16px 0;
          line-height: 1.5;
        }

        .emk-store-modal-card-plan {
          display: inline-block;
          background: var(--light-green);
          color: var(--color-green);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .emk-add-store-modal-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 2px dashed #d1d5db;
          background: #f9fafb;
          min-height: 220px;
        }

        .emk-add-store-modal-card:hover {
          border-color: var(--color-green);
          background: var(--light-green);
        }

        .emk-add-store-modal-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          border: 2px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: #9ca3af;
          transition: all 0.3s;
        }

        .emk-add-store-modal-card:hover .emk-add-store-modal-icon {
          color: var(--color-green);
          border-color: var(--color-green);
        }

        .emk-add-store-modal-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .emk-add-store-modal-description {
          font-size: 13px;
          color: #6b7280;
          margin: 0 0 16px 0;
          max-width: 200px;
        }

        .emk-add-store-modal-count {
          font-size: 12px;
          color: #9ca3af;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .emk-store-modal {
            width: 95%;
            max-height: 90vh;
          }

          .emk-store-modal-header {
            padding: 20px;
          }

          .emk-store-modal-content {
            padding: 20px;
          }

          .emk-stores-modal-grid {
            grid-template-columns: 1fr;
          }

          .emk-store-modal-title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default StoreSelectionModal;