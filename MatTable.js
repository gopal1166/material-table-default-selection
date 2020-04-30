import React from 'react';
import MaterialTable from 'material-table';

const MatTableDefaultSelection = () => {
  return (
    <MaterialTable
        title="Handling Selection Changes Preview"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { id: 1, name: 'One', surname: 'Baran', birthYear: 1987, birthCity: 63, tableData: {checked: true}},
          { id: 2, name: 'Two', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          { id: 3, name: 'Three', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          { id: 4, name: 'Four', surname: 'Baran', birthYear: 2017, birthCity: 34 }
        ]}
        options={{
          selection: true
        }}
        onSelectionChange={(rows) => console.table(rows)}
      />
  )
};

export default MatTableDefaultSelection;
