import { create } from 'zustand';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'rejected';
export type EventType = 'wedding' | 'birthday' | 'corporate' | 'traditional' | 'outdoor' | 'engagement';

export interface Booking {
  id: string;
  name: string;
  phone: string;
  eventType: EventType;
  date: string;
  status: BookingStatus;
  revenue: number;
  createdAt: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'wedding' | 'birthday' | 'corporate';
}

export interface ContactLead {
  id: string;
  name: string;
  phone: string;
  message: string;
  responded: boolean;
  createdAt: string;
}

export interface BusinessSettings {
  phone1: string;
  phone2: string;
  address: string;
  whatsappLink: string;
}

interface AdminState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;

  bookings: Booking[];
  addBooking: (b: Omit<Booking, 'id' | 'createdAt'>) => void;
  updateBookingStatus: (id: string, status: BookingStatus) => void;
  deleteBooking: (id: string) => void;

  services: Service[];
  addService: (s: Omit<Service, 'id'>) => void;
  updateService: (id: string, s: Partial<Service>) => void;
  deleteService: (id: string) => void;

  gallery: GalleryImage[];
  addGalleryImage: (g: Omit<GalleryImage, 'id'>) => void;
  deleteGalleryImage: (id: string) => void;

  contacts: ContactLead[];
  markResponded: (id: string) => void;

  settings: BusinessSettings;
  updateSettings: (s: Partial<BusinessSettings>) => void;
}

const uid = () => Math.random().toString(36).slice(2, 10);

const mockBookings: Booking[] = [
  { id: '1', name: 'Rajesh Kumar', phone: '9876543210', eventType: 'wedding', date: '2026-05-15', status: 'confirmed', revenue: 150000, createdAt: '2026-04-01' },
  { id: '2', name: 'Priya Devi', phone: '9876543211', eventType: 'birthday', date: '2026-04-25', status: 'pending', revenue: 35000, createdAt: '2026-04-05' },
  { id: '3', name: 'Tech Solutions Ltd', phone: '9876543212', eventType: 'corporate', date: '2026-04-20', status: 'completed', revenue: 80000, createdAt: '2026-03-15' },
  { id: '4', name: 'Meena Sundar', phone: '9876543213', eventType: 'traditional', date: '2026-05-01', status: 'confirmed', revenue: 120000, createdAt: '2026-04-02' },
  { id: '5', name: 'Arjun Prakash', phone: '9876543214', eventType: 'engagement', date: '2026-06-10', status: 'pending', revenue: 90000, createdAt: '2026-04-08' },
  { id: '6', name: 'Lakshmi Narayanan', phone: '9876543215', eventType: 'wedding', date: '2026-03-20', status: 'completed', revenue: 200000, createdAt: '2026-02-10' },
  { id: '7', name: 'Karthik Raman', phone: '9876543216', eventType: 'outdoor', date: '2026-04-30', status: 'pending', revenue: 55000, createdAt: '2026-04-10' },
];

const mockServices: Service[] = [
  { id: '1', name: 'Wedding Catering', description: 'Complete wedding catering with traditional & modern menus', price: '₹500/plate', image: '/src/assets/wedding-catering.jpg' },
  { id: '2', name: 'Birthday Parties', description: 'Fun-filled birthday events with custom themes', price: '₹25,000+', image: '/src/assets/birthday-party.jpg' },
  { id: '3', name: 'Corporate Events', description: 'Professional corporate catering and event management', price: '₹40,000+', image: '/src/assets/corporate-event.jpg' },
  { id: '4', name: 'Traditional Functions', description: 'Pooja, housewarming, and traditional ceremony catering', price: '₹300/plate', image: '/src/assets/traditional-function.jpg' },
  { id: '5', name: 'Outdoor Events', description: 'Open-air event setup with complete arrangements', price: '₹50,000+', image: '/src/assets/outdoor-event.jpg' },
  { id: '6', name: 'Full Event Planning', description: 'A to Z event management - decoration, food, photography', price: 'Custom', image: '/src/assets/event-planning.jpg' },
];

const mockContacts: ContactLead[] = [
  { id: '1', name: 'Suresh Babu', phone: '9871234567', message: 'Looking for wedding catering for 500 guests in June', responded: false, createdAt: '2026-04-10' },
  { id: '2', name: 'Anitha Krishnan', phone: '9871234568', message: 'Need birthday party arrangement for kids', responded: true, createdAt: '2026-04-08' },
  { id: '3', name: 'Vijay Enterprises', phone: '9871234569', message: 'Corporate lunch for 200 people', responded: false, createdAt: '2026-04-12' },
];

const mockGallery: GalleryImage[] = [
  { id: '1', url: '/src/assets/wedding-catering.jpg', category: 'wedding' },
  { id: '2', url: '/src/assets/birthday-party.jpg', category: 'birthday' },
  { id: '3', url: '/src/assets/corporate-event.jpg', category: 'corporate' },
];

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: false,
  login: (email, password) => {
    if (email === 'admin@ddevents.com' && password === 'admin123') {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),

  bookings: mockBookings,
  addBooking: (b) => set((s) => ({ bookings: [...s.bookings, { ...b, id: uid(), createdAt: new Date().toISOString().split('T')[0] }] })),
  updateBookingStatus: (id, status) => set((s) => ({ bookings: s.bookings.map((b) => b.id === id ? { ...b, status } : b) })),
  deleteBooking: (id) => set((s) => ({ bookings: s.bookings.filter((b) => b.id !== id) })),

  services: mockServices,
  addService: (sv) => set((s) => ({ services: [...s.services, { ...sv, id: uid() }] })),
  updateService: (id, sv) => set((s) => ({ services: s.services.map((x) => x.id === id ? { ...x, ...sv } : x) })),
  deleteService: (id) => set((s) => ({ services: s.services.filter((x) => x.id !== id) })),

  gallery: mockGallery,
  addGalleryImage: (g) => set((s) => ({ gallery: [...s.gallery, { ...g, id: uid() }] })),
  deleteGalleryImage: (id) => set((s) => ({ gallery: s.gallery.filter((g) => g.id !== id) })),

  contacts: mockContacts,
  markResponded: (id) => set((s) => ({ contacts: s.contacts.map((c) => c.id === id ? { ...c, responded: true } : c) })),

  settings: { phone1: '6381459317', phone2: '8489308707', address: 'Tirupur, Tamil Nadu', whatsappLink: 'https://wa.me/916381459317' },
  updateSettings: (ns) => set((s) => ({ settings: { ...s.settings, ...ns } })),
}));
