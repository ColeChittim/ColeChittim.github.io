/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
var game = game || {};
game.GameState = {
  Initialize: 0,
  Menu: 1,
  Tutorial: 2,
  Play: 3,
  GameOver: 4
};
game.SkinType = {
  Day: 0,
  Night: 1
};
game.TextAlignment = {
  Center: 0,
  Right: 1
};
var entities = entities || {};
entities.game = entities.game || {};
entities.game.Bootstrap = entities.game.Bootstrap || {};
entities.game.Bootstrap.Component = function() {
};
entities.game.Bootstrap.Component.prototype = Object.create(null);
entities.game.Bootstrap.Component.prototype.constructor = entities.game.Bootstrap.Component;
Object.defineProperties(entities.game.Bootstrap.Component.prototype, {
});
entities.game.Bootstrap.Component._size = 1;
entities.game.Bootstrap.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bootstrap.Component.prototype);
  return v;
};
entities.game.Bootstrap.Component._toPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bootstrap.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bootstrap.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bootstrap.Component.StorageView.prototype = Object.create(null);
entities.game.Bootstrap.Component.StorageView.prototype.constructor = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component._view = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component.StorageView._isSharedComp = entities.game.Bootstrap.Component._isSharedComp = false;
entities.game.Bootstrap.Component.StorageView._fromPtr = entities.game.Bootstrap.Component._fromPtr;
entities.game.Bootstrap.Component.StorageView._toPtr = entities.game.Bootstrap.Component._toPtr;
entities.game.Bootstrap.Component.StorageView._tempHeapPtr = entities.game.Bootstrap.Component._tempHeapPtr;
entities.game.Bootstrap.Component.StorageView._size = entities.game.Bootstrap.Component._size;
entities.game.Bootstrap.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bootstrap.Component.StorageView.prototype, {
});
entities.game.Bootstrap.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bootstrap.Component is a POD type, so a JavaScript side copy constructor entities.game.Bootstrap.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Bootstrap.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstrap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstrap.Component.cid = Module._ut_component_register_cid(/*entities.game.Bootstrap.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Bootstrap::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Bootstrap.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bootstrap.Component.cid; } } });
entities.game.GameOver = entities.game.GameOver || {};
entities.game.GameOver.Component = function() {
};
entities.game.GameOver.Component.prototype = Object.create(null);
entities.game.GameOver.Component.prototype.constructor = entities.game.GameOver.Component;
Object.defineProperties(entities.game.GameOver.Component.prototype, {
});
entities.game.GameOver.Component._size = 1;
entities.game.GameOver.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameOver.Component.prototype);
  return v;
};
entities.game.GameOver.Component._toPtr = function(ptr, v) {
};
entities.game.GameOver.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameOver.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameOver.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameOver.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameOver.Component.StorageView.prototype = Object.create(null);
entities.game.GameOver.Component.StorageView.prototype.constructor = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component._view = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component.StorageView._isSharedComp = entities.game.GameOver.Component._isSharedComp = false;
entities.game.GameOver.Component.StorageView._fromPtr = entities.game.GameOver.Component._fromPtr;
entities.game.GameOver.Component.StorageView._toPtr = entities.game.GameOver.Component._toPtr;
entities.game.GameOver.Component.StorageView._tempHeapPtr = entities.game.GameOver.Component._tempHeapPtr;
entities.game.GameOver.Component.StorageView._size = entities.game.GameOver.Component._size;
entities.game.GameOver.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameOver.Component.StorageView.prototype, {
});
entities.game.GameOver.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameOver.Component is a POD type, so a JavaScript side copy constructor entities.game.GameOver.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.GameOver.Component, { cid: { configurable: true, get: function() { delete entities.game.GameOver.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameOver.Component.cid = Module._ut_component_register_cid(/*entities.game.GameOver.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::GameOver::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.GameOver.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameOver.Component.cid; } } });
entities.game.GameScene = entities.game.GameScene || {};
entities.game.GameScene.Component = function() {
};
entities.game.GameScene.Component.prototype = Object.create(null);
entities.game.GameScene.Component.prototype.constructor = entities.game.GameScene.Component;
Object.defineProperties(entities.game.GameScene.Component.prototype, {
});
entities.game.GameScene.Component._size = 1;
entities.game.GameScene.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameScene.Component.prototype);
  return v;
};
entities.game.GameScene.Component._toPtr = function(ptr, v) {
};
entities.game.GameScene.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameScene.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameScene.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameScene.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameScene.Component.StorageView.prototype = Object.create(null);
entities.game.GameScene.Component.StorageView.prototype.constructor = entities.game.GameScene.Component.StorageView;
entities.game.GameScene.Component._view = entities.game.GameScene.Component.StorageView;
entities.game.GameScene.Component.StorageView._isSharedComp = entities.game.GameScene.Component._isSharedComp = false;
entities.game.GameScene.Component.StorageView._fromPtr = entities.game.GameScene.Component._fromPtr;
entities.game.GameScene.Component.StorageView._toPtr = entities.game.GameScene.Component._toPtr;
entities.game.GameScene.Component.StorageView._tempHeapPtr = entities.game.GameScene.Component._tempHeapPtr;
entities.game.GameScene.Component.StorageView._size = entities.game.GameScene.Component._size;
entities.game.GameScene.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameScene.Component.StorageView.prototype, {
});
entities.game.GameScene.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameScene.Component is a POD type, so a JavaScript side copy constructor entities.game.GameScene.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.GameScene.Component, { cid: { configurable: true, get: function() { delete entities.game.GameScene.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameScene.Component.cid = Module._ut_component_register_cid(/*entities.game.GameScene.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::GameScene::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.GameScene.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameScene.Component.cid; } } });
entities.game.Gem = entities.game.Gem || {};
entities.game.Gem.Component = function() {
};
entities.game.Gem.Component.prototype = Object.create(null);
entities.game.Gem.Component.prototype.constructor = entities.game.Gem.Component;
Object.defineProperties(entities.game.Gem.Component.prototype, {
});
entities.game.Gem.Component._size = 1;
entities.game.Gem.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Gem.Component.prototype);
  return v;
};
entities.game.Gem.Component._toPtr = function(ptr, v) {
};
entities.game.Gem.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Gem.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Gem.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Gem.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Gem.Component.StorageView.prototype = Object.create(null);
entities.game.Gem.Component.StorageView.prototype.constructor = entities.game.Gem.Component.StorageView;
entities.game.Gem.Component._view = entities.game.Gem.Component.StorageView;
entities.game.Gem.Component.StorageView._isSharedComp = entities.game.Gem.Component._isSharedComp = false;
entities.game.Gem.Component.StorageView._fromPtr = entities.game.Gem.Component._fromPtr;
entities.game.Gem.Component.StorageView._toPtr = entities.game.Gem.Component._toPtr;
entities.game.Gem.Component.StorageView._tempHeapPtr = entities.game.Gem.Component._tempHeapPtr;
entities.game.Gem.Component.StorageView._size = entities.game.Gem.Component._size;
entities.game.Gem.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Gem.Component.StorageView.prototype, {
});
entities.game.Gem.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Gem.Component is a POD type, so a JavaScript side copy constructor entities.game.Gem.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Gem.Component, { cid: { configurable: true, get: function() { delete entities.game.Gem.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Gem.Component.cid = Module._ut_component_register_cid(/*entities.game.Gem.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Gem::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Gem.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Gem.Component.cid; } } });
entities.game.Score = entities.game.Score || {};
entities.game.Score.Component = function() {
};
entities.game.Score.Component.prototype = Object.create(null);
entities.game.Score.Component.prototype.constructor = entities.game.Score.Component;
Object.defineProperties(entities.game.Score.Component.prototype, {
});
entities.game.Score.Component._size = 1;
entities.game.Score.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Score.Component.prototype);
  return v;
};
entities.game.Score.Component._toPtr = function(ptr, v) {
};
entities.game.Score.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Score.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Score.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Score.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Score.Component.StorageView.prototype = Object.create(null);
entities.game.Score.Component.StorageView.prototype.constructor = entities.game.Score.Component.StorageView;
entities.game.Score.Component._view = entities.game.Score.Component.StorageView;
entities.game.Score.Component.StorageView._isSharedComp = entities.game.Score.Component._isSharedComp = false;
entities.game.Score.Component.StorageView._fromPtr = entities.game.Score.Component._fromPtr;
entities.game.Score.Component.StorageView._toPtr = entities.game.Score.Component._toPtr;
entities.game.Score.Component.StorageView._tempHeapPtr = entities.game.Score.Component._tempHeapPtr;
entities.game.Score.Component.StorageView._size = entities.game.Score.Component._size;
entities.game.Score.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Score.Component.StorageView.prototype, {
});
entities.game.Score.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Score.Component is a POD type, so a JavaScript side copy constructor entities.game.Score.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Score.Component, { cid: { configurable: true, get: function() { delete entities.game.Score.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Score.Component.cid = Module._ut_component_register_cid(/*entities.game.Score.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Score::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Score.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Score.Component.cid; } } });
entities.game.ScoreParticles = entities.game.ScoreParticles || {};
entities.game.ScoreParticles.Component = function() {
};
entities.game.ScoreParticles.Component.prototype = Object.create(null);
entities.game.ScoreParticles.Component.prototype.constructor = entities.game.ScoreParticles.Component;
Object.defineProperties(entities.game.ScoreParticles.Component.prototype, {
});
entities.game.ScoreParticles.Component._size = 1;
entities.game.ScoreParticles.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ScoreParticles.Component.prototype);
  return v;
};
entities.game.ScoreParticles.Component._toPtr = function(ptr, v) {
};
entities.game.ScoreParticles.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ScoreParticles.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ScoreParticles.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ScoreParticles.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ScoreParticles.Component.StorageView.prototype = Object.create(null);
entities.game.ScoreParticles.Component.StorageView.prototype.constructor = entities.game.ScoreParticles.Component.StorageView;
entities.game.ScoreParticles.Component._view = entities.game.ScoreParticles.Component.StorageView;
entities.game.ScoreParticles.Component.StorageView._isSharedComp = entities.game.ScoreParticles.Component._isSharedComp = false;
entities.game.ScoreParticles.Component.StorageView._fromPtr = entities.game.ScoreParticles.Component._fromPtr;
entities.game.ScoreParticles.Component.StorageView._toPtr = entities.game.ScoreParticles.Component._toPtr;
entities.game.ScoreParticles.Component.StorageView._tempHeapPtr = entities.game.ScoreParticles.Component._tempHeapPtr;
entities.game.ScoreParticles.Component.StorageView._size = entities.game.ScoreParticles.Component._size;
entities.game.ScoreParticles.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ScoreParticles.Component.StorageView.prototype, {
});
entities.game.ScoreParticles.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ScoreParticles.Component is a POD type, so a JavaScript side copy constructor entities.game.ScoreParticles.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.ScoreParticles.Component, { cid: { configurable: true, get: function() { delete entities.game.ScoreParticles.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ScoreParticles.Component.cid = Module._ut_component_register_cid(/*entities.game.ScoreParticles.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::ScoreParticles::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.ScoreParticles.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ScoreParticles.Component.cid; } } });
entities.game.TapParticles = entities.game.TapParticles || {};
entities.game.TapParticles.Component = function() {
};
entities.game.TapParticles.Component.prototype = Object.create(null);
entities.game.TapParticles.Component.prototype.constructor = entities.game.TapParticles.Component;
Object.defineProperties(entities.game.TapParticles.Component.prototype, {
});
entities.game.TapParticles.Component._size = 1;
entities.game.TapParticles.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.TapParticles.Component.prototype);
  return v;
};
entities.game.TapParticles.Component._toPtr = function(ptr, v) {
};
entities.game.TapParticles.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.TapParticles.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.TapParticles.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.TapParticles.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.TapParticles.Component.StorageView.prototype = Object.create(null);
entities.game.TapParticles.Component.StorageView.prototype.constructor = entities.game.TapParticles.Component.StorageView;
entities.game.TapParticles.Component._view = entities.game.TapParticles.Component.StorageView;
entities.game.TapParticles.Component.StorageView._isSharedComp = entities.game.TapParticles.Component._isSharedComp = false;
entities.game.TapParticles.Component.StorageView._fromPtr = entities.game.TapParticles.Component._fromPtr;
entities.game.TapParticles.Component.StorageView._toPtr = entities.game.TapParticles.Component._toPtr;
entities.game.TapParticles.Component.StorageView._tempHeapPtr = entities.game.TapParticles.Component._tempHeapPtr;
entities.game.TapParticles.Component.StorageView._size = entities.game.TapParticles.Component._size;
entities.game.TapParticles.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.TapParticles.Component.StorageView.prototype, {
});
entities.game.TapParticles.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.TapParticles.Component is a POD type, so a JavaScript side copy constructor entities.game.TapParticles.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.TapParticles.Component, { cid: { configurable: true, get: function() { delete entities.game.TapParticles.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.TapParticles.Component.cid = Module._ut_component_register_cid(/*entities.game.TapParticles.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::TapParticles::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.TapParticles.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.TapParticles.Component.cid; } } });
entities.game.Tutorial = entities.game.Tutorial || {};
entities.game.Tutorial.Component = function() {
};
entities.game.Tutorial.Component.prototype = Object.create(null);
entities.game.Tutorial.Component.prototype.constructor = entities.game.Tutorial.Component;
Object.defineProperties(entities.game.Tutorial.Component.prototype, {
});
entities.game.Tutorial.Component._size = 1;
entities.game.Tutorial.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Tutorial.Component.prototype);
  return v;
};
entities.game.Tutorial.Component._toPtr = function(ptr, v) {
};
entities.game.Tutorial.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Tutorial.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Tutorial.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Tutorial.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Tutorial.Component.StorageView.prototype = Object.create(null);
entities.game.Tutorial.Component.StorageView.prototype.constructor = entities.game.Tutorial.Component.StorageView;
entities.game.Tutorial.Component._view = entities.game.Tutorial.Component.StorageView;
entities.game.Tutorial.Component.StorageView._isSharedComp = entities.game.Tutorial.Component._isSharedComp = false;
entities.game.Tutorial.Component.StorageView._fromPtr = entities.game.Tutorial.Component._fromPtr;
entities.game.Tutorial.Component.StorageView._toPtr = entities.game.Tutorial.Component._toPtr;
entities.game.Tutorial.Component.StorageView._tempHeapPtr = entities.game.Tutorial.Component._tempHeapPtr;
entities.game.Tutorial.Component.StorageView._size = entities.game.Tutorial.Component._size;
entities.game.Tutorial.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Tutorial.Component.StorageView.prototype, {
});
entities.game.Tutorial.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Tutorial.Component is a POD type, so a JavaScript side copy constructor entities.game.Tutorial.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Tutorial.Component, { cid: { configurable: true, get: function() { delete entities.game.Tutorial.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Tutorial.Component.cid = Module._ut_component_register_cid(/*entities.game.Tutorial.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Tutorial::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Tutorial.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Tutorial.Component.cid; } } });
game.AutoDestroy = function(arg0) {
  this._threshold = (+(arg0===undefined ? 0 : arg0));
};
game.AutoDestroy.prototype = Object.create(null);
game.AutoDestroy.prototype.constructor = game.AutoDestroy;
Object.defineProperties(game.AutoDestroy.prototype, {
  threshold: {
    get: function() { return this._threshold; },
    set: function(v) { this._threshold = (+(v===undefined ? 0 : v)); },
  },
});
game.AutoDestroy._size = 4;
game.AutoDestroy._fromPtr = function(ptr, v) {
  v = v || Object.create(game.AutoDestroy.prototype);
  v._threshold = HEAPF32[(ptr+0)>>2];
  return v;
};
game.AutoDestroy._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.threshold;
};
game.AutoDestroy._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.threshold;
};
game.AutoDestroy._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.AutoDestroy._toTempHeapPtr(ptr, v);
  return ptr;
};
game.AutoDestroy.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.AutoDestroy.StorageView.prototype = Object.create(null);
game.AutoDestroy.StorageView.prototype.constructor = game.AutoDestroy.StorageView;
game.AutoDestroy._view = game.AutoDestroy.StorageView;
game.AutoDestroy.StorageView._isSharedComp = game.AutoDestroy._isSharedComp = false;
game.AutoDestroy.StorageView._fromPtr = game.AutoDestroy._fromPtr;
game.AutoDestroy.StorageView._toPtr = game.AutoDestroy._toPtr;
game.AutoDestroy.StorageView._tempHeapPtr = game.AutoDestroy._tempHeapPtr;
game.AutoDestroy.StorageView._size = game.AutoDestroy._size;
game.AutoDestroy.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.AutoDestroy.StorageView.prototype, {
  threshold: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.AutoDestroy._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.AutoDestroy is a POD type, so a JavaScript side copy constructor game.AutoDestroy._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.AutoDestroy, { cid: { configurable: true, get: function() { delete game.AutoDestroy.cid; var offsetsPtr = 0, offsetsCount = 0; return game.AutoDestroy.cid = Module._ut_component_register_cid(/*game.AutoDestroy*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::AutoDestroy"*/, 0, 0); } } });
