import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	
	onSubmit(props){
		this.props.createPost(props).then(()=>{
			this.context.router.push('/');
		});
	}  

  render() {

  	const { fields:{title, catagories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      	<h3>Create a new post</h3>
      	<div className="form-group">
      		<label>Title</label>
      		<input type="text" className="form-control" {...title}/>
      		<div className="text-help">{title.error}</div>
      	</div>

      	<div className="form-group">
      		<label>Catagories</label>
      		<input type="text" className="form-control" {...catagories} />
      	</div>

      	<div className="form-group">
      		<label>Content</label>
      		<textarea className="form-control" {...content}/>
      	</div>

      	<button type="submit" className="btn btn-primary">Submit</button>
      	<Link to="/" className="btn btn-danger">
	    	Cancel
	    </Link>

      </form>
    );
  }
}

function validate(values){
	const errors = {};
	return errors;
	if(!values.title){
		errors.title = 'Enter a username';
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title','catagories','content'],
	validate
}, null, {createPost})(PostNew);