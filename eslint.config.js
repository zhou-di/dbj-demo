import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      // 自动整理标签属性顺序
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION', // 1. 定义类: "is", "v-is"
            'LIST_RENDERING', // 2. 列表渲染: "v-for"
            'CONDITIONALS', // 3. 条件渲染: "v-if", "v-else-if", "v-else", "v-show", "v-cloak"
            'RENDER_MODIFIERS', // 4. 渲染修饰符: "v-once", "v-pre"
            'GLOBAL', // 5. 全局属性 (非Vue特有): "id"
            'UNIQUE', // 6. 唯一标识 (非Vue特有): "ref", "key"
            'SLOT', // 7. 插槽: "v-slot", "slot"
            'TWO_WAY_BINDING', // 8. 双向绑定: "v-model"
            'ATTR_STATIC', // 9. 普通静态属性 (非Vue特有): "class", "style", "src", "type", "alt" 等
            'ATTR_DYNAMIC', // 10. 动态绑定: "v-bind:prop", ":prop"
            'ATTR_SHORTHAND_BOOL', // 11. 简写布尔属性: "disabled", "checked"
            'OTHER_DIRECTIVES', // 12. 其他指令: "v-custom-directive"
            'EVENTS', // 13. 事件: "@click", "v-on"
            'CONTENT', // 14. 内容指令: "v-text", "v-html"
          ],
          alphabetical: false,
        },
      ],
      // 强制每行属性数量
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      // 强制自闭合标签
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      // 强制 script setup 中宏的执行顺序
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
          defineExposeLast: true, // 强制要求 defineExpose 必须在最后一行
        },
      ],
      // 关闭多单词组件名强制
      'vue/multi-word-component-names': 'off',
      // 允许 any 类型
      '@typescript-eslint/no-explicit-any': 'off',
      // 允许未使用的变量 (warn 而不是 error)
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]