Object.defineProperties(game.AutoDestroy.StorageView, { cid: { configurable: true, get: function() { return game.AutoDestroy.cid; } } });
game.AutoDestroy.threshold = { $ofs:0, $t:"float", $c:game.AutoDestroy };
game.Boundary = function() {
};
game.Boundary.prototype = Object.create(null);
game.Boundary.prototype.constructor = game.Boundary;
Object.defineProperties(game.Boundary.prototype, {
});
game.Boundary._size = 1;
game.Boundary._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Boundary.prototype);
  return v;
};
game.Boundary._toPtr = function(ptr, v) {
};
game.Boundary._toTempHeapPtr = function(ptr, v) {
};
game.Boundary._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Boundary._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Boundary.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Boundary.StorageView.prototype = Object.create(null);
game.Boundary.StorageView.prototype.constructor = game.Boundary.StorageView;
game.Boundary._view = game.Boundary.StorageView;
game.Boundary.StorageView._isSharedComp = game.Boundary._isSharedComp = false;
game.Boundary.StorageView._fromPtr = game.Boundary._fromPtr;
game.Boundary.StorageView._toPtr = game.Boundary._toPtr;
game.Boundary.StorageView._tempHeapPtr = game.Boundary._tempHeapPtr;
game.Boundary.StorageView._size = game.Boundary._size;
game.Boundary.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Boundary.StorageView.prototype, {
});
game.Boundary._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Boundary is a POD type, so a JavaScript side copy constructor game.Boundary._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Boundary, { cid: { configurable: true, get: function() { delete game.Boundary.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Boundary.cid = Module._ut_component_register_cid(/*game.Boundary*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Boundary"*/, 0, 0); } } });
Object.defineProperties(game.Boundary.StorageView, { cid: { configurable: true, get: function() { return game.Boundary.cid; } } });
game.DestroyAfterDelay = function(arg0) {
  this._Delay = (+(arg0===undefined ? 0 : arg0));
};
game.DestroyAfterDelay.prototype = Object.create(null);
game.DestroyAfterDelay.prototype.constructor = game.DestroyAfterDelay;
Object.defineProperties(game.DestroyAfterDelay.prototype, {
  Delay: {
    get: function() { return this._Delay; },
    set: function(v) { this._Delay = (+(v===undefined ? 0 : v)); },
  },
});
game.DestroyAfterDelay._size = 4;
game.DestroyAfterDelay._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DestroyAfterDelay.prototype);
  v._Delay = HEAPF32[(ptr+0)>>2];
  return v;
};
game.DestroyAfterDelay._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Delay;
};
game.DestroyAfterDelay._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Delay;
};
game.DestroyAfterDelay._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.DestroyAfterDelay._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DestroyAfterDelay.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DestroyAfterDelay.StorageView.prototype = Object.create(null);
game.DestroyAfterDelay.StorageView.prototype.constructor = game.DestroyAfterDelay.StorageView;
game.DestroyAfterDelay._view = game.DestroyAfterDelay.StorageView;
game.DestroyAfterDelay.StorageView._isSharedComp = game.DestroyAfterDelay._isSharedComp = false;
game.DestroyAfterDelay.StorageView._fromPtr = game.DestroyAfterDelay._fromPtr;
game.DestroyAfterDelay.StorageView._toPtr = game.DestroyAfterDelay._toPtr;
game.DestroyAfterDelay.StorageView._tempHeapPtr = game.DestroyAfterDelay._tempHeapPtr;
game.DestroyAfterDelay.StorageView._size = game.DestroyAfterDelay._size;
game.DestroyAfterDelay.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.DestroyAfterDelay.StorageView.prototype, {
  Delay: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.DestroyAfterDelay._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DestroyAfterDelay is a POD type, so a JavaScript side copy constructor game.DestroyAfterDelay._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.DestroyAfterDelay, { cid: { configurable: true, get: function() { delete game.DestroyAfterDelay.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DestroyAfterDelay.cid = Module._ut_component_register_cid(/*game.DestroyAfterDelay*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::DestroyAfterDelay"*/, 0, 0); } } });
