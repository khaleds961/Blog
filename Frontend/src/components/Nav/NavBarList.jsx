import { Component } from "react";

export default class NavBarList extends Component {
  state = {
    Categories: [],
  };
  async componentDidMount() {
    let { Categories } = this.state;
    const url = "http://localhost:8000/Categories";
    const response = await fetch(url);
    const data = await response.json();
    Categories = data.result;
    this.setState({ Categories });
    console.log(data);
  }
  render() {
    let { Categories } = this.state;
    return (
      <select id={this.props.style} class="form-control" required>
        {Categories.map((Categorie) => (
          <option>{Categorie.cat_name}</option>
        ))}
      </select>
    );
  }
}
