export default function lstatSyncNoException(fullPath) {
  try { return this.lstatSync(fullPath) } catch (err) {}
}