Object.defineProperties(game.DestroyAfterDelay.StorageView, { cid: { configurable: true, get: function() { return game.DestroyAfterDelay.cid; } } });
game.DestroyAfterDelay.Delay = { $ofs:0, $t:"float", $c:game.DestroyAfterDelay };
game.GameConfigTextValue = function(arg0) {
  this._key = (arg0 === undefined ? '' : arg0);
};
game.GameConfigTextValue.prototype = Object.create(null);
game.GameConfigTextValue.prototype.constructor = game.GameConfigTextValue;
Object.defineProperties(game.GameConfigTextValue.prototype, {
  key: {
    get: function() { return this._key; },
    set: function(v) { this._key = (v === undefined ? '' : v); },
  },
});
game.GameConfigTextValue._size = 8;
game.GameConfigTextValue._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameConfigTextValue.prototype);
  v._key = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  return v;
};
game.GameConfigTextValue._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.key);
};
game.GameConfigTextValue._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.key);
};
game.GameConfigTextValue._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.GameConfigTextValue._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameConfigTextValue.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameConfigTextValue.StorageView.prototype = Object.create(null);
game.GameConfigTextValue.StorageView.prototype.constructor = game.GameConfigTextValue.StorageView;
game.GameConfigTextValue._view = game.GameConfigTextValue.StorageView;
game.GameConfigTextValue.StorageView._isSharedComp = game.GameConfigTextValue._isSharedComp = false;
game.GameConfigTextValue.StorageView._fromPtr = game.GameConfigTextValue._fromPtr;
game.GameConfigTextValue.StorageView._toPtr = game.GameConfigTextValue._toPtr;
game.GameConfigTextValue.StorageView._tempHeapPtr = game.GameConfigTextValue._tempHeapPtr;
game.GameConfigTextValue.StorageView._size = game.GameConfigTextValue._size;
game.GameConfigTextValue.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.GameConfigTextValue.StorageView.prototype, {
  key: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
});
game.GameConfigTextValue._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
game.GameConfigTextValue._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
};
Object.defineProperties(game.GameConfigTextValue, { cid: { configurable: true, get: function() { delete game.GameConfigTextValue.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameConfigTextValue.cid = Module._ut_component_register_cid(/*game.GameConfigTextValue*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::GameConfigTextValue"*/, ut.DestructorFn._cb.token_for(game.GameConfigTextValue._dtorFn), ut.CopyFn._cb.token_for(game.GameConfigTextValue._copyFn)); } } });
Object.defineProperties(game.GameConfigTextValue.StorageView, { cid: { configurable: true, get: function() { return game.GameConfigTextValue.cid; } } });
game.GameConfigTextValue.key = { $ofs:0, $t:"System.String", $c:game.GameConfigTextValue };
game.Gravity = function(arg0) {
  this._gravity = new ut.Math.Vector2(); if ((arg0) !== undefined) { this._gravity.copy(arg0); };
};
game.Gravity.prototype = Object.create(null);
game.Gravity.prototype.constructor = game.Gravity;
Object.defineProperties(game.Gravity.prototype, {
  gravity: {
    get: function() { return this._gravity; },
    set: function(v) { this._gravity.copy(v); },
  },
});
game.Gravity._size = 8;
game.Gravity._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Gravity.prototype);
  v._gravity = ut._utils.vec2FromHeap(null, ptr+0);
  return v;
};
game.Gravity._toPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.gravity, ptr+0);
};
game.Gravity._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.gravity, ptr+0);
};
game.Gravity._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Gravity._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Gravity.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Gravity.StorageView.prototype = Object.create(null);
game.Gravity.StorageView.prototype.constructor = game.Gravity.StorageView;
game.Gravity._view = game.Gravity.StorageView;
game.Gravity.StorageView._isSharedComp = game.Gravity._isSharedComp = false;
game.Gravity.StorageView._fromPtr = game.Gravity._fromPtr;
game.Gravity.StorageView._toPtr = game.Gravity._toPtr;
game.Gravity.StorageView._tempHeapPtr = game.Gravity._tempHeapPtr;
game.Gravity.StorageView._size = game.Gravity._size;
game.Gravity.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Gravity.StorageView.prototype, {
  gravity: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+0); },
  },
});
game.Gravity._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Gravity is a POD type, so a JavaScript side copy constructor game.Gravity._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Gravity, { cid: { configurable: true, get: function() { delete game.Gravity.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Gravity.cid = Module._ut_component_register_cid(/*game.Gravity*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Gravity"*/, 0, 0); } } });
Object.defineProperties(game.Gravity.StorageView, { cid: { configurable: true, get: function() { return game.Gravity.cid; } } });
game.Gravity.gravity = { $ofs:0, $t:"ut.Math.Vector2", $c:game.Gravity };
game.Gravity.gravity.y = { $ofs:4, $t:"float", $c:game.Gravity };
game.Gravity.gravity.x = { $ofs:0, $t:"float", $c:game.Gravity };
game.NumberTextRenderer = function(arg0, arg1, arg2, arg3, arg4) {
  this._value = (arg0|0);
  this._spacing = (+(arg1===undefined ? 0 : arg1));
  this._alignment = (arg2|0);
  this._renderers = (arg3 === undefined ? new Array() : ((arg3 instanceof Array) ? arg3 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._characters = (arg4 === undefined ? new Array() : ((arg4 instanceof Array) ? arg4 : (function() { throw new Error('Assigning non-array to array field'); })()));
};
game.NumberTextRenderer.prototype = Object.create(null);
game.NumberTextRenderer.prototype.constructor = game.NumberTextRenderer;
Object.defineProperties(game.NumberTextRenderer.prototype, {
  value: {
    get: function() { return this._value; },
    set: function(v) { this._value = (v|0); },
  },
  spacing: {
    get: function() { return this._spacing; },
    set: function(v) { this._spacing = (+(v===undefined ? 0 : v)); },
  },
  alignment: {
    get: function() { return this._alignment; },
    set: function(v) { this._alignment = (v|0); },
  },
  renderers: {
    get: function() { return this._renderers; },
    set: function(v) { this._renderers = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  characters: {
    get: function() { return this._characters; },
    set: function(v) { this._characters = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
});
game.NumberTextRenderer._size = 36;
game.NumberTextRenderer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.NumberTextRenderer.prototype);
  v._value = HEAP32[(ptr+0)>>2];
  v._spacing = HEAPF32[(ptr+4)>>2];
  v._alignment = HEAP32[(ptr+8)>>2];
  v._renderers = ut.nativeBufferToJsArray(ptr+12, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._characters = ut.nativeBufferToJsArray(ptr+24, 8, function(p) { return ut.Entity._fromPtr(p); });
  return v;
};
game.NumberTextRenderer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.value;
  HEAPF32[(ptr+4)>>2] = v.spacing;
  HEAP32[(ptr+8)>>2] = v.alignment;
  ut.jsArrayToExistingNativeBuffer_pod(v.renderers, ptr+12, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.jsArrayToExistingNativeBuffer_pod(v.characters, ptr+24, 8, function(p, v) { ut.Entity._toPtr(p, v); });
};
game.NumberTextRenderer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.value;
  HEAPF32[(ptr+4)>>2] = v.spacing;
  HEAP32[(ptr+8)>>2] = v.alignment;
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.renderers, ptr+12, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.characters, ptr+24, 8, function(p, v) { ut.Entity._toPtr(p, v); });
};
game.NumberTextRenderer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(36);
  if (v) game.NumberTextRenderer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.NumberTextRenderer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.NumberTextRenderer.StorageView.prototype = Object.create(null);
game.NumberTextRenderer.StorageView.prototype.constructor = game.NumberTextRenderer.StorageView;
game.NumberTextRenderer._view = game.NumberTextRenderer.StorageView;
game.NumberTextRenderer.StorageView._isSharedComp = game.NumberTextRenderer._isSharedComp = false;
game.NumberTextRenderer.StorageView._fromPtr = game.NumberTextRenderer._fromPtr;
game.NumberTextRenderer.StorageView._toPtr = game.NumberTextRenderer._toPtr;
game.NumberTextRenderer.StorageView._tempHeapPtr = game.NumberTextRenderer._tempHeapPtr;
game.NumberTextRenderer.StorageView._size = game.NumberTextRenderer._size;
game.NumberTextRenderer.StorageView.prototype.$advance = function() {
  this._ptr += 36;
};
Object.defineProperties(game.NumberTextRenderer.StorageView.prototype, {
  value: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  spacing: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  alignment: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
  renderers: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+12, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+12, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  characters: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+24, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+24, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
});
game.NumberTextRenderer._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 12);
  Module._ut_nativebuffer_pod_placement_delete(ptr + 24);
};
game.NumberTextRenderer._copyFn = function copy(src, dst) {
  for(var i = 0; i < 4; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+4+i] = HEAPU8[src+4+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  Module._ut_nativebuffer_pod_copy_construct(dst + 12, src + 12, 8);
  Module._ut_nativebuffer_pod_copy_construct(dst + 24, src + 24, 8);
};
Object.defineProperties(game.NumberTextRenderer, { cid: { configurable: true, get: function() { delete game.NumberTextRenderer.cid; var offsetsPtr = ut.tempHeapPtrI32([-13,-25]); var offsetsCount = 2; return game.NumberTextRenderer.cid = Module._ut_component_register_cid(/*game.NumberTextRenderer*/ 36, 4, 0, offsetsPtr, offsetsCount, 0/*"game::NumberTextRenderer"*/, ut.DestructorFn._cb.token_for(game.NumberTextRenderer._dtorFn), ut.CopyFn._cb.token_for(game.NumberTextRenderer._copyFn)); } } });
Object.defineProperties(game.NumberTextRenderer.StorageView, { cid: { configurable: true, get: function() { return game.NumberTextRenderer.cid; } } });
game.NumberTextRenderer.value = { $ofs:0, $t:"int32_t", $c:game.NumberTextRenderer };
game.NumberTextRenderer.spacing = { $ofs:4, $t:"float", $c:game.NumberTextRenderer };
game.NumberTextRenderer.alignment = { $ofs:8, $t:"game.TextAlignment", $c:game.NumberTextRenderer };
game.NumberTextRenderer.renderers = { $ofs:12, $t:"ut.DynamicArray`1", $c:game.NumberTextRenderer };
game.NumberTextRenderer.characters = { $ofs:24, $t:"ut.DynamicArray`1", $c:game.NumberTextRenderer };
game.PlayerInput = function(arg0) {
  this._force = (+(arg0===undefined ? 0 : arg0));
};
game.PlayerInput.prototype = Object.create(null);
game.PlayerInput.prototype.constructor = game.PlayerInput;
Object.defineProperties(game.PlayerInput.prototype, {
  force: {
    get: function() { return this._force; },
    set: function(v) { this._force = (+(v===undefined ? 0 : v)); },
  },
});
game.PlayerInput._size = 4;
game.PlayerInput._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PlayerInput.prototype);
  v._force = HEAPF32[(ptr+0)>>2];
  return v;
};
game.PlayerInput._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.force;
};
game.PlayerInput._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.force;
};
game.PlayerInput._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.PlayerInput._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PlayerInput.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PlayerInput.StorageView.prototype = Object.create(null);
game.PlayerInput.StorageView.prototype.constructor = game.PlayerInput.StorageView;
game.PlayerInput._view = game.PlayerInput.StorageView;
game.PlayerInput.StorageView._isSharedComp = game.PlayerInput._isSharedComp = false;
game.PlayerInput.StorageView._fromPtr = game.PlayerInput._fromPtr;
game.PlayerInput.StorageView._toPtr = game.PlayerInput._toPtr;
game.PlayerInput.StorageView._tempHeapPtr = game.PlayerInput._tempHeapPtr;
game.PlayerInput.StorageView._size = game.PlayerInput._size;
game.PlayerInput.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.PlayerInput.StorageView.prototype, {
  force: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.PlayerInput._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PlayerInput is a POD type, so a JavaScript side copy constructor game.PlayerInput._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.PlayerInput, { cid: { configurable: true, get: function() { delete game.PlayerInput.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayerInput.cid = Module._ut_component_register_cid(/*game.PlayerInput*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::PlayerInput"*/, 0, 0); } } });
