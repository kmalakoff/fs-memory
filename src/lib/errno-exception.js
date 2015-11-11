import _ from 'lodash';
import ERRORS from 'errno';
import FSError from './error';

export default function errnoException(errno, info) {
  let err = _.find(ERRORS, (err) => err.errno === errno);
  return new FSError(err, info);
}
