import React from "react";
import Select from "react-windowed-select";

export default class SelectComponent extends React.PureComponent {
  styles = {
    container: {
      margin: "auto",
      width: 240
    }
  };

  render() {
    return (
      <div style={this.styles.container}>
        <Select
          style={{ textAlign: "center" }}
          autoWidth={true}
          onChange={e => this.props.handleSymbolChange(e)}
          options={this.props.options}
        />
      </div>
    );
  }
}
