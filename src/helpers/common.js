import moment from 'moment';
import crypto from 'crypto';

export const convertToSlug = (string) => {
  const a =
    'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b =
    'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string
    .toString()
    .toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    .replace(/đ/gi, 'd')
    .replace(/\s+/g, '-')
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const removeHtmlTag = (excerpt) => {
  if (!excerpt) return '';
  const regex = /(<([^>]+)>)/gi;
  return excerpt.replace(regex, '');
};

export const formatedDate = (dateVal) => {
  return moment(dateVal).isValid()
    ? moment(dateVal).format('DD-MM-YYYY')
    : '--';
};

export const formatedPrice = (price) => {
  if (!price) return null;
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const buildUrl = (url, parameters) => {
  let qs = '';
  for (let key in parameters) {
    let value = parameters[key];
    if (value !== '') {
      qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
    }
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1);
    url = url + '?' + qs;
  }
  return url;
};

export const getUserInformation = () => {
  return JSON.parse(localStorage.getItem('userInfo'));
};

export const shouldHaveAccessPermission = (key, sub) => {
  const user = getUserInformation();
  if (!user || !user.userCategories || !user.userCategories.permissions) {
    return false;
  }

  const permissions = JSON.parse(user.userCategories.permissions);
  if (sub) {
    if (
      permissions[key] &&
      permissions[key].length > 0 &&
      permissions[key].includes(sub)
    ) {
      return true;
    }
  } else {
    if (permissions[key] && permissions[key].length > 0) {
      return true;
    }
  }
  return true;
};

export const cryptoUnHash = (key) => {
  try {
    let mykey = crypto.createDecipher('aes-128-cbc', 'demo-app');
    let mystr = mykey.update(key, 'hex', 'utf8');
    mystr += mykey.final('utf8');
    return mystr;
  } catch (error) {
    console.log(error);
  }
};

export const recursiveTableData = (
  categories,
  originCategories,
  characters = ' --- ',
  countLoops = 0,
  currentArr = []
) => {
  countLoops++;
  let char = '';
  for (let index = 0; index < countLoops; index++) {
    char += characters;
  }
  if (countLoops === 1) {
    const roots = categories.filter((cate) => !cate.parent);
    roots.forEach((category) => {
      currentArr.push({ ...category, titleLevel: category.title });
      const subs = [];
      categories.forEach((item) => {
        if (item.parent === category._id) {
          currentArr.push({ ...item, titleLevel: `${char} ${item.title}` });
          subs.push(item);
        }
      });
      if (subs.length > 0)
        recursiveTableData(
          subs,
          originCategories,
          ' --- ',
          countLoops,
          currentArr
        );
    });
  } else {
    categories.forEach((category) => {
      const subs = [];
      originCategories.forEach((item) => {
        if (item.parent === category._id) {
          currentArr.push({ ...item, titleLevel: `${char} ${item.title}` });
          subs.push(item);
        }
      });
      if (subs.length > 0)
        recursiveTableData(
          subs,
          originCategories,
          ' --- ',
          countLoops,
          currentArr
        );
    });
  }
  return currentArr;
};
