'use strict';

/**
 * Experiences.js controller
 *
 * @description: A set of functions called "actions" for managing `Experiences`.
 */

module.exports = {

  /**
   * Retrieve experiences records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.experiences.search(ctx.query);
    } else {
      return strapi.services.experiences.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a experiences record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.experiences.fetch(ctx.params);
  },

  /**
   * Count experiences records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.experiences.count(ctx.query);
  },

  /**
   * Create a/an experiences record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.experiences.add(ctx.request.body);
  },

  /**
   * Update a/an experiences record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.experiences.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an experiences record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.experiences.remove(ctx.params);
  }
};
