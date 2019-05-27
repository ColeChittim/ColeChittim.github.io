declare namespace game {
enum GameState {
  Initialize = 0,
  Menu = 1,
  Tutorial = 2,
  Play = 3,
  GameOver = 4,
}
}
declare namespace game {
enum SkinType {
  Day = 0,
  Night = 1,
}
}
declare namespace game {
enum TextAlignment {
  Center = 0,
  Right = 1,
}
}
declare namespace entities.game.Bootstrap {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.GameOver {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.GameScene {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.Gem {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.Score {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.TapParticles {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.Tutorial {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace game {

class AutoDestroy extends ut.Component {
  constructor(threshold?: number);
  threshold: number;
  static readonly threshold: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AutoDestroy): AutoDestroy;
  static _toPtr(p: number, v: AutoDestroy): void;
  static _tempHeapPtr(v: AutoDestroy): number;
  static _dtorFn(v: AutoDestroy): void;
}

}
declare namespace game {

class Boundary extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Boundary): Boundary;
  static _toPtr(p: number, v: Boundary): void;
  static _tempHeapPtr(v: Boundary): number;
  static _dtorFn(v: Boundary): void;
}

}
declare namespace game {

class DestroyAfterDelay extends ut.Component {
  constructor(Delay?: number);
  Delay: number;
  static readonly Delay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DestroyAfterDelay): DestroyAfterDelay;
  static _toPtr(p: number, v: DestroyAfterDelay): void;
  static _tempHeapPtr(v: DestroyAfterDelay): number;
  static _dtorFn(v: DestroyAfterDelay): void;
}

}
declare namespace game {

class GameConfigTextValue extends ut.Component {
  constructor(key?: string);
  key: string;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameConfigTextValue): GameConfigTextValue;
  static _toPtr(p: number, v: GameConfigTextValue): void;
  static _tempHeapPtr(v: GameConfigTextValue): number;
  static _dtorFn(v: GameConfigTextValue): void;
}

}
declare namespace game {

class Gravity extends ut.Component {
  constructor(gravity?: Vector2);
  gravity: Vector2;
  static readonly gravity: Vector2ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Gravity): Gravity;
  static _toPtr(p: number, v: Gravity): void;
  static _tempHeapPtr(v: Gravity): number;
  static _dtorFn(v: Gravity): void;
}

}
declare namespace game {

class NumberTextRenderer extends ut.Component {
  constructor(value?: number, spacing?: number, alignment?: TextAlignment, renderers?: Entity[], characters?: Entity[]);
  value: number;
  spacing: number;
  alignment: TextAlignment;
  renderers: Entity[];
  characters: Entity[];
  static readonly value: ComponentFieldDesc;
  static readonly spacing: ComponentFieldDesc;
  
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: NumberTextRenderer): NumberTextRenderer;
  static _toPtr(p: number, v: NumberTextRenderer): void;
  static _tempHeapPtr(v: NumberTextRenderer): number;
  static _dtorFn(v: NumberTextRenderer): void;
}

}
declare namespace game {

class PlayerInput extends ut.Component {
  constructor(force?: number);
  force: number;
  static readonly force: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayerInput): PlayerInput;
  static _toPtr(p: number, v: PlayerInput): void;
  static _tempHeapPtr(v: PlayerInput): number;
  static _dtorFn(v: PlayerInput): void;
}

}
declare namespace game {

class RepeatingBackground extends ut.Component {
  constructor(threshold?: number, distance?: number);
  threshold: number;
  distance: number;
  static readonly threshold: ComponentFieldDesc;
  static readonly distance: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: RepeatingBackground): RepeatingBackground;
  static _toPtr(p: number, v: RepeatingBackground): void;
  static _tempHeapPtr(v: RepeatingBackground): number;
  static _dtorFn(v: RepeatingBackground): void;
}

}
declare namespace game {

class Reskinnable extends ut.Component {
  constructor(theme?: SkinType);
  theme: SkinType;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Reskinnable): Reskinnable;
  static _toPtr(p: number, v: Reskinnable): void;
  static _tempHeapPtr(v: Reskinnable): number;
  static _dtorFn(v: Reskinnable): void;
}

}
declare namespace game {

class ScorePoint extends ut.Component {
  constructor(value?: number);
  value: number;
  static readonly value: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScorePoint): ScorePoint;
  static _toPtr(p: number, v: ScorePoint): void;
  static _tempHeapPtr(v: ScorePoint): number;
  static _dtorFn(v: ScorePoint): void;
}

}
declare namespace game {

class Scroller extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Scroller): Scroller;
  static _toPtr(p: number, v: Scroller): void;
  static _tempHeapPtr(v: Scroller): number;
  static _dtorFn(v: Scroller): void;
}

}
declare namespace game {

class ShakeAnimation extends ut.Component {
  constructor(DefaultX?: number, DefaultY?: number, DefaultZ?: number, IsDefaultPositionSet?: boolean);
  DefaultX: number;
  DefaultY: number;
  DefaultZ: number;
  IsDefaultPositionSet: boolean;
  static readonly DefaultX: ComponentFieldDesc;
  static readonly DefaultY: ComponentFieldDesc;
  static readonly DefaultZ: ComponentFieldDesc;
  static readonly IsDefaultPositionSet: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ShakeAnimation): ShakeAnimation;
  static _toPtr(p: number, v: ShakeAnimation): void;
  static _tempHeapPtr(v: ShakeAnimation): number;
  static _dtorFn(v: ShakeAnimation): void;
}

}
declare namespace game {

class ShakeAnimationPlayer extends ut.Component {
  constructor(Duration?: number, ShakeRadiusX?: number, ShakeRadiusY?: number, Timer?: number, StartDelay?: number);
  Duration: number;
  ShakeRadiusX: number;
  ShakeRadiusY: number;
  Timer: number;
  StartDelay: number;
  static readonly Duration: ComponentFieldDesc;
  static readonly ShakeRadiusX: ComponentFieldDesc;
  static readonly ShakeRadiusY: ComponentFieldDesc;
  static readonly Timer: ComponentFieldDesc;
  static readonly StartDelay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ShakeAnimationPlayer): ShakeAnimationPlayer;
  static _toPtr(p: number, v: ShakeAnimationPlayer): void;
  static _tempHeapPtr(v: ShakeAnimationPlayer): number;
  static _dtorFn(v: ShakeAnimationPlayer): void;
}

}
declare namespace game {

class Spacing extends ut.Component {
  constructor(top?: Entity, bottom?: Entity, spacing?: number);
  top: Entity;
  bottom: Entity;
  spacing: number;
  static readonly top: EntityComponentFieldDesc;
  static readonly bottom: EntityComponentFieldDesc;
  static readonly spacing: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Spacing): Spacing;
  static _toPtr(p: number, v: Spacing): void;
  static _tempHeapPtr(v: Spacing): number;
  static _dtorFn(v: Spacing): void;
}

}
declare namespace game {

class Spawner extends ut.Component {
  constructor(time?: number, delay?: number, paused?: boolean, distance?: number, minHeight?: number, maxHeight?: number);
  time: number;
  delay: number;
  paused: boolean;
  distance: number;
  minHeight: number;
  maxHeight: number;
  static readonly time: ComponentFieldDesc;
  static readonly delay: ComponentFieldDesc;
  static readonly paused: ComponentFieldDesc;
  static readonly distance: ComponentFieldDesc;
  static readonly minHeight: ComponentFieldDesc;
  static readonly maxHeight: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Spawner): Spawner;
  static _toPtr(p: number, v: Spawner): void;
  static _tempHeapPtr(v: Spawner): number;
  static _dtorFn(v: Spawner): void;
}

}
declare namespace game {

class Velocity extends ut.Component {
  constructor(velocity?: Vector2);
  velocity: Vector2;
  static readonly velocity: Vector2ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Velocity): Velocity;
  static _toPtr(p: number, v: Velocity): void;
  static _tempHeapPtr(v: Velocity): number;
  static _dtorFn(v: Velocity): void;
}

}
declare namespace game {

class GameConfig extends ut.Component {
  constructor(state?: GameState, scrollSpeed?: number, gravity?: number, currentScore?: number, highScore?: number, currentScrollSpeed?: number);
  state: GameState;
  scrollSpeed: number;
  gravity: number;
  currentScore: number;
  highScore: number;
  currentScrollSpeed: number;
  
