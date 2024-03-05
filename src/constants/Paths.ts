/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  Responses: {
    Base: '/:formId',
    Get: '/filteredResponses',
  },
} as const;