Object.defineProperties(game.PlayerInput.StorageView, { cid: { configurable: true, get: function() { return game.PlayerInput.cid; } } });
game.PlayerInput.force = { $ofs:0, $t:"float", $c:game.PlayerInput };
game.RepeatingBackground = function(arg0, arg1) {
  this._threshold = (+(arg0===undefined ? 0 : arg0));
  this._distance = (+(arg1===undefined ? 0 : arg1));
};
game.RepeatingBackground.prototype = Object.create(null);
game.RepeatingBackground.prototype.constructor = game.RepeatingBackground;
Object.defineProperties(game.RepeatingBackground.prototype, {
  threshold: {
    get: function() { return this._threshold; },
    set: function(v) { this._threshold = (+(v===undefined ? 0 : v)); },
  },
  distance: {
    get: function() { return this._distance; },
    set: function(v) { this._distance = (+(v===undefined ? 0 : v)); },
  },
});
game.RepeatingBackground._size = 8;
game.RepeatingBackground._fromPtr = function(ptr, v) {
  v = v || Object.create(game.RepeatingBackground.prototype);
  v._threshold = HEAPF32[(ptr+0)>>2];
  v._distance = HEAPF32[(ptr+4)>>2];
  return v;
};
game.RepeatingBackground._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.threshold;
  HEAPF32[(ptr+4)>>2] = v.distance;
};
game.RepeatingBackground._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.threshold;
  HEAPF32[(ptr+4)>>2] = v.distance;
};
game.RepeatingBackground._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.RepeatingBackground._toTempHeapPtr(ptr, v);
  return ptr;
};
game.RepeatingBackground.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.RepeatingBackground.StorageView.prototype = Object.create(null);
game.RepeatingBackground.StorageView.prototype.constructor = game.RepeatingBackground.StorageView;
game.RepeatingBackground._view = game.RepeatingBackground.StorageView;
game.RepeatingBackground.StorageView._isSharedComp = game.RepeatingBackground._isSharedComp = false;
game.RepeatingBackground.StorageView._fromPtr = game.RepeatingBackground._fromPtr;
game.RepeatingBackground.StorageView._toPtr = game.RepeatingBackground._toPtr;
game.RepeatingBackground.StorageView._tempHeapPtr = game.RepeatingBackground._tempHeapPtr;
game.RepeatingBackground.StorageView._size = game.RepeatingBackground._size;
game.RepeatingBackground.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.RepeatingBackground.StorageView.prototype, {
  threshold: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  distance: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.RepeatingBackground._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.RepeatingBackground is a POD type, so a JavaScript side copy constructor game.RepeatingBackground._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.RepeatingBackground, { cid: { configurable: true, get: function() { delete game.RepeatingBackground.cid; var offsetsPtr = 0, offsetsCount = 0; return game.RepeatingBackground.cid = Module._ut_component_register_cid(/*game.RepeatingBackground*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::RepeatingBackground"*/, 0, 0); } } });
