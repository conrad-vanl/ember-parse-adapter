/*
 * The date transform handles Parse's custom data format. For
 * example a Parse date might come back from the REST API
 * looking like this:
 *
 * "registeredAt": {
 *   "__type": "Date",
 *   "iso": "2014-06-05T12:43:50.716Z"
 * }
 *
 * This helper deserializes that structure into a normal
 * JavaScript date object. In also performs the inverse:
 * converting a date object back into Parse's custom format.
 *
 * @class EmberParseAdapter.Transforms.Data
 */
EmberParseAdapter.Transforms.Date = DS.Transform.extend({

  deserialize: function(serialized) {
    if (!serialized) {
      return null;
    }
    return new Date(serialized.iso);
  },

  serialize: function(deserialized) {
    if (!deserialized) {
      return null;
    }
    return {
      __type: 'Date',
      iso: deserialized.toISOString()
    };
  }

});
