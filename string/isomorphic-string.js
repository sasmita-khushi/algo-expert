export default function IsomorphicString(s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const a = s[i],
      b = t[i];
    if (mapST.has(a)) {
      if (mapST.get(a) !== b) return false;
    } else {
      if (mapTS.has(b)) return false;
      mapST.set(a, b);
      mapTS.set(b, a);
    }
  }
  return true;
}

console.log(IsomorphicString("egg", "add"));
console.log(IsomorphicString("foo", "bar"));
