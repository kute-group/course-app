const DATE_FORMAT = 'HH:mm DD-MM-YYYY';
const SHORT_DATE_FORMAT = 'DD-MM-YYYY';
const SHOW_DATE_FORMAT = 'D MMMM YYYY, HH:mm';
const LABELS = [];
const LANGUAGES = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Vietnamese',
    value: 'vi',
  },
];
const PAGE_SIZE_OPTIONS = [10, 20, 50, 100, 200];
const FILTER_DATE_FORMAT = 'YYYY-MM-DD';
const config = {
  DATE_FORMAT,
  LABELS,
  LANGUAGES,
  PAGE_SIZE: 10,
  PAGE_SIZE_CATEGORY: 100,
  PAGE_SIZE_OPTIONS,
  FILTER_DATE_FORMAT,
};

export { config };
