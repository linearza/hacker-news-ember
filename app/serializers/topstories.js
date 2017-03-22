import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  normalizeFindAllResponse: function(store, primaryModelClass, payload, id, requestType) {

    for (var i = 0; i < payload.length; i++) {
      payload[i] = {
        id: payload[i]
      }
    }

    return this._super.apply(this, arguments);
  }

});
