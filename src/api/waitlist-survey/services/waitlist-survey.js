'use strict';

/**
 * waitlist-survey service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::waitlist-survey.waitlist-survey');
