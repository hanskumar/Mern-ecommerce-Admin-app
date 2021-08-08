const Joi = require('joi');

const CategorySchema = Joi.object({
    name: Joi.string().min(3).required().
    messages({
        'string.empty': `Name cannot be empty`
    }),
    /* slug: Joi.string().required().
    messages({
        'string.empty': `Slug cannot be empty`
    }), */
    //createdBy: Joi.string().required(),
    parentId:Joi.string().allow(null, ''),
    slug:Joi.string().allow(null, '')
});


module.exports = CategorySchema;