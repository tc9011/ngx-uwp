// type: commit 的类型
// 参考：https://juejin.im/post/5afc5242f265da0b7f44bee4
// feat: 新特性
// fix: 修改问题
// docs: 文档修改
// style: 代码格式修改, 注意不是 css 修改
// refactor: 代码重构
// chore: 其他修改, 比如构建流程, 依赖管理.
// subject: commit 的概述, 建议符合  50/72 formatting
// ...

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ["feat", "fix", "docs", "style", "refactor", "chore", "publish"]
    ],
    'subject-case': [0, 'never'],
  },
}
