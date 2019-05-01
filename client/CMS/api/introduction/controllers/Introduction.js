'use strict';

/**
 * Introduction.js controller
 *
 * @description: A set of functions called "actions" for managing `Introduction`.
 */

module.exports = {

  /**
   * Retrieve introduction records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.introduction.search(ctx.query);
    } else {
      return strapi.services.introduction.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a introduction record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.introduction.fetch(ctx.params);
  },

  /**
   * Count introduction records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.introduction.count(ctx.query);
  },

  /**
   * Create a/an introduction record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.introduction.add(ctx.request.body);
  },

  /**
   * Update a/an introduction record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.introduction.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an introduction record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.introduction.remove(ctx.params);
  }
};
