'use strict';

/**
 * knowledge-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::knowledge-blog.knowledge-blog');
