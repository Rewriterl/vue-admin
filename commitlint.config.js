module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  roles: {
    // type 的类型定义
    'type-enum': [
      // 当前验证的错误级别
      2,
      'always',
      // 泛型内容
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    // subject 不做大小写校验
    'subject-case': [0]
  }
}
