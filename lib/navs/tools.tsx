import {
  Calculator,
  DollarSign,
  PieChart,
  TrendingUp,
  BarChart2,
  Percent,
} from 'lucide-react';

export const financialTools = [
  {
    href: 'dividend',
    name: 'Dividend Calculator',
    description:
      'Calculate dividend yield and income based on stock price and annual dividend.',
    icon: <DollarSign size={24} />,
  },
  {
    href: 'compound-interest',
    name: 'Compound Interest Calculator',
    description:
      'Estimate the growth of your investments over time with compound interest.',
    icon: <TrendingUp size={24} />,
  },
  {
    href: 'sip',
    name: 'SIP Calculator',
    description:
      'Plan your systematic investment plan and see potential returns.',
    icon: <BarChart2 size={24} />,
  },
  {
    href: 'wacc',
    name: 'WACC Calculator',
    description:
      'Calculate the Weighted Average Cost of Capital for a company.',
    icon: <Percent size={24} />,
  },
  {
    href: 'buy-sell',
    name: 'Buy Sell Calculator',
    description: 'Compute buy sell for your stock purchase.',
    icon: <Calculator size={24} />,
  },
  {
    href: 'bonus-adjust',
    name: 'Bonus Adjustment Calculator',
    description: 'Calculate the adjusted bonus price of the share.',
    icon: <PieChart size={24} />,
  },
  // need to add more tools here
];