Object.defineProperties(game.RepeatingBackground.StorageView, { cid: { configurable: true, get: function() { return game.RepeatingBackground.cid; } } });
game.RepeatingBackground.threshold = { $ofs:0, $t:"float", $c:game.RepeatingBackground };
game.RepeatingBackground.distance = { $ofs:4, $t:"float", $c:game.RepeatingBackground };
game.Reskinnable = function(arg0) {
  this._theme = (arg0|0);
};
game.Reskinnable.prototype = Object.create(null);
game.Reskinnable.prototype.constructor = game.Reskinnable;
Object.defineProperties(game.Reskinnable.prototype, {
  theme: {
    get: function() { return this._theme; },
    set: function(v) { this._theme = (v|0); },
  },
});
game.Reskinnable._size = 4;
game.Reskinnable._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Reskinnable.prototype);
  v._theme = HEAP32[(ptr+0)>>2];
  return v;
};
game.Reskinnable._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.theme;
};
game.Reskinnable._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.theme;
};
game.Reskinnable._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Reskinnable._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Reskinnable.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Reskinnable.StorageView.prototype = Object.create(null);
game.Reskinnable.StorageView.prototype.constructor = game.Reskinnable.StorageView;
game.Reskinnable._view = game.Reskinnable.StorageView;
game.Reskinnable.StorageView._isSharedComp = game.Reskinnable._isSharedComp = false;
game.Reskinnable.StorageView._fromPtr = game.Reskinnable._fromPtr;
game.Reskinnable.StorageView._toPtr = game.Reskinnable._toPtr;
game.Reskinnable.StorageView._tempHeapPtr = game.Reskinnable._tempHeapPtr;
game.Reskinnable.StorageView._size = game.Reskinnable._size;
game.Reskinnable.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Reskinnable.StorageView.prototype, {
  theme: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.Reskinnable._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Reskinnable is a POD type, so a JavaScript side copy constructor game.Reskinnable._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Reskinnable, { cid: { configurable: true, get: function() { delete game.Reskinnable.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Reskinnable.cid = Module._ut_component_register_cid(/*game.Reskinnable*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Reskinnable"*/, 0, 0); } } });
Object.defineProperties(game.Reskinnable.StorageView, { cid: { configurable: true, get: function() { return game.Reskinnable.cid; } } });
game.Reskinnable.theme = { $ofs:0, $t:"game.SkinType", $c:game.Reskinnable };
game.ScorePoint = function(arg0) {
  this._value = (arg0|0);
};
game.ScorePoint.prototype = Object.create(null);
game.ScorePoint.prototype.constructor = game.ScorePoint;
Object.defineProperties(game.ScorePoint.prototype, {
  value: {
    get: function() { return this._value; },
    set: function(v) { this._value = (v|0); },
  },
});
game.ScorePoint._size = 4;
game.ScorePoint._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScorePoint.prototype);
  v._value = HEAP32[(ptr+0)>>2];
  return v;
};
game.ScorePoint._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.value;
};
game.ScorePoint._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.value;
};
game.ScorePoint._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.ScorePoint._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScorePoint.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScorePoint.StorageView.prototype = Object.create(null);
game.ScorePoint.StorageView.prototype.constructor = game.ScorePoint.StorageView;
game.ScorePoint._view = game.ScorePoint.StorageView;
game.ScorePoint.StorageView._isSharedComp = game.ScorePoint._isSharedComp = false;
game.ScorePoint.StorageView._fromPtr = game.ScorePoint._fromPtr;
game.ScorePoint.StorageView._toPtr = game.ScorePoint._toPtr;
game.ScorePoint.StorageView._tempHeapPtr = game.ScorePoint._tempHeapPtr;
game.ScorePoint.StorageView._size = game.ScorePoint._size;
game.ScorePoint.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.ScorePoint.StorageView.prototype, {
  value: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.ScorePoint._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ScorePoint is a POD type, so a JavaScript side copy constructor game.ScorePoint._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ScorePoint, { cid: { configurable: true, get: function() { delete game.ScorePoint.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ScorePoint.cid = Module._ut_component_register_cid(/*game.ScorePoint*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ScorePoint"*/, 0, 0); } } });
