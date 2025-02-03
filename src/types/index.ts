export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'librarian' | 'member';
  createdAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  type: 'book' | 'journal' | 'digital';
  status: 'available' | 'borrowed' | 'reserved';
  location: string;
  addedAt: Date;
}

export interface BorrowRecord {
  id: string;
  resourceId: string;
  userId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'active' | 'returned' | 'overdue';
}