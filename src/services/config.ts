const USER_API_BASE_URL = (import.meta.env.VITE_USER_API_BASE_URL || '').replace(/\/$/, '');

/** Public, unauthenticated endpoints used by the contact forms. */
export const ENDPOINTS = {
  community_contact: `${USER_API_BASE_URL}/contact/community`,
  enterprise_contact: `${USER_API_BASE_URL}/contact/enterprise`,
  investor_contact: `${USER_API_BASE_URL}/contact/investor`
};
