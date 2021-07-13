import React from 'react';
import TableItem from './TableItem/TableItem';
import { Table } from './TableCheckOut.styles';

const TableCheckOut = ({ cartProducts }) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Product</th>
					<th>&nbsp;</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Subtotal</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				{cartProducts.map((cartProduct) => (
					<TableItem cartProduct={cartProduct} />
				))}
			</tbody>
		</Table>
	);
};

export default TableCheckOut;
