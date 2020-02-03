import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';








const Red = props => <span style={{ color: 'red' }} {...props} />;

export const TableComponent: React.SFC = ({ propDefinitions }: any) => {

    return <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>type</TableCell>
            <TableCell>default</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propDefinitions.map(({ property, propType, required, description, defaultValue }) => (
            <TableRow key={property}>
              <TableCell component="th" scope="row">
                {property} {required ? <Red>*</Red> : null}
              </TableCell>
              <TableCell>{propType.name}</TableCell>
              <TableCell>{defaultValue}</TableCell>
              <TableCell>{description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  };