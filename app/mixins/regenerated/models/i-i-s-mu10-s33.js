import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('S33E', 'i-i-s-mu10-s33', {
    
  });

  modelClass.defineProjection('S33L', 'i-i-s-mu10-s33', {
    
  });
};
