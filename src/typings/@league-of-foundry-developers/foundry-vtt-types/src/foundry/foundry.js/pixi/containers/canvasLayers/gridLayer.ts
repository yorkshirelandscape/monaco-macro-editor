
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\canvasLayers\\gridLayer.d.ts",
      "/**\n * A CanvasLayer responsible for drawing a square grid\n */\ndeclare class GridLayer extends CanvasLayer<GridLayer.LayerOptions> {\n  constructor();\n\n  /**\n   * The Grid container\n   * @defaultValue `undefined`\n   */\n  grid: BaseGrid | undefined;\n\n  /**\n   * The Grid Highlight container\n   * @defaultValue `undefined`\n   */\n  highlight: PIXI.Container | undefined;\n\n  /**\n   * Map named highlight layers\n   * @defaultValue `{}`\n   */\n  highlightLayers: Record<string, GridHighlight>;\n\n  /**\n   * @remarks This is not overridden in foundry but reflects the real behavior.\n   */\n  static get instance(): Canvas['grid'];\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.layerOptions, {\n   *   name: \"grid\",\n   *   zIndex: 30\n   * }\n   * ```\n   */\n  static get layerOptions(): GridLayer.LayerOptions;\n\n  /**\n   * The grid type rendered in this Scene\n   */\n  get type(): foundry.CONST.GridType;\n\n  /**\n   * A convenient reference to the pixel grid size used throughout this layer\n   */\n  get size(): number;\n\n  /**\n   * Get grid unit width\n   */\n  get w(): BaseGrid['w'];\n\n  /**\n   * Get grid unit height\n   */\n  get h(): BaseGrid['h'];\n\n  /**\n   * A boolean flag for whether the current grid is hexagonal\n   */\n  get isHex(): boolean;\n\n  /**\n   * Draw the grid\n   * @param preview - Override settings used in place of those saved to the Scene data\n   */\n  draw(preview?: DrawOptions): Promise<this>;\n\n  /**\n   * Given a pair of coordinates (x1,y1), return the grid coordinates (x2,y2) which represent the snapped position\n   * @param x        - The exact target location x\n   * @param y        - The exact target location y\n   * @param interval - An interval of grid spaces at which to snap, default is 1. If the interval is zero, no snapping occurs.\n   *                   (defaultValue: `1`)\n   */\n  getSnappedPosition(x: number, y: number, interval?: number): { x: number; y: number };\n\n  /**\n   * Given a pair of coordinates (x, y) - return the top-left of the grid square which contains that point\n   * @returns An Array [x, y] of the top-left coordinate of the square which contains (x, y)\n   */\n  getTopLeft(x: number, y: number): PointArray;\n\n  /**\n   * Given a pair of coordinates (x, y), return the center of the grid square which contains that point\n   * @returns An Array [x, y] of the central point of the square which contains (x, y)\n   */\n  getCenter(x: number, y: number): PointArray;\n\n  /**\n   * Measure the grid-wise distance between two point coordinates.\n   * @param origin - The origin point\n   * @param target - The target point\n   * @returns The measured distance between these points\n   *\n   * @example\n   * ```typescript\n   * let distance = canvas.grid.measureDistance({x: 1000, y: 1000}, {x: 2000, y: 2000});\n   * ```\n   */\n  measureDistance(\n    origin: {\n      x: number;\n      y: number;\n    },\n    target: {\n      x: number;\n      y: number;\n    }\n  ): number;\n\n  /**\n   * Measure the distance traveled over an array of distance segments.\n   * @param segments - An array of measured segments\n   * @param options  - Additional options which modify the measurement\n   */\n  measureDistances(\n    segments: { ray: Ray; label?: Ruler['labels']['children'][number] }[],\n    options?: { gridSpaces?: boolean }\n  ): number[];\n\n  /**\n   * Define a new Highlight graphic\n   * @param name - The name for the referenced highlight layer\n   */\n  addHighlightLayer(name: string): GridHighlight;\n\n  /**\n   * Clear a specific Highlight graphic\n   * @param name - The name for the referenced highlight layer\n   */\n  clearHighlightLayer(name: string): void;\n\n  /**\n   * Destroy a specific Highlight graphic\n   * @param name - The name for the referenced highlight layer\n   */\n  destroyHighlightLayer(name: string): void;\n\n  /**\n   * Obtain the highlight layer graphic by name\n   * @param name - The name for the referenced highlight layer\n   */\n  getHighlightLayer(name: string): GridHighlight | undefined;\n\n  /**\n   * Add highlighting for a specific grid position to a named highlight graphic\n   * @param name    - The name for the referenced highlight layer\n   * @param options - Options for the grid position that should be highlighted\n   */\n  highlightPosition(name: string, options?: Parameters<BaseGrid['highlightGridPosition']>[1]): false | void;\n\n  /**\n   * Test if a specific row and column position is a neighboring location to another row and column coordinate\n   * @param r0 - The original row position\n   * @param c0 - The original column position\n   * @param r1 - The candidate row position\n   * @param c1 - The candidate column position\n   */\n  isNeighbor(r0: number, c0: number, r1: number, c1: number): boolean;\n}\n\ndeclare namespace GridLayer {\n  interface LayerOptions extends CanvasLayer.LayerOptions {\n    name: 'grid';\n    zIndex: 30;\n  }\n}\n\ninterface DrawOptions {\n  /**\n   * @defaultValue `null`\n   */\n  type?: foundry.CONST.GridType | null;\n\n  /**\n   * @defaultValue `null`\n   */\n  dimensions?: Canvas['dimensions'] | null;\n\n  /**\n   * @defaultValue `null`\n   */\n  gridColor?: number | string | null;\n\n  /**\n   * @defaultValue `null`\n   */\n  gridAlpha?: number | null;\n}\n"
    ]
  