import { Component } from "react";
import "./app.css";

import * as Sentry from "sentry-miniapp";

Sentry.init({
  dsn: "https://47703e01ba4344b8b252c15e8fd980fd@sentry.io/1528228",
});

class App extends Component {
  componentDidMount() {}

  componentDidShow() {
    // Sentry.captureException(new Error("test"));
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
