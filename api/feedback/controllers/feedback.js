'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  like: async ctx => {
    const { id } = ctx.params;
    const feedback = await strapi.services.feedback.findOne({ id });
    await strapi.services.feedback.update({ id }, { like: feedback.like + 1 });
    ctx.send(true);
  },
  dislike: async ctx => {
    const { id } = ctx.params;
    const feedback = await strapi.services.feedback.findOne({ id });
    await strapi.services.feedback.update({ id }, { like: feedback.like - 1 });
    ctx.send(true);
  }
};
