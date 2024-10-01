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
    id: 'dividend',
    name: 'Dividend Calculator',
    description:
      'Calculate dividend yield and income based on stock price and annual dividend.',
    icon: <DollarSign size={24} />,
  },
  {
    id: 'compound',
    name: 'Compound Interest Calculator',
    description:
      'Estimate the growth of your investments over time with compound interest.',
    icon: <TrendingUp size={24} />,
  },
  {
    id: 'sip',
    name: 'SIP Calculator',
    description:
      'Plan your systematic investment plan and see potential returns.',
    icon: <BarChart2 size={24} />,
  },
  {
    id: 'wacc',
    name: 'WACC Calculator',
    description:
      'Calculate the Weighted Average Cost of Capital for a company.',
    icon: <Percent size={24} />,
  },
  {
    id: 'ratio',
    name: 'Financial Ratios Calculator',
    description: 'Compute key financial ratios to assess company performance.',
    icon: <Calculator size={24} />,
  },
  {
    id: 'asset-allocation',
    name: 'Asset Allocation Tool',
    description:
      'Determine optimal asset allocation based on your risk profile.',
    icon: <PieChart size={24} />,
  },
];
