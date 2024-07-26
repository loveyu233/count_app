"use strict";
const uni_modules_uviewPlus_components_uPicker_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewPlus_libs_function_test = require("../../libs/function/test.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-picker",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uPicker_props.props],
  data() {
    return {
      // 上一次选择的列索引
      lastIndex: [],
      // 索引值 ，对应picker-view的value
      innerIndex: [],
      // 各列的值
      innerColumns: [],
      // 上一次的变化列索引
      columnIndex: 0,
      showByClickInput: false
    };
  },
  watch: {
    // 监听默认索引的变化，重新设置对应的值
    defaultIndex: {
      immediate: true,
      handler(n) {
        this.setIndexs(n, true);
      }
    },
    // 监听columns参数的变化
    columns: {
      immediate: true,
      deep: true,
      handler(n) {
        this.setColumns(n);
      }
    }
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  computed: {
    inputLabel() {
      let items = this.innerColumns.map((item, index) => item[this.innerIndex[index]]);
      let res = [];
      items.forEach((element) => {
        res.push(element[this.keyName]);
      });
      return res;
    },
    inputValue() {
      let items = this.innerColumns.map((item, index) => item[this.innerIndex[index]]);
      let res = [];
      items.forEach((element) => {
        res.push(element["id"]);
      });
      return res;
    }
  },
  methods: {
    addUnit: uni_modules_uviewPlus_libs_function_index.addUnit,
    testArray: uni_modules_uviewPlus_libs_function_test.test.array,
    // 获取item需要显示的文字，判别为对象还是文本
    getItemText(item) {
      if (uni_modules_uviewPlus_libs_function_test.test.object(item)) {
        return item[this.keyName];
      } else {
        return item;
      }
    },
    // 关闭选择器
    closeHandler() {
      if (this.closeOnClickOverlay) {
        if (this.hasInput) {
          this.showByClickInput = false;
        }
        this.$emit("close");
      }
    },
    // 点击工具栏的取消按钮
    cancel() {
      if (this.hasInput) {
        this.showByClickInput = false;
      }
      this.$emit("cancel");
    },
    // 点击工具栏的确定按钮
    confirm() {
      this.$emit("update:modelValue", this.inputValue);
      if (this.hasInput) {
        this.showByClickInput = false;
      }
      this.$emit("confirm", {
        indexs: this.innerIndex,
        value: this.innerColumns.map((item, index) => item[this.innerIndex[index]]),
        values: this.innerColumns
      });
    },
    // 选择器某一列的数据发生变化时触发
    changeHandler(e) {
      const {
        value
      } = e.detail;
      let index = 0, columnIndex = 0;
      for (let i = 0; i < value.length; i++) {
        let item = value[i];
        if (item !== (this.lastIndex[i] || 0)) {
          columnIndex = i;
          index = item;
          break;
        }
      }
      this.columnIndex = columnIndex;
      const values = this.innerColumns;
      this.setLastIndex(value);
      this.setIndexs(value);
      this.$emit("update:modelValue", this.inputValue);
      this.$emit("change", {
        value: this.innerColumns.map((item, index2) => item[value[index2]]),
        index,
        indexs: value,
        // values为当前变化列的数组内容
        values,
        columnIndex
      });
    },
    // 设置index索引，此方法可被外部调用设置
    setIndexs(index, setLastIndex) {
      this.innerIndex = uni_modules_uviewPlus_libs_function_index.deepClone(index);
      if (setLastIndex) {
        this.setLastIndex(index);
      }
    },
    // 记录上一次的各列索引位置
    setLastIndex(index) {
      this.lastIndex = uni_modules_uviewPlus_libs_function_index.deepClone(index);
    },
    // 设置对应列选项的所有值
    setColumnValues(columnIndex, values) {
      this.innerColumns.splice(columnIndex, 1, values);
      this.setLastIndex(this.innerIndex.slice(0, columnIndex));
      let tmpIndex = uni_modules_uviewPlus_libs_function_index.deepClone(this.innerIndex);
      for (let i = 0; i < this.innerColumns.length; i++) {
        if (i > this.columnIndex) {
          tmpIndex[i] = 0;
        }
      }
      this.setIndexs(tmpIndex);
    },
    // 获取对应列的所有选项
    getColumnValues(columnIndex) {
      (async () => {
        await uni_modules_uviewPlus_libs_function_index.sleep();
      })();
      return this.innerColumns[columnIndex];
    },
    // 设置整体各列的columns的值
    setColumns(columns) {
      this.innerColumns = uni_modules_uviewPlus_libs_function_index.deepClone(columns);
      if (this.innerIndex.length === 0) {
        this.innerIndex = new Array(columns.length).fill(0);
      }
    },
    // 获取各列选中值对应的索引
    getIndexs() {
      return this.innerIndex;
    },
    // 获取各列选中的值
    getValues() {
      (async () => {
        await uni_modules_uviewPlus_libs_function_index.sleep();
      })();
      return this.innerColumns.map((item, index) => item[this.innerIndex[index]]);
    }
  }
};
if (!Array) {
  const _easycom_u_toolbar2 = common_vendor.resolveComponent("u-toolbar");
  const _easycom_u_loading_icon2 = common_vendor.resolveComponent("u-loading-icon");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_toolbar2 + _easycom_u_loading_icon2 + _easycom_u_popup2)();
}
const _easycom_u_toolbar = () => "../u-toolbar/u-toolbar.js";
const _easycom_u_loading_icon = () => "../u-loading-icon/u-loading-icon.js";
const _easycom_u_popup = () => "../u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_toolbar + _easycom_u_loading_icon + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.hasInput
  }, _ctx.hasInput ? {
    b: common_vendor.t($options.inputLabel && $options.inputLabel.length ? $options.inputLabel.join("/") : _ctx.placeholder),
    c: common_vendor.o(($event) => $data.showByClickInput = !$data.showByClickInput)
  } : {}, {
    d: _ctx.showToolbar
  }, _ctx.showToolbar ? {
    e: common_vendor.o($options.cancel),
    f: common_vendor.o($options.confirm),
    g: common_vendor.p({
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      title: _ctx.title
    })
  } : {}, {
    h: common_vendor.f($data.innerColumns, (item, index, i0) => {
      return common_vendor.e({
        a: $options.testArray(item)
      }, $options.testArray(item) ? {
        b: common_vendor.f(item, (item1, index1, i1) => {
          return {
            a: common_vendor.t($options.getItemText(item1)),
            b: index1,
            c: index1 === $data.innerIndex[index] ? "bold" : "normal"
          };
        }),
        c: $options.addUnit(_ctx.itemHeight),
        d: $options.addUnit(_ctx.itemHeight)
      } : {}, {
        e: index
      });
    }),
    i: `height: ${$options.addUnit(_ctx.itemHeight)}`,
    j: $data.innerIndex,
    k: _ctx.immediateChange,
    l: `${$options.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`,
    m: common_vendor.o((...args) => $options.changeHandler && $options.changeHandler(...args)),
    n: _ctx.loading
  }, _ctx.loading ? {
    o: common_vendor.p({
      mode: "circle"
    })
  } : {}, {
    p: common_vendor.o($options.closeHandler),
    q: common_vendor.p({
      show: _ctx.show || _ctx.hasInput && $data.showByClickInput,
      mode: _ctx.popupMode
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-91b05052"]]);
wx.createComponent(Component);
