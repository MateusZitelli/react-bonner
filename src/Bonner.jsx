/**
 * @jsx React.DOM
 */

var React = require('react');

var bonnerCss = require('../src/bonner.css');

var Bonner = React.createClass({
  propTypes: {
    tema: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <main>
        <span className="tema">{this.props.tema}</span>
        <img src='./assets/bonner.jpg'></img>
      </main>
    );
  }
});

module.exports = Bonner;
