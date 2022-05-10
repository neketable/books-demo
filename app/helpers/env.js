import { get } from '@ember/object';
import { helper } from '@ember/component/helper';
import ENV from 'books-demo/config/environment';

export function env([propertyName]) {
  return get(ENV, propertyName);
}

export default helper(env);