Object.defineProperties(game.ScorePoint.StorageView, { cid: { configurable: true, get: function() { return game.ScorePoint.cid; } } });
game.ScorePoint.value = { $ofs:0, $t:"int32_t", $c:game.ScorePoint };
game.Scroller = function() {
};
game.Scroller.prototype = Object.create(null);
game.Scroller.prototype.constructor = game.Scroller;
Object.defineProperties(game.Scroller.prototype, {
});
game.Scroller._size = 1;
game.Scroller._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Scroller.prototype);
  return v;
};
game.Scroller._toPtr = function(ptr, v) {
};
game.Scroller._toTempHeapPtr = function(ptr, v) {
};
game.Scroller._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Scroller._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Scroller.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Scroller.StorageView.prototype = Object.create(null);
game.Scroller.StorageView.prototype.constructor = game.Scroller.StorageView;
game.Scroller._view = game.Scroller.StorageView;
game.Scroller.StorageView._isSharedComp = game.Scroller._isSharedComp = false;
game.Scroller.StorageView._fromPtr = game.Scroller._fromPtr;
game.Scroller.StorageView._toPtr = game.Scroller._toPtr;
game.Scroller.StorageView._tempHeapPtr = game.Scroller._tempHeapPtr;
game.Scroller.StorageView._size = game.Scroller._size;
game.Scroller.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Scroller.StorageView.prototype, {
});
game.Scroller._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Scroller is a POD type, so a JavaScript side copy constructor game.Scroller._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Scroller, { cid: { configurable: true, get: function() { delete game.Scroller.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Scroller.cid = Module._ut_component_register_cid(/*game.Scroller*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Scroller"*/, 0, 0); } } });
Object.defineProperties(game.Scroller.StorageView, { cid: { configurable: true, get: function() { return game.Scroller.cid; } } });
game.ShakeAnimation = function(arg0, arg1, arg2, arg3) {
  this._DefaultX = (+(arg0===undefined ? 0 : arg0));
  this._DefaultY = (+(arg1===undefined ? 0 : arg1));
  this._DefaultZ = (+(arg2===undefined ? 0 : arg2));
  this._IsDefaultPositionSet = (arg3 ? true : false);
};
game.ShakeAnimation.prototype = Object.create(null);
game.ShakeAnimation.prototype.constructor = game.ShakeAnimation;
Object.defineProperties(game.ShakeAnimation.prototype, {
  DefaultX: {
    get: function() { return this._DefaultX; },
    set: function(v) { this._DefaultX = (+(v===undefined ? 0 : v)); },
  },
  DefaultY: {
    get: function() { return this._DefaultY; },
    set: function(v) { this._DefaultY = (+(v===undefined ? 0 : v)); },
  },
  DefaultZ: {
    get: function() { return this._DefaultZ; },
    set: function(v) { this._DefaultZ = (+(v===undefined ? 0 : v)); },
  },
  IsDefaultPositionSet: {
    get: function() { return this._IsDefaultPositionSet; },
    set: function(v) { this._IsDefaultPositionSet = (v ? true : false); },
  },
});
game.ShakeAnimation._size = 16;
game.ShakeAnimation._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShakeAnimation.prototype);
  v._DefaultX = HEAPF32[(ptr+0)>>2];
  v._DefaultY = HEAPF32[(ptr+4)>>2];
  v._DefaultZ = HEAPF32[(ptr+8)>>2];
  v._IsDefaultPositionSet = (HEAP8[ptr+12]?true:false);
  return v;
};
game.ShakeAnimation._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.DefaultX;
  HEAPF32[(ptr+4)>>2] = v.DefaultY;
  HEAPF32[(ptr+8)>>2] = v.DefaultZ;
  HEAP8[ptr+12] = (v.IsDefaultPositionSet)?1:0;
};
game.ShakeAnimation._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.DefaultX;
  HEAPF32[(ptr+4)>>2] = v.DefaultY;
  HEAPF32[(ptr+8)>>2] = v.DefaultZ;
  HEAP8[ptr+12] = (v.IsDefaultPositionSet)?1:0;
};
game.ShakeAnimation._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.ShakeAnimation._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShakeAnimation.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShakeAnimation.StorageView.prototype = Object.create(null);
game.ShakeAnimation.StorageView.prototype.constructor = game.ShakeAnimation.StorageView;
game.ShakeAnimation._view = game.ShakeAnimation.StorageView;
game.ShakeAnimation.StorageView._isSharedComp = game.ShakeAnimation._isSharedComp = false;
game.ShakeAnimation.StorageView._fromPtr = game.ShakeAnimation._fromPtr;
game.ShakeAnimation.StorageView._toPtr = game.ShakeAnimation._toPtr;
game.ShakeAnimation.StorageView._tempHeapPtr = game.ShakeAnimation._tempHeapPtr;
game.ShakeAnimation.StorageView._size = game.ShakeAnimation._size;
game.ShakeAnimation.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.ShakeAnimation.StorageView.prototype, {
  DefaultX: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  DefaultY: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  DefaultZ: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  IsDefaultPositionSet: {
    get: function() { return (HEAP8[this._ptr+12]?true:false); },
    set: function(v) { HEAP8[this._ptr+12] = (v)?1:0; },
  },
});
game.ShakeAnimation._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShakeAnimation is a POD type, so a JavaScript side copy constructor game.ShakeAnimation._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ShakeAnimation, { cid: { configurable: true, get: function() { delete game.ShakeAnimation.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ShakeAnimation.cid = Module._ut_component_register_cid(/*game.ShakeAnimation*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ShakeAnimation"*/, 0, 0); } } });
Object.defineProperties(game.ShakeAnimation.StorageView, { cid: { configurable: true, get: function() { return game.ShakeAnimation.cid; } } });
game.ShakeAnimation.DefaultX = { $ofs:0, $t:"float", $c:game.ShakeAnimation };
game.ShakeAnimation.DefaultY = { $ofs:4, $t:"float", $c:game.ShakeAnimation };
game.ShakeAnimation.DefaultZ = { $ofs:8, $t:"float", $c:game.ShakeAnimation };
game.ShakeAnimation.IsDefaultPositionSet = { $ofs:12, $t:"bool", $c:game.ShakeAnimation };
game.ShakeAnimationPlayer = function(arg0, arg1, arg2, arg3, arg4) {
  this._Duration = (+(arg0===undefined ? 0 : arg0));
  this._ShakeRadiusX = (+(arg1===undefined ? 0 : arg1));
  this._ShakeRadiusY = (+(arg2===undefined ? 0 : arg2));
  this._Timer = (+(arg3===undefined ? 0 : arg3));
  this._StartDelay = (+(arg4===undefined ? 0 : arg4));
};
game.ShakeAnimationPlayer.prototype = Object.create(null);
game.ShakeAnimationPlayer.prototype.constructor = game.ShakeAnimationPlayer;
Object.defineProperties(game.ShakeAnimationPlayer.prototype, {
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  ShakeRadiusX: {
    get: function() { return this._ShakeRadiusX; },
    set: function(v) { this._ShakeRadiusX = (+(v===undefined ? 0 : v)); },
  },
  ShakeRadiusY: {
    get: function() { return this._ShakeRadiusY; },
    set: function(v) { this._ShakeRadiusY = (+(v===undefined ? 0 : v)); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  StartDelay: {
    get: function() { return this._StartDelay; },
    set: function(v) { this._StartDelay = (+(v===undefined ? 0 : v)); },
  },
});
game.ShakeAnimationPlayer._size = 20;
game.ShakeAnimationPlayer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShakeAnimationPlayer.prototype);
  v._Duration = HEAPF32[(ptr+0)>>2];
  v._ShakeRadiusX = HEAPF32[(ptr+4)>>2];
  v._ShakeRadiusY = HEAPF32[(ptr+8)>>2];
  v._Timer = HEAPF32[(ptr+12)>>2];
  v._StartDelay = HEAPF32[(ptr+16)>>2];
  return v;
};
game.ShakeAnimationPlayer._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAPF32[(ptr+4)>>2] = v.ShakeRadiusX;
  HEAPF32[(ptr+8)>>2] = v.ShakeRadiusY;
  HEAPF32[(ptr+12)>>2] = v.Timer;
  HEAPF32[(ptr+16)>>2] = v.StartDelay;
};
game.ShakeAnimationPlayer._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAPF32[(ptr+4)>>2] = v.ShakeRadiusX;
  HEAPF32[(ptr+8)>>2] = v.ShakeRadiusY;
  HEAPF32[(ptr+12)>>2] = v.Timer;
  HEAPF32[(ptr+16)>>2] = v.StartDelay;
};
game.ShakeAnimationPlayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.ShakeAnimationPlayer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShakeAnimationPlayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShakeAnimationPlayer.StorageView.prototype = Object.create(null);
game.ShakeAnimationPlayer.StorageView.prototype.constructor = game.ShakeAnimationPlayer.StorageView;
game.ShakeAnimationPlayer._view = game.ShakeAnimationPlayer.StorageView;
game.ShakeAnimationPlayer.StorageView._isSharedComp = game.ShakeAnimationPlayer._isSharedComp = false;
game.ShakeAnimationPlayer.StorageView._fromPtr = game.ShakeAnimationPlayer._fromPtr;
game.ShakeAnimationPlayer.StorageView._toPtr = game.ShakeAnimationPlayer._toPtr;
game.ShakeAnimationPlayer.StorageView._tempHeapPtr = game.ShakeAnimationPlayer._tempHeapPtr;
game.ShakeAnimationPlayer.StorageView._size = game.ShakeAnimationPlayer._size;
game.ShakeAnimationPlayer.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.ShakeAnimationPlayer.StorageView.prototype, {
  Duration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  ShakeRadiusX: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  ShakeRadiusY: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  StartDelay: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
});
game.ShakeAnimationPlayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShakeAnimationPlayer is a POD type, so a JavaScript side copy constructor game.ShakeAnimationPlayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ShakeAnimationPlayer, { cid: { configurable: true, get: function() { delete game.ShakeAnimationPlayer.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ShakeAnimationPlayer.cid = Module._ut_component_register_cid(/*game.ShakeAnimationPlayer*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ShakeAnimationPlayer"*/, 0, 0); } } });
Object.defineProperties(game.ShakeAnimationPlayer.StorageView, { cid: { configurable: true, get: function() { return game.ShakeAnimationPlayer.cid; } } });
game.ShakeAnimationPlayer.Duration = { $ofs:0, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.ShakeRadiusX = { $ofs:4, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.ShakeRadiusY = { $ofs:8, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.Timer = { $ofs:12, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.StartDelay = { $ofs:16, $t:"float", $c:game.ShakeAnimationPlayer };
game.Spacing = function(arg0, arg1, arg2) {
  this._top = (arg0 === undefined ? new ut.Entity : arg0);
  this._bottom = (arg1 === undefined ? new ut.Entity : arg1);
  this._spacing = (+(arg2===undefined ? 0 : arg2));
};
game.Spacing.prototype = Object.create(null);
game.Spacing.prototype.constructor = game.Spacing;
Object.defineProperties(game.Spacing.prototype, {
  top: {
    get: function() { return this._top; },
    set: function(v) { this._top = (v === undefined ? new ut.Entity : v); },
  },
  bottom: {
    get: function() { return this._bottom; },
    set: function(v) { this._bottom = (v === undefined ? new ut.Entity : v); },
  },
  spacing: {
    get: function() { return this._spacing; },
    set: function(v) { this._spacing = (+(v===undefined ? 0 : v)); },
  },
});
game.Spacing._size = 20;
game.Spacing._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spacing.prototype);
  v._top = ut.Entity._fromPtr(ptr+0);
  v._bottom = ut.Entity._fromPtr(ptr+8);
  v._spacing = HEAPF32[(ptr+16)>>2];
  return v;
};
game.Spacing._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.top);
  ut.Entity._toPtr(ptr+8, v.bottom);
  HEAPF32[(ptr+16)>>2] = v.spacing;
};
game.Spacing._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.top);
  ut.Entity._toPtr(ptr+8, v.bottom);
  HEAPF32[(ptr+16)>>2] = v.spacing;
};
game.Spacing._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.Spacing._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Spacing.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Spacing.StorageView.prototype = Object.create(null);
game.Spacing.StorageView.prototype.constructor = game.Spacing.StorageView;
game.Spacing._view = game.Spacing.StorageView;
game.Spacing.StorageView._isSharedComp = game.Spacing._isSharedComp = false;
game.Spacing.StorageView._fromPtr = game.Spacing._fromPtr;
game.Spacing.StorageView._toPtr = game.Spacing._toPtr;
game.Spacing.StorageView._tempHeapPtr = game.Spacing._tempHeapPtr;
game.Spacing.StorageView._size = game.Spacing._size;
game.Spacing.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.Spacing.StorageView.prototype, {
  top: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  bottom: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  spacing: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
});
game.Spacing._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Spacing is a POD type, so a JavaScript side copy constructor game.Spacing._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Spacing, { cid: { configurable: true, get: function() { delete game.Spacing.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8]); var offsetsCount = 2; return game.Spacing.cid = Module._ut_component_register_cid(/*game.Spacing*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Spacing"*/, 0, 0); } } });
Object.defineProperties(game.Spacing.StorageView, { cid: { configurable: true, get: function() { return game.Spacing.cid; } } });
game.Spacing.top = { $ofs:0, $t:"ut.Entity", $c:game.Spacing };
game.Spacing.top.index = { $ofs:0, $t:"int32_t", $c:game.Spacing };
game.Spacing.top.version = { $ofs:4, $t:"int32_t", $c:game.Spacing };
game.Spacing.bottom = { $ofs:8, $t:"ut.Entity", $c:game.Spacing };
game.Spacing.bottom.index = { $ofs:8, $t:"int32_t", $c:game.Spacing };
game.Spacing.bottom.version = { $ofs:12, $t:"int32_t", $c:game.Spacing };
game.Spacing.spacing = { $ofs:16, $t:"float", $c:game.Spacing };
game.Spawner = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._time = (+(arg0===undefined ? 0 : arg0));
  this._delay = (+(arg1===undefined ? 0 : arg1));
  this._paused = (arg2 ? true : false);
  this._distance = (+(arg3===undefined ? 0 : arg3));
  this._minHeight = (+(arg4===undefined ? 0 : arg4));
  this._maxHeight = (+(arg5===undefined ? 0 : arg5));
};
game.Spawner.prototype = Object.create(null);
game.Spawner.prototype.constructor = game.Spawner;
Object.defineProperties(game.Spawner.prototype, {
  time: {
    get: function() { return this._time; },
    set: function(v) { this._time = (+(v===undefined ? 0 : v)); },
  },
  delay: {
    get: function() { return this._delay; },
    set: function(v) { this._delay = (+(v===undefined ? 0 : v)); },
  },
  paused: {
    get: function() { return this._paused; },
    set: function(v) { this._paused = (v ? true : false); },
  },
  distance: {
    get: function() { return this._distance; },
    set: function(v) { this._distance = (+(v===undefined ? 0 : v)); },
  },
  minHeight: {
    get: function() { return this._minHeight; },
    set: function(v) { this._minHeight = (+(v===undefined ? 0 : v)); },
  },
  maxHeight: {
    get: function() { return this._maxHeight; },
    set: function(v) { this._maxHeight = (+(v===undefined ? 0 : v)); },
  },
});
game.Spawner._size = 24;
game.Spawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spawner.prototype);
  v._time = HEAPF32[(ptr+0)>>2];
  v._delay = HEAPF32[(ptr+4)>>2];
  v._paused = (HEAP8[ptr+8]?true:false);
  v._distance = HEAPF32[(ptr+12)>>2];
  v._minHeight = HEAPF32[(ptr+16)>>2];
  v._maxHeight = HEAPF32[(ptr+20)>>2];
  return v;
};
game.Spawner._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.time;
  HEAPF32[(ptr+4)>>2] = v.delay;
  HEAP8[ptr+8] = (v.paused)?1:0;
  HEAPF32[(ptr+12)>>2] = v.distance;
  HEAPF32[(ptr+16)>>2] = v.minHeight;
  HEAPF32[(ptr+20)>>2] = v.maxHeight;
};
game.Spawner._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.time;
  HEAPF32[(ptr+4)>>2] = v.delay;
  HEAP8[ptr+8] = (v.paused)?1:0;
  HEAPF32[(ptr+12)>>2] = v.distance;
  HEAPF32[(ptr+16)>>2] = v.minHeight;
  HEAPF32[(ptr+20)>>2] = v.maxHeight;
};
game.Spawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.Spawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Spawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Spawner.StorageView.prototype = Object.create(null);
game.Spawner.StorageView.prototype.constructor = game.Spawner.StorageView;
game.Spawner._view = game.Spawner.StorageView;
game.Spawner.StorageView._isSharedComp = game.Spawner._isSharedComp = false;
game.Spawner.StorageView._fromPtr = game.Spawner._fromPtr;
game.Spawner.StorageView._toPtr = game.Spawner._toPtr;
game.Spawner.StorageView._tempHeapPtr = game.Spawner._tempHeapPtr;
game.Spawner.StorageView._size = game.Spawner._size;
game.Spawner.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.Spawner.StorageView.prototype, {
  time: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  delay: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  paused: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  distance: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  minHeight: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  maxHeight: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
});
game.Spawner._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Spawner is a POD type, so a JavaScript side copy constructor game.Spawner._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Spawner, { cid: { configurable: true, get: function() { delete game.Spawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Spawner.cid = Module._ut_component_register_cid(/*game.Spawner*/ 24, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Spawner"*/, 0, 0); } } });
Object.defineProperties(game.Spawner.StorageView, { cid: { configurable: true, get: function() { return game.Spawner.cid; } } });
game.Spawner.time = { $ofs:0, $t:"float", $c:game.Spawner };
game.Spawner.delay = { $ofs:4, $t:"float", $c:game.Spawner };
game.Spawner.paused = { $ofs:8, $t:"bool", $c:game.Spawner };
game.Spawner.distance = { $ofs:12, $t:"float", $c:game.Spawner };
game.Spawner.minHeight = { $ofs:16, $t:"float", $c:game.Spawner };
game.Spawner.maxHeight = { $ofs:20, $t:"float", $c:game.Spawner };
game.Velocity = function(arg0) {
  this._velocity = new ut.Math.Vector2(); if ((arg0) !== undefined) { this._velocity.copy(arg0); };
};
game.Velocity.prototype = Object.create(null);
game.Velocity.prototype.constructor = game.Velocity;
Object.defineProperties(game.Velocity.prototype, {
  velocity: {
    get: function() { return this._velocity; },
    set: function(v) { this._velocity.copy(v); },
  },
});
game.Velocity._size = 8;
game.Velocity._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Velocity.prototype);
  v._velocity = ut._utils.vec2FromHeap(null, ptr+0);
  return v;
};
game.Velocity._toPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.velocity, ptr+0);
};
game.Velocity._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.velocity, ptr+0);
};
game.Velocity._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Velocity._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Velocity.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Velocity.StorageView.prototype = Object.create(null);
game.Velocity.StorageView.prototype.constructor = game.Velocity.StorageView;
game.Velocity._view = game.Velocity.StorageView;
game.Velocity.StorageView._isSharedComp = game.Velocity._isSharedComp = false;
game.Velocity.StorageView._fromPtr = game.Velocity._fromPtr;
game.Velocity.StorageView._toPtr = game.Velocity._toPtr;
game.Velocity.StorageView._tempHeapPtr = game.Velocity._tempHeapPtr;
game.Velocity.StorageView._size = game.Velocity._size;
game.Velocity.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Velocity.StorageView.prototype, {
  velocity: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+0); },
  },
});
game.Velocity._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Velocity is a POD type, so a JavaScript side copy constructor game.Velocity._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Velocity, { cid: { configurable: true, get: function() { delete game.Velocity.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Velocity.cid = Module._ut_component_register_cid(/*game.Velocity*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Velocity"*/, 0, 0); } } });
Object.defineProperties(game.Velocity.StorageView, { cid: { configurable: true, get: function() { return game.Velocity.cid; } } });
game.Velocity.velocity = { $ofs:0, $t:"ut.Math.Vector2", $c:game.Velocity };
game.Velocity.velocity.y = { $ofs:4, $t:"float", $c:game.Velocity };
game.Velocity.velocity.x = { $ofs:0, $t:"float", $c:game.Velocity };
game.GameConfig = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._state = (arg0|0);
  this._scrollSpeed = (+(arg1===undefined ? 0 : arg1));
  this._gravity = (+(arg2===undefined ? 0 : arg2));
  this._currentScore = (arg3|0);
  this._highScore = (arg4|0);
  this._currentScrollSpeed = (+(arg5===undefined ? 0 : arg5));
};
game.GameConfig.prototype = Object.create(null);
game.GameConfig.prototype.constructor = game.GameConfig;
Object.defineProperties(game.GameConfig.prototype, {
  state: {
    get: function() { return this._state; },
    set: function(v) { this._state = (v|0); },
  },
  scrollSpeed: {
    get: function() { return this._scrollSpeed; },
    set: function(v) { this._scrollSpeed = (+(v===undefined ? 0 : v)); },
  },
  gravity: {
    get: function() { return this._gravity; },
    set: function(v) { this._gravity = (+(v===undefined ? 0 : v)); },
  },
  currentScore: {
    get: function() { return this._currentScore; },
    set: function(v) { this._currentScore = (v|0); },
  },
  highScore: {
    get: function() { return this._highScore; },
    set: function(v) { this._highScore = (v|0); },
  },
  currentScrollSpeed: {
    get: function() { return this._currentScrollSpeed; },
    set: function(v) { this._currentScrollSpeed = (+(v===undefined ? 0 : v)); },
  },
});
game.GameConfig._size = 24;
game.GameConfig._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameConfig.prototype);
  v._state = HEAP32[(ptr+0)>>2];
  v._scrollSpeed = HEAPF32[(ptr+4)>>2];
  v._gravity = HEAPF32[(ptr+8)>>2];
  v._currentScore = HEAP32[(ptr+12)>>2];
  v._highScore = HEAP32[(ptr+16)>>2];
  v._currentScrollSpeed = HEAPF32[(ptr+20)>>2];
  return v;
};
game.GameConfig._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.state;
  HEAPF32[(ptr+4)>>2] = v.scrollSpeed;
  HEAPF32[(ptr+8)>>2] = v.gravity;
  HEAP32[(ptr+12)>>2] = v.currentScore;
  HEAP32[(ptr+16)>>2] = v.highScore;
  HEAPF32[(ptr+20)>>2] = v.currentScrollSpeed;
};
game.GameConfig._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.state;
  HEAPF32[(ptr+4)>>2] = v.scrollSpeed;
  HEAPF32[(ptr+8)>>2] = v.gravity;
  HEAP32[(ptr+12)>>2] = v.currentScore;
  HEAP32[(ptr+16)>>2] = v.highScore;
  HEAPF32[(ptr+20)>>2] = v.currentScrollSpeed;
};
game.GameConfig._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.GameConfig._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameConfig.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameConfig.StorageView.prototype = Object.create(null);
game.GameConfig.StorageView.prototype.constructor = game.GameConfig.StorageView;
game.GameConfig._view = game.GameConfig.StorageView;
game.GameConfig.StorageView._isSharedComp = game.GameConfig._isSharedComp = false;
game.GameConfig.StorageView._fromPtr = game.GameConfig._fromPtr;
game.GameConfig.StorageView._toPtr = game.GameConfig._toPtr;
game.GameConfig.StorageView._tempHeapPtr = game.GameConfig._tempHeapPtr;
game.GameConfig.StorageView._size = game.GameConfig._size;
game.GameConfig.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.GameConfig.StorageView.prototype, {
  state: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  scrollSpeed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  gravity: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  currentScore: {
    get: function() { return HEAP32[(this._ptr+12)>>2]; },
    set: function(v) { HEAP32[(this._ptr+12)>>2] = v; },
  },
  highScore: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
  currentScrollSpeed: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
});
game.GameConfig._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameConfig is a POD type, so a JavaScript side copy constructor game.GameConfig._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.GameConfig, { cid: { configurable: true, get: function() { delete game.GameConfig.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameConfig.cid = Module._ut_component_register_cid(/*game.GameConfig*/ 24, 4, 0, offsetsPtr, offsetsCount, 0/*"game::GameConfig"*/, 0, 0); } } });
Object.defineProperties(game.GameConfig.StorageView, { cid: { configurable: true, get: function() { return game.GameConfig.cid; } } });
game.GameConfig.state = { $ofs:0, $t:"game.GameState", $c:game.GameConfig };
game.GameConfig.scrollSpeed = { $ofs:4, $t:"float", $c:game.GameConfig };
game.GameConfig.gravity = { $ofs:8, $t:"float", $c:game.GameConfig };
game.GameConfig.currentScore = { $ofs:12, $t:"int32_t", $c:game.GameConfig };
game.GameConfig.highScore = { $ofs:16, $t:"int32_t", $c:game.GameConfig };
game.GameConfig.currentScrollSpeed = { $ofs:20, $t:"float", $c:game.GameConfig };
game.SkinConfig = function(arg0, arg1) {
  this._theme = (arg0|0);
  this._forced = (arg1 ? true : false);
};
game.SkinConfig.prototype = Object.create(null);
game.SkinConfig.prototype.constructor = game.SkinConfig;
Object.defineProperties(game.SkinConfig.prototype, {
  theme: {
    get: function() { return this._theme; },
    set: function(v) { this._theme = (v|0); },
  },
  forced: {
    get: function() { return this._forced; },
    set: function(v) { this._forced = (v ? true : false); },
  },
});
game.SkinConfig._size = 8;
game.SkinConfig._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SkinConfig.prototype);
  v._theme = HEAP32[(ptr+0)>>2];
  v._forced = (HEAP8[ptr+4]?true:false);
  return v;
};
game.SkinConfig._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.theme;
  HEAP8[ptr+4] = (v.forced)?1:0;
};
game.SkinConfig._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.theme;
  HEAP8[ptr+4] = (v.forced)?1:0;
};
game.SkinConfig._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.SkinConfig._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SkinConfig.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SkinConfig.StorageView.prototype = Object.create(null);
game.SkinConfig.StorageView.prototype.constructor = game.SkinConfig.StorageView;
game.SkinConfig._view = game.SkinConfig.StorageView;
game.SkinConfig.StorageView._isSharedComp = game.SkinConfig._isSharedComp = false;
game.SkinConfig.StorageView._fromPtr = game.SkinConfig._fromPtr;
game.SkinConfig.StorageView._toPtr = game.SkinConfig._toPtr;
game.SkinConfig.StorageView._tempHeapPtr = game.SkinConfig._tempHeapPtr;
game.SkinConfig.StorageView._size = game.SkinConfig._size;
game.SkinConfig.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.SkinConfig.StorageView.prototype, {
  theme: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  forced: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
});
game.SkinConfig._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SkinConfig is a POD type, so a JavaScript side copy constructor game.SkinConfig._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.SkinConfig, { cid: { configurable: true, get: function() { delete game.SkinConfig.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SkinConfig.cid = Module._ut_component_register_cid(/*game.SkinConfig*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::SkinConfig"*/, 0, 0); } } });
Object.defineProperties(game.SkinConfig.StorageView, { cid: { configurable: true, get: function() { return game.SkinConfig.cid; } } });
game.SkinConfig.theme = { $ofs:0, $t:"game.SkinType", $c:game.SkinConfig };
game.SkinConfig.forced = { $ofs:4, $t:"bool", $c:game.SkinConfig };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Default*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Default"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.TransparentFX*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::TransparentFX"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.IgnoreRaycast*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::IgnoreRaycast"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Water*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Water"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.UI*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::UI"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.Grid = function() {
};
ut.Core2D.layers.Grid.prototype = Object.create(null);
ut.Core2D.layers.Grid.prototype.constructor = ut.Core2D.layers.Grid;
Object.defineProperties(ut.Core2D.layers.Grid.prototype, {
});
ut.Core2D.layers.Grid._size = 1;
ut.Core2D.layers.Grid._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Grid.prototype);
  return v;
};
ut.Core2D.layers.Grid._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Grid._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Grid.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Grid.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Grid.StorageView.prototype.constructor = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid._view = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid.StorageView._isSharedComp = ut.Core2D.layers.Grid._isSharedComp = false;
ut.Core2D.layers.Grid.StorageView._fromPtr = ut.Core2D.layers.Grid._fromPtr;
ut.Core2D.layers.Grid.StorageView._toPtr = ut.Core2D.layers.Grid._toPtr;
ut.Core2D.layers.Grid.StorageView._tempHeapPtr = ut.Core2D.layers.Grid._tempHeapPtr;
ut.Core2D.layers.Grid.StorageView._size = ut.Core2D.layers.Grid._size;
ut.Core2D.layers.Grid.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Grid.StorageView.prototype, {
});
ut.Core2D.layers.Grid._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Grid is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Grid._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Grid, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Grid.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Grid.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Grid*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Grid"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Grid.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Grid.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Cutscene*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Cutscene"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAnimationClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAnimationClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAudioClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAudioClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSprite*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSprite"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSpriteAtlas*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSpriteAtlas"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTexture2D*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTexture2D"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTileBase*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTileBase"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTMP_FontAsset*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTMP_FontAsset"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.CameraCullingMask*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::CameraCullingMask"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.EntityLayer*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::EntityLayer"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.AnimateShakeSystemJS = ut.System.define({
  name: "game.AnimateShakeSystemJS"
});
game.DestroyAfterDelaySystemJS = ut.System.define({
  name: "game.DestroyAfterDelaySystemJS"
});
game.NumberTextRenderingSystemJS = ut.System.define({
  name: "game.NumberTextRenderingSystemJS"
 ,updatesBefore: ["UTiny.Shared.RenderingFence"]
});
game.GameNumberTextValueSystemJS = ut.System.define({
  name: "game.GameNumberTextValueSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd","game.NumberTextRenderingSystemJS"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.GameManagerSystemJS = ut.System.define({
  name: "game.GameManagerSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.GameOverSystemJS = ut.System.define({
  name: "game.GameOverSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.GemSpawnerSystemJS = ut.System.define({
  name: "game.GemSpawnerSystemJS"
});
game.GroundCollisionSystemJS = ut.System.define({
  name: "game.GroundCollisionSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.PlayerInputSystemJS = ut.System.define({
  name: "game.PlayerInputSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.ScrollerSystemJS = ut.System.define({
  name: "game.ScrollerSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.RepeatingBackgroundSystemJS = ut.System.define({
  name: "game.RepeatingBackgroundSystemJS"
 ,updatesAfter: ["game.ScrollerSystemJS"]
});
game.ScorePointSystemJS = ut.System.define({
  name: "game.ScorePointSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.SkinSystemJS = ut.System.define({
  name: "game.SkinSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.PipeSpacingSystemJS = ut.System.define({
  name: "game.PipeSpacingSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.VelocitySystemJS = ut.System.define({
  name: "game.VelocitySystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});


