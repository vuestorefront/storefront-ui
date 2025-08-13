// usage: node ./scripts/rgbToOklch.js > output-colors.json
// taken from https://github.com/ChromeDevTools/devtools-frontend/tree/main/front_end

const { readFileSync } = require('fs');
const path = require('path');

class Vector3 {
  values = [0, 0, 0];
  constructor(values) {
    if (values) {
      this.values = values;
    }
  }
}
class Matrix3x3 {
  values = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  constructor(values) {
    if (values) {
      this.values = values;
    }
  }

  multiply(other) {
    const dst = new Vector3();
    for (let row = 0; row < 3; ++row) {
      dst.values[row] = this.values[row][0] * other.values[0] + this.values[row][1] * other.values[1] +
        this.values[row][2] * other.values[2];
    }
    return dst;
  }
}
class TransferFunction {
  g;
  a;
  b;
  c;
  d;
  e;
  f;

  constructor(g, a, b = 0, c = 0, d = 0, e = 0, f = 0) {
    this.g = g;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
  }

  eval(val) {
    const sign = val < 0 ? -1.0 : 1.0;
    const abs = val * sign;

    // 0 <= |encoded| < d path
    if (abs < this.d) {
      return sign * (this.c * abs + this.f);
    }

    // d <= |encoded| path
    return sign * (Math.pow(this.a * abs + this.b, this.g) + this.e);
  }
}
function applyTransferFns(fn, r, g, b) {
  return [fn.eval(r), fn.eval(g), fn.eval(b)];
}

const EPSILON = 0.01;
const GAMUT_sRGB = new Matrix3x3([
  [0.436065674, 0.385147095, 0.143066406],
  [0.222488403, 0.716873169, 0.060607910],
  [0.013916016, 0.097076416, 0.714096069],
]);
const LMS_TO_OKLAB_MATRIX = new Matrix3x3([
  [0.2104542553, 0.7936177849999999, -0.0040720468],
  [1.9779984951000003, -2.4285922049999997, 0.4505937099000001],
  [0.025904037099999982, 0.7827717662, -0.8086757660000001],
]);
const XYZ_TO_LMS_MATRIX = new Matrix3x3([
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937],
]);
const XYZD50_TO_XYZD65_MATRIX = new Matrix3x3([
  [0.9555366447632887, -0.02306009252137888, 0.06321844147263304],
  [-0.028315378228764922, 1.009951351591575, 0.021026001591792402],
  [0.012308773293784308, -0.02050053471777469, 1.3301947294775631],
]);
const LMS_TO_XYZ_MATRIX = new Matrix3x3([
  [1.226879873374156, -0.5578149965554814, 0.2813910501772159],
  [-0.040575762624313734, 1.1122868293970596, -0.07171106666151703],
  [-0.07637294974672144, -0.4214933239627915, 1.586924024427242],
]);
const OKLAB_TO_LMS_MATRIX = new Matrix3x3([
  [0.99999999845051981432, 0.39633779217376785678, 0.21580375806075880339],
  [1.0000000088817607767, -0.1055613423236563494, -0.063854174771705903402],
  [1.0000000546724109177, -0.089484182094965759684, -1.2914855378640917399],
]);
const XYZD65_TO_XYZD50_MATRIX = new Matrix3x3([
  [1.0478573189120088, 0.022907374491829943, -0.050162247377152525],
  [0.029570500050499514, 0.9904755577034089, -0.017061518194840468],
  [-0.00924047197558879, 0.015052921526981566, 0.7519708530777581],
]);
const TRANSFER_sRGB = new TransferFunction(2.4, (1 / 1.055), (0.055 / 1.055), (1 / 12.92), 0.04045, 0.0, 0.0)

function normalizeHue(hue) {
  // Even though it is highly unlikely, hue can be
  // very negative like -400. The initial modulo
  // operation makes sure that the if the number is
  // negative, it is between [-360, 0].
  return ((hue % 360) + 360) % 360;
}
function equals(a, b, accuracy = EPSILON) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (const i in a) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    return false;
  }
  if (a === null || b === null) {
    return a === b;
  }
  return Math.abs(a - b) < accuracy;
}

function radToDeg(rad) {
  return rad * (180 / Math.PI);
}
function degToRad(deg) {
  return deg * (Math.PI / 180);
}
function round(v) {
  return Math.round(v * 1000) / 1000;
}
function clamp(value, { min, max }) {
  if (value === null) {
    return value;
  }
  if (min !== undefined) {
    value = Math.max(value, min);
  }
  if (max !== undefined) {
    value = Math.min(value, max);
  }
  return value;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : hex;
}

