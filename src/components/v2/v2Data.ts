export type CapabilityId = 'marketing' | 'ai' | 'startup';

export type Capability = {
  id: CapabilityId;
  index: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  accent: string;
  accentDark: string;
  accentSoft: string;
  character: string;
  ghost: string;
  cta: string;
};

export const capabilities: Capability[] = [
  {
    id: 'marketing',
    index: '01',
    eyebrow: 'Marketing thực chiến',
    title: 'Marketing cho F&B',
    shortTitle: 'Marketing',
    description: 'Kéo khách thật tới quán bằng chiến lược vừa sức và bám sát thực tế.',
    detail: 'Chiến dịch, nội dung, kích hoạt điểm bán và sự hiện diện địa phương được xây quanh cách khách thật chọn một quán ăn uống.',
    accent: '#5DB872',
    accentDark: '#1f5a2e',
    accentSoft: '#ecf8e9',
    character: '/char2.webp',
    ghost: 'MARKETING',
    cta: 'Xem hoạt động',
  },
  {
    id: 'ai',
    index: '02',
    eyebrow: 'AI ứng dụng thực tế',
    title: 'Giải pháp AI cho F&B',
    shortTitle: 'AI cho F&B',
    description: 'Làm marketing nhanh hơn bằng nội dung, hình ảnh và quy trình có AI hỗ trợ.',
    detail: 'Công cụ, workflow nội dung và hệ thống đào tạo nội bộ giúp đội ngũ nhỏ làm nhanh hơn mà không biến thương hiệu thành một mẫu chung chung.',
    accent: '#5FA7E8',
    accentDark: '#245980',
    accentSoft: '#eaf6ff',
    character: '/char1.webp',
    ghost: 'AI SOLUTIONS',
    cta: 'Xem dự án AI',
  },
  {
    id: 'startup',
    index: '03',
    eyebrow: 'Xây từ mặt đất',
    title: 'Xây mô hình F&B',
    shortTitle: 'Startup F&B',
    description: 'Biến ý tưởng thành mô hình ăn uống có thể ra đời, vận hành và lớn lên.',
    detail: 'Từ offer đầu tiên, logic menu, câu chuyện thương hiệu tới nhịp vận hành và kế hoạch ra mắt, Long cùng chủ quán xây trên thực địa.',
    accent: '#F28A45',
    accentDark: '#7a3e15',
    accentSoft: '#fff1e5',
    character: '/char3.webp',
    ghost: 'STARTUP',
    cta: 'Xem hành trình',
  },
];

export const positioningTags = [
  'Thực chiến & vừa sức',
  'Tư duy ứng dụng AI',
  'Đồng hành xây thật',
];
