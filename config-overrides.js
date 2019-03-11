const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
fixBabelImports('import', {
libraryName: 'antd',
libraryDirectory: 'es',
style: true,
}),
addLessLoader({
     javascriptEnabled: true,
     modifyVars: { 
     '@body-background':'#F1F0F0',
     '@layout-header-height':'68px',
     "@layout-header-background": "#FEFDFD",
     '@menu-dark-highlight-color': '#FC829C',
     '@menu-dark-item-active-bg':'#FEFDFD',
     '@menu-dark-color':'#1D1D1D',
     '@card-actions-background':'transparent',
    },
}),
);