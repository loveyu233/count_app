"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_u_datetime_picker2 = common_vendor.resolveComponent("u-datetime-picker");
  const _easycom_viewData2 = common_vendor.resolveComponent("viewData");
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_u_datetime_picker2 + _easycom_viewData2 + _easycom_up_input2 + _easycom_up_button2 + _easycom_up_popup2)();
}
const _easycom_u_datetime_picker = () => "../../uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.js";
const _easycom_viewData = () => "../../components/viewData/viewData.js";
const _easycom_up_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_datetime_picker + _easycom_viewData + _easycom_up_input + _easycom_up_button + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let show = common_vendor.ref(false);
    let date = common_vendor.ref("2024-07");
    let handleChange = (e) => {
      show.value = false;
    };
    let alterShow = common_vendor.ref(false);
    let subData = common_vendor.ref({});
    const submit = async () => {
      alterShow.value = false;
      await api_apis.apiInsert(subData.value);
      api_apis.apiGetAll().then((res) => {
        respData.value = res.data;
        console.log(res.data);
        sortDate.value = Object.keys(res.data.list).sort((a, b) => {
          return new Date(b) - new Date(a);
        });
        console.log(sortDate.value);
      });
      subData.value = {};
    };
    let respData = common_vendor.ref({});
    let sortDate = common_vendor.ref();
    common_vendor.onLoad(() => {
      api_apis.apiGetAll().then((res) => {
        respData.value = res.data;
        console.log(res.data);
        sortDate.value = Object.keys(res.data.list).sort((a, b) => {
          return new Date(b) - new Date(a);
        });
        console.log(sortDate.value);
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_vendor.o(($event) => common_vendor.isRef(show) ? show.value = true : show = true),
        d: common_vendor.o(common_vendor.unref(handleChange)),
        e: common_vendor.o(($event) => common_vendor.isRef(show) ? show.value = false : show = false),
        f: common_vendor.o(($event) => common_vendor.isRef(show) ? show.value = false : show = false),
        g: common_vendor.o(($event) => common_vendor.isRef(date) ? date.value = $event : date = $event),
        h: common_vendor.p({
          show: common_vendor.unref(show),
          mode: "year-month",
          closeOnClickOverlay: true,
          modelValue: common_vendor.unref(date)
        }),
        i: common_vendor.t(common_vendor.unref(respData).last),
        j: common_vendor.t(common_vendor.unref(respData).current),
        k: common_vendor.f(common_vendor.unref(sortDate), (item, k0, i0) => {
          return {
            a: "1cf27b2a-1-" + i0,
            b: common_vendor.p({
              items: common_vendor.unref(respData).list[item],
              dateStr: item
            })
          };
        }),
        l: common_vendor.o(($event) => common_vendor.isRef(alterShow) ? alterShow.value = true : alterShow = true),
        m: common_vendor.o(($event) => common_vendor.unref(subData).content = $event),
        n: common_vendor.p({
          placeholder: "描述",
          prefixIcon: "edit-pen",
          prefixIconStyle: "font-size: 22px;color: #909399",
          modelValue: common_vendor.unref(subData).content
        }),
        o: common_vendor.o(($event) => common_vendor.unref(subData).size = $event),
        p: common_vendor.p({
          placeholder: "数量",
          prefixIcon: "list-dot",
          type: "digit",
          prefixIconStyle: "font-size: 22px;color: #909399",
          modelValue: common_vendor.unref(subData).size
        }),
        q: common_vendor.o(($event) => common_vendor.isRef(alterShow) ? alterShow.value = false : alterShow = false),
        r: common_vendor.p({
          text: "取消"
        }),
        s: common_vendor.o(($event) => submit()),
        t: common_vendor.p({
          text: "确定",
          color: "red"
        }),
        v: common_vendor.o(($event) => common_vendor.isRef(alterShow) ? alterShow.value = false : alterShow = false),
        w: common_vendor.o(($event) => common_vendor.isRef(alterShow) ? alterShow.value = true : alterShow = true),
        x: common_vendor.p({
          show: common_vendor.unref(alterShow),
          mode: "top",
          round: 10,
          overlayStyle: "rgba(255,255,255,0.3)"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
