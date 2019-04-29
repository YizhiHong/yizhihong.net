'use strict';

/**
 * Projects.js controller
 *
 * @description: A set of functions called "actions" for managing `Projects`.
 */

module.exports = {

  /**
   * Retrieve projects records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.projects.search(ctx.query);
    } else {
      return strapi.services.projects.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a projects record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.projects.fetch(ctx.params);
  },

  /**
   * Count projects records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.projects.count(ctx.query);
  },

  /**
   * Create a/an projects record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.projects.add(ctx.request.body);
  },

  /**
   * Update a/an projects record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.projects.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an projects record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.projects.remove(ctx.params);
  }
};
