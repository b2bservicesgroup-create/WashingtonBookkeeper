// Single source of truth for bookkeeping plan pricing.
// Update prices or features here and both the homepage preview and /pricing page change.

export interface Plan {
  id: string;
  name: string;
  price: number | null; // null = quoted
  tagline: string;
  features: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    price: 250,
    tagline: 'Simple businesses with light activity',
    features: [
      '1 bank account and 1 credit card',
      'No loans or lines of credit',
      'Monthly reconciliation and financial statements',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 500,
    tagline: 'Growing businesses with moderate activity',
    features: [
      '2–3 bank accounts',
      '1–2 credit cards, loans or lines of credit',
      'Loan payments split into principal and interest',
      'Everything in Essentials',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: 750,
    tagline: 'Busy businesses with several accounts',
    features: [
      '4+ bank accounts and 3+ cards, loans or lines of credit',
      'Biweekly payroll for up to 5 employees*',
      'Quarterly review call',
      'Everything in Standard',
    ],
  },
  {
    id: 'complete',
    name: 'Complete',
    price: 1000,
    tagline: 'We run your invoicing and bills, too',
    featured: true,
    features: [
      'Everything in Advanced, including payroll*',
      'Customer invoicing and past-due follow-up',
      'Vendor bills entered and scheduled for your approval',
      'Monthly accounts receivable and payable aging reports',
    ],
  },
];

export const customPlan = {
  name: 'Custom',
  body: "Very high volume, multiple entities, inventory or special reporting? We'll scope the work and quote one flat monthly fee.",
};

// Payroll disclosure shown under the plan cards on the homepage and /pricing.
export const payrollDisclosure = {
  partnerName: 'Cascade Payroll',
  partnerURL: 'https://www.cascade-payroll.com',
};

export const everyPlanIncludes = [
  'Transaction categorization and monthly reconciliation',
  'Monthly profit & loss and balance sheet',
  'Year-end books ready for your tax preparer',
  'Email support and secure document sharing',
];

export const addOns = [
  { name: 'Payroll provider fees (Cascade Payroll or Gusto)', fee: 'Paid to provider' },
  { name: 'Payroll for 6 or more employees', fee: 'HR/Payroll package' },
  { name: 'Catch-up or cleanup bookkeeping', fee: 'Quoted per project' },
  { name: 'Sales tax filing', fee: 'Quoted' },
  { name: '1099 preparation', fee: 'Quoted' },
];

export const formatPrice = (n: number) => `$${n.toLocaleString('en-US')}`;
