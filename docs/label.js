const TAG_WRAP = '<span class="label_wrap">';
const TAG_BEGIN = '<span class="label ';
const TAG_END = '">';
const TAG_CLOSE = '</span>';
const TAG_FULL = '<span class="label_full">';
const TAG_COMPACT = '<span class="label_compact">';

function generateLabelsForList(type) {
  var types = type.split('：');
  var mainLabel = generateMainLabel(types[0]);

  var label = TAG_WRAP
              + TAG_FULL + mainLabel + types[0] + TAG_CLOSE + TAG_CLOSE
              + TAG_COMPACT + mainLabel + shortType(types[0]) + TAG_CLOSE + TAG_CLOSE
              + ' ';
  if (types.length === 1) {
    return label + TAG_CLOSE + TAG_CLOSE;
  }
  var subLabel = generateSubLabel(types[1]);
  return label 
          + TAG_FULL + subLabel + types[1] + TAG_CLOSE + TAG_CLOSE
          + TAG_COMPACT + subLabel + shortType(types[1]) + TAG_CLOSE + TAG_CLOSE
          + ' '
          + TAG_CLOSE; // TAG_WRAP
}

function generateMainLabel(type) {
  var str = TAG_BEGIN;
  switch (type) {
    case '小口径主砲':
    case '中口径主砲':
    case '大口径主砲':
    case '艦上爆撃機':
      str += 'fill_red';
      break;
    case '副砲':
    case '艦上偵察機':
      str += 'fill_yellow';
      break;
    case '艦上攻撃機':
    case '魚雷':
      str += 'fill_blue';
      break;
    case '艦上戦闘機':
    case '対空機銃':
      str += 'fill_green';
      break;
    case '対潜装備':
      str += 'fill_sky';
      break;
    case '小型電探':
    case '大型電探':
        str += 'fill_orange';
      break
    case '上陸用舟艇':
      str += 'fill_brown';
      break;
    case '水上機':
      str += 'fill_lightgreen';
      break;
    default:
      str += 'fill_gray';
      break;
  }
  return str + TAG_END;
}

function generateSubLabel (subType) {
  var str = TAG_BEGIN;
  switch (subType) {
    case '水上爆撃機':
    case '対艦強化弾':
      str += 'stroke_red';
      break;
    case '高角砲':
    case '特殊高角砲':
    case '特殊機銃':
    case '水上戦闘機':
    case '対空強化弾':
      str += 'stroke_green';
      break;
    case '特殊潜航艇':
      str += 'stroke_blue';
      break;
    case 'ソナー':
    case '爆雷':
    case '潜水艦装備':
    case '回転翼機':
      str += 'stroke_sky';
      break;
    case '対空':
    case '両用':
    case '探照灯':
      str += 'stroke_orange';
      break;
    case '夜戦':
    case '夜攻':
    case 'バルジ':
      str += 'stroke_purple';
      break;
    case '水上偵察機':
    case '機関部強化':
      str += 'fill_cream';
      break;
    default:
  }
  return str + TAG_END;
}

function shortType (type) {
  switch (type) {
    case '小口径主砲':
      return '主砲(小)';
    case '中口径主砲':
      return '主砲(中)'
    case '大口径主砲':
      return '主砲(大)'
    case '艦上爆撃機':
      return '艦爆';
    case '艦上偵察機':
      return '艦偵';
    case '艦上攻撃機':
      return '艦攻'
    case '艦上戦闘機':
      return '艦戦'
    case '対空機銃':
      return '機銃';
    case '対潜装備':
      return '対潜';
    case '小型電探':
    case '大型電探':
      return '電探'
    case '上陸用舟艇':
      return '大発';
    case '水上爆撃機':
      return '水爆';
    case '対艦強化弾':
      return '徹甲';
    case '水上戦闘機':
      return '水戦';
    case '対空強化弾':
      return '三式';
    case '高角砲':
      return '高角';
    case '特殊高角砲':
      return '特殊高角';
    case '特殊機銃':
      return '特殊';
    case '特殊潜航艇':
      return '甲標的';
    case '水上偵察機':
      return '水偵';
    default:
      return type;
  }
}