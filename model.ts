interface Locale {
  id: number;
  name: string;
  address: string;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

interface User {
  id: number;
  firstname: string;
  lastname: string;
  church_id: number;
  email: string;
  verified: boolean;
  verification_code: string;
  token: string;
  profile: string;
  locale_id: number;
  type: 'secretary' | 'member';
  is_approved: boolean;
  created_at: Date;
  updated_at: Date;
}

interface Address {
  id: number;
  user_id: number;
  address: string;
  is_current: boolean;
  created_at: Date;
  updated_at: Date;
}

interface Gathering {
  id: number;
  type: string;
  created_at: Date;
  updated_at: Date;
}

interface GatheringSchedule {
  id: number;
  gathering_id: number;
  title: string;
  locale_id: number;
  is_recurring: boolean;
  day: string | null;
  date: Date | null;
  time: string;
  created_at: Date;
  updated_at: Date;
}

interface Announcement {
  id: number;
  locale_id: number;
  user_id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
}

interface Attendance {
  id: number;
  user_id: number;
  gathering_schedule_id: number;
  date: Date;
  time: string;
  created_at: Date;
  updated_at: Date;
}
