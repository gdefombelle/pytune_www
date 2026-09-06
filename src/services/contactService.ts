import { apiRequest } from './apiClient';
import { ENDPOINTS } from './config';


export interface CommunityRequest {

  // ───────── CONTACT ─────────
  name: string;
  email: string;
  phone?: string;

  // ───────── ORGANIZATION ─────────
  organization: string;
  org_type?: 'church' | 'choir' | 'school' | 'nonprofit' | 'other';

  website?: string;

  number_of_locations?: number;
  number_of_pianos?: number;
  number_of_musicians?: number;

  // ───────── LOCATION ─────────
  country?: string;

  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    formatted?: string;
  };

  // ───────── RELATIONAL ─────────
  partnership_interest?: {
    feature_on_website?: boolean;
    share_concert_links?: boolean;
    testimonial?: boolean;
  };

  social_links?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    other?: string;
  };

  // ───────── FLEXIBLE ─────────
  extra?: Record<string, any>;

  // ───────── META ─────────
  message?: string;
  lang: string;
  source?: string;
}

export const joinCommunityRequest = async (
  payload: CommunityRequest
) => {
  return apiRequest(
    ENDPOINTS.community_contact,
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    false
  );
};

export interface EnterpriseRequest {

  // ───────── CONTACT ─────────
  name: string;
  email: string;
  phone?: string;

  // ───────── ORGANIZATION ─────────
  organization: string;
  org_type?:
    | 'workshop'
    | 'restoration'
    | 'retailer'
    | 'wholesaler'
    | 'manufacturer'
    | 'other';

  website?: string;

  number_of_locations?: number;
  number_of_pianos?: number;

  team_size?: number;

  api_interest?: 'yes' | 'maybe' | 'no';

  // ───────── LOCATION ─────────
  country?: string;

  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    formatted?: string;
  };

  // ───────── META ─────────
  message?: string;
  lang: string;
  source?: string;

  // ───────── FLEXIBLE / FUTURE SAFE ─────────
  extra?: Record<string, any>;
}

export const joinEnterpriseRequest = async (
  payload: EnterpriseRequest
) => {
  return apiRequest(
    ENDPOINTS.enterprise_contact, // 👉 nouveau endpoint
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    false
  );
};

export interface InvestorContactRequest {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  focus?: string;
  stage?: string;
  message?: string;
}

export const sendInvestorContact = async (
  payload: InvestorContactRequest
) => {
  return apiRequest(
    ENDPOINTS.investor_contact,
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    false
  );
};
