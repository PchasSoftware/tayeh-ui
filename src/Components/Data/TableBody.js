export default {
  props: {
	rows: {
		type: Array,
		default: () => []
	},
	columns: {
		type: Array,
		default: () => []
	}
  },
  render: function (h) {
	  const {
		  columns,
		  rows
		} = this;
		console.log('body',columns);
    return (
        <tbody>
			{
				rows.map((row, i) => (
					<tr key={i}>
						{
							columns.map((col, i) => (
								<td>
									{row[col.prop]}
								</td>
							))
						}
					</tr>
				))
			}
			<slot></slot>
		</tbody>
    )
  }
}