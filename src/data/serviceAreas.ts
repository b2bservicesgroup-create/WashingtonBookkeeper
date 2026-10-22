// Bookkeeping city pages for WashingtonBookkeeper.com.
// HR, payroll and Zoho for these cities live on b2bsolutions.biz/service-areas/<slug>.
// Local rules were checked against official sources in October 2026 — see `sources`.

export interface CityPage {
  slug: string;
  city: string;
  county: string;
  inPerson: boolean;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  localRules: { title: string; body: string }[];
  books: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
}

export const cityPages: CityPage[] = [
  {
    slug: 'olympia-wa',
    city: 'Olympia',
    county: 'Thurston County',
    inPerson: true,
    title: 'Bookkeeper in Olympia, WA',
    metaDescription:
      'Monthly bookkeeping for Olympia small businesses — revenue tracked by city for Olympia, Lacey and Tumwater B&O returns, clean receivables and statements. In person from Rochester.',
    eyebrow: 'Olympia bookkeeping',
    h1: 'Bookkeeping for Olympia businesses that file more than one B&O return',
    intro: [
      "Most Washington businesses file one B&O return — the state's. Olympia businesses often need more. Olympia has its own city B&O tax, and so do its neighbors Lacey and Tumwater. If you work across the Olympia area, your books need to show where every dollar was earned.",
      'We set up Olympia books so revenue is tracked by city from the start, your receivables stay current, and year-end is a hand-off to your tax preparer instead of a scramble.',
    ],
    localRules: [
      {
        title: 'Olympia city B&O',
        body: 'Olympia exempts businesses with less than $500,000 a year in Olympia gross receipts from its city B&O tax (Olympia Municipal Code 5.04.060, amended 2025). Above that, you owe the city on top of the state.',
      },
      {
        title: 'Lacey and Tumwater have their own',
        body: 'Lacey and Tumwater also levy city B&O taxes, with far lower thresholds than Olympia. A contractor or service firm working in all three cities can owe in one and not another — only books that track revenue by location show that.',
      },
      {
        title: 'City license endorsement',
        body: 'An Olympia endorsement on your state business license is free up to $4,000 of Olympia income and $30 above that. We keep renewal dates on your calendar.',
      },
    ],
    books: [
      {
        title: 'Revenue by location',
        body: 'Customers or jobs tagged by city so each B&O return pulls the right number.',
      },
      {
        title: 'Receivables you can act on',
        body: 'Clients who pay on 30- or 60-day terms — state agencies and their contractors included — tracked in an aging report you actually read.',
      },
      {
        title: 'Monthly statements',
        body: 'A reconciled P&L and balance sheet each month, with a plain-language summary.',
      },
    ],
    faqs: [
      {
        q: 'Can we meet in person in Olympia?',
        a: "Yes. Olympia is a short drive from our Rochester office — we'll meet at your business or ours. Day-to-day bookkeeping happens remotely through a secure inbox.",
      },
      {
        q: 'How much does bookkeeping cost for an Olympia business?',
        a: 'Flat monthly plans start at $250 (Essentials), with Standard at $500, Advanced at $750 and Complete at $1,000. The plan depends on how many accounts you run, not where you are.',
      },
      {
        q: 'Do you file my Olympia B&O return?',
        a: "We don't prepare tax returns. We give you, or your tax preparer, revenue already broken out by city so the city and state returns are quick and accurate.",
      },
    ],
    sources: [
      { label: 'Olympia Municipal Code 5.04 (B&O tax)', url: 'https://www.codepublishing.com/WA/Olympia/html/Olympia05/Olympia0504.html' },
      { label: 'Association of Washington Cities — local B&O tax rates (Jan 2026)', url: 'https://wacities.org/docs/default-source/resources/bando-taxes/botaxrates.pdf?sfvrsn=12' },
      { label: 'Washington DOR — Olympia city endorsement', url: 'https://dor.wa.gov/manage-business/city-endorsements/Olympia' },
    ],
  },
  {
    slug: 'tacoma-wa',
    city: 'Tacoma',
    county: 'Pierce County',
    inPerson: false,
    title: 'Bookkeeping for Tacoma, WA Small Businesses',
    metaDescription:
      "Remote bookkeeping for Tacoma small businesses and landlords — revenue classified for Tacoma's city B&O tax, small business credit tracking and rental books.",
    eyebrow: 'Tacoma bookkeeping',
    h1: 'Bookkeeping built around Tacoma’s city B&O tax',
    intro: [
      "Tacoma charges its own B&O tax, and the rate depends on how your revenue is classified — services are taxed at more than double the city's retailing rate. A bookkeeper who lumps everything into one income account can cost you money on every Tacoma return.",
      'We keep Tacoma books remotely, with revenue classified the way the city and state see it, so your returns are accurate and you only pay what you owe.',
    ],
    localRules: [
      {
        title: 'The $250,000 line',
        body: "Tacoma's city B&O return exempts businesses with less than $250,000 in gross income for the calendar year. Growing businesses need to see that line coming, not discover it after year-end.",
      },
      {
        title: 'Classification changes the rate',
        body: "On the city's return, retailing is taxed at 0.153% and services and other activities at 0.40%. Splitting revenue correctly between classifications is a bookkeeping job, not a tax-time guess.",
      },
      {
        title: 'Tacoma rental license',
        body: 'Owners of Tacoma rental property must register with the city and pay an annual rental business license fee — a cost that belongs in your rental books, by property.',
      },
    ],
    books: [
      {
        title: 'Income by B&O classification',
        body: 'Separate income accounts for retail, services and other activities, matched to the city and state returns.',
      },
      {
        title: 'Threshold watch',
        body: 'Year-to-date Tacoma gross income on your monthly summary so the $250,000 line never surprises you.',
      },
      {
        title: 'Rental property books',
        body: 'Income and expenses by property, with license fees and repairs where your tax preparer expects them.',
      },
    ],
    faqs: [
      {
        q: 'Do you serve Tacoma in person?',
        a: "No — Tacoma is a remote service area for us. You send documents to a secure inbox, we reconcile everything monthly, and we talk by phone or video whenever you'd like.",
      },
      {
        q: 'Is there a small business credit for Tacoma B&O?',
        a: "Tacoma's return includes a small business credit for businesses located in the city with gross income between $250,001 and $300,000, phasing out as income rises. Your tax preparer applies it; we make sure the income figure behind it is right.",
      },
      {
        q: 'How much does bookkeeping cost?',
        a: 'Flat monthly plans start at $250 a month. See our pricing page for what each plan includes.',
      },
    ],
    sources: [
      { label: 'City of Tacoma — B&O tax return form', url: 'https://tdocs.tacoma.gov/taxlicense/tax/B&O%20Tax%20Form.pdf' },
      { label: 'City of Tacoma — business license', url: 'https://tacoma.gov/?p=1569' },
      { label: 'Association of Washington Cities — local B&O tax rates (Jan 2026)', url: 'https://wacities.org/docs/default-source/resources/bando-taxes/botaxrates.pdf?sfvrsn=12' },
    ],
  },
  {
    slug: 'centralia-wa',
    city: 'Centralia',
    county: 'Lewis County',
    inPerson: true,
    title: 'Bookkeeper in Centralia, WA for Retail & Restaurants',
    metaDescription:
      'Bookkeeping for Centralia, WA retailers, restaurants and hospitality — daily sales reconciled to deposits, sales tax tracked, seasonal cash flow planned. In person in Lewis County.',
    eyebrow: 'Centralia bookkeeping',
    h1: 'Bookkeeping for Centralia shops, restaurants and hospitality',
    intro: [
      "Centralia does a lot of business with people passing through on I-5 — shoppers, diners and overnight guests. For a retailer or restaurant, that means hundreds of card transactions, processor fees and sales tax every week, plus slow months you have to plan for.",
      'We reconcile Centralia sales down to the deposit, keep sales tax collected separate from your income, and give you a monthly view of cash so the slow season is planned for, not feared.',
    ],
    localRules: [
      {
        title: 'No city B&O tax',
        body: "Centralia doesn't levy a city B&O tax, so your B&O and sales tax all go on the state excise return. One less return — but the state return has to be right.",
      },
      {
        title: 'Centralia business license',
        body: 'Businesses located in Centralia pay $75 for a city license and $75 each year to renew. Businesses based elsewhere need one once they earn more than $4,000 in Centralia.',
      },
      {
        title: 'Sales tax is not your money',
        body: "Sales tax you collect belongs to the state until you file. Books that mix it into revenue overstate your income and hide what you owe.",
      },
    ],
    books: [
      {
        title: 'Sales to deposit',
        body: 'Point-of-sale reports matched to bank deposits, with card processor fees recorded as expenses instead of disappearing.',
      },
      {
        title: 'Sales tax liability tracking',
        body: 'Tax collected held as a liability and tied to each excise return.',
      },
      {
        title: 'Seasonal cash planning',
        body: 'Month-over-month comparisons so you can see slow months coming and plan inventory and staffing.',
      },
    ],
    faqs: [
      {
        q: 'Can you meet us in Centralia?',
        a: 'Yes. Centralia is in our home territory — we meet Lewis County clients in person.',
      },
      {
        q: 'Do you work in Square, Toast or Clover?',
        a: 'We work from your point-of-sale reports and connect them to QuickBooks Online, Xero, Wave or FreshBooks, so daily sales post consistently.',
      },
      {
        q: 'How much does restaurant or retail bookkeeping cost?',
        a: 'Most shops land on Standard ($500/month) or Advanced ($750/month) depending on accounts and card activity. Plans start at $250.',
      },
    ],
    sources: [
      { label: 'Washington DOR — Centralia city endorsement', url: 'https://dor.wa.gov/manage-business/city-endorsements/centralia' },
      { label: 'Association of Washington Cities — local B&O tax rates (Jan 2026)', url: 'https://wacities.org/docs/default-source/resources/bando-taxes/botaxrates.pdf?sfvrsn=12' },
    ],
  },
  {
    slug: 'chehalis-wa',
    city: 'Chehalis',
    county: 'Lewis County',
    inPerson: true,
    title: 'Bookkeeper in Chehalis, WA for Contractors',
    metaDescription:
      'Bookkeeping for Chehalis, WA contractors and industrial businesses — job costing, sales tax by job site, retainage tracking and inventory. In person in Lewis County.',
    eyebrow: 'Chehalis bookkeeping',
    h1: 'Job-costed bookkeeping for Chehalis contractors',
    intro: [
      "Chehalis is the Lewis County seat and home to a lot of contractors, trades and industrial businesses around the Port of Chehalis. Their books have a problem most businesses don't: revenue and costs that belong to individual jobs, often in different cities.",
      "We keep Chehalis books by job, so you can see which jobs made money, bill on time, and report sales tax where the work happened — not where your shop is.",
    ],
    localRules: [
      {
        title: 'Sales tax follows the job site',
        body: "Washington sales tax on construction is reported at the rate where the work is done. A Chehalis contractor finishing a job in Centralia or Olympia reports that job under the job-site location code — so each job needs its location in the books.",
      },
      {
        title: 'Retainage on public jobs',
        body: 'Washington public works contracts hold back retainage — up to 5% of each payment — until the job is finished and accepted. That money is earned but not paid, and it belongs in receivables, not forgotten.',
      },
      {
        title: 'No city B&O in Chehalis',
        body: 'Chehalis requires a city license endorsement but levies no city B&O tax, so your B&O is reported on the state return only.',
      },
    ],
    books: [
      {
        title: 'Job costing',
        body: 'Labor, materials and subs coded to each job, so your bids are based on what jobs really cost.',
      },
      {
        title: 'Progress billing and retainage',
        body: 'Billed-to-date, retainage held and amounts due tracked by job.',
      },
      {
        title: 'Inventory and equipment',
        body: 'Materials on hand and equipment recorded so your balance sheet reflects what the business owns.',
      },
    ],
    faqs: [
      {
        q: 'Can you meet with us in Chehalis?',
        a: 'Yes — at your shop, a job trailer or our Rochester office.',
      },
      {
        q: 'Can you clean up books that are behind?',
        a: "Yes. Contractors are often months behind by the time they call. We catch up the books on a one-time project quote, then keep you current monthly.",
      },
      {
        q: 'Do you handle payroll for crews?',
        a: 'Yes — payroll and L&I reporting for Washington employers are handled by B2B Solutions, the team behind WashingtonBookkeeper.com.',
      },
    ],
    sources: [
      { label: 'Washington DOR — custom construction (sourcing to the job site)', url: 'https://dor.wa.gov/education/industry-guides/construction/custom-construction' },
      { label: 'MRSC — public works retainage (RCW 60.28)', url: 'https://mrsc.org/Home/Explore-Topics/Public-Works/Purchasing-and-Bidding/Purchasing-and-Bidding-for-Washington-State-Local/Purchasing-and-Bidding-Public-Works-Contracts/Guarantees-Bonds-Retainage.aspx' },
      { label: 'Association of Washington Cities — local B&O tax rates (Jan 2026)', url: 'https://wacities.org/docs/default-source/resources/bando-taxes/botaxrates.pdf?sfvrsn=12' },
    ],
  },
  {
    slug: 'rochester-wa',
    city: 'Rochester',
    county: 'Thurston County',
    inPerson: true,
    title: 'Local Bookkeeper in Rochester, WA',
    metaDescription:
      'WashingtonBookkeeper.com is based in Rochester, WA. Bookkeeping for local farms, home-based businesses and rental owners — wholesale and retail farm sales separated, personal and business split.',
    eyebrow: 'Rochester bookkeeping',
    h1: 'Your bookkeeper is in Rochester',
    intro: [
      "We're based right here in Rochester. Our neighbors run farms and nurseries, work out of a shop or home office, and often own a rental on the side — which usually means business and personal money that has grown tangled together.",
      "Rochester is unincorporated Thurston County, so there's no city B&O or city license to track. What's left is getting the state return right and keeping each part of your financial life in its own lane.",
    ],
    localRules: [
      {
        title: 'No city license or city B&O',
        body: "Rochester isn't an incorporated city, so you need only your Washington state business license and state excise return. If you also sell in Olympia, Tumwater or Centralia, their city rules can still apply.",
      },
      {
        title: 'Farm sales: wholesale vs. retail',
        body: 'Washington generally exempts farmers from B&O tax on agricultural products they grow and sell at wholesale. Farm-stand and market sales are retail: they owe retailing B&O even when the food itself is exempt from sales tax. Your books need the two kept apart.',
      },
      {
        title: 'Home-based business costs',
        body: 'A shop, vehicle or home office used for business has to be documented to be deductible. We keep the business share of those costs clean and supported.',
      },
    ],
    books: [
      {
        title: 'Business and personal, separated',
        body: 'Mixed accounts untangled and new transactions kept on the right side going forward.',
      },
      {
        title: 'Farm income by type',
        body: 'Wholesale, retail and other farm income in separate accounts that match how the state treats them.',
      },
      {
        title: 'Rental property books',
        body: "Each rental tracked on its own, ready for your tax preparer's year-end.",
      },
    ],
    faqs: [
      {
        q: 'Can I come to your office?',
        a: "Yes — we're in Rochester, and we're glad to meet at our office or yours.",
      },
      {
        q: 'Do you work with small farms?',
        a: 'Yes. We keep farm books in QuickBooks Online, Xero, Wave or FreshBooks, with income split the way Washington taxes it and records organized for your tax preparer.',
      },
      {
        q: 'How much does it cost?',
        a: 'Flat monthly plans start at $250 for a business with one bank account and one credit card. Catch-up work is quoted separately.',
      },
    ],
    sources: [
      { label: 'Washington DOR — farmers and agricultural tax incentives', url: 'https://dor.wa.gov/education/industry-guides/agriculture-tax-guide/specific-activities-farmers' },
      { label: 'Association of Washington Cities — local B&O tax rates (Jan 2026)', url: 'https://wacities.org/docs/default-source/resources/bando-taxes/botaxrates.pdf?sfvrsn=12' },
    ],
  },
];
