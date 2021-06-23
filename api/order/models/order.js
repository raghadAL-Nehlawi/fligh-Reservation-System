'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
/*
 beforeSave: async (model) => {
    if (model.flight.capacity > 0) {
        model.flight.capacity --;
      model.slug = slugify(model.flight);
    }
  }, */
  
 ///TODO Check if capacity allows to make flight reservation}
 
module.exports = {   beforeSave: async (model) => {
    console.log('[beforeSave]', 'model', model) }}
