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
		  rows,
		} = this;
    return (
        <tbody>
			{
				rows.map((row, i) => (
					<tr key={i}>
						{
							columns.map((col, i) => (
								<td>
									{
										col.$slots.default
									}
									<slot {...this.row} >
										{row[col.prop]}
									</slot>
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