function create(r, g, b) {
  let [l, c, h] = xyzd50ToOklch(...toXyzd50(r, g, b))

  l = clamp(l, { min: 0, max: 1 });
  c = equals(l, 0) || equals(l, 1) ? 0 : c;
  c = clamp(c, { min: 0 });
  h = equals(c, 0) ? 0 : h;
  h = normalizeHue(h);

  return [l, c, h]
}

function srgbToXyzd50(r, g, b) {
  const [mappedR, mappedG, mappedB] = applyTransferFns(TRANSFER_sRGB, r, g, b);
  const rgbInput = new Vector3([mappedR, mappedG, mappedB]);
  const xyzOutput = GAMUT_sRGB.multiply(rgbInput);
  return xyzOutput.values;
}
function toXyzd50(r, g, b) {
  return srgbToXyzd50(r, g, b);
}
function labToLch(l, a, b) {
  return [l, Math.sqrt(a * a + b * b), radToDeg(Math.atan2(b, a))];
}
function xyzd65ToOklab(x, y, z) {
  const xyzInput = new Vector3([x, y, z]);
  const lmsIntermediate = XYZ_TO_LMS_MATRIX.multiply(xyzInput);

  lmsIntermediate.values[0] = Math.pow(lmsIntermediate.values[0], 1.0 / 3.0);
  lmsIntermediate.values[1] = Math.pow(lmsIntermediate.values[1], 1.0 / 3.0);
  lmsIntermediate.values[2] = Math.pow(lmsIntermediate.values[2], 1.0 / 3.0);

  const labOutput = LMS_TO_OKLAB_MATRIX.multiply(lmsIntermediate);
  return [labOutput.values[0], labOutput.values[1], labOutput.values[2]];
}
function xyzd50ToD65(x, y, z) {
  const xyzInput = new Vector3([x, y, z]);
  const xyzOutput = XYZD50_TO_XYZD65_MATRIX.multiply(xyzInput);
  return xyzOutput.values;
}
function xyzd50ToOklch(x, y, z) {
  const [x65, y65, z65] = xyzd50ToD65(x, y, z);
  const [l, a, b] = xyzd65ToOklab(x65, y65, z65);
  return labToLch(l, a, b);
}
function toXyzd50(l, c, h) {
  return oklchToXyzd50(l, c, h);
}
function oklchToXyzd50(lInput, c, h) {
  const [l, a, b] = lchToLab(lInput, c, h);
  const [x65, y65, z65] = oklabToXyzd65(l, a, b);
  return xyzd65ToD50(x65, y65, z65);
}
function xyzd65ToD50(x, y, z) {
  const xyzInput = new Vector3([x, y, z]);
  const xyzOutput = XYZD65_TO_XYZD50_MATRIX.multiply(xyzInput);
  return xyzOutput.values;
}
function oklabToXyzd65(l, a, b) {
  const labInput = new Vector3([l, a, b]);
  const lmsIntermediate = OKLAB_TO_LMS_MATRIX.multiply(labInput);
  lmsIntermediate.values[0] = lmsIntermediate.values[0] * lmsIntermediate.values[0] * lmsIntermediate.values[0];
  lmsIntermediate.values[1] = lmsIntermediate.values[1] * lmsIntermediate.values[1] * lmsIntermediate.values[1];
  lmsIntermediate.values[2] = lmsIntermediate.values[2] * lmsIntermediate.values[2] * lmsIntermediate.values[2];
  const xyzOutput = LMS_TO_XYZ_MATRIX.multiply(lmsIntermediate);
  return xyzOutput.values;
}

function lchToLab(l, c, h) {
  if (h === undefined) {
    return [l, 0, 0];
  }

  return [l, c * Math.cos(degToRad(h)), c * Math.sin(degToRad(h))];
}

///

const input = readFileSync(path.join(__dirname, 'rgbColors.txt'), 'utf8');
const result = input.split('\n').map(v => v.trim().split(':')).map(([variable, value]) => ({ name: variable.substring(2).toLowerCase(), value: value.trim().slice(0, -1) })).map(({ name, value }) => ({ name, value: value.slice(-2) === 'FF' ? hexToRgb(value.slice(0, -2)) : value })).reduce((p, v) => {
  const [name, value] = v.name.split('-');
  if (parseInt(value) + '' !== value) return p;
  if (typeof v.value === 'string') {
    return p;
  }
  const { r, g, b } = v.value;
  const [l, c, h] = create(r / 255, g / 255, b / 255);
  p[name] ??= {};
  if (isNaN(l)) {
    p[name][value] = v.value;
    return p;
  }
  p[name][value] = [round(l), round(c), round(h)].join(' ');
  return p;
}, {});

console.log(JSON.stringify(result, null, 2));
