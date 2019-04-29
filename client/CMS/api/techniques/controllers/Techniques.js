'use strict';

/**
 * Techniques.js controller
 *
 * @description: A set of functions called "actions" for managing `Techniques`.
 */

module.exports = {

  /**
   * Retrieve techniques records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.techniques.search(ctx.query);
    } else {
      return strapi.services.techniques.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a techniques record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.techniques.fetch(ctx.params);
  },

  /**
   * Count techniques records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.techniques.count(ctx.query);
  },

  /**
   * Create a/an techniques record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.techniques.add(ctx.request.body);
  },

  /**
   * Update a/an techniques record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.techniques.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an techniques record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.techniques.remove(ctx.params);
  }
};
