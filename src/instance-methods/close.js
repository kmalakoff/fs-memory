import ERRORS from 'errno';
import FSError from '../lib/error';

export default function close(fd) {
  if (!fd || !fd.isOpen) throw new FSError(ERRORS.code.ENOENT, path);
  fd.isOpen = false;
}
