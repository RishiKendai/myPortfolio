const Texts = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'BEM',
  'BOOTSTRAP',
  'MONGOOSE',
  'REACT',
  'GIT',
  'SCSS',
  'NODE JS',
  'REDUX',
  'SQL',
  'REST',
  'ES5/ES6',
  'MONGODB',
  'EXPRESS',
  'JQUERY',
];

var tagCloud = TagCloud('.sphere', Texts, {
  // Sphere radius in px
  radius: 230,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)]
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true,
});

// Giving color to each text in sphere
// var color = '#FF5733 ';
// document.querySelector('.sphere').style.color = color;
