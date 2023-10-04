const mapping: Record<string, string> = {
  analytics: 'analytics',
  'click-statistics': 'click_statistics',
  companies: 'company',
  links: 'link',
  'link-clicks': 'link_clicks',
  profiles: 'profile',
  'profile-views': 'profile_views',
  subscriptions: 'subscription',
  themes: 'theme',
  'theme-customizations': 'theme_customization',
  users: 'user',
  'user-preferences': 'user_preferences',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
