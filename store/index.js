export const state = () => ({
  showMobileFilters: false,
  itemsCount: 0,
  mobileBreaks: [
    'mobile',
    'tablet',
  ],
});

export const mutations = {
  showMobileFilters (state) {
    state.showMobileFilters = !state.showMobileFilters;
  },
  itemsCount (state, count) {
    state.itemsCount = count;
  },
};