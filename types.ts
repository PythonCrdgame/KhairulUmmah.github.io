
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'sports' | 'academic' | 'religious' | 'events';
  description: string;
}

export interface AuthState {
  user: { name: string; email: string; role: 'student' | 'teacher' | 'parent' } | null;
  isAuthenticated: boolean;
}
