import { Book, HelpCircle, AlertTriangle } from 'lucide-react';

export const stockpediaSections = [
  {
    id: 'wiki',
    title: 'Stock Market Wiki',
    description:
      'Comprehensive guide to stock market terminology and concepts.',
    icon: <Book size={24} />,
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description:
      'Answers to common questions about investing and the stock market.',
    icon: <HelpCircle size={24} />,
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    description:
      'Important information about the use of our platform and investment risks.',
    icon: <AlertTriangle size={24} />,
  },
];
