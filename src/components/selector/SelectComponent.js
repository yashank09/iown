import React from "react";
import Select from "react-windowed-select";

export default class SelectComponent extends React.PureComponent {
  styles = {
    container: {
      margin: "auto",
      width: 260,
      textAlign: "center"
    }
  };

  render() {
    return (
      <div style={this.styles.container}>
        <Select
          autoWidth={true}
          onChange={e => this.props.handleSymbolChange(e)}
          options={this.props.options}
        />
      </div>
    );
  }
}
