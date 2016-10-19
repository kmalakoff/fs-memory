export default function lstatSyncNoException(path) {
  try { return this.lstatSync(path) } catch (err) {}
}
