export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ApprovedOrganization = Organization & {
  __typename?: 'ApprovedOrganization';
  admin: Contact;
  approvedBy: Scalars['EmailAddress'];
  approvedOn: Scalars['String'];
  contact: Contact;
  domainName: Scalars['URL'];
  name: Scalars['String'];
  organizationId: Scalars['GUID'];
  status: OrganizationStatus;
  urls?: Maybe<Array<Maybe<Scalars['URL']>>>;
};

export type ApprovedPublicBadge = PublicBadge & {
  __typename?: 'ApprovedPublicBadge';
  badgeId: Scalars['GUID'];
  description: Scalars['String'];
  evidence: Array<Proof>;
  name: Scalars['String'];
  narrative: Scalars['String'];
  recipient: ApprovedOrganization;
  recipientId: Scalars['ID'];
  status: PublicBadgeStatus;
  tags: Array<Maybe<Scalars['String']>>;
  valueCase: ValueCase;
  valueCaseId: Scalars['ID'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['EmailAddress'];
  name: Scalars['String'];
};

export type ContactInput = {
  email: Scalars['EmailAddress'];
  name: Scalars['String'];
};

export type Issuer = {
  __typename?: 'Issuer';
  email: Scalars['EmailAddress'];
  issuerId: Scalars['URL'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum Language {
  De = 'DE',
  En = 'EN',
  Nl = 'NL'
}

export type Localization = {
  __typename?: 'Localization';
  DE?: Maybe<ValueCaseLocalization>;
  NL?: Maybe<ValueCaseLocalization>;
};

export type Mutation = {
  __typename?: 'Mutation';
  applyForBadge?: Maybe<PublicBadge>;
  approveOrganization?: Maybe<ApprovedOrganization>;
  registerOrganization?: Maybe<PendingOrganization>;
};


export type MutationApplyForBadgeArgs = {
  input: PublicBadgeInput;
};


export type MutationApproveOrganizationArgs = {
  input: OrganizationValidation;
};


export type MutationRegisterOrganizationArgs = {
  input: OrganizationInput;
};

export type OpenBadge = {
  __typename?: 'OpenBadge';
  badge: OpenBadgeClass;
  evidence: Array<Maybe<OpenBadgeProof>>;
  expires: Scalars['String'];
  id: Scalars['String'];
  issuedOn: Scalars['String'];
  recipient: OpenBadgeRecipient;
};

export type OpenBadgeArtifact = {
  __typename?: 'OpenBadgeArtifact';
  json: Scalars['JSON'];
  signature: Scalars['String'];
};

export type OpenBadgeClass = {
  __typename?: 'OpenBadgeClass';
  criteria: OpenBadgeCriteria;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  tags: Array<Maybe<Scalars['String']>>;
};

export type OpenBadgeCriteria = {
  __typename?: 'OpenBadgeCriteria';
  narrative: Scalars['String'];
};

export type OpenBadgeProof = {
  __typename?: 'OpenBadgeProof';
  description: Scalars['String'];
  genre: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  narrative: Scalars['String'];
};

export type OpenBadgeRecipient = {
  __typename?: 'OpenBadgeRecipient';
  identity: Scalars['String'];
  type: Scalars['String'];
};

export type Organization = {
  admin: Contact;
  contact: Contact;
  domainName: Scalars['URL'];
  name: Scalars['String'];
  organizationId: Scalars['GUID'];
  status: OrganizationStatus;
  urls?: Maybe<Array<Maybe<Scalars['URL']>>>;
};

export type OrganizationInput = {
  admin: ContactInput;
  contact: ContactInput;
  domainName: Scalars['URL'];
  name: Scalars['String'];
};

export enum OrganizationStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING'
}

export type OrganizationValidation = {
  approvalToken: Scalars['GUID'];
  approver: Scalars['EmailAddress'];
  organizationId: Scalars['GUID'];
};

export type PendingOrganization = Organization & {
  __typename?: 'PendingOrganization';
  admin: Contact;
  approvalToken?: Maybe<Scalars['GUID']>;
  contact: Contact;
  domainName: Scalars['URL'];
  name: Scalars['String'];
  organizationId: Scalars['GUID'];
  status: OrganizationStatus;
  urls?: Maybe<Array<Maybe<Scalars['URL']>>>;
};

export type PendingPublicBadge = PublicBadge & {
  __typename?: 'PendingPublicBadge';
  badgeId: Scalars['GUID'];
  description: Scalars['String'];
  name: Scalars['String'];
  narrative: Scalars['String'];
  recipient: ApprovedOrganization;
  recipientId: Scalars['ID'];
  status: PublicBadgeStatus;
  tags: Array<Maybe<Scalars['String']>>;
  valueCase: ValueCase;
  valueCaseId: Scalars['ID'];
};

export type Proof = {
  __typename?: 'Proof';
  description: Scalars['String'];
  genre: Scalars['String'];
  name: Scalars['String'];
  narrative: Array<Scalars['String']>;
  proofId: Scalars['GUID'];
};

export type PublicBadge = {
  badgeId: Scalars['GUID'];
  description: Scalars['String'];
  name: Scalars['String'];
  narrative: Scalars['String'];
  recipient: ApprovedOrganization;
  recipientId: Scalars['ID'];
  status: PublicBadgeStatus;
  tags: Array<Maybe<Scalars['String']>>;
  valueCase: ValueCase;
  valueCaseId: Scalars['ID'];
};

export type PublicBadgeInput = {
  domainName: Scalars['URL'];
  valueCaseId: Scalars['ID'];
};

export enum PublicBadgeStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Signed = 'SIGNED'
}

export type Query = {
  __typename?: 'Query';
  getAllBadges?: Maybe<Array<Maybe<PublicBadge>>>;
  getValueCase?: Maybe<ValueCase>;
};


export type QueryGetAllBadgesArgs = {
  domainName: Scalars['URL'];
  language?: Maybe<Language>;
};


export type QueryGetValueCaseArgs = {
  language?: Maybe<Language>;
  valueCaseId: Scalars['GUID'];
};

export type RejectedPublicBadge = PublicBadge & {
  __typename?: 'RejectedPublicBadge';
  badgeId: Scalars['GUID'];
  description: Scalars['String'];
  evidence: Array<Proof>;
  name: Scalars['String'];
  narrative: Scalars['String'];
  recipient: ApprovedOrganization;
  recipientId: Scalars['ID'];
  status: PublicBadgeStatus;
  tags: Array<Maybe<Scalars['String']>>;
  valueCase: ValueCase;
  valueCaseId: Scalars['ID'];
};

export type Scenario = {
  __typename?: 'Scenario';
  description: Scalars['String'];
  narrative: Array<Scalars['String']>;
};

export type SignedPublicBadge = PublicBadge & {
  __typename?: 'SignedPublicBadge';
  artifact: OpenBadgeArtifact;
  badgeId: Scalars['GUID'];
  description: Scalars['String'];
  evidence: Array<Proof>;
  expires: Scalars['String'];
  issuedOn: Scalars['String'];
  name: Scalars['String'];
  narrative: Scalars['String'];
  recipient: ApprovedOrganization;
  recipientId: Scalars['ID'];
  status: PublicBadgeStatus;
  tags: Array<Maybe<Scalars['String']>>;
  valueCase: ValueCase;
  valueCaseId: Scalars['ID'];
};

export type ValueCase = {
  __typename?: 'ValueCase';
  approvedBy: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['URL'];
  localization?: Maybe<Localization>;
  name: Scalars['String'];
  narrative: Scalars['String'];
  proposedBy: Organization;
  scenarios: Array<Scenario>;
  tags: Array<Maybe<Scalars['String']>>;
  valueCaseId: Scalars['GUID'];
};

export type ValueCaseInput = {
  description: Scalars['String'];
  domainName: Scalars['URL'];
  name: Scalars['String'];
  narrative: Scalars['String'];
  tags: Array<Maybe<Scalars['String']>>;
};

export type ValueCaseLocalization = {
  __typename?: 'ValueCaseLocalization';
  description: Scalars['String'];
  name: Scalars['String'];
  narrative: Scalars['String'];
  scenarios: Array<Scenario>;
  tags: Array<Maybe<Scalars['String']>>;
};

export type GetAllBadgesQueryVariables = Exact<{
  domainName: Scalars['URL'];
}>;


export type GetAllBadgesQuery = { __typename?: 'Query', getAllBadges?: Maybe<Array<Maybe<{ __typename?: 'ApprovedPublicBadge', badgeId: any, name: string, description: string, status: PublicBadgeStatus } | { __typename?: 'PendingPublicBadge', badgeId: any, name: string, description: string, status: PublicBadgeStatus } | { __typename?: 'RejectedPublicBadge', badgeId: any, name: string, description: string, status: PublicBadgeStatus } | { __typename?: 'SignedPublicBadge', badgeId: any, name: string, description: string, status: PublicBadgeStatus, evidence: Array<{ __typename?: 'Proof', proofId: any, name: string, description: string }> }>>> };
