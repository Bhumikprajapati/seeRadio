import React,{useMemo} from 'react';
import { useState } from "react/cjs/react.development";
import {useTable,usePagination} from 'react-table';
import {COLUMNS} from './Columns';
import {Button} from 'reactstrap';
import {FaFilter} from 'react-icons/fa';
import './VideosInProduction.css';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
 const  VideosInProduction=()=> {  
const [data,setAllData]=useState([])
const url=process.env.REACT_APP_URL;
const columns = useMemo(() => COLUMNS, [])
 useEffect(()=>{
  const headers={
    'x-token':localStorage.getItem('token')
}
axios.post(`${url}/api/campaign/getAllcampaigns`,{},{headers:headers})
.then(res=>{
  console.log(res.data.data.rows)
  setAllData(res.data.data.rows)
})
.catch(err=>console.log(err))
 },[url])
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
const history=useHistory()
// const getThePost=(cell)=>{
// console.log(cell.value)
// // localStorage.setItem('campaignId',e.target)
// history.replace(`/campaignDetail/${cell.value}`)
// }
return (
  <>
  <div style={{ textAlign: 'center',display:'flex'}}>
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
          <tr {...headerGroup.getHeaderGroupProps()}   style={{ boxShadow: '0px 3px 5px '}}>
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
            <tr {...row.getRowProps()}   >
              {row.cells.map(cell => {
                console.log(cell)
                return <td {...cell.getCellProps()}  onClick={()=>{history.push(`/campaignDetail/${cell.value}`)}} >{cell.render('Cell')}</td>
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