declare module react {
  declare var PropTypes: Object;
  declare function createElement(props?: Object): Object;
  declare class Component {
    props: Object;
    state: Object;
    context: Object;
    setState: { (state?: Object): void };
    static contextTypes: Object;
  }
}
