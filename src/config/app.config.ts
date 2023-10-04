interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner'],
  tenantName: 'Company',
  applicationName: 'Linkify',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage profile', 'View link clicks', 'View profile views', 'Customize theme'],
  ownerAbilities: [
    'Manage link clicks',
    'Manage profile views',
    'Manage theme customization',
    'Manage user preferences',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ab98cec7-bfe1-4a4c-85b9-609e08550505',
};
