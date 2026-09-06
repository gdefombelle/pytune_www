const PAGE_TITLES: Record<string, string> = {
  '/': 'PyTune',
  '/discover': 'Discover PyTune',
  '/about': 'Who we are',
  '/how-it-works': 'How it works',
  '/plans': 'Plans',
  '/plan-indy': 'Individual',
  '/plan-pro': 'Pro',
  '/plan-enterprise': 'Enterprise',
  '/plan-faith': 'Faith & Community',
  '/for/piano-owners': 'PyTune for Piano Owners',
  '/for/technicians': 'PyTune for Technicians & Tuners',
  '/for/technicians-workshops': 'PyTune Pro — Technicians & Workshops',
  '/for/restorer-sellers': 'PyTune for Restorers & Sellers',
  '/for/manufacturers': 'PyTune for Manufacturers & Distributors',
  '/for/churches-community': 'PyTune for Churches & Community',
  '/for/schools': 'PyTune for Schools & Conservatories',
  '/for/investors': 'PyTune for Investors',
  '/contacts/community': 'Community contact',
  '/contacts/enterprise': 'Enterprise contact',
  '/contacts/investor': 'Investor contact',
  '/legal': 'Legal information',
  '/privacy': 'Privacy policy',
  '/terms': 'Terms of service'
};

export function publicPageTitle(pathname: string) {
  return PAGE_TITLES[pathname] ?? 'PyTune';
}

export function publicDocumentTitle(pathname: string) {
  const title = publicPageTitle(pathname);
  return title === 'PyTune' ? 'PyTune — Piano intelligence for acoustic pianos' : `${title} · PyTune`;
}