  static readonly scrollSpeed: ComponentFieldDesc;
  static readonly gravity: ComponentFieldDesc;
  static readonly currentScore: ComponentFieldDesc;
  static readonly highScore: ComponentFieldDesc;
  static readonly currentScrollSpeed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameConfig): GameConfig;
  static _toPtr(p: number, v: GameConfig): void;
  static _tempHeapPtr(v: GameConfig): number;
  static _dtorFn(v: GameConfig): void;
}

}
declare namespace game {

class SkinConfig extends ut.Component {
  constructor(theme?: SkinType, forced?: boolean);
  theme: SkinType;
  forced: boolean;
  
  static readonly forced: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SkinConfig): SkinConfig;
  static _toPtr(p: number, v: SkinConfig): void;
  static _tempHeapPtr(v: SkinConfig): number;
  static _dtorFn(v: SkinConfig): void;
}

}
declare namespace ut.Core2D.layers {

class Default extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Default): Default;
  static _toPtr(p: number, v: Default): void;
  static _tempHeapPtr(v: Default): number;
  static _dtorFn(v: Default): void;
}

}
declare namespace ut.Core2D.layers {

class TransparentFX extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TransparentFX): TransparentFX;
  static _toPtr(p: number, v: TransparentFX): void;
  static _tempHeapPtr(v: TransparentFX): number;
  static _dtorFn(v: TransparentFX): void;
}

}
declare namespace ut.Core2D.layers {

class IgnoreRaycast extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: IgnoreRaycast): IgnoreRaycast;
  static _toPtr(p: number, v: IgnoreRaycast): void;
  static _tempHeapPtr(v: IgnoreRaycast): number;
  static _dtorFn(v: IgnoreRaycast): void;
}

}
declare namespace ut.Core2D.layers {

class Water extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Water): Water;
  static _toPtr(p: number, v: Water): void;
  static _tempHeapPtr(v: Water): number;
  static _dtorFn(v: Water): void;
}

}
declare namespace ut.Core2D.layers {

class UI extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: UI): UI;
  static _toPtr(p: number, v: UI): void;
  static _tempHeapPtr(v: UI): number;
  static _dtorFn(v: UI): void;
}

}
declare namespace ut.Core2D.layers {

class Grid extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Grid): Grid;
  static _toPtr(p: number, v: Grid): void;
  static _tempHeapPtr(v: Grid): number;
  static _dtorFn(v: Grid): void;
}

}
declare namespace ut.Core2D.layers {

class Cutscene extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Cutscene): Cutscene;
  static _toPtr(p: number, v: Cutscene): void;
  static _tempHeapPtr(v: Cutscene): number;
  static _dtorFn(v: Cutscene): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAnimationClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
  static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
  static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
  static _dtorFn(v: AssetReferenceAnimationClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAudioClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
  static _toPtr(p: number, v: AssetReferenceAudioClip): void;
  static _tempHeapPtr(v: AssetReferenceAudioClip): number;
  static _dtorFn(v: AssetReferenceAudioClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSprite extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
  static _toPtr(p: number, v: AssetReferenceSprite): void;
  static _tempHeapPtr(v: AssetReferenceSprite): number;
  static _dtorFn(v: AssetReferenceSprite): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSpriteAtlas extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
  static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
  static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
  static _dtorFn(v: AssetReferenceSpriteAtlas): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTexture2D extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
  static _toPtr(p: number, v: AssetReferenceTexture2D): void;
  static _tempHeapPtr(v: AssetReferenceTexture2D): number;
  static _dtorFn(v: AssetReferenceTexture2D): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTileBase extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
  static _toPtr(p: number, v: AssetReferenceTileBase): void;
  static _tempHeapPtr(v: AssetReferenceTileBase): number;
  static _dtorFn(v: AssetReferenceTileBase): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTMP_FontAsset extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
  static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
  static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
  static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
}

}
declare namespace ut.EditorExtensions {

class CameraCullingMask extends ut.Component {
  constructor(mask?: number);
  mask: number;
  static readonly mask: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
  static _toPtr(p: number, v: CameraCullingMask): void;
  static _tempHeapPtr(v: CameraCullingMask): number;
  static _dtorFn(v: CameraCullingMask): void;
}

}
declare namespace ut.EditorExtensions {

class EntityLayer extends ut.Component {
  constructor(layer?: number);
  layer: number;
  static readonly layer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
  static _toPtr(p: number, v: EntityLayer): void;
  static _tempHeapPtr(v: EntityLayer): number;
  static _dtorFn(v: EntityLayer): void;
}

}
declare namespace game {
var AnimateShakeSystemJS: ut.SystemJS;
}
declare namespace game {
var DestroyAfterDelaySystemJS: ut.SystemJS;
}
declare namespace game {
var NumberTextRenderingSystemJS: ut.SystemJS;
}
declare namespace game {
var GameNumberTextValueSystemJS: ut.SystemJS;
}
declare namespace game {
var GameManagerSystemJS: ut.SystemJS;
}
declare namespace game {
var GameOverSystemJS: ut.SystemJS;
}
declare namespace game {
var GemSpawnerSystemJS: ut.SystemJS;
}
declare namespace game {
var GroundCollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var PlayerInputSystemJS: ut.SystemJS;
}
declare namespace game {
var ScrollerSystemJS: ut.SystemJS;
}
declare namespace game {
var RepeatingBackgroundSystemJS: ut.SystemJS;
}
declare namespace game {
var ScorePointSystemJS: ut.SystemJS;
}
declare namespace game {
var SkinSystemJS: ut.SystemJS;
}
declare namespace game {
var PipeSpacingSystemJS: ut.SystemJS;
}
declare namespace game {
var VelocitySystemJS: ut.SystemJS;
}


declare namespace Module {

}

