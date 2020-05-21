export default {
  toString: function(num) {
    const res = [];
    const str = num.toString();

    for (let i = 0; i < str.length; i++) {
      const j = str.length - i - 1;

      res.push(str[i]);

      if (j > 0 && j % 3 === 0) res.push(',');
    }

    return res.join('');
  },

  toPercentage: function(num) {
    return `${(num * 100).toFixed(2)}%`;
  },

  round: function(num, i) {
    if (i) {
      return num < i ? i : Math.round(num / i) * i;
    }

    return Math.round(num);
  },
};
