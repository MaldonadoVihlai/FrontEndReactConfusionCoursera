import React from "react";
import PopUp from "./PopUp"; 
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const comment = () => {
    return(
        <div>
        <div className="btn" onClick={this.togglePop}>
          <button>New User?</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
}

export default CommentFormComponent;