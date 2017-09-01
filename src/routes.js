import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostIndex from './components/posts_index';
import PostNew from './components/post_new';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostIndex} />
		<Route path="posts/new" component={PostNew} />
		<Route path="posts/:id" component={PostShow} />
	</Route>
);