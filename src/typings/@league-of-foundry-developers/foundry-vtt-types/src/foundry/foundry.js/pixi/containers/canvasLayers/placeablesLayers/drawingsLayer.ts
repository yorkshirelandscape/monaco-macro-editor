
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\canvasLayers\\placeablesLayers\\drawingsLayer.d.ts",
      "/**\n * The DrawingsLayer subclass of PlaceablesLayer.\n * This layer implements a container for drawings which are rendered immediately above the BackgroundLayer.\n */\ndeclare class DrawingsLayer extends PlaceablesLayer<'Drawing', DrawingsLayer.LayerOptions> {\n  /**\n   * @remarks This is not overridden in foundry but reflects the real behavior.\n   */\n  static get instance(): Canvas['drawings'];\n\n  /**\n   * @override\n   * @defaultValue\n   * ```\n   * mergeObject(super.layerOptions, {\n   *   name: \"drawings\"\n   *   canDragCreate: true,\n   *   controllableObjects: true,\n   *   rotatableObjects: true,\n   *   zIndex: 20\n   * })\n   * ```\n   */\n  static get layerOptions(): DrawingsLayer.LayerOptions;\n\n  /** @override */\n  static documentName: 'Drawing';\n\n  /**\n   * The named game setting which persists default drawing configuration for the User\n   */\n  static DEFAULT_CONFIG_SETTING: 'defaultDrawingConfig';\n\n  /**\n   * Use an adaptive precision depending on the size of the grid\n   */\n  get gridPrecision(): 0 | 8 | 16;\n\n  /** @override */\n  get hud(): Canvas['hud']['drawing'];\n\n  /**\n   * Render a configuration sheet to configure the default Drawing settings\n   */\n  configureDefault(): void;\n\n  /**\n   * Override the deactivation behavior of this layer.\n   * Placeables on this layer remain visible even when the layer is inactive.\n   */\n  deactivate(): this;\n\n  /**\n   * Get initial data for a new drawing.\n   * Start with some global defaults, apply user default config, then apply mandatory overrides per tool.\n   * @param origin - The initial coordinate\n   * @returns The new drawing data\n   * @remarks This is used from DrawingConfig and hence public on purpose.\n   */\n  _getNewDrawingData(origin: Point | {}): NewDrawingData;\n\n  /** @override */\n  protected _onClickLeft(event: PIXI.InteractionEvent): void;\n\n  /** @override */\n  protected _onClickLeft2(event: PIXI.InteractionEvent): void | Promise<void>;\n\n  /** @override */\n  protected _onDragLeftStart(event: PIXI.InteractionEvent): ReturnType<Drawing['draw']>;\n\n  /** @override */\n  protected _onDragLeftMove(event: PIXI.InteractionEvent): void;\n\n  /**\n   * Handling of mouse-up events which conclude a new object creation after dragging\n   */\n  protected _onDragLeftDrop(event: PIXI.InteractionEvent): Promise<void>;\n\n  /** @override */\n  protected _onDragLeftCancel(event: PointerEvent): void;\n\n  /** @override */\n  protected _onClickRight(event: PIXI.InteractionEvent): void;\n}\n\ndeclare namespace DrawingsLayer {\n  interface LayerOptions extends PlaceablesLayer.LayerOptions<'Drawing'> {\n    name: 'drawings';\n    canDragCreate: true;\n    controllableObjects: true;\n    rotatableObjects: true;\n    zIndex: 20;\n  }\n}\n\ntype NewDrawingData = ClientSettings.Values['core.defaultDrawingConfig'] &\n  (\n    | {\n        type: typeof foundry.CONST.DRAWING_TYPES.RECTANGLE | typeof foundry.CONST.DRAWING_TYPES.ELLIPSE;\n        points: [];\n      }\n    | {\n        type: typeof foundry.CONST.DRAWING_TYPES.POLYGON;\n        points: PointArray[];\n      }\n    | {\n        type: typeof foundry.CONST.DRAWING_TYPES.FREEHAND;\n        points: PointArray[];\n        bezierFactor: number;\n      }\n    | {\n        type: typeof foundry.CONST.DRAWING_TYPES.TEXT;\n        fillColor: string;\n        fillAlpha: number;\n        strokeColor: string;\n        text: string;\n      }\n  ) & {\n    author: string;\n    fillColor: string;\n    strokeColor: string;\n    fontFamily: typeof CONFIG.defaultFontFamily;\n    x: number | undefined;\n    y: number | undefined;\n  };\n"
    ]
  