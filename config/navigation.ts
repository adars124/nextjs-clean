export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  {
    label: 'Insights',
    href: '/insights',
  },
  {
    label: 'Sutra',
    href: '/sutra',
    children: [
      { label: 'Stock Doko', href: '/sutra/stock-doko' },
      { label: 'Ratio Analysis', href: '/sutra/ratio-analysis' },
      { label: 'Broker Ratings', href: '/sutra/broker-ratings' },
      { label: 'Portfolio', href: '/sutra/portfolio' },
      { label: 'Screeners', href: '/sutra/screeners' },
      { label: 'Newsletter', href: '/sutra/newsletter' },
      { label: 'Valuation', href: '/sutra/valuation' },
      { label: 'Bulk IPO', href: '/sutra/bulk-ipo' },
    ],
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Courses',
    href: '/courses',
  },
  {
    label: 'Tools',
    href: '/tools',
    children: [
      { label: 'Dividend Calculator', href: '/tools/calc/dividend' },
      { label: 'Buy/Sell Calculator', href: '/tools/calc/buy-sell' },
      { label: 'WACC Calculator', href: '/tools/calc/wacc' },
      { label: 'SWP Calculator', href: '/tools/calc/swp' },
      { label: 'Compound Interest Calculator', href: '/tools/calc/compound' },
      { label: 'Bonus Adjustment Calculator', href: '/tools/calc/bonus' },
      {
        label: 'Right Share Adjustment Calculator',
        href: '/tools/calc/right-share',
      },
      { label: 'SIP Calculator', href: '/tools/calc/sip' },
    ],
  },
  {
    label: 'Stockpedia',
    href: '/stockpedia',
    children: [
      { label: 'Stock Wiki', href: '/stockpedia/wiki' },
      { label: 'FAQs', href: '/stockpedia/faq' },
      { label: 'Disclaimer', href: '/stockpedia/disclaimer' },
    ],
  },
];

export const footerNavigation = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
  social: [
    { label: 'Facebook', href: 'https://facebook.com/stocksessions' },
    { label: 'Twitter', href: 'https://twitter.com/stocksessions' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/stocksessions' },
    { label: 'Instagram', href: 'https://instagram.com/stocksessions' },
  ],
};

export const getNavigation = () => ({
  main: mainNavigation,
  footer: footerNavigation,
});

export default getNavigation;
