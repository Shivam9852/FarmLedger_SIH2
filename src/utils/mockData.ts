import { v4 as uuidv4 } from 'uuid';
import { Product, SupplyChainEvent, User, SmartContract, DashboardStats } from '../types';

export const mockUsers: User[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    email: 'farmer@example.com',
    name: 'Rajesh Kumar',
    role: 'farmer',
    organization: 'Kumar Organic Farms',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    isVerified: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    email: 'distributor@example.com',
    name: 'Priya Logistics',
    role: 'distributor',
    organization: 'Fresh Supply Chain Pvt Ltd',
    walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
    isVerified: true,
    createdAt: new Date('2024-01-20'),
  },
];

export const mockProducts: Product[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    batchId: 'BATCH-2024-001',
    name: 'Organic Basmati Rice',
    variety: 'Pusa Basmati 1121',
    category: 'grains',
    farmerId: '550e8400-e29b-41d4-a716-446655440001',
    currentOwnerId: '550e8400-e29b-41d4-a716-446655440001',
    harvestDate: new Date('2024-01-10'),
    expiryDate: new Date('2024-07-10'),
    quantity: 500,
    unit: 'kg',
    certifications: [
      {
        id: '550e8400-e29b-41d4-a716-446655440004',
        name: 'Organic Certification',
        issuer: 'India Organic Certification Agency',
        validUntil: new Date('2024-12-31'),
      },
    ],
    location: {
      address: 'Village Rampur, Tehsil Thanesar',
      city: 'Kurukshetra',
      state: 'Haryana',
      country: 'India',
      pincode: '136118',
      latitude: 29.9457,
      longitude: 76.8781,
    },
    qrCode: '',
    status: 'registered',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
];

export const mockEvents: SupplyChainEvent[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    productId: '550e8400-e29b-41d4-a716-446655440003',
    eventType: 'registered',
    toUserId: '550e8400-e29b-41d4-a716-446655440001',
    location: {
      address: 'Village Rampur',
      city: 'Kurukshetra',
      state: 'Haryana',
      country: 'India',
    },
    timestamp: new Date('2024-01-15'),
    data: {
      initialQuantity: 500,
      harvestMethod: 'manual',
      weatherConditions: 'sunny',
    },
    iotData: [
      {
        sensorId: 'temp-01',
        timestamp: new Date('2024-01-15'),
        temperature: 28.5,
        humidity: 65,
        location: { lat: 29.9457, lng: 76.8781 },
        batteryLevel: 87,
      },
    ],
  },
];

export const generateMockStats = (role: string): DashboardStats => {
  const baseStats = {
    totalProducts: Math.floor(Math.random() * 100) + 50,
    activeContracts: Math.floor(Math.random() * 20) + 5,
    completedTransactions: Math.floor(Math.random() * 200) + 100,
    revenue: Math.floor(Math.random() * 500000) + 100000,
    recentActivity: mockEvents.slice(0, 5),
  };

  switch (role) {
    case 'farmer':
      return {
        ...baseStats,
        totalProducts: Math.floor(Math.random() * 50) + 20,
        activeContracts: Math.floor(Math.random() * 10) + 2,
      };
    case 'distributor':
      return {
        ...baseStats,
        totalProducts: Math.floor(Math.random() * 200) + 100,
        activeContracts: Math.floor(Math.random() * 30) + 10,
      };
    case 'retailer':
      return {
        ...baseStats,
        totalProducts: Math.floor(Math.random() * 150) + 75,
        activeContracts: Math.floor(Math.random() * 25) + 8,
      };
    default:
      return baseStats;
  }
};

export const mockSmartContracts: SmartContract[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440006',
    productId: '550e8400-e29b-41d4-a716-446655440003',
    buyerId: '550e8400-e29b-41d4-a716-446655440002',
    sellerId: '550e8400-e29b-41d4-a716-446655440001',
    amount: 25000,
    currency: 'INR',
    status: 'active',
    escrowReleased: false,
    terms: 'Payment upon delivery confirmation within 48 hours',
    createdAt: new Date('2024-01-16'),
  },
];