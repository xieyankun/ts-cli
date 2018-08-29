const getFormData = (params: object) => {
  const form = new FormData();
  for (const attr in params) {
    if (Object.prototype.hasOwnProperty.call(params, attr)) {
      // 在某参数不为undefined 或 null 时才添加
      if (params[attr] === 0 || !!params[attr]) {
        form.append(attr, params[attr]);
      } else {
        // 在某参数为undefined 或 null 时添加空字符串
        form.append(attr, '');
      }
    }
  }
  return form;
};

export {
  getFormData,
};
