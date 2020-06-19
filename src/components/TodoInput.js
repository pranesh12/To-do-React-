import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, id, editItem, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={item.length === 0 ? true : false}
            className={
              editItem
                ? "btn btn-block btn-danger mt-3"
                : "btn btn-block btn-success mt-3"
            }
          >
            {editItem ? "Edit Item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}
