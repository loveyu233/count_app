"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 是否展示工具条
    show: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.toolbar.show
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.toolbar.cancelText
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.toolbar.confirmText
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.toolbar.cancelColor
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.toolbar.confirmColor
    },
    // 标题文字
    title: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.toolbar.title
    }
  }
});
exports.props = props;
