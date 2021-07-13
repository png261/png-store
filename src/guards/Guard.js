import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function Guard({ children, condition, redirect, ...props }) {
	return (
		<>
			{condition ? (
				<Route {...props}>{children}</Route>
			) : (
				<Redirect to={redirect} />
			)}
		</>
	);
}

export default Guard;
