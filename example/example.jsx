/**
* @jsx React.DOM
*/

var Example = React.createClass({
  getInitialState: function(){
    return {tema: 'React ou Angular?'};
  },
  render: function(){
    return (
      <div>
        <div className="input-group">
          <label>Digite seu tema:</label>
          <input onChange={this._handleChange} placeholder="polemize aqui" />
        </div>
        <Bonner tema={this.state.tema}/>
      </div>
    );
  },
  _handleChange: function(e){
    this.setState({tema: e.target.value});
  }
});

React.renderComponent(
  <Example />,
  document.getElementById('container')
);

