const webpack = require('webpack')
const path = require('path')

function resolveResource(name) {
  return path.resolve(__dirname, './src/assets/' + name)
}

/**
 * 只获取第一个匹配的规则
 * TODO: 待完善
 * @param {webpack.Configuration} config
 * @param {string} matchText
 * @returns {webpack.Configuration.module.rule}
 */
function getRule(config, matchText) {
  const oneOfRule = config.module.rules.find(rule => !!rule.oneOf)

  const sassRule = oneOfRule.oneOf.find(
    rule => rule.test instanceof RegExp && rule.test.test(matchText),
  )
  return sassRule
}

function configScss(config) {
  const sassRule = getRule(config, '.scss')

  sassRule.use = [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
      },
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [resolveResource('scss/_vars.scss')],
      },
    },
  ]
  return config
}

function configAlias(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
  }
  return config
}

module.exports = function(config, env) {
  configScss(config)
  configAlias(config)
  return config
}
