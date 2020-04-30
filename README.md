# material-table-default-selection
Rendering material table by default selected records 

```
just add tableData: {checked: true}  to any data record to be selected by default
```
## EX
```
data={[
          { id: 1, name: 'One', surname: 'Baran', birthYear: 1987, birthCity: 63, tableData: {checked: true}},
          { id: 2, name: 'Two', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          { id: 3, name: 'Three', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          { id: 4, name: 'Four', surname: 'Baran', birthYear: 2017, birthCity: 34 }
        ]}
```
