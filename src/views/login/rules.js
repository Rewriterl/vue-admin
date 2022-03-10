export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('请正确填写密码'))
    } else {
      callback()
    }
  }
}
