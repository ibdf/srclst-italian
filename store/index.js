export const state = () => ({
  showMobileFilters: false,
  mobileBreaks: [
    'mobile',
    'tablet',
  ],
});

export const mutations = {
  showMobileFilters (state) {
    state.showMobileFilters = !state.showMobileFilters;
  },
};