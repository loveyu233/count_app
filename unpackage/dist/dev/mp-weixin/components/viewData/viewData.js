"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "viewData",
  props: ["items", "dateStr"],
  setup(__props) {
    let count = common_vendor.ref(0);
    const props = __props;
    props.items.sort((a, b) => {
      return !(new Date(a.CreatedAt) - new Date(b.CreatedAt));
    });
    for (let i = 0; i < props.items.length; i++) {
      count.value += props.items[i].size;
    }
    console.log(props.items);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.dateStr),
        b: common_vendor.t(common_vendor.unref(count)),
        c: common_vendor.f(props.items, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: common_vendor.t(item.size),
            c: item.id
          };
        }),
        d: common_assets._imports_0$1
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c2ac1278"]]);
wx.createComponent(Component);
