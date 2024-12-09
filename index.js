const valid69 = ['69', 'sixtynine', 'sixnine', '6ix9ine'];
const valid420 = [
  '420',
  'fourtwozero',
  'fourhundredtwenty',
  'fourhundredandtwenty',
];

const sanitize = (value) => {
  const regx = new RegExp(/[^a-zA-Z0-9]/g);
  return new String(value).toLowerCase().replace(regx, '');
};

const checkCombo = (str) => {
  let combo = '';

  for (let v69 of valid69) {
    for (let v420 of valid420) {
      combo = sanitize(v69 + v420);

      if (str === combo) {
        return true;
      }
    }
  }

  return false;
};

function isNice(...args) {
  const argc = args.length;
  const a = args.map(sanitize);

  if (argc == 0 || argc > 2) {
    return false;
  }

  if (argc == 1) {
    return checkCombo(a[0]);
  }

  if (argc == 2) {
    return valid69.includes(a[0]) && valid420.includes(a[1]);
  }
}

module.exports = isNice;
