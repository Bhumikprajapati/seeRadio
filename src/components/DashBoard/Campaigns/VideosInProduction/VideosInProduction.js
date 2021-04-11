import React,{useMemo} from 'react';
// import { useState } from "react/cjs/react.development";
import {useTable,usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './Columns';
import {Button} from 'reactstrap';
import {FaFilter} from 'react-icons/fa';
import './VideosInProduction.css';
 const  VideosInProduction=()=> {  
// const [posts,setPosts]=useState([])
const columns = useMemo(() => COLUMNS, [])
const data = useMemo(() => MOCK_DATA, [])

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageOptions,
  state,
  setPageSize,
  prepareRow
} = useTable({
  columns,
  data
},usePagination)
const {pageIndex}=state
const filterSearch=()=>{
  alert('Filter Will be added soon.....')
}
return (
  <>
  <div style={{ textAlign: 'center',marginTop:'35px',display:'flex'}}>
  <Button style={{background:'black',marginLeft:'50px',marginTop:'20px'}} onClick={filterSearch} >
    <FaFilter  style={{marginRight:'5px'}}/>
    Search Filters</Button>
  <h4 style={{width:'80%',marginTop:'20px'}}>Videos In Production</h4>
  </div>
  <div className="w-100 mt-100 mx-auto" style={{ maxWidth: '1450px', maxHeight: '900px', marginTop: '2vh' }}>
  <div className="bg-white shadow p-4 " style={{ borderRadius: '20px' }}>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} >
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <div style={{display:'block'}}> 
     <h6 style={{textAlign:'left'}}> Result Per Page: <strong onClick={()=>setPageSize(Number(10))} >10</strong>{' '}
      | {' '}<strong onClick={()=>setPageSize(Number(15))}>15</strong>{' '}
       |{' '}<strong onClick={()=>setPageSize(Number(20))}>20</strong></h6>
      <Button  color='white' style={{ boxShadow: '0px 8px 15px ', margin: '10px' }}
      onClick={()=>previousPage()} disabled={!canPreviousPage} >
        Previous </Button>{' '}
        <strong>Page {pageIndex+1} of {pageOptions.length}</strong>{'  '}
        <Button  color='white' style={{ boxShadow: '0px 8px 15px', margin: '10px' }}
      onClick={()=>nextPage()}  disabled={!canNextPage} >
        Next </Button>
    </div>
    </div>
    </div>
  </>
)
 }
 export default VideosInProduction;