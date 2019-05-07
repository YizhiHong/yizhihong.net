'use strict';

/**
 * Contact.js controller
 *
 * @description: A set of functions called "actions" for managing `Contact`.
 */

module.exports = {

  /**
   * Retrieve contact records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.contact.search(ctx.query);
    } else {
      return strapi.services.contact.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a contact record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.contact.fetch(ctx.params);
  },

  /**
   * Count contact records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.contact.count(ctx.query);
  },

  /**
   * Create a/an contact record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contact.add(ctx.request.body);
  },

  /**
   * Update a/an contact record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contact.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contact record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contact.remove(ctx.params);
  }
};
