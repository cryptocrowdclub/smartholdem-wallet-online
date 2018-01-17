
// https://angular-md-color.com

app.config(($mdThemingProvider) => {
  $mdThemingProvider.definePalette('customPrimary', {
    '50': '#fd2958',
    '100': '#fd4681',
    '200': '#fd3e8b',
    '300': '#fd0c55',
    '400': '#ea0753',
    '500': '#d10554',
    '600': '#b80742',
    '700': '#9e0636',
    '800': '#850533',
    '900': '#6c022c',
    'A100': '#fea5cd',
    'A200': '#fea4bf',
    'A400': '#feb8ce',
    'A700': '#530321',
    'contrastDefaultColor': 'light'
  })

  $mdThemingProvider.definePalette('customAccent', {
    '50': '#181b1c',
    '100': '#24282a',
    '200': '#303537',
    '300': '#3c4245',
    '400': '#474f53',
    '500': '#535c60',
    '600': '#6b767c',
    '700': '#778389',
    '800': '#849095',
    '900': '#929ca1',
    'A100': '#6b767c',
    'A200': '#5f696e',
    'A400': '#535c60',
    'A700': '#a0a8ad'
  })

  $mdThemingProvider
    .theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
